import React from 'react'
import PropTypes from 'prop-types'

import DropDownInput from 'app/common/DropDownInput/DropDownInput'
import './AssetsInput.scss'

const IMAGE_REGEX = /(url\(")|("\))|({wcsUrl})/g

const AssetPreview = (value, options, pageAssetsPrefix) => {
  const currentValue = (options.find(opt => opt.value === value) || {}).extension

  if(currentValue === 'mp4') {
    return (
      <video className="assets-preview" src={`${pageAssetsPrefix}${value.replace(IMAGE_REGEX, '')}`} type="video/mp4" />
    )
  }
  return (
    <img
      className="assets-preview"
      src={`${pageAssetsPrefix}${value.replace(IMAGE_REGEX, '')}`}
    />
  )
}

const AssetsInput = ({
  label,
  name,
  className = '',
  options = [],
  value,
  disabled = false,
  onChange,
  pageAssetsPrefix,
  toolTipText
}) => (
  <div className="assets-input">
    <DropDownInput
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      options={options}
      toolTipText={toolTipText}
      className={className}
      disabled={disabled}
    />
    {
      value && AssetPreview(value, options, pageAssetsPrefix)
    }
  </div>
)

AssetsInput.defaultTypes = {
  name: '',
  options: [],
  value: ''
}

AssetsInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  pageAssetsPrefix: PropTypes.string.isRequired,
  toolTipText: PropTypes.string,
  disabled: PropTypes.bool
}

export default AssetsInput
