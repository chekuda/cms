import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ToolTip from 'app/common/ToolTip/ToolTip'

import './TextArea.scss'

const TextArea = ({
  name,
  value,
  rows,
  cols,
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
    <textarea
      rows={ rows }
      cols={ cols }
      className={
        `${className} text-textarea ${toolTipText ? 'with-tooltip' : ''} ${value && errors && errors[name] ? 'error' : ''}`
      }
      value={ value }
      name={ name }
      onChange={ onChange }
      disabled={ disabled }
      placeholder={ placeholder }
    ></textarea>
    {
      value && errors && errors[name] &&
      <span className="error-message">
        { errors[name] }
      </span>
    }
    { toolTipText && <ToolTip>{toolTipText}</ToolTip> }
  </Fragment>
)

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  toolTipText: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.object,
  cols: PropTypes.string,
  rows: PropTypes.string
}

export default TextArea
