import React from 'react'
import PropTypes from 'prop-types'

import ToolTip from 'app/components/common/ToolTip/ToolTip'

import './DropDownInput.scss'

const DropDownInput = ({
  label,
  options = [],
  value,
  name,
  disabled = false,
  className = '',
  onChange,
  toolTipText }) => {
  return (
    <div className='form-group'>
      {label && <label className={label}>{label}</label>}
      {
        options.length > 0 &&
          <select
            value={value}
            name={name}
            onChange={onChange}
            disabled={disabled}
            className={`drop-down-input ${toolTipText ? 'with-tooltip' : ''} ${className}`}>
            {
              options.map(option => (
                <option
                  key={`drop-down-input-${option.display}`}
                  value={option.value}
                >
                  {option.display}
                </option>
              ))
            }
          </select>
      }
      {toolTipText && <ToolTip>{toolTipText}</ToolTip>}
    </div>
  )
}

DropDownInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  toolTipText: PropTypes.string,
  disabled: PropTypes.bool
}

export default DropDownInput
