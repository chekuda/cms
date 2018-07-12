import React from 'react'
import PropTypes from 'prop-types'

import BoxModelInput from 'app/components/common/BoxModelInput/BoxModelInput'
import ColorInput from 'app/components/common/ColorInput/ColorInput'
import DropDownInput from 'app/components/common/DropDownInput/DropDownInput'

import './BorderInput.scss'

const BorderInput = ({ label, name, value, onChange }) =>
  <section className="border-input">
    <div className="col-4">
      <div className='form-group'>
        <fieldset className={label}>
          <BoxModelInput
            label='Border'
            name={name}
            inputNames={[
              'borderTopWidth',
              'borderRightWidth',
              'borderBottomWidth',
              'borderLeftWidth'
            ]}
            inputPlaceholders={Array.from({ length: 4 }).fill('0px')}
            value={value}
            onChange={onChange}
          />
        </fieldset>
      </div>
    </div>
    <div className="col-4">
      <ColorInput
        label='Border Colour'
        name={`${name}.borderColor`}
        value={ value['borderColor'] }
        onChange={ onChange }
        errors={ value['__errors'] }
      />
    </div>
    <div className="col-4">
      <DropDownInput
        label="Border Style"
        options={['None', 'Dashed', 'Dotted', 'Solid'].map(opt => ({
          display: opt,
          value: opt.toLowerCase()
        }))}
        value={value['borderStyle']}
        name={`${name}.borderStyle`}
        onChange={onChange}
      />
    </div>
  </section>

BorderInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default BorderInput

