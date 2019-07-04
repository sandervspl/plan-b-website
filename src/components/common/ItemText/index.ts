import styled from 'styled-components';

const qualityColors = [
  '',        // Unused
  '#9D9D9D', // Poor
  '#FFFFFF', // Common
  '#1EFF00', // Uncommon
  '#0070DD', // Rare
  '#A335EE', // Epic
  '#FF8000', // Legendary
  '#E6CC80', // Artifact
  '#00CCFF', // Heirloom?
  '#00CCFF', // WoW Token?
];

export const ItemText = styled.span<Props>`
  color: ${(props) => qualityColors[props.classId]};
`;

type Props = {
  classId: number;
}
