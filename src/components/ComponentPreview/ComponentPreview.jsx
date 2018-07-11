import React, { Component } from 'react'

import ContentBuilderContainer from 'app/containers/ContentBuilderContainer/ContentBuilderContainer'
import './ComponentPreview.scss'

export default class ComponentPreview extends Component {
  render() {
    const { onAddElement, childType, container, disableAdd, onRemoveElement } = this.props

    return (
      <div className='element-container'>
        <div className='element-name'>
        {container.type}
        </div>
        <div className='element-children'>
          <ContentBuilderContainer type={childType} parentId={container.id}/>
        </div>
        {
          !disableAdd &&
            <button type='button' onClick={() => onAddElement(childType, container.id)}>
              Add {childType}
            </button>
        }
        {
          container.type !== 'row' &&
            <button type='button' onClick={() => onRemoveElement(container.type, container.id)}>
              Remove {container.type}
            </button>
        }
      </div>
    )
  }
}
