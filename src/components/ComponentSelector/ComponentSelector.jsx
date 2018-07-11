import React, { Component } from 'react'

import './ComponentSelector.scss'

export default class ComponentPreview extends Component {
  render() {
    const { onSelectComponent, componentList } = this.props

    return (
      <div className='selector-container'>
        {
          (componentList || []).map((ele, index) => {
            return (
              <button key={index} type='button' onClick={() => onSelectComponent(ele)}>{ele}</button>
            )
          })
        }
      </div>
    )
  }
}
