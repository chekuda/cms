import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './DeviceIcon.scss'

export default class DeviceIcon extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['mobile', 'tablet', 'laptop', 'desktop']).isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  render() {
    const { content, type } = this.props
    return (
      <div className="device-icon">
        <div className="device-icon-image">
          <i className={`fa fa-${type}`}/>
        </div>
        <div className="device-icon-text">
          <div>{type}</div>
          <div>{content}</div>
        </div>
      </div>
    )
  }
}
