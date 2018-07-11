import React from 'react'
import { shallow } from 'enzyme'

import BrandLogo from './BrandLogo.jsx'

describe('<BrandLogo />', () => {
  describe('given a brand prop', () => {
    it('returns an image tag', () => {
      const wrapper = shallow(<BrandLogo brand='topshop'/>)
      expect(wrapper.find('img').exists()).toBe(true)
    })
  })
})
