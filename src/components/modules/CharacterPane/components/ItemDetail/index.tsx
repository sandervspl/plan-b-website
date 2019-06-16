import * as i from 'types';
import React from 'react';
import QuestionMark from 'images/questionmark.jpg?external';
import { useImageLoader } from 'hooks';
import { ItemDetailContainer, ItemIcon } from './styled';

const ItemDetail: React.FC<Props> = ({ item, paperdoll }) => {
  if (!item) {
    return (
      <ItemDetailContainer data-tip="No item equipped">
        <ItemIcon src={paperdoll} />
      </ItemDetailContainer>
    );
  }

  const icon = item.icon
    ? useImageLoader(`https://render-eu.worldofwarcraft.com/icons/56/${item.icon}.jpg`)
    : QuestionMark;

  return (
    <ItemDetailContainer data-tip={item.name}>
      <ItemIcon src={icon} />
    </ItemDetailContainer>
  );
};

export type Props = {
  item?: i.Item;
  paperdoll: string;
};

export default ItemDetail;
