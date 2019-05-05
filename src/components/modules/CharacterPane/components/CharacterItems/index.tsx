import * as i from 'types';
import React from 'react';
import paperdollHead from 'images/items/paperdolls/head.png?external';
import paperdollHands from 'images/items/paperdolls/hands.png?external';
import paperdollNeck from 'images/items/paperdolls/neck.png?external';
import paperdollWaist from 'images/items/paperdolls/waist.png?external';
import paperdollShoulder from 'images/items/paperdolls/shoulder.png?external';
import paperdollLegs from 'images/items/paperdolls/legs.png?external';
import paperdollFeet from 'images/items/paperdolls/feet.png?external';
import paperdollChest from 'images/items/paperdolls/chest.png?external';
import paperdollFinger from 'images/items/paperdolls/finger.png?external';
import paperdollShirt from 'images/items/paperdolls/shirt.png?external';
import paperdollTabard from 'images/items/paperdolls/tabard.png?external';
import paperdollTrinket from 'images/items/paperdolls/trinket.png?external';
import paperdollWrists from 'images/items/paperdolls/wrists.png?external';
import paperdollMainhand from 'images/items/paperdolls/mainhand.png?external';
import paperdollSecondaryhand from 'images/items/paperdolls/secondaryhand.png?external';
import ItemDetail from '../ItemDetail';
import { CharacterItemsContainer, StyledTooltip } from './styled';

const CharacterItems: React.FC<Props> = ({ items }) => (
  <CharacterItemsContainer>
    <StyledTooltip effect="solid" />
    <ItemDetail item={items.head} paperdoll={paperdollHead} />
    <ItemDetail item={items.neck} paperdoll={paperdollNeck} />
    <ItemDetail item={items.shoulder} paperdoll={paperdollShoulder} />
    <ItemDetail item={items.back} paperdoll={paperdollChest} />
    <ItemDetail item={items.chest} paperdoll={paperdollChest} />
    <ItemDetail item={items.shirt} paperdoll={paperdollShirt} />
    <ItemDetail item={items.tabard} paperdoll={paperdollTabard} />
    <ItemDetail item={items.wrist} paperdoll={paperdollWrists} />
    <ItemDetail item={items.hands} paperdoll={paperdollHands} />
    <ItemDetail item={items.waist} paperdoll={paperdollWaist} />
    <ItemDetail item={items.legs} paperdoll={paperdollLegs} />
    <ItemDetail item={items.feet} paperdoll={paperdollFeet} />
    <ItemDetail item={items.finger1} paperdoll={paperdollFinger} />
    <ItemDetail item={items.finger2} paperdoll={paperdollFinger} />
    <ItemDetail item={items.trinket1} paperdoll={paperdollTrinket} />
    <ItemDetail item={items.trinket2} paperdoll={paperdollTrinket} />
    <ItemDetail item={items.mainHand} paperdoll={paperdollMainhand} />
    <ItemDetail item={items.offHand} paperdoll={paperdollSecondaryhand} />
  </CharacterItemsContainer>
);

export type Props = {
  items: i.Items;
};

export default CharacterItems;
