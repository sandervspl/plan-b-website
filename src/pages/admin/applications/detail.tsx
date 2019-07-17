import * as i from 'types';
import React, { useEffect } from 'react';
import CircleSvg from 'vectors/circle.svg';
import Page from 'modules/Page';
import { useSelector, useDispatch } from 'hooks';
import { getUrl } from 'services';
import { fetchApplicationDetail } from 'ducks/applications';
import { hasProfessions } from 'ducks/applications/reselect';
import { DateText, ClassText, Paragraph, CircleIcon, Heading } from 'common';
import Profession from 'modules/ApplicationDetail/Profession';
import Raids from 'modules/ApplicationDetail/Raids';
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
  }, [user]);

  if (!application) {
    return null;
  }

  const { character, personal } = application;

  return (
    <Page
      meta={{
        title: `Application - ${character.name} (${character.class.name})`,
        description: `Application of ${character.name} (${character.class.name})`,
      }}
      url={url}
    >
      <ApplicationContainer>
        <ApplicationHeader>
          <Top>
            <StatusButton>
              <CircleSvg />
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
            <CircleIcon src={character.role.icon.url} />
            {character.role.name}
          </ApplicationRole>

          {/* @TODO: accept/reject buttons */}
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
              <CircleIcon src={character.class.icon.url} />
            </Paragraph>

            <Paragraph>Level</Paragraph>
            <Paragraph>{character.level}</Paragraph>

            <Paragraph>Role</Paragraph>
            <Paragraph as="div">
              {character.role.name}
              <CircleIcon src={character.role.icon.url} />
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