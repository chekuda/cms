import React, { Component } from 'react'

import ContentBuilderPreviewer from 'app/containers/ContentBuilderPreviewer/ContentBuilderPreviewer'
import './ComponentPreview.scss'

export default class ComponentPreview extends Component {
  render() {
    const { onAddElement, childType, element, disableAdd, onRemoveElement, onSelectEdit } = this.props

    return (
      <div className='element-container'>
        <div className='element-name'>
        {element.type}
        </div>
        <div className='element-children'>
          <ContentBuilderPreviewer parentId={element.id}/>
        </div>
        {
          !disableAdd &&
            <button type='button' onClick={() => onAddElement(childType, element.id)}>
              Add {childType}
            </button>
        }
        {
          element.type !== 'row' &&
            <button type='button' onClick={() => onRemoveElement(element.id)}>
              Remove {element.type}
            </button>
        }
        {
          <button type='button' onClick={() => onSelectEdit(element)}>
            Edit {element.type}
          </button>
        }
      </div>
    )
  }
}
