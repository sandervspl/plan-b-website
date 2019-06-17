import React from 'react';
import { withRouter, WithRouterProps } from 'next/router';
import { RouteParams } from 'next-routes';
import Router from 'router';
import _ from 'lodash';

import { getPageFromRoute } from 'services';

class NavLink extends React.PureComponent<NavLinkProps> {
  static defaultProps: Partial<NavLinkProps>;

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

    if (this.state.active) {
      const clsName = this.setActiveClassName(props.className!);

      return (
        <span {...props} className={clsName}>
          {children}
        </span>
      );
    }

    const child = React.Children.only(
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a aria-label={_.capitalize(ariaLabel)} className={props.className}>{children}</a>
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

export type NavLinkProps = WithRouterProps & {
  ariaLabel?: string;
  children: React.ReactNode;
  className?: string;
  params?: RouteParams;
  to: string;
}

NavLink.defaultProps = {
  className: '',
};

export default withRouter(NavLink);
