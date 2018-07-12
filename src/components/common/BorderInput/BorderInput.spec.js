import React from 'react'
import { mount } from 'enzyme'

import * as SpecHelpers from 'app/helpers/specHelpers'

import BorderInput from './BorderInput'

expect.extend(SpecHelpers)

describe('@BorderInput', () => {
  const props = {
    label: 'Border',
    name: 'options.css',
    value: {
      borderTopWidth: '1px',
      borderRightWidth: '2px',
      borderBottomWidth: '3px',
      borderLeftWidth: '4px',
      borderColor: 'red'
    },
    onChange: jest.fn()
  }

  it('renders a BorderInput component', () => {
    const component = mount(<BorderInput {...props} />)

    Object.entries(props.value).forEach(([key, value]) => {
      const inputName = [props.name, key].join('.')

      props.onChange.mockReset()
      expect(component).toHaveAnInputFor({
        name: inputName,
        value,
        onChange: props.onChange
      })
    })
  })
})
