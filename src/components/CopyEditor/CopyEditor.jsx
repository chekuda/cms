import React from 'react'
import PropTypes from 'prop-types'
import PageTitle from 'app/components/PageTitle/PageTitle'
// import FroalaConfigured from 'app/components/FroalaConfigured/FroalaConfigured'
import TextInput from 'app/components/common/TextInput/TextInput'
import BorderInput from 'app/components/common/BorderInput/BorderInput'
import BoxModelInput from 'app/components/common/BoxModelInput/BoxModelInput'
import CheckboxInput from 'app/components/common/CheckboxInput/CheckboxInput'

import './CopyEditor.scss'

const Copy = ({ value, onChange, id }) => {
  return (
    <div className="col-12 cms-copy-component">
      <form>
        <div className="row cms-copy-title">
          <div className='col-12'>
            <PageTitle title='Copy Component Settings'/>
          </div>
        </div>
        {/* <div className="row cms-copy-settings">
          <div className='col-12 cms-copy-editor'>
            <FroalaConfigured
              name={`${name}.options.content`}
              value={ value.options.content }
              onChange={ onChange }
            />
          </div>
        </div> */}
        <div className="row cms-copy-settings">
          <div className='col-12 cms-copy-modal-boxes'>
            <h3>Styling</h3>
            <div className="row">
              <div className='col-4 box-model'>
                <BoxModelInput
                  label='Margin'
                  name='options.css'
                  inputNames={[
                    'marginTop',
                    'marginRight',
                    'marginBottom',
                    'marginLeft'
                  ]}
                  inputPlaceholders={Array.from({ length: 4 }).fill('0px')}
                  value={ value.options.css }
                  onChange={ ({ target }) => onChange(target, id) }
                />
              </div>
              <div className='col-4 box-model'>
                <BoxModelInput
                  label='Padding'
                  name='options.css'
                  inputNames={[
                    'paddingTop',
                    'paddingRight',
                    'paddingBottom',
                    'paddingLeft'
                  ]}
                  inputPlaceholders={Array.from({ length: 4 }).fill('0px')}
                  value={ value.options.css }
                  onChange={ ({ target }) => onChange(target, id) }
                />
              </div>
              <div className='col-4'>
                <CheckboxInput
                  label='Hide on Desktop'
                  name='options.classes.0.hideOnDesktop'
                  value={ value.options.classes[0].hideOnDesktop }
                  onChange={ ({ target }) => onChange(target, id) }
                />
                <CheckboxInput
                  label='Hide on Tablet'
                  name='options.classes.0.hideOnTablet'
                  value={ value.options.classes[0].hideOnTablet }
                  onChange={ ({ target }) => onChange(target, id) }
                />
                <CheckboxInput
                  label='Hide on Mobile'
                  name='options.classes.0.hideOnMobile'
                  value={ value.options.classes[0].hideOnMobile }
                  onChange={ ({ target }) => onChange(target, id) }
                />
              </div>
              <BorderInput
                label='Border'
                name='options.css'
                value={ value.options.css }
                onChange={ ({ target }) => onChange(target, id) }
            />
            </div>
            <div className="row cms-copy-settings">
              <div className="col-4 selector-id">
                <label>ID</label>
                <TextInput
                  name='options.selectorId'
                  value={ value.options.selectorId }
                  onChange={ ({ target }) => onChange(target, id) }
                  toolTipText='Enter the name of your ID here for specific CSS targeting and hooking on anchor links'
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

Copy.propTypes = {
  value: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Copy
