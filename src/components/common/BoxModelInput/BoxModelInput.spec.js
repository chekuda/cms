import React from 'react'
import { mount } from 'enzyme'

import * as SpecHelpers from 'app/helpers/specHelpers'

import BoxModelInput from './BoxModelInput'

expect.extend(SpecHelpers)

describe('@BoxModelInput', () => {
  const props = {
    label: 'Margin',
    name: 'options.css',
    statePrefix: 'margin',
    inputNames: [
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft'
    ],
    value: {
      marginTop: '1px',
      marginRight: '2px',
      marginBottom: '3px',
      marginLeft: '4px'
    },
    onChange: jest.fn()
  }

  it('renders a BoxModelInput component', () => {
    const component = mount(<BoxModelInput {...props} />)

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
