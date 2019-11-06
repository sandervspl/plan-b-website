import React from 'react';
import { useSelector } from 'hooks';
import { getDateWithTime, humanDate } from 'services';
import { ListItemCell, Heading, DateText, EmptyStateText, Tooltip } from 'common';
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
            <ListHeadingItem
              data-tip="Rough duration of the raid (might be incorrect)"
              data-for="time-header"
            >
              Time
            </ListHeadingItem>
            <ListHeadingItem>Gained</ListHeadingItem>
            <ListHeadingItem
              data-tip="This includes spending DKP and the weekly DKP decay"
              data-for="lost-header"
            >
              Lost
            </ListHeadingItem>
            <ListHeadingItem
              data-tip="Total current DKP"
              data-for="total-header"
            >
              Total
            </ListHeadingItem>
            <ListHeadingItem
              data-tip="Date of data upload (this can differ from date of the raid)"
              data-for="date-header"
            >
              Date
            </ListHeadingItem>
          </ListHeading>

          <Tooltip id="time-header" effect="solid" delayShow={200} place="top" />
          <Tooltip id="lost-header" effect="solid" delayShow={200} place="top" />
          <Tooltip id="total-header" effect="solid" delayShow={200} place="top" />
          <Tooltip id="date-header" effect="solid" delayShow={200} place="top" />

          <DkpHistoryList>
            {dkpHistory.map((entry, index, list) => {
              // Next entry is the "previous" raid
              const nextEntry = list[index + 1];

              return (
                <DkpHistoryItem key={entry.id}>
                  <ListItemCell>
                    {entry.event.name}
                  </ListItemCell>

                  <ListItemCell>
                    {
                      nextEntry
                        ? entry.hours - nextEntry.hours
                        : 0
                    } hour{entry.hours !== 1 && 's'}
                  </ListItemCell>

                  {/* Positive if: has next entry & net bigger than "previous" raid OR no next entry & net bigger than 0 */}
                  <DkpChangeText positive={nextEntry ? entry.net - nextEntry.net > 0 : entry.net > 0}>
                    {
                      nextEntry
                        ? entry.net - nextEntry.net > 0
                          ? `+ ${entry.net - nextEntry.net}`
                          : 0
                        : `+ ${entry.net}`
                    }
                  </DkpChangeText>

                  <DkpChangeText negative={nextEntry ? entry.spent - nextEntry.spent > 0 : entry.spent > 0}>
                    {
                      nextEntry
                        ? entry.spent - nextEntry.spent > 0
                          ? `- ${entry.spent - nextEntry.spent}`
                          : 0
                        : `- ${entry.spent}`
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
