import React from 'react'
import PropTypes from 'prop-types'
import './CheckboxInput.scss'

const CheckboxInput = ({
  name,
  label,
  value,
  onChange,
  className = '',
  disabled = false
}) => (
  <div className="checkbox-input">
    <div className="form-group">
      {label && <label>{label}</label>}
      <input type="checkbox"
        name={name}
        className={className}
        value={value}
        checked={value}
        disabled={disabled}
        onChange={(event) => onChange({
          target: {
            name: event.target.name,
            value: event.target.checked
          }
        })}
      />
    </div>
  </div>
)

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onChange: PropTypes.func.isRequired
}

export default CheckboxInput
