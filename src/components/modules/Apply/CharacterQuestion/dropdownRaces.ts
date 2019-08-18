import { useGetFirebaseImage } from 'hooks';

const dropdownRaces = (firebaseImg: typeof useGetFirebaseImage) => [{
  id: 1,
  name: 'Orc',
  icon: firebaseImg('icons/races', 'Orc_Male.gif'),
}, {
  id: 2,
  name: 'Tauren',
  icon: firebaseImg('icons/races', 'Tauren_Male.gif'),
}, {
  id: 3,
  name: 'Troll',
  icon: firebaseImg('icons/races', 'Troll_Male.gif'),
}, {
  id: 4,
  name: 'Undead',
  icon: firebaseImg('icons/races', 'Undead_Male.gif'),
}];

export default dropdownRaces;
