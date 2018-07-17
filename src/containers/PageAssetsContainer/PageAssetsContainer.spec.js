import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import PageAssetsContainer from './PageAssetsContainer'
const mockStore = configureStore()
const initialState = {
  path: [2],
  outputData: {
    options: {
      descendants: [
        2
      ]
    }
  },
  combinedPageAssetsReducer: []
}

describe('@PageAssetsContainer', () => {
  it('renders as expected', () => {
    const container = shallow(
      <PageAssetsContainer />,
      { context: { store: mockStore(initialState) } },
    )
    expect(container.length).toBe(1)
    container.unmount()
  })
})
