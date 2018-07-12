import React from 'react'
import { shallow } from 'enzyme'

import AssetsInput from './AssetsInput'

describe('@AssetsInput', () => {
  const props = {
    label: 'sample-label',
    name: 'sample.name',
    options: [{
      display: 'image1',
      extension: 'jpg',
      value: 'image1.jpg'
    }, {
      display: 'image2',
      extension: 'png',
      value: 'image2.png'
    }, {
      display: 'video1',
      extension: 'mp4',
      value: 'video1.mp4'
    }],
    value: '',
    onChange: jest.fn(),
    pageAssetsPrefix: '/sample-prefix/'
  }

  it('should render the component', () => {
    const component = shallow(<AssetsInput {...props} />)

    expect(component.length).toBe(1)

    component.unmount()
  })
  describe('given all the options', () => {
    describe('when the value passed is an image', () => {
      const newProps = {
        ...props,
        value: 'image2.png'
      }
      it('preview should render img tag', () => {
        const component = shallow(<AssetsInput {...newProps} />)

        expect(component.find('.assets-preview').get(0).type).toBe('img')
      })
    })
    describe('when the value passed is a video', () => {
      const newProps = {
        ...props,
        value: 'video1.mp4'
      }
      it('preview should render video tag', () => {
        const component = shallow(<AssetsInput {...newProps} />)

        expect(component.find('.assets-preview').get(0).type).toBe('video')
      })
    })
    describe('when the props not contains a tooltip', () => {
      it('a tooltip component should be rendered', () => {
        const component = shallow(<AssetsInput {...props} />)

        expect(component.find('ToolTip').length).toBe(0)
      })
    })
  })
})
