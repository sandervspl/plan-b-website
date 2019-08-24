import React from 'react';
import { useSelector } from 'hooks';
import { getDateWithTime } from 'services';
import { ListItemCell, Heading, DateText, EmptyStateText } from 'common';
import {
  DkpHistoryContainer, DkpHistoryItem, DkpHistoryList, ListHeading, ListHeadingItem, DkpChangeText,
} from './styled';

const DkpHistory: React.FC<Props> = () => {
  const isMobile = useSelector((state) => state.ui.isMobile);
  const dkpHistory = useSelector((state) => state.user.character!.dkpHistories!);

  return (
    <DkpHistoryContainer>
      <Heading as="h2">DKP History</Heading>

      {!dkpHistory || dkpHistory.length === 0 ? (
        <EmptyStateText>You have no DKP history yet.</EmptyStateText>
      ) : (
        <>
          <ListHeading>
            <ListHeadingItem>Date</ListHeadingItem>
            <ListHeadingItem>Duration</ListHeadingItem>
            <ListHeadingItem>Gain</ListHeadingItem>
            <ListHeadingItem>Spent</ListHeadingItem>
            <ListHeadingItem>Total DKP</ListHeadingItem>
          </ListHeading>

          <DkpHistoryList>
            {dkpHistory.map((entry) => (
              <DkpHistoryItem>
                <ListItemCell title={getDateWithTime(entry.updatedAt)}>
                  <DateText noIcon={!isMobile} date={entry.updatedAt} />
                </ListItemCell>

                <ListItemCell>
                  {entry.hours} hour{entry.hours !== 1 && 's'}
                </ListItemCell>

                <DkpChangeText positive={entry.net > 0}>
                  {entry.net > 0 && '+'}{entry.net}
                </DkpChangeText>

                <DkpChangeText negative={entry.spent > 0}>
                  {entry.spent > 0 && '-'}{entry.spent}
                </DkpChangeText>

                <ListItemCell>
                  {entry.total}
                </ListItemCell>
              </DkpHistoryItem>
            ))}
          </DkpHistoryList>
        </>
      )}

    </DkpHistoryContainer>
  );
};

export type Props = {

};

export default DkpHistory;
