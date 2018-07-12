import React from 'react'

import Page from 'app/components/Page/Page'
import ContentBuilderPreviewer from 'app/containers/ContentBuilderPreviewer/ContentBuilderPreviewer'
import ContentBuilderEditor from 'app/containers/ContentBuilderEditor/ContentBuilderEditor'

const ContentBuilderPage = () => {
  return (
    <Page title="Monty Content Builder">
      <ContentBuilderPreviewer/>
      <ContentBuilderEditor />
    </Page>
  )
}

export default ContentBuilderPage
