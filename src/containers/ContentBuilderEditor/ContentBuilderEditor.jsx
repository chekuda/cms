import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CopyEditor from 'app/components/CopyEditor/CopyEditor'
import ColumnEditor from 'app/components/ColumnEditor/ColumnEditor'
import { applyChange, removeEditor } from 'app/redux/reducers/editor/editor'
import { saveEditorChanges } from 'app/redux/reducers/component/component'

export class ContentBuilderEditor extends Component {
  constructor(props) {
    super(props)
    this.listOfComponents = {
      copy: CopyEditor,
      column: ColumnEditor
    }
  }
  getCurrentEditor() {
    const { editors, currentId } = this.props.editor

    return editors.find(element => element.id === currentId)
  }

  handleChange = ({ name, value }, id) => {
    const { applyChange } = this.props

    applyChange(name, value, id)
  }

  saveEditorChanges = (currentEditor) => {
    const { removeEditor, saveEditorChanges } = this.props

    saveEditorChanges(currentEditor)
    removeEditor(undefined, currentEditor.id, true)
  }

  render() {
    const { currentId } = this.props.editor

    if(!currentId) {
      return null
    }

    const currentEditor = this.getCurrentEditor()
    const EditorType = this.listOfComponents[currentEditor.type]
    return (
      <div className='editor'>
        <EditorType
          id={currentId}
          value={currentEditor}
          onChange={this.handleChange}
          pageAssets={this.props.pageAssets}
          pageAssetsPrefix={this.props.pageAssetsPrefix}
        />
        <button type='button' onClick={() => this.saveEditorChanges(currentEditor)}>Save</button>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    editor: state.editor,
    pageAssets: state.combinedPageAssetsReducer.pageAssetsReducer,
    pageAssetsPrefix: state.combinedPageAssetsReducer.pageAssetsPrefixReducer
  }),
  (dispatch) => bindActionCreators({ applyChange, removeEditor, saveEditorChanges }, dispatch)
)(ContentBuilderEditor)
