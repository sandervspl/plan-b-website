import styled from 'styled-components';

const classColors = [
  '',          // Unused
  '#C79C6E',   // Warrior
  '#F58CBA',   // Paladin
  '#ABD473',   // Hunter
  '#FFF569',   // Rogue
  '#FFFFFF',   // Priest
  '#40C7EB',   // Mage
  '#FF7D0A',  // Druid
  '#8787ED',   // Warlock
];

export const ClassText = styled.span<Props>`
  color: ${(props) => classColors[props.classId]};
`;

type Props = {
  classId: number;
}
