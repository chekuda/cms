import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('@Button', () => {
  const props = {
    className: 'button-className',
    onClick: jest.fn(),
    children: 'button'
  }
  const component = shallow(<Button {...props} />)

  it('should render the component', () => {
    expect(component.length).toBe(1)
    component.unmount()
  })
  it('should call onClick prop when clicked', () => {
    component.find('button').simulate('click')
    expect(props.onClick).toHaveBeenCalled()
  })
  it('should render a disabled button when receiving a truthy disabled prop', () => {
    const disabledProps = {
      ...props,
      disabled: true
    }
    const disabledComponent = shallow(<Button {...disabledProps}/>)
    expect(disabledComponent.find('button').props().disabled).toBe(true)
  })
  it('should render an i tag when an icon prop is passed', () => {
    const iconProps = {
      ...props,
      icon: 'icon-name'
    }
    const iconComponent = shallow(<Button {...iconProps} />)
    expect(iconComponent.find('i').length).toBe(1)
  })
})
