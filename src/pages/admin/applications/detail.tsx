import * as i from 'types';
import React, { useEffect } from 'react';
import CircleSvg from 'vectors/circle.svg';
import NotInterestedSvg from 'vectors/not-interested.svg';
import CheckCircleSvg from 'vectors/check-circle.svg';
import Page from 'modules/Page';
import { useSelector, useDispatch } from 'hooks';
import { getUrl, getCmsUrl } from 'services';
import { fetchApplicationDetail, actions as applicationsActions } from 'ducks/applications';
import { hasProfessions } from 'ducks/applications/reselect';
import { DateText, ClassText, Paragraph, CircleImg, Heading } from 'common';
import Profession from 'modules/ApplicationDetail/Profession';
import Raids from 'modules/ApplicationDetail/Raids';
import Discussion from 'modules/ApplicationDetail/Discussion';
import Voting from 'modules/ApplicationDetail/Voting';
import {
  ApplicationHeader, StatusButton, ApplicationRole, Top, ApplicationContainer, InfoGrid, EmptyState,
  ApplicationSection, ProfessionsGrid,
} from 'modules/ApplicationDetail/styled';

const ApplicationDetailPage: i.NextPageComponent<Props, Queries> = ({ url, applicationId }) => {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.applications.detail);
  const hasPrimaryProfessions = useSelector((state) => hasProfessions(state, 'primary'));
  const hasSecondaryProfessions = useSelector((state) => hasProfessions(state, 'secondary'));
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.isSignedIn && user.isAdmin) {
      dispatch(fetchApplicationDetail(applicationId));
    }

    return function cleanup() {
      dispatch(applicationsActions.resetApplication());
    };
  }, [user]);

  if (!application) {
    return null;
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
        <div>
          <ApplicationHeader>
            <Top>
              <StatusButton status={application.status}>
                <StatusIcon />
                {application.status}
              </StatusButton>

              <DateText date={application.created_at} />
            </Top>

            <Paragraph>
              <ClassText classId={character.class.id}>
                <strong>{character.name}</strong>, {' '}
                ({character.level}) {character.class.name}
              </ClassText>
            </Paragraph>

            <ApplicationRole>
              <CircleImg src={getCmsUrl(character.role.icon.url)} />
              {character.role.name}
            </ApplicationRole>

            <Voting />
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
                {character.race} {character.class.name}
                <CircleImg src={getCmsUrl(character.class.icon.url)} />
              </Paragraph>

              <Paragraph>Level</Paragraph>
              <Paragraph>{character.level}</Paragraph>

              <Paragraph>Role</Paragraph>
              <Paragraph as="div">
                {character.role.name}
                <CircleImg src={getCmsUrl(character.role.icon.url)} />
              </Paragraph>
            </InfoGrid>
          </ApplicationSection>

          <ApplicationSection secondary>
            <Heading as="h2">Primary professions</Heading>
            {hasPrimaryProfessions ? (
              <ProfessionsGrid>
                {character.professions.primary.map((profession) => (
                  <Profession key={profession.name} profession={profession} />
                ))}
              </ProfessionsGrid>
            ) : (
              <EmptyState>This player has no primary professions.</EmptyState>
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
              <EmptyState>This player has no secondary professions.</EmptyState>
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
              <Heading as="h2">Story</Heading>
              <Paragraph>{personal.story}</Paragraph>
            </ApplicationSection>
          </ApplicationSection>
        </div>

        <Discussion comments={application.discussion} />
      </ApplicationContainer>
    </Page>
  );
};

ApplicationDetailPage.getInitialProps = ({ req, query }) => {
  return {
    url: getUrl(req),
    applicationId: query.id,
  };
};

type Props = {
  applicationId: number;
}

type Queries = {
  id: number;
}

export default ApplicationDetailPage;
