import React from 'react'
import { shallow } from 'enzyme'

import TextArea from './TextArea'
import ToolTip from 'app/common/ToolTip/ToolTip'

describe('@TextArea', () => {
  const props = {
    name: 'my-field',
    value: 'my-value',
    onChange: jest.fn()
  }

  describe('given essential and default props', () => {
    const component = shallow(<TextArea {...props} />)
    const textarea = component.find('textarea').first()

    it('should render a single textarea element', () => {
      expect(component.find('textarea').length).toBe(1)
    })

    it('should pass relevant props to textarea', () => {
      expect(textarea.prop('name')).toBe(props.name)
      expect(textarea.prop('value')).toBe(props.value)
      expect(textarea.prop('onChange')).toBe(props.onChange)
      component.unmount()
    })

    it('should pass default props to textarea elment', () => {
      expect(textarea.prop('placeholder')).toBe('')
      expect(textarea.prop('disabled')).toBe(false)
    })
  })

  describe('given a className prop', () => {
    const propsWithClassName = {
      ...props,
      className: 'foo'
    }
    const component = shallow(<TextArea {...propsWithClassName} />)
    const textarea = component.find('textarea').first()
    it('should pass the className to the textarea element', () => {
      expect(textarea.prop('className')).toBe('foo text-textarea  ')
    })
  })

  describe('given a label prop', () => {
    const propsWithLabel = {
      ...props,
      label: 'bar',
      labelClassName: 'baz'
    }
    const component = shallow(<TextArea {...propsWithLabel} />)

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
    const component = shallow(<TextArea {...propsWithToolTipText} />)

    it('should render a single ToolTip component', () => {
      expect(component.find(ToolTip).length).toBe(1)
    })
  })
})
