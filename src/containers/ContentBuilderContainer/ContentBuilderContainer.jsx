import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-modal'

import { addColumn, removeColumn } from 'app/redux/reducers/column/column'
import { addComponent, removeComponent } from 'app/redux/reducers/component/component'
import ComponentPreview from 'app/components/ComponentPreview/ComponentPreview'
import ComponentSelector from 'app/components/ComponentSelector/ComponentSelector'


// prevent screen readers from reading hidden content outside portal
if (document.getElementById('app')) Modal.setAppElement('#app')

export class ContentBuilderContainer extends Component {
  constructor(props) {
    super(props)
    this.childrenEnabled = {
      row: 'column',
      column: 'component',
      component: ['copy', 'video', 'heading'],
      subContainers: ['heading']
    }
    this.disableAddFor = ['copy', 'video']
    this.state = {
      currentAddingFor: undefined
    }
  }

  handleAddElement = (type, parentId) => {
    const { addColumn } = this.props

    if(type === 'column') {
      addColumn(parentId)
    }
    if(type === 'component') {
      this.setState({
        currentAddingFor: 'component',
        parentId
      })
    }
  }

  handleConfirmAddElement = (componentType) => {
    const { addComponent } = this.props

    this.setState({
      currentAddingFor: undefined,
      parentId: undefined
    })

    addComponent(this.state.parentId, componentType)
  }

  handleRemoveElement = (componentType, id) => {
    const { removeColumn, removeComponent } = this.props

    if(componentType === 'column') {
      removeColumn(id)
      removeComponent(undefined, id)
    } else if (componentType === 'subContainers') {
      removeComponent(id, id)
    } else {
      removeComponent(id, undefined)
    }
  }

  getElementToRender() {
    const { parentId, container } = this.props

    if(!parentId) return container

    return container.filter(element => element.parentId === parentId) || []
  }

  render() {
    const currentElements = this.getElementToRender()
    return (
      <div className="content-builder">
        <div className="component-builder">
          {
            currentElements.map((element, index) => {
              return (
                <ComponentPreview
                  key={index}
                  container={element}
                  onAddElement={this.handleAddElement}
                  childType={this.childrenEnabled[element.type]}
                  disableAdd={this.disableAddFor.includes(element.type)}
                  onRemoveElement={this.handleRemoveElement}
                />
              )
            })
          }
          <Modal
            isOpen={ !!this.state.currentAddingFor }
            style={{ content: {} }}
          >
            <ComponentSelector
              componentList={this.childrenEnabled[this.state.currentAddingFor]}
              onSelectComponent={this.handleConfirmAddElement}
            />
          </Modal>
        </div>
      </div>
    )
  }
}

export default connect(
  (state, { type }) => ({
    container: state[type] || state.row
  }),
  (dispatch) => bindActionCreators({ addColumn, addComponent, removeColumn, removeComponent }, dispatch)
)(ContentBuilderContainer)
