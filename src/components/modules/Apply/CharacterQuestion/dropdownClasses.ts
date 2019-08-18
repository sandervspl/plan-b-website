import { useGetFirebaseImage } from 'hooks';

const dropdownClasses = (firebaseImg: typeof useGetFirebaseImage) => [{
  id: 7,
  name: 'Druid',
  icon: firebaseImg('icons/classes/druid', 'class.jpg'),
}, {
  id: 3,
  name: 'Hunter',
  icon: firebaseImg('icons/classes/hunter', 'class.jpg'),
}, {
  id: 6,
  name: 'Mage',
  icon: firebaseImg('icons/classes/mage', 'class.jpg'),
}, {
  id: 5,
  name: 'Priest',
  icon: firebaseImg('icons/classes/priest', 'class.jpg'),
}, {
  id: 4,
  name: 'Rogue',
  icon: firebaseImg('icons/classes/rogue', 'class.jpg'),
}, {
  id: 2,
  name: 'Shaman',
  icon: firebaseImg('icons/classes/shaman', 'class.jpg'),
}, {
  id: 8,
  name: 'Warlock',
  icon: firebaseImg('icons/classes/warlock', 'class.jpg'),
}, {
  id: 1,
  name: 'Warrior',
  icon: firebaseImg('icons/classes/warrior', 'class.jpg'),
}];

export default dropdownClasses;
