import * as i from 'types';
import React from 'react';
import _ from 'lodash';
import { Union } from 'ts-toolbelt';
import Router from 'router';
import { getPageFromRoute } from 'services';
import { useRouter } from 'hooks';
import { LinkProps } from './types';

const Link: React.FC<LinkComponentProps> = ({
  children, className, to, ariaLabel, currentTab, type, disabled, ...props
}) => {
  const router = useRouter();
  const formattedAriaLabel = _.capitalize(ariaLabel);
  const externalProps = props as ExternalLinkProps;
  const paramsProps = props as IdParamsLinkProps;

  let linkProps: LinkProps = {
    className: className || '',
  };

  if (externalProps.external || type !== 'route') {
    const target = currentTab || type !== 'route'
      ? '_self'
      : '_blank';

    let href: string;

    switch (type) {
      case 'mail': href = `mailto:${to}`; break;
      case 'phone': href = `tel:${to}`; break;
      default: href = to; break;
    }

    if (type !== 'text') {
      linkProps = {
        ...linkProps,
        target,
        href,
        rel: 'noopener noreferrer',
        'aria-label': formattedAriaLabel,
      };
    }

    if (type === 'text' || disabled) {
      linkProps = {
        ...linkProps,
        className: `${linkProps.className} disabled`,
      };

      return (
        <span {...linkProps} {...props}>
          {children}
        </span>
      );
    }

    const validProps = _.omit(props, 'external');

    return (
      <a {...linkProps} {...validProps}>
        {children}
      </a>
    );
  }

  // We route with route name, but prefetch with page name
  const prefetchPage = getPageFromRoute(to);
  let prefetchProps = {};

  if (prefetchPage) {
    prefetchProps = {
      onMouseOver: () => router.prefetch(prefetchPage),
    };
  }

  const validProps = _.omit(props, 'params');

  return (
    <Router.Link route={to} params={paramsProps.params}>
      {React.Children.only(
        <a {...prefetchProps} {...linkProps} {...validProps}>
          {children}
        </a>
      )}
    </Router.Link>
  );
};

type BaseProps = React.AnchorHTMLAttributes<{}> & {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  currentTab?: boolean;
  type?: 'route' | 'text' | 'mail' | 'phone';
  disabled?: boolean;
}

type InternalLinkProps = {
  external?: false;
  to: Union.Exclude<i.RouteNames, 'news-detail' | 'application-detail' | 'public-application-detail'>;
  params?: never;
}

type ExternalLinkProps = {
  external: true;
  to: string;
  params?: never;
}

type IdParamsLinkProps = {
  to: 'news-detail' | 'application-detail';
  params: {
    id: number;
  };
}

type UuidParamsLinkProps = {
  to: 'public-application-detail';
  params: {
    uuid: string;
  };
}

export type LinkComponentProps = BaseProps & (
  | InternalLinkProps
  | ExternalLinkProps
  | IdParamsLinkProps
  | UuidParamsLinkProps
);

Link.defaultProps = {
  type: 'route',
};

export default Link;
