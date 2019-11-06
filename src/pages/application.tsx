import * as i from 'types';
import React, { useEffect, useState } from 'react';
import CircleSvg from 'vectors/circle.svg';
import NotInterestedSvg from 'vectors/not-interested.svg';
import CheckCircleSvg from 'vectors/check-circle.svg';
import LockedIcon from 'vectors/lock.svg';
import GroupAddIcon from 'vectors/group_add.svg';
import BabyIcon from 'vectors/baby.svg';
import Page from 'modules/Page';
import { useSelector, useDispatch } from 'hooks';
import { getUrl, getCmsUrl, redirect, localStorageHelper } from 'services';
import { fetchApplicationDetail, actions as applicationsActions, setStatus } from 'ducks/applications';
import { hasProfessions } from 'ducks/applications/reselect';
import { DateText, ClassText, Paragraph, CircleImg, Heading, EmptyStateText, Loader } from 'common';
import Profession from 'modules/ApplicationDetail/Profession';
import Raids from 'modules/ApplicationDetail/Raids';
import Discussion from 'modules/ApplicationDetail/Discussion';
import Voting from 'modules/ApplicationDetail/Voting';
import {
  ApplicationHeader, Status, ApplicationRole, Top, ApplicationContainer, InfoGrid, LockedStatus,
  ApplicationSection, ProfessionsGrid, GuildMasterTools, StatusChangeButton, ApplicationContent,
  SocialContainer,
} from 'modules/ApplicationDetail/styled';
import RejectModal from 'modules/ApplicationDetail/RejectModal';

const ApplicationDetailPage: i.NextPageComponent<Props, Queries> = ({ url, applicationUuid }) => {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.applications.detail);
  const loading = useSelector((state) => state.applications.loading);
  const error = useSelector((state) => state.applications.error);
  const hasPrimaryProfessions = useSelector(() => hasProfessions(application!, 'primary'));
  const hasSecondaryProfessions = useSelector(() => hasProfessions(application!, 'secondary'));
  const user = useSelector((state) => state.user);
  const [rejectModalOpen, setRejectModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchApplicationDetail(applicationUuid));

    return function cleanup() {
      dispatch(applicationsActions.resetApplication());
    };
  }, []);

  useEffect(() => {
    if (error) {
      redirect();
    }
  }, [error]);

  const updateStatus = (status: i.ApplicationStatus) => () => {
    dispatch(setStatus(status));
  };

  const onReject = () => {
    setRejectModalOpen(true);
  };

  // Loading application
  if (loading || !application) {
    return <Loader center />;
  }

  const { character, personal } = application;
  const StatusIcon = application.status === 'accepted'
    ? CheckCircleSvg
    : application.status === 'rejected'
      ? NotInterestedSvg
      : CircleSvg;

  return (
    <Page
      meta={{
        title: `Application - ${character.name} (${character.class.name})`,
        description: `Application of ${character.name} (${character.class.name})`,
      }}
      url={url}
    >
      <ApplicationContainer>
        <ApplicationContent>
          <ApplicationHeader withGuildMasterTools={user.isAdmin}>
            {user.isAdmin && (
              <GuildMasterTools>
                <Heading as="h3">Update application status</Heading>

                <div>
                  <StatusChangeButton status="open" onClick={updateStatus('open')}>
                    <CircleSvg />
                    Open
                  </StatusChangeButton>

                  <StatusChangeButton status="accepted" onClick={updateStatus('accepted')}>
                    <CheckCircleSvg />
                    Accept
                  </StatusChangeButton>

                  <StatusChangeButton status="rejected" onClick={onReject}>
                    <NotInterestedSvg />
                    Reject
                  </StatusChangeButton>
                </div>
              </GuildMasterTools>
            )}

            <Top>
              {application.locked && (
                <LockedStatus>
                  <LockedIcon />
                  This application is locked.
                </LockedStatus>
              )}

              <Status status={application.status}>
                <StatusIcon />
                {application.status}
              </Status>

              <DateText date={application.created_at} />
            </Top>

            <Paragraph>
              <ClassText classId={character.class.id}>
                <strong>{character.name}</strong>, {character.class.name} ({character.level})
              </ClassText>
            </Paragraph>

            <ApplicationRole>
              <CircleImg src={getCmsUrl(character.role.icon.url)} />
              {character.role.name}
            </ApplicationRole>

            <SocialContainer>
              {application.social ? <BabyIcon /> : <GroupAddIcon />}
              {application.social ? 'Social' : 'Raider'}
            </SocialContainer>

            {user.isAdmin && <Voting />}
          </ApplicationHeader>

          <ApplicationSection>
            <Heading as="h2">Character</Heading>
            <hr />
            <InfoGrid>
              <Paragraph>Name</Paragraph>
              <Paragraph>{character.name}</Paragraph>

              <Paragraph>Server</Paragraph>
              <Paragraph>{character.server}</Paragraph>

              <Paragraph>Race/Class</Paragraph>
              <Paragraph as="div">
                <CircleImg src={getCmsUrl(character.race.icon.url)} />
                {character.race.name}
                <CircleImg src={getCmsUrl(character.class.icon.url)} />
                {character.class.name}
              </Paragraph>

              <Paragraph>Level</Paragraph>
              <Paragraph>{character.level}</Paragraph>

              <Paragraph>Role</Paragraph>
              <Paragraph as="div">
                <CircleImg src={getCmsUrl(character.role.icon.url)} />
                {character.role.name}
              </Paragraph>
            </InfoGrid>
          </ApplicationSection>

          <ApplicationSection secondary>
            <Heading as="h2">Primary professions</Heading>
            {hasPrimaryProfessions ? (
              <ProfessionsGrid>
                {character.professions.primary.map((profession) => (
                  <Profession key={profession.id} profession={profession} />
                ))}
              </ProfessionsGrid>
            ) : (
              <EmptyStateText>This player has no primary professions.</EmptyStateText>
            )}
          </ApplicationSection>

          <ApplicationSection secondary>
            <Heading as="h2">Secondary professions</Heading>
            {hasSecondaryProfessions ? (
              <ProfessionsGrid>
                {character.professions.secondary.map((profession) => (
                  <Profession key={profession.name} profession={profession} />
                ))}
              </ProfessionsGrid>
            ) : (
              <EmptyStateText>This player has no secondary professions.</EmptyStateText>
            )}
          </ApplicationSection>

          <ApplicationSection secondary>
            <Heading as="h2">Raid experience</Heading>
            <Raids raids={character.raidExperience} />
          </ApplicationSection>

          <ApplicationSection>
            <Heading as="h2">Personal</Heading>
            <hr />
            <InfoGrid>
              <Paragraph>Name</Paragraph>
              <Paragraph>{personal.name}</Paragraph>

              <Paragraph>Age</Paragraph>
              <Paragraph>{personal.age}</Paragraph>
            </InfoGrid>

            <ApplicationSection secondary>
              <Heading as="h2">My story</Heading>
              <Paragraph>{personal.story}</Paragraph>
            </ApplicationSection>

            <ApplicationSection secondary>
              <Heading as="h2">Why I want to join Plan B</Heading>
              <Paragraph>{personal.reason}</Paragraph>
            </ApplicationSection>
          </ApplicationSection>
        </ApplicationContent>

        <Discussion />

        <RejectModal isModalOpen={rejectModalOpen} setModalOpen={setRejectModalOpen} />
      </ApplicationContainer>
    </Page>
  );
};

ApplicationDetailPage.getInitialProps = ({ req, query }) => {
  return {
    url: getUrl(req),
    applicationUuid: query.uuid,
  };
};

type Props = {
  applicationUuid: string;
}

export type Queries = {
  uuid: string;
}

export default ApplicationDetailPage;
