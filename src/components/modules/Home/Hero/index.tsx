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
          {page.data && (
            <>
              <Header>{page.data.hero_title}</Header>
              <Subheader>{page.data.hero_server}</Subheader>
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
