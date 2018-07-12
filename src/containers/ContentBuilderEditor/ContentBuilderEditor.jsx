import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

export class ContentBuilderEditor extends Component {
  render() {
    const { editor } = this.props

    if(!editor.currentId) {
      return null
    }

    return (
      <div className='editor'>
        { editor.currentId }
      </div>
    )
  }
}

export default connect(
  (state) => ({
    editor: state.editor
  }),
  undefined
)(ContentBuilderEditor)
