import React from 'react'
import { shallow, mount } from 'enzyme'
import * as initialState from 'app/redux/initialState'

import ComponentPreview from './ComponentPreview'
import { editButtonHideOn } from './ComponentPreview'

describe('@ComponentPreview', () => {
  let props = {}
  beforeEach(() => {
    props = {
      component: {
        type: 'test',
        options: {
          descendants: []
        }
      },
      path: [0],
      onAddComponent: jest.fn(),
      onEditComponent: jest.fn(),
      onRemoveComponent: jest.fn()
    }
  })

  it('Should render a component', () => {
    const component = shallow(<ComponentPreview { ...props } />)

    const componentNumber = component.find('.component-number')
    expect(component.length).toBe(1)
    expect(componentNumber.text()).toBe('1')
    component.unmount()
  })
  describe('given a onAddComponent in props', () => {
    describe('when the button addComponentIcon is clicked', () => {
      it('onAddComponent is called', () => {
        const newProps = {
          ...props,
          onAddComponent: jest.fn()
        }
        const component = shallow(<ComponentPreview { ...newProps } />)

        const addComponentButton = component.find('.add-component')
        addComponentButton.simulate('click')

        expect(newProps.onAddComponent).toHaveBeenCalledWith(props.path)
        component.unmount()
      })
    })
  })
  describe('when the button Edit Component is clicked', () => {
    it('edits the component', () => {
      const handleEditComponent = jest.fn()
      const component = shallow(
        <ComponentPreview
          {...props}
          onEditComponent={ handleEditComponent }
        />
      )

      const editComponentButton = component.find('.edit-component')
      editComponentButton.simulate('click')

      expect(handleEditComponent).toHaveBeenCalledWith(props.path)
      component.unmount()
    })
  })

  describe('when only the root component is rendered', () => {
    it('remove-component buttons is not rendered', () => {
      const handleRemoveComponent = jest.fn()

      const component = shallow(
        <ComponentPreview
          {...props}
          onRemoveComponent={ handleRemoveComponent }
        />
      )

      const removeComponentButton = component.find('.remove-component')

      expect(removeComponentButton.length).toBe(0)
      component.unmount()
    })
  })
  describe('when more than the root component are rendered', () => {
    describe('and the button Remove Component is clicked for the first child', () => {
      it('Remove Component is called with the child path', () => {
        const handleRemoveComponent = jest.fn()
        const newProps = {
          ...props,
          component: initialState['rowInitialState']()
        }

        const component = mount(
          <ComponentPreview
            {...newProps}
            onRemoveComponent={ handleRemoveComponent }
          />
        )

        const removeComponentButton = component.find('Button.remove-component')
        removeComponentButton.simulate('click')

        expect(handleRemoveComponent).toHaveBeenCalledWith(newProps.path.concat(['options', 'descendants', 0]))
        component.unmount()
      })
    })
  })
  describe('when trying to render add-component button', () => {
    describe('and max depth bigger than the component level', () => {
      describe('and component has descendants available', () => {
        describe('and max number of component is not defined/different as number of descendants', () => {
          it('should render add component button', () => {
            const newProps = {
              ...props,
              component: {
                type: 'test',
                options: {
                  descendants: []
                }
              },
              level: 1,
              maxDepth: 2
            }
            const component = shallow(<ComponentPreview {...newProps} />)

            expect(component.find('.add-component').length).toBe(1)
            component.unmount()
          })
        })
      })
    })
    describe('and max depth is not bigger than the component level', () => {
      it('should not render add component button', () => {
        const newProps = {
          ...props,
          level: 1,
          maxDepth: 1
        }
        const component = shallow(<ComponentPreview {...newProps} />)

        expect(component.find('.add-component').length).toBe(0)
        component.unmount()
      })
    })
    describe('and component doesnt have children defined', () => {
      it('should not render add component button', () => {
        const newProps = {
          ...props
        }
        delete newProps.component.options.descendants

        const component = shallow(<ComponentPreview {...newProps} />)

        expect(component.find('.add-component').length).toBe(0)
        component.unmount()
      })
    })
    describe('when maximun number of children is defined', () => {
      describe('and the user has added the number maximun of childrens', () => {
        it('should not render add component button', () => {
          const newProps = {
            ...props,
            component: {
              options: {
                descendants: [{}]
              }
            },
            maxChildren: 1
          }

          const component = shallow(<ComponentPreview {...newProps} />)

          expect(component.find('.add-component').length).toBe(0)
          component.unmount()
        })
      })
    })
  })
  describe('when trying to render edit-component button', () => {
    describe('and its the root component', () => {
      describe('and componenttype is includes on `editButtonHideOn` list', () => {
        it('hideButton should not be rendered', () => {
          const newProps = {
            ...props,
            component: {
              type: editButtonHideOn[0],
              options: {
                descendants: [{}]
              }
            }
          }
          const component = shallow(<ComponentPreview {...newProps} />)

          expect(component.find('.edit-component').length).toBe(0)
          component.unmount()
        })
      })
      describe('and componenttype is not includes on `editButtonHideOn` list', () => {
        it('hideButton should be rendered', () => {
          const newProps = {
            ...props,
            component: {
              type: 'random-type',
              options: {
                descendants: [{}]
              }
            }
          }
          const component = shallow(<ComponentPreview {...newProps} />)

          expect(component.find('.edit-component').length).toBe(1)
          component.unmount()
        })
      })
    })
  })
  describe('given a component childs', () => {
    describe('when passing the customDescendant property', () => {
      it('render the childs within the custom descendant property', () => {
        const newProps = {
          ...props,
          component: {
            options: {
              customChild: [{
                type: 'custom-child'
              }, {
                type: 'custom-child2'
              }],
              descendants: [{
                type: 'test'
              }]
            }
          },
          customDescendants: 'customChild'
        }
        const component = shallow(<ComponentPreview { ...newProps } />)

        component.find('ComponentPreview').forEach((comp, i) => {
          expect(comp.props().component).toEqual(newProps.component.options[newProps.customDescendants][i])
        })

        component.unmount()
      })
    })
    describe('when not passing the customDescendant property', () => {
      it('render the childs within the descendant by default', () => {
        const newProps = {
          ...props,
          component: {
            options: {
              customChild: [{
                type: 'custom-child'
              }, {
                type: 'custom-child2'
              }],
              descendants: [{
                type: 'test'
              }]
            }
          }
        }
        const component = shallow(<ComponentPreview { ...newProps } />)

        component.find('ComponentPreview').forEach((comp, i) => {
          expect(comp.props().component).toEqual(newProps.component.options.descendants[i])
        })
        component.unmount()
      })
    })
  })
})
