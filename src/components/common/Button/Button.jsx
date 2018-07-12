import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import 'app/common/Button/Button.scss'

export default class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }

  render() {
    const { className, icon, onClick, disabled, children } = this.props
    return (
      <button
        type="button"
        className={`${className ? className : ''}`}
        onClick={onClick}
        disabled={disabled}
      >
        {
          icon && <i className={`fa fa-${icon}`} aria-hidden="true"/>
        }
        {children}
      </button>
    )
  }
}
