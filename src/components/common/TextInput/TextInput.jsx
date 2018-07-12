import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ToolTip from 'app/components/common/ToolTip/ToolTip'

import './TextInput.scss'

const TextInput = ({
  name,
  value,
  errors,
  onChange,
  label,
  toolTipText,
  className = '',
  labelClassName = '',
  placeholder = '',
  disabled = false
}) => (
  <Fragment>
    {
      label &&
        <label className={labelClassName}>
          { label }
        </label>
    }
    <input
      type='text'
      className={
        `${className} text-input ${toolTipText ? 'with-tooltip' : ''} ${value && errors && errors[name] ? 'error' : ''}`
      }
      value={ value }
      name={ name }
      onChange={ onChange }
      disabled={disabled}
      placeholder={placeholder}
    />
    {
      value !== '' && errors && errors[name] &&
      <span className="error-message">
        { errors[name] }
      </span>
    }
    { toolTipText && <ToolTip>{toolTipText}</ToolTip> }
  </Fragment>
)

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  toolTipText: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.object
}

export default TextInput
