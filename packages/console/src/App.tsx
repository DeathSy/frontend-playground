import { PrivateRoute } from 'components'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Auth = React.lazy(() => import('./pages/Auth'))
const Home = React.lazy(() => import('./pages/Home'))

const App: React.FC = () => (
  <React.Suspense fallback="...loading">
    <Router>
      <Switch>
        <Route path="/login" component={Auth} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  </React.Suspense>
)

export default App
