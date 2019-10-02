import React from 'react';
import { useSelector } from 'hooks';
import { getDateWithTime, humanDate } from 'services';
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
            <ListHeadingItem>Event</ListHeadingItem>
            <ListHeadingItem>Duration</ListHeadingItem>
            <ListHeadingItem>Spent</ListHeadingItem>
            <ListHeadingItem>Total current</ListHeadingItem>
            <ListHeadingItem>Total earned</ListHeadingItem>
            <ListHeadingItem>Date</ListHeadingItem>
          </ListHeading>

          <DkpHistoryList>
            {dkpHistory.map((entry) => (
              <DkpHistoryItem>
                <ListItemCell>
                  {entry.event}
                </ListItemCell>

                <ListItemCell>
                  {entry.hours} hour{entry.hours !== 1 && 's'}
                </ListItemCell>

                <DkpChangeText negative={entry.spent > 0}>
                  {entry.spent}
                </DkpChangeText>

                <DkpChangeText positive>
                  {entry.net}
                </DkpChangeText>

                <ListItemCell>
                  {entry.total}
                </ListItemCell>

                <ListItemCell title={getDateWithTime(entry.createdAt)}>
                  <DateText
                    noIcon={!isMobile}
                    date={entry.createdAt}
                    format={humanDate(entry.createdAt)}
                  />
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
