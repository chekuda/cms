import React from 'react'
import PropTypes from 'prop-types'

import './ToolTip.scss'

const ToolTip = ({ children }) => {
  return (
    <div className='tip-wrapper'>
      <span className='question-mark'>?</span>
        <div className='answer'>{children}</div>
    </div>
  )
}

ToolTip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ])
}
export default ToolTip
