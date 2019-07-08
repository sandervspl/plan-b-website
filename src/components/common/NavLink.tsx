import * as i from 'types';
import React from 'react';
import { withRouter, WithRouterProps } from 'next/router';
import Router from 'router';
import _ from 'lodash';

import { getPageFromRoute } from 'services';
import { Union } from 'ts-toolbelt';

class NavLink extends React.PureComponent<NavLinkProps> {
  static defaultProps: Partial<NavLinkProps> = {
    className: '',
  };

  state = {
    active: false,
  }

  static getDerivedStateFromProps(props: NavLinkProps) {
    const { router, to } = props;
    const routerRoute = Router.routes.find((r) => r.name === to);

    // Check if pathname from current route and page from routes are equal
    if (routerRoute && router!.pathname === routerRoute.page) {
      if (props.params) {
        // If current pathname and route page are the same, and we have params, then the params also have to be the same
        // We compare every params passed to NavLink and the queries from router to decide if this is the current route
        if (props.params && Object.keys(props.params).length > 0) {
          if (Object.keys(props.params).every((p) => router!.query![p] === props.params![p])) {
            return {
              active: true,
            };
          }
        }
      } else {
        // We don't have to check params if it's not relevant for this route > it's active
        return {
          active: true,
        };
      }
    }

    return {
      active: false,
    };
  }

  setActiveClassName = (className: string) => {
    if (!this.state.active) return className;

    return `${className} active`.trim();
  }

  render() {
    const {
      // @ts-ignore Remove from props to fix react warnings (unknown dom attribute)
      isActive, isVisible, // eslint-disable-line
      children, to, router, ariaLabel, ...props
    } = this.props;
    let clsName = props.className!;

    if (this.props.disabled) {
      clsName = `${clsName} disabled`;
    }

    if (this.state.active || this.props.disabled) {
      clsName = this.setActiveClassName(clsName);

      return (
        <span {...props} className={clsName}>
          {children}
        </span>
      );
    }

    const child = React.Children.only(
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a aria-label={_.capitalize(ariaLabel)} className={clsName}>
        {children}
      </a>
    );

    // We route with route name, but prefetch with page name
    const prefetchPage = getPageFromRoute(to);
    let prefetchProps = {};

    if (prefetchPage) {
      prefetchProps = {
        onMouseOver: () => router!.prefetch(prefetchPage),
      };
    }

    const LinkProps = _.pick(props, 'params');

    return (
      <Router.Link route={to} {...LinkProps}>
        {React.cloneElement(
          child,
          {
            className: this.setActiveClassName(child.props.className),
            ...prefetchProps,
          },
        )}
      </Router.Link>
    );
  }
};

type BaseProps = WithRouterProps & {
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
}

type InternalLinkProps = {
  to: Union.Exclude<i.RouteNames, 'news-detail'>;
  params?: never;
}

type IdParamsLinkProps = {
  to: 'news-detail';
  params: {
    id: number;
  };
}

export type NavLinkProps = BaseProps & (InternalLinkProps | IdParamsLinkProps);

export default withRouter<NavLinkProps>(NavLink);
