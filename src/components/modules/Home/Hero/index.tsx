import * as i from 'types';
import React from 'react';
import { connect } from 'react-redux';
import { __OLD__Header, Subheader } from 'common';
import { HeroVideo } from 'modules/Home';
import { HeroContent, Content } from './styled';

const Hero: React.FC<Props> = ({ page }) => {
  return (
    <>
      <HeroContent>
        <HeroVideo />
        <Content>
          {page.home && (
            <>
              <__OLD__Header>{page.home.hero_title}</__OLD__Header>
              <Subheader>{page.home.hero_server}</Subheader>
            </>
          )}
        </Content>
      </HeroContent>
    </>
  );
};

export type Props = {
  page: i.PageState;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(Hero);
