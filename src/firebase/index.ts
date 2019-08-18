import config from 'config';
import firebase from 'firebase/app';
import 'firebase/storage';

if (!firebase.apps.length) {
  firebase.initializeApp(config.firebase);
}

// Get a reference to the storage service, which is used to create references in your storage bucket
export default firebase.storage();
