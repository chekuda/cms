import React from 'react'
import PropTypes from 'prop-types'

import TextInput from 'app/components/common/TextInput/TextInput'

import './ColorInput.scss'

export const validateColorValue = (name, value) => {
  if(value[0] === '#') {
    if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {
      return ({ [name]: `This value is not valid please ensure the value is correct.` })
    }
  }

  return ({ [name]: undefined })
}

const ColorInput = ({
  label,
  name,
  value,
  errors,
  onChange,
  className = '',
  disabled = false
}) => (
  <div className={`color-input ${errors && errors[name] ? 'error' : '' }`}>
    <div className='form-group'>
      <TextInput
        label={label}
        value={value}
        errors={errors}
        name={name}
        className={className}
        disabled={disabled}
        onChange={(e) => onChange(e, validateColorValue(name, e.target.value))}
        placeholder='#FFF'
      />
      <div
        className='color-input-swatch'
        style={{ backgroundColor: `${value}` }}
      ></div>
    </div>
  </div>
)

ColorInput.defaultPropTypes = {
  name: '',
  value: '',
  onChange: () => {}
}

ColorInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
}

export default ColorInput
