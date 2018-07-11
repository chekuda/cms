import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import rootReducer from './redux'

const resizeWindow = () => {
  window.resizeTo(window.screen.availWidth, window.screen.availHeight)
}

resizeWindow()

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./redux', () => {
      const nextRootReducer = require('./redux/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

const initialState = (
  window.opener && window.opener.srcHtml
    ? { outputData: JSON.parse(window.opener.srcHtml) }
    : undefined
)

const store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
