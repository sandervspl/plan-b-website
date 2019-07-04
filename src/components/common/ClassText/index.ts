import styled from 'styled-components';

const classColors = [
  '',          // Unused
  '#C79C6E',   // Warrior
  '#F58CBA',   // Paladin
  '#ABD473',   // Hunter
  '#FFF569',   // Rogue
  '#FFFFFF',   // Priest
  '#C41F3B',   // Death Knight
  '#F58CBA',   // Shaman
  '#40C7EB',   // Mage
  '#8787ED',   // Warlock
  '#00FF96',  // Monk
  '#FF7D0A',  // Druid
  '#A330C9',  // Demon Hunter
];

export const ClassText = styled.span<Props>`
  color: ${(props) => classColors[props.classId]};
`;

type Props = {
  classId: number;
}
