import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ToolTip from 'app/common/ToolTip/ToolTip'

import './TogglerInput.scss'

const TogglerInput = ({
  options = [],
  name,
  className = '',
  disabled = false,
  value,
  onChange,
  label,
  toolTipText
}) =>
  <Fragment>
    <div className={`toggler-input ${className}`}>
      {label && <label className='toggler-input-label'>{ label }</label> }
      {
        options.map((option) => {
          let optionLabel = option
          if (Array.isArray(option)) {
            [optionLabel, option] = option
          }

          return (
            <label className="toggler-input-option" key={ option }>
              <input
                type="radio"
                value={ option }
                name={ name }
                checked={ option === value }
                onChange={ onChange }
                disabled={disabled}
              />
              <span className="option-label">{ optionLabel }</span>
            </label>
          )
        })
      }
    </div>
    { toolTipText && <ToolTip>{toolTipText}</ToolTip> }
  </Fragment>

TogglerInput.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  toolTipText: PropTypes.string,
  disabled: PropTypes.bool
}

export default TogglerInput
