import React, { Component } from 'react'

import ContentBuilderPreviewer from 'app/containers/ContentBuilderPreviewer/ContentBuilderPreviewer'

import './ComponentPreview.scss'

const myColClass = element => {
  const colSpan = element.options.columnSpan

  return element.type === 'column' && colSpan ? `col-${colSpan}` : ''
}

const customIcon = (type) => {
  return type === 'row' || type === 'column'
    ? ''
    : `icon-section ${type}-component`
}

export default class ComponentPreview extends Component {
  render() {
    const { onAddElement, childType, element, disableAdd, onRemoveElement, onSelectEdit } = this.props

    return (
      <div className={`component-container ${element.type}-component col ${element.type !== 'column' ? 'col-12' : myColClass(element)}`}>
        <div className={customIcon(element.type)}>
          {/* {element.type} */}
        </div>
        <div className='children-section container'>
          <div className='row'>
            <div className='col-12'>
              <ContentBuilderPreviewer parentId={element.id}/>
            </div>
          </div>
        </div>
        <div className='action-section row'>
          {
            !disableAdd &&
              <button type='button' className='action-button add-child' onClick={() => onAddElement(childType, element.id)}>
                {/*  Add {childType} */}
              </button>
          }
          {
            element.type !== 'row' &&
              <button type='button' className='remove-component' onClick={() => onRemoveElement(element.id)}>
                {/* Remove {element.type} */}
              </button>
          }
          {
            <button type='button' className='action-button edit-component' onClick={() => onSelectEdit(element)}>
              {/* Edit {element.type} */}
            </button>
          }
        </div>
      </div>
    )
  }
}
