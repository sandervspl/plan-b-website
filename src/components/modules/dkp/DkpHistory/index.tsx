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
            <ListHeadingItem>Time</ListHeadingItem>
            <ListHeadingItem>Gained</ListHeadingItem>
            <ListHeadingItem>Spent</ListHeadingItem>
            <ListHeadingItem>Total</ListHeadingItem>
            <ListHeadingItem>Date</ListHeadingItem>
          </ListHeading>

          <DkpHistoryList>
            {dkpHistory.map((entry, index, list) => {
              const nextEntry = list[index + 1];

              console.log(entry, nextEntry);

              return (
                <DkpHistoryItem key={entry.id}>
                  <ListItemCell>
                    {entry.event}
                  </ListItemCell>

                  <ListItemCell>
                    {
                      nextEntry
                        ? entry.hours - nextEntry.hours
                        : 0
                    } hour{entry.hours !== 1 && 's'}
                  </ListItemCell>

                  <DkpChangeText positive={nextEntry && entry.net - nextEntry.net > 0}>
                    {
                      nextEntry && entry.net - nextEntry.net > 0
                        ? `+ ${entry.net - nextEntry.net}`
                        : 0
                    }
                  </DkpChangeText>

                  <DkpChangeText negative={nextEntry && entry.spent - nextEntry.spent > 0}>
                    {
                      nextEntry && entry.spent - nextEntry.spent > 0
                        ? `- ${entry.spent - nextEntry.spent}`
                        : 0
                    }
                  </DkpChangeText>

                  <ListItemCell>
                    <strong>{entry.net}</strong>
                  </ListItemCell>

                  <ListItemCell title={getDateWithTime(entry.createdAt)}>
                    <DateText
                      noIcon={!isMobile}
                      date={entry.createdAt}
                      format={humanDate(entry.createdAt)}
                    />
                  </ListItemCell>
                </DkpHistoryItem>
              );
            })}
          </DkpHistoryList>
        </>
      )}

    </DkpHistoryContainer>
  );
};

export type Props = {

};

export default DkpHistory;
