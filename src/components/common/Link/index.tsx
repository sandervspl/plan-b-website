import React from 'react';
import _ from 'lodash';
import Router from 'router';
import { RouteParams } from 'next-routes';
import { oc } from 'ts-optchain';
import { getPageFromRoute } from 'services';
import { useRouter } from 'services/hooks';
import { LinkProps } from './types';

const Link: React.FC<LinkComponentProps> = ({
  children, className, to, params, external, ariaLabel, currentTab, type, ...props
}) => {
  const router = useRouter();
  const formattedAriaLabel = _.capitalize(ariaLabel);
  const as = type === 'text' ? 'span' : 'a';

  let linkProps: LinkProps = {
    as,
    className: className || '',
    'aria-label': formattedAriaLabel,
  };

  if (external || type !== 'route') {
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
      };
    }

    return (
      <a {...linkProps} {...props}>
        {children}
      </a>
    );
  }

  // We route with route name, but prefetch with page name
  const prefetchPage = getPageFromRoute(to);
  let prefetchProps = {};

  if (prefetchPage) {
    prefetchProps = {
      onMouseOver: () => oc(router).prefetch(prefetchPage),
    };
  }

  return (
    <Router.Link route={to} params={params}>
      {React.Children.only(
        <a {...prefetchProps} {...linkProps} {...props}>
          {children}
        </a>
      )}
    </Router.Link>
  );
};

export type LinkComponentProps = {
  children: React.ReactNode;
  className?: string;
  to: string;
  params?: RouteParams;
  external?: boolean;
  ariaLabel?: string;
  currentTab?: boolean;
  type?: 'route' | 'text' | 'mail' | 'phone';
}

Link.defaultProps = {
  type: 'route',
};

export default Link;
