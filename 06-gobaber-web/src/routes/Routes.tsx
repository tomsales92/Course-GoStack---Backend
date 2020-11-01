import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface Routeprops extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<Routeprops> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
