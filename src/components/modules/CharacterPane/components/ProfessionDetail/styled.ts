import styled from 'styled-components';
import { Subheader } from 'common';

export const ProfessionDetailsContainer = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  align-items: flex-start;
  max-width: 160px;
`;

export const ProfessionIcon = styled.img.attrs({ loading: 'lazy' })`
  width: 36px;
  height: 36px;
  border: 1px solid ${(props) => props.theme.color.border};
  border-radius: 100%;
`;

export const ProfessionName = styled(Subheader)`
  margin-top: 5px;
  width: 100%;
  color: ${(props) => props.theme.color.secondary};
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfessionSkill = styled.div<ProfessionSkillProps>`
  position: relative;
  margin-top: 5px;
  width: 80%;
  height: 20px;
  border: 1px solid ${(props) => props.theme.color.border};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => (props.rank / props.max) * 100}%;
    max-width: 100%;
    background-color: ${(props) => props.theme.color.primary.dark};
  }

  &:after {
    content: ${(props) => `'${props.rank} / ${props.max}'`};
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: ${(props) => props.theme.color.secondary};
    font-size: 11px;
    font-family: ${(props) => props.theme.font.primary};
  }
`;

type ProfessionSkillProps = {
  rank: number;
  max: number;
}
