import styled from 'styled-components';

const qualityColors = {
  1: '#9D9D9D',
  2: '#FFFFFF',
  3: '#1EFF00',
  4: '#0070DD',
  5: '#A335EE',
  6: '#FF8000',
  7: '#E6CC80', // Artifact
  8: '#00CCFF', // Heirloom?
  9: '#00CCFF', // WoW Token?
};

export const ItemText = styled.span<Props>`
  color: ${(props) => qualityColors[props.classId]};
`;

type Props = {
  classId: number;
}
