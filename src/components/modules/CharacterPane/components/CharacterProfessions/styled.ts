import styled, { css } from 'styled-components';
import { media } from 'styles';
import { Paragraph } from 'common';

export const CharacterProfessionsContainer = styled.div<Props>`
  display: none;

  ${media.tablet<Props>`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 25px 30px 0;
    background: ${(props) => props.theme.color.primary.dark};

    ${(props) => !props.hasProfessions && css`
      padding: 0;
    `}
  `}
`;

type Props = {
  hasProfessions?: boolean;
}

export const ProfessionsError = styled(Paragraph)`
  align-self: center;
  margin: 0 auto;
`;
