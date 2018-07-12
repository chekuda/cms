import React from 'react'
import { shallow } from 'enzyme'

import TextInput from './TextInput'
import ToolTip from 'app/common/ToolTip/ToolTip'

describe('@TextInput', () => {
  const props = {
    name: 'my-field',
    value: 'my-value',
    onChange: jest.fn()
  }

  describe('given essential and default props', () => {
    const component = shallow(<TextInput {...props} />)
    const input = component.find('input').first()

    it('should render a single input element', () => {
      expect(component.find('input').length).toBe(1)
    })

    it('should pass relevant props to input', () => {
      expect(input.prop('name')).toBe(props.name)
      expect(input.prop('value')).toBe(props.value)
      expect(input.prop('onChange')).toBe(props.onChange)
      component.unmount()
    })

    it('should pass default props to input elment', () => {
      expect(input.prop('placeholder')).toBe('')
      expect(input.prop('disabled')).toBe(false)
    })
  })

  describe('given a className prop', () => {
    const propsWithClassName = {
      ...props,
      className: 'foo'
    }
    const component = shallow(<TextInput {...propsWithClassName} />)
    const input = component.find('input').first()
    it('should pass the className to the input element', () => {
      expect(input.prop('className')).toBe('foo text-input  ')
    })
  })

  describe('given a label prop', () => {
    const propsWithLabel = {
      ...props,
      label: 'bar',
      labelClassName: 'baz'
    }
    const component = shallow(<TextInput {...propsWithLabel} />)

    it('should render a single label element', () => {
      expect(component.find('label').length).toBe(1)
      expect(component.find('label').first().prop('className')).toBe(propsWithLabel.labelClassName)
    })
  })

  describe('given a toolTipText prop', () => {
    const propsWithToolTipText = {
      ...props,
      toolTipText: 'help'
    }
    const component = shallow(<TextInput {...propsWithToolTipText} />)

    it('should render a single ToolTip component', () => {
      expect(component.find(ToolTip).length).toBe(1)
    })
  })
})

