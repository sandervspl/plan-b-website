export type StorageRefs =
  | recruitmentRefs
  | classRefs
  | 'raids'
  | 'general';

type recruitmentRefs =
  | 'recruitment'
  | 'recruitment/roles'

type classRefs =
  | 'icons/classes/druid'
  | 'icons/classes/hunter'
  | 'icons/classes/mages'
  | 'icons/classes/priest'
  | 'icons/classes/rogue'
  | 'icons/classes/shaman'
  | 'icons/classes/warlock'
  | 'icons/classes/warrior';
