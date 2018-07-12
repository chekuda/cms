import React from 'react'
import { shallow } from 'enzyme'

import DropDownInput from './DropDownInput'

describe('@DropDownInput', () => {
  const props = {
    label: 'sample-label',
    options: [
      {
        display: '1',
        value: '1'
      },
      {
        display: '2',
        value: '2'
      }
    ],
    value: '1',
    name: 'dropdown.name',
    onChange: jest.fn()
  }
  describe('given the DropDownInput component', () => {
    it('should render the component', () => {
      const component = shallow(<DropDownInput {...props} />)

      const labelText = component.find('label').get(0).props.children
      expect(labelText).toBe(props.label)

      const optionTag = component.find('option')
      const optionTagText = optionTag.map(op => op.text())
      expect(optionTag.length).toBe(props.options.length)
      expect(optionTagText).toEqual(props.options.map(opt => opt.display))

      const selectTag = component.find('select')
      expect(selectTag.props().value).toEqual(props.value)
      component.unmount()
    })

    describe('when value is undefined', () => {
      it('no option should be selected', () => {
        const component = shallow(
          <DropDownInput
            { ...props }
            value={undefined}
          />
        )

        const optionTag = component.find('select')

        expect(optionTag.props().value).toEqual(undefined)
        component.unmount()
      })
    })

    describe('when an option is selected', () => {
      it('onChange is called', () => {
        const component = shallow(<DropDownInput { ...props }/>)
        const selectTag = component.find('select')

        selectTag.simulate('change')

        expect(props.onChange).toHaveBeenCalled()
        component.unmount()
      })
    })
  })
})
