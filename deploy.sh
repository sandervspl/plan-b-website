#!/bin/bash
PROJECT='planbguild.eu'

ROOT_USER=

TEST_HOST=134.209.85.102
TEST_USER=root

TEST_PORT=3001

ACC_HOST=
ACC_USER=root

PROD_HOST=134.209.85.102
PROD_USER=root

#Don't touch this
ENV=$1

#!/bin/bash
if [ -z "$PROD_USER" ]; then
    PROD_USER=root
fi

if [ -z "$ACC_USER" ]; then
    ACC_USER=root
fi

if [ -z "$TEST_HOST" ]; then
    TEST_HOST=134.209.85.102
fi

if [ -z "$TEST_USER" ]; then
    TEST_USER=root
fi

if [ -z "$ROOT_USER" ]; then
    ROOT_USER=root
fi

if [ -z "$ACC_PORT" ]; then
    ACC_PORT=3001
fi

if [ -z "$PROD_PORT" ]; then
    PROD_PORT=3000
fi

#Environment switch
if [ "$1" = PROD ]; then
    APP_ENV=production
    PORT=$PROD_PORT
    USER=$PROD_USER
    HOST=$PROD_HOST
    PROJECT='planbguild.eu'
    INSTANCES=0
elif [ "$1" = ACC ]; then
    APP_ENV=acceptation
    PORT=$ACC_PORT
    USER=$ACC_USER
    HOST=$ACC_HOST
    PROJECT='acc.planbguild.eu'
    INSTANCES=0
elif [ "$1" = TEST ]; then
    APP_ENV=test
    PORT=$TEST_PORT
    USER=$TEST_USER
    HOST=$TEST_HOST
    PROJECT='dev.planbguild.eu'
    INSTANCES=1
fi

if [ -z "$PM2_CONFIG_NAME" ]; then
    PM2_CONFIG_NAME=pm2-config.json
fi

if [ -z "$NEXT_CONFIG_NAME" ]; then
    NEXT_CONFIG_NAME=next.config.js
fi

PDIR=/var/www/$PROJECT
FILENAME=build.tar.gz
c='\033[1m'
nc='\033[0m'
red='\033[1;31m'

#Checks if correct arguments are given
if [ "$1" != ACC ] && [ "$1" != PROD ] && [ "$1" != TEST ]
then
    echo -e "🚫 $c Missing environment: PROD, ACC or TEST $nc"
    exit
else
    echo -e "🚀 $c Deploying $PROJECT for $1 $nc"
fi

#Check with user for version
git fetch --tags
BUMP=false
VERSION=$(git describe --abbrev=0 --tags)

if [ "$2" = "1" ]; then
    BUMP=major;
elif [ "$2" = "2" ]; then
    BUMP=minor;
elif [ "$2" = "3" ]; then
    BUMP=patch;
elif [ "$2" = "4" ]; then
    BUMP=false;
else
    echo "Current version is: $VERSION - Do you want to update?"
    options=("Major" "Minor" "Patch" "Continue")
    select opt in "${options[@]}"
    do
        case $opt in
            "Major") BUMP=major; break;;
            "Minor" ) BUMP=minor; break;;
            "Patch" ) BUMP=patch; break;;
            * ) break;;
        esac
    done
fi

if [ "$BUMP" != false ]; then
    #Checks if there are no changes when you want to create a tag
    HAS_CHANGES=false
    git diff-index --quiet HEAD -- || HAS_CHANGES=true;

    if [ "$HAS_CHANGES" = true ]; then
        echo "Commit your changes first";
        exit;
    fi
    npm version $BUMP;
    echo -e "💎 $c Updated version $nc"
    git push --tags
fi

VERSION=$(git describe --abbrev=0 --tags)

#Creating project build
echo -e "🛠 $c Creating project build $nc"
APP_ENV=$APP_ENV npm run build

#Create PM2 config file
echo -e "⚡️ $c Generating PM2 server file $nc"
sed "s/USER/$USER/g; s/PROJECT/$PROJECT-$VERSION/g; s/INSTANCES/$INSTANCES/g"  ./pm2-config-template.json > $PM2_CONFIG_NAME

#Build tar and copy to server
echo -e "🚚 $c Copying files to server $nc"
tar -czf $FILENAME ./dist ./package.json ./package-lock.json ./$PM2_CONFIG_NAME ./$NEXT_CONFIG_NAME
scp -r ./$FILENAME $ROOT_USER@$HOST:~
rm ./$FILENAME
rm ./$PM2_CONFIG_NAME

echo -e "🔑 $c Connecting to $HOST $nc"
#Set-up new files, install packages and run server
ssh $ROOT_USER@$HOST << EOF
    echo -e "🐶 $c Initializing server $nc"
    if [ "$1" = TEST ]; then
        sudo rm -rf $PDIR*
    fi
    sudo mkdir -p $PDIR-$VERSION;
    sudo chown $USER:$USER $PDIR-$VERSION;
    sudo chown $USER:$USER /var/www;
    sudo mv ~/$FILENAME $PDIR-$VERSION;
    sudo su - $USER;
    echo -e "👀 $c Extracting files $nc"
    tar -zxvf $PDIR-$VERSION/$FILENAME -C $PDIR-$VERSION;
    rm $PDIR-$VERSION/$FILENAME;
    echo -e "⚡️ $c Installing packages $nc"
    . /home/sandervspl/.nvm/nvm.sh;
    npm install --production --prefix $PDIR-$VERSION;
    echo -e "🏡 $c Starting server $nc"
    NODE_ENV=production PORT=$PORT pm2 start $PDIR-$VERSION/$PM2_CONFIG_NAME --name dev.planbguild.eu
EOF
    # ln -n -f -s $PDIR-$VERSION $PDIR;

if [ $? -eq 0 ]; then
  echo -e "🤘 $c Successfully deployed $PROJECT $VERSION on $HOST $nc"
else
  echo -e "❌ $red Deploy failed for $PROJECT $VERSION on $HOST $nc"
fi
