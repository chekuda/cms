import React from 'react'
import { shallow } from 'enzyme'

import ColorInput from './ColorInput'

describe('@Input', () => {
  const props = {
    label: 'colorinput-label',
    name: 'colorinput.name',
    value: 'colorinput-value',
    onChange: jest.fn(),
    errors: {}
  }

  it('should render the component', () => {
    const component = shallow(<ColorInput {...props} />)
    expect(component.length).toBe(1)
    component.unmount()
  })
})
