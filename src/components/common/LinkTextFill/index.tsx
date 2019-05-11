import * as i from 'types';
import React from 'react';
import * as _ from 'lodash';
import Link, { LinkComponentProps } from 'common/Link';
import NavLink from 'common/NavLink';
import { MaskWrap, Mask } from './styled';

const LinkTextFill: React.FC<Props> = ({ children, component, ...props }) => {
  let linkProps: LinkProps = props;
  let Component;

  switch (component) {
    case 'Link': Component = Link; break;
    case 'NavLink': Component = NavLink; break;
    case 'a':
      Component = 'a';

      linkProps = _.omit(linkProps, 'to');
      linkProps.href = props.to;
      linkProps.target = '_blank';
      break;
    default: Component = Link;
  }

  return (
    <MaskWrap>
      <Component {...linkProps}>
        <Mask>
          <span>{children}</span>
        </Mask>
        {children}
      </Component>
    </MaskWrap>
  );
};

LinkTextFill.defaultProps = {
  component: 'Link',
};

export type Props = LinkComponentProps & {
  component: 'a' | 'Link' | 'NavLink';
};

type LinkProps = i.Omit<LinkComponentProps, 'children'> & React.AnchorHTMLAttributes<{}>;

export default LinkTextFill;
