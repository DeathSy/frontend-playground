import React from 'react'
import { Route, Redirect, RouterProps, RouteProps } from 'react-router-dom'

interface IPrivateRouteProps extends RouteProps {
  component: React.FC<RouterProps>
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ component: Component, ...rest }) => {
  const isLoggedIn = true

  return <Route {...rest} render={(props) => isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />} />
}

export { PrivateRoute }
