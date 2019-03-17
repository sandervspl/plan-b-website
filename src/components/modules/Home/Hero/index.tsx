import * as i from 'types';
import React from 'react';
import { connect } from 'react-redux';
import { Header, Subheader } from 'common';
import { HeroVideo } from 'modules/Home';
import { HeroContent, Content } from './styled';

const Hero: React.FC<Props> = ({ page }) => {
  return (
    <>
      <HeroContent>
        <HeroVideo />
        <Content>
          <Header>{page.hero_title}</Header>
          <Subheader>{page.hero_server}</Subheader>
        </Content>
      </HeroContent>
    </>
  );
};

export type Props = {
  page: i.PageData;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page.data,
});

export default connect(mapStateToProps)(Hero);
