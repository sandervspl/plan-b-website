import * as i from 'types';
import React from 'react';
import paperdollHead from 'images/items/paperdolls/head.png';
import paperdollHands from 'images/items/paperdolls/hands.png';
import paperdollNeck from 'images/items/paperdolls/neck.png';
import paperdollWaist from 'images/items/paperdolls/waist.png';
import paperdollShoulder from 'images/items/paperdolls/shoulder.png';
import paperdollLegs from 'images/items/paperdolls/legs.png';
import paperdollFeet from 'images/items/paperdolls/feet.png';
import paperdollChest from 'images/items/paperdolls/chest.png';
import paperdollFinger from 'images/items/paperdolls/finger.png';
import paperdollShirt from 'images/items/paperdolls/shirt.png';
import paperdollTabard from 'images/items/paperdolls/tabard.png';
import paperdollTrinket from 'images/items/paperdolls/trinket.png';
import paperdollWrists from 'images/items/paperdolls/wrists.png';
import paperdollMainhand from 'images/items/paperdolls/mainhand.png';
import paperdollSecondaryhand from 'images/items/paperdolls/secondaryhand.png';
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
