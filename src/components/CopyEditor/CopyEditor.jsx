import React from 'react'
import PageTitle from 'app/components/PageTitle/PageTitle'

import './CopyEditor.scss'

const Copy = () => {
  return (
    <div className="col-12 cms-copy-component">
        <div className="row cms-copy-title">
          <div className='col-12'>
            <PageTitle title='Copy Component Settings'/>
          </div>
        </div>
    </div>
  )
}

export default Copy
