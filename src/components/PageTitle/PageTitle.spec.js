import React from 'react'
import { shallow } from 'enzyme'

import PageTitle from './PageTitle.jsx'

describe('@PageTitle', () => {
  describe('given a title prop', () => {
    it('returns an h1 element', () => {
      const wrapper = shallow(<PageTitle title="Monty Content Builder"/>)
      expect(wrapper.find('h1').length).toBe(1)
    })
  })
})
