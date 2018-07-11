import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import Page from './Page.jsx'

const mockStore = configureStore()
const initialState = {
  brand: 'arcadia',
  combinedPageAssetsReducer: []
}

describe('@Page', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Page title="title" />,
      { context: { store: mockStore(initialState) } }
    )
    expect(wrapper.length).toBe(1)
    wrapper.unmount()
  })
  it('renders a title', () => {
    const title = 'Monty Content Builder'
    const wrapper = shallow(
      <Page title={ title } />,
      { context: { store: mockStore(initialState) } }
    )
    expect(wrapper.dive().find('PageTitle').length).toBe(1)
  })

  it('renders a BrandLogo component', () => {
    const brand = 'topshop'
    const wrapper = shallow(
      <Page title="title" brand={ brand } />,
      { context: { store: mockStore(initialState) } }
    )
    expect(wrapper.dive().find('BrandLogo').length).toBe(1)
  })

  it('renders the children', () => {
    const wrapper = shallow(
      <Page title="title"><div className="a-child" /></Page>,
      { context: { store: mockStore(initialState) } }
    )
    expect(wrapper.find('.a-child').length).toBe(1)
  })

  it('assigns the className to the root element', () => {
    const wrapper = shallow(
      <Page title="title" className="my-classname"></Page>,
      { context: { store: mockStore(initialState) } }
    )
    expect(wrapper.first().prop('className')).toContain('my-classname')
  })
})
