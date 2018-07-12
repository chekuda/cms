import React from 'react'
import PropTypes from 'prop-types'

import TextInput from 'app/components/common/TextInput/TextInput'

import './BoxModelInput.scss'

const BoxModelInput = ({
  label,
  name,
  inputNames,
  inputPlaceholders = [],
  value,
  onChange
}) => (
  <div className="box-model-input">
    <legend>{label}</legend>
    {
      inputNames.map((pos, index) => (
        <TextInput
          key={index}
          label={pos}
          labelClassName='sr-only'
          name={`${name}.${inputNames[index]}`}
          value={value[`${inputNames[index]}`]}
          placeholder={inputPlaceholders[index] || ''}
          onChange={onChange}
        />
      ))
    }
  </div>
)

BoxModelInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputNames: PropTypes.array.isRequired,
  inputPlaceholders: PropTypes.array,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default BoxModelInput
