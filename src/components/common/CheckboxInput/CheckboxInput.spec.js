import React from 'react'
import { shallow } from 'enzyme'

import CheckboxInput from './CheckboxInput'

describe('@Input', () => {
  it('should render an input with a name and a value', () => {
    const props = {
      name: 'my-field',
      value: 'my-value',
      onChange: jest.fn()
    }
    const component = shallow(<CheckboxInput {...props} />)
    const input = component.find('input').first()

    expect(input.prop('name')).toBe(props.name)
    expect(input.prop('value')).toBe(props.value)
    component.unmount()
  })
})
