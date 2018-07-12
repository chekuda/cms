import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-modal'

// import { removeColumn } from 'app/redux/reducers/column/column'
import { removeComponent, addComponent } from 'app/redux/reducers/component/component'
import { selectEditor, removeEditor } from 'app/redux/reducers/editor/editor'
import ComponentPreview from 'app/components/ComponentPreview/ComponentPreview'
import ComponentSelector from 'app/components/ComponentSelector/ComponentSelector'


// prevent screen readers from reading hidden content outside portal
if (document.getElementById('app')) Modal.setAppElement('#app')

export class ContentBuilderPreviewer extends Component {
  constructor(props) {
    super(props)
    this.childrenEnabled = {
      row: 'column',
      column: 'component',
      component: ['copy', 'video', 'heading']
    }
    this.disableAddFor = ['copy', 'video']
    this.state = {
      currentAddingFor: undefined
    }
  }

  handleAddElement = (type, parentId) => {
    const { addComponent } = this.props

    if(type === 'column') {
      addComponent(parentId, 'column')
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

  handleRemoveElement = (id) => {
    const { removeComponent, removeEditor, allElements } = this.props

    removeComponent(id)
    removeEditor(allElements, id)
  }

  getCurrentElements() {
    const { parentId, allElements } = this.props

    if(!parentId) return allElements.filter(ele => !ele.parentId)

    return allElements.filter(element => element.parentId === parentId) || []
  }

  handleSelectEdit = (element) => {
    const { selectEditor } = this.props

    selectEditor(element)
  }

  render() {
    const currentElements = this.getCurrentElements()
    return (
      <div className='previewer'>
        {
          currentElements.map((element, index) => {
            return (
              <ComponentPreview
                key={index}
                element={element}
                onAddElement={this.handleAddElement}
                childType={this.childrenEnabled[element.type]}
                disableAdd={this.disableAddFor.includes(element.type)}
                onRemoveElement={this.handleRemoveElement}
                onSelectEdit={this.handleSelectEdit}
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
    )
  }
}

export default connect(
  (state) => ({
    allElements: state.component
  }),
  (dispatch) => bindActionCreators({ addComponent, removeComponent, selectEditor, removeEditor }, dispatch)
)(ContentBuilderPreviewer)
