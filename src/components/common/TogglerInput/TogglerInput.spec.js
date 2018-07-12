import React from 'react'
import { shallow, mount } from 'enzyme'

import TogglerInput from './TogglerInput'

describe('@TogglerInput', () => {
  const props = {
    options: ['one', 'two'],
    name: 'toggler.input',
    value: 'one',
    onChange: jest.fn(),
    label: 'toggler-label'
  }

  describe('given the TogglerInput component', () => {
    describe('when no props are received', () => {
      it('should render the component with no options', () => {
        const component = shallow(<TogglerInput {...props} />)

        expect(component.length).toBe(1)
        component.unmount()
      })
    })

    describe('when options are provided', () => {
      it('should render the options', () => {
        const options = ['a', 'b', 'c']

        const component = shallow(
          <TogglerInput {...props} options={ options } />
        )
        const inputs = component.find('.toggler-input-option')

        expect(inputs.length).toBe(3)
        component.unmount()
      })
    })

    describe('when options are an array of arrays', () => {
      it('should use the first value as label and second as value', () => {
        const options = [['A', 'aaa'], ['B', 'bee'], ['C', 'cee']]

        const component = shallow(
          <TogglerInput {...props} options={ options } />
        )
        const inputs = component.find('.toggler-input-option')

        expect(inputs.length).toBe(3)

        const renderedOptions = inputs.map((e) => {
          const input = e.find('input')
          const label = e.find('.option-label')
          return [label.text(), input.prop('value')]
        })

        expect(renderedOptions).toEqual(options)
        component.unmount()
      })
    })

    describe('when a value is provided', () => {
      it('should display the correct option as checked', () => {
        const options = ['a', 'b', 'c']
        const selectedValue = options[1]

        const component = shallow(
          <TogglerInput
            {...props}
            options={ options }
            value={ selectedValue }
          />
        )

        const checkedInputs = component
          .find('.toggler-input-option input')
          .filterWhere((input) => input.prop('checked'))
          .filterWhere((input) => input.prop('value') === selectedValue)

        expect(checkedInputs.length).toBe(1)
      })
    })

    describe('when I select an option', () => {
      it('should call onChange', () => {
        const options = ['a', 'b', 'c']
        const handleChange = jest.fn()
        const component = mount(
          <TogglerInput
            {...props}
            options={ options }
            onChange={ handleChange }
          />
        )

        const input = component
          .find('.toggler-input-option input')
          .filterWhere((input) => input.prop('value') === options[0])

        input.simulate('change')
        expect(handleChange).toHaveBeenCalled()
      })
    })
  })
})
