import React from 'react'
import { shallow } from 'enzyme'

import ToolTip from './ToolTip.jsx'

describe('ToolTip', () => {
  const childMessage = 'help me'

  fdescribe('given children prop', () => {
    const wrapper = shallow(<ToolTip>{childMessage}</ToolTip>)

    it('renders the child elements inside the wrapper', () => {
      expect(wrapper.props().children[0].props.children).toBe('?')
      expect(wrapper.props().children[1].props.children).toBe(childMessage)
      wrapper.unmount()
    })
  })
})
