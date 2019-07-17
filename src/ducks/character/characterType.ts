/* eslint-disable @typescript-eslint/no-explicit-any */

type Emblem = {
  icon: number;
  iconColor: string;
  iconColorId: number;
  border: number;
  borderColor: string;
  borderColorId: number;
  backgroundColor: string;
  backgroundColorId: number;
}

type Guild = {
  name: string;
  realm: string;
  battlegroup: string;
  members: number;
  achievementPoints: number;
  emblem: Emblem;
}

type TooltipParams = {
  transmogItem: number;
  timewalkerLevel: number;
  azeritePower0: number;
  azeritePower1: number;
  azeritePower2: number;
  azeritePower3: number;
  azeritePowerLevel: number;
  azeritePower4: number;
}

type Stat = {
  stat: number;
  amount: number;
}

type Appearance = {
  itemId: number;
  itemAppearanceModId: number;
  transmogItemAppearanceModId: number;
}

type AzeriteItem = {
  azeriteLevel: number;
  azeriteExperience: number;
  azeriteExperienceRemaining: number;
}

type AzeritePower = {
  id: number;
  tier: number;
  spellId: number;
  bonusListId: number;
}

type AzeriteEmpoweredItem = {
  azeritePowers: AzeritePower[];
}

type Damage = {
  min: number;
  max: number;
  exactMin: number;
  exactMax: number;
}

type WeaponInfo = {
  damage: Damage;
  weaponSpeed: number;
  dps: number;
}

export type Item = {
  id: number;
  name: string;
  icon: string;
  quality: number;
  itemLevel: number;
  tooltipParams: TooltipParams;
  stats: Stat[];
  armor: number;
  weaponInfo?: WeaponInfo;
  context: string;
  bonusLists: number[];
  artifactId: number;
  displayInfoId: number;
  artifactAppearanceId: number;
  artifactTraits: any[];
  relics: any[];
  appearance: Appearance;
  azeriteItem: AzeriteItem;
  azeriteEmpoweredItem: AzeriteEmpoweredItem;
}

export type Items = {
  averageItemLevel: number;
  averageItemLevelEquipped: number;
  head?: Item;
  neck?: Item;
  shoulder?: Item;
  back?: Item;
  chest?: Item;
  shirt?: Item;
  tabard?: Item;
  wrist?: Item;
  hands?: Item;
  waist?: Item;
  legs?: Item;
  feet?: Item;
  finger1?: Item;
  finger2?: Item;
  trinket1?: Item;
  trinket2?: Item;
  mainHand?: Item;
  offHand?: Item;
}

export type ArmoryProfession = {
  id: number;
  name: string;
  icon?: string;
  rank: number;
  max: number;
  recipes: number[];
}

export type Professions = {
  primary: ArmoryProfession[];
  secondary: ArmoryProfession[];
}

export type CharacterData = {
  lastModified: number;
  name: string;
  realm: string;
  battlegroup: string;
  class: {
    id: number;
    mask: number;
    powerType: string;
    name: string;
  };
  race: number;
  gender: number;
  level: number;
  achievementPoints: number;
  thumbnail: string;
  calcClass: string;
  faction: number;
  guild: Guild;
  items: Items;
  totalHonorableKills: number;
  professions: Professions;
}
