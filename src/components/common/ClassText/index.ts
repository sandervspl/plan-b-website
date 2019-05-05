import styled from 'styled-components';

const classColors = {
  1: '#C79C6E',
  2: '#F58CBA',
  3: '#ABD473',
  4: '#FFF569',
  5: '#FFFFFF',
  6: '#C41F3B',
  7: '#0070DE',
  8: '#40C7EB',
  9: '#8787ED',
  10: '#00FF96',
  11: '#FF7D0A',
  12: '#A330C9',
};

export const ClassText = styled.span<Props>`
  color: ${(props) => classColors[props.classId]};
`;

type Props = {
  classId: number;
}
