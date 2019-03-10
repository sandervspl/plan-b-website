import * as i from 'types';
import React from 'react';
import { connect } from 'react-redux';
import { Header, Subheader } from 'common';
import { HeroContainer, Content } from './styled';
import HeroVideo from '../HeroVideo';

const Hero: React.FC<Props> = ({ page }) => {
  return (
    <HeroContainer>
      <HeroVideo />
      <Content>
        <Header>{page.hero_title}</Header>
        <Subheader>{page.hero_server}</Subheader>
      </Content>
    </HeroContainer>
  );
};

export type Props = {
  page: i.PageData;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page.data,
});

export default connect(mapStateToProps)(Hero);
