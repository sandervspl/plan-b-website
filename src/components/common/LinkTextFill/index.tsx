import React from 'react';
import Link, { LinkComponentProps } from 'common/Link';
import NavLink from 'common/NavLink';
import { MaskWrap, Mask } from './styled';

const LinkTextFill: React.FC<Props> = ({ children, linkType, ...props }) => {
  const Component = linkType === 'link' ? Link : NavLink;

  return (
    <MaskWrap>
      <Component {...props}>
        <Mask>
          <span>{children}</span>
        </Mask>
        {children}
      </Component>
    </MaskWrap>
  );
};

LinkTextFill.defaultProps = {
  linkType: 'link',
};

export type Props = LinkComponentProps & {
  linkType: 'link' | 'navlink';
};

export default LinkTextFill;
