import React from 'react'
import { shallow } from 'enzyme'

import { containerInitialState } from 'app/redux/initialState'
import { ContentBuilderContainer } from './ContentBuilderContainer'

describe('@ContentBuilderContainer', () => {
  describe('given the props', () => {
    const mockState = containerInitialState()
    const props = {
      container: mockState,
      path: [],
      row: mockState.options.descendants[0],
      pageAssetsPrefix: 'topshop'
    }
    describe('when first rendered', () => {
      let component = null

      beforeEach(() => {
        component = shallow(<ContentBuilderContainer {...props} />)
      })
      it('should render the ContentBuilderContainer', () => {
        expect(component.length).toBe(1)
        component.unmount()
      })
      it('should render ContentPreview', () => {
        expect(component.find('ComponentPreview').length).toBe(1)
        component.unmount()
      })
      it('should no render ComponentEditorContainer', () => {
        expect(component.find('ComponentEditorContainer').length).toBe(0)
        component.unmount()
      })
      it('should render a closed Modal', () => {
        expect(component.find('Modal').get(0).props.isOpen).toBe(false)
        component.unmount()
      })
      it('should render a closed WarningModal', () => {
        expect(component.find('WarningModal').get(0).props.isOpen).toBe(false)
        component.unmount()
      })
    })
    xdescribe('when trying to remove a component', () => {
      let component = null

      beforeEach(() => {
        component = shallow(<ContentBuilderContainer {...props} />)
      })
      const mockArg = { path: ['first', 'second'], action: 'remove' }
      component.instance().handleShowWarningModal(mockArg)
      it('path of component to be removed should be passed to redux', () => {

      })
      it('componentSelector should not be rendered', () => {

      })
    })
    xdescribe('when trying to add a component', () => {
      it('Modal should be open', () => {

      })
      it('path and type of the component to be added should be passed to redux ', () => {

      })
      it('componentEditor should be rendered', () => {

      })
    })
  })
})
