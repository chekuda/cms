import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import ContentBuilderPage from 'app/pages/ContentBuilderPage/ContentBuilderPage'

const App = () =>
  <div className='wrapper'>
    <HashRouter>
      <Switch>
        <Route path='/' component={ ContentBuilderPage }/>
      </Switch>
    </HashRouter>
  </div>

export default hot(module)(App)
