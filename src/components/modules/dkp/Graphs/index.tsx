import React from 'react';
import Slider, { Settings } from 'react-slick';
import { totalDkpForGraph } from 'ducks/user/selectors';
import { useSelector } from 'hooks';
import { EmptyStateText } from 'common';
import { theme } from 'styles';
import Graph from '../Graph';
import { GraphsContainer } from './styled';

const sliderSettings: Settings = {
  dots: false,
  arrows: false,
  centerMode: true,
  swipeToSlide: true,
  infinite: false,
  centerPadding: '0',
  slidesToShow: 1.2,
};

const Graphs: React.FC<Props> = () => {
  const dkpHistory = useSelector(totalDkpForGraph);
  const isMobile = useSelector((state) => state.ui.isMobile);

  if (!dkpHistory || dkpHistory.length === 0) {
    return (
      <GraphsContainer>
        <EmptyStateText>You have no DKP history yet.</EmptyStateText>
      </GraphsContainer>
    );
  }

  const DkpGraphs = [
    <Graph
      data={dkpHistory}
      dataKey="dkp"
      title="DKP Total"
      fill={theme.color.graph.fill.total}
      stroke={theme.color.graph.border.total}
    />,
    <Graph
      data={dkpHistory}
      dataKey="dkp"
      title="Guild DKP Average"
      fill={theme.color.graph.fill.average}
      stroke={theme.color.graph.border.average}
    />,
  ];

  return (
    <GraphsContainer>
      {isMobile ? (
        <Slider {...sliderSettings}>
          <Graph
            data={dkpHistory}
            dataKey="dkp"
            title="DKP Total"
            fill={theme.color.graph.fill.total}
            stroke={theme.color.graph.border.total}
          />
          <Graph
            data={dkpHistory}
            dataKey="dkp"
            title="Guild DKP Average"
            fill={theme.color.graph.fill.average}
            stroke={theme.color.graph.border.average}
          />
        </Slider>
      ) : (
        DkpGraphs.map((graph) => graph)
      )}
    </GraphsContainer>
  );
};

export type Props = {

};

export default Graphs;
