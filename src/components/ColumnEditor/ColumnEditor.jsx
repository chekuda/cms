import React from 'react'
import PropTypes from 'prop-types'
import TextInput from 'app/components/common/TextInput/TextInput'
import DropDownInput from 'app/components/common/DropDownInput/DropDownInput'
import CheckboxInput from 'app/components/common/CheckboxInput/CheckboxInput'
import ColorInput from 'app/components/common/ColorInput/ColorInput'
import BoxModelInput from 'app/components/common/BoxModelInput/BoxModelInput'
import BorderInput from 'app/components/common/BorderInput/BorderInput'
import AssetsInput from 'app/components/common/AssetsInput/AssetsInput'

import './ColumnEditor.scss'

export const ColumnEditor = ({
  id,
  value,
  onChange,
  pageAssets,
  pageAssetsPrefix
}) =>
  <div className='column-editor'>
    <form className='row'>
      <div className='col-12'>
        <h2>Edit Column</h2>
      </div>
      <div className='col-4'>
        <DropDownInput
          label='Column Offset'
          options={Array.from({ length: 12 }, (_, i) => ({
            display: `${i}`,
            value: i
          }))}
          name='options.columnOffset'
          value={value.options.columnOffset}
          onChange={({ target }) => onChange(target, id)}
        />
      </div>
      <div className='col-4'>
        <DropDownInput
          label='Column Span'
          options={Array.from({ length: 13 }, (_, i) => ({
            display: i === 0 ? 'flex' : `${i}`,
            value: i === 0 ? 'unset' : `${i}`
          }))
          }
          name='options.columnSpan'
          value={value.options.columnSpan}
          onChange={({ target }) => onChange(target, id)}
        />
      </div>
      <div className='col-4'>
        <ColorInput
          label='Background Colour'
          name='options.css.backgroundColor'
          value={value.options.css.backgroundColor}
          errors={value.options.css.__errors}
          onChange={({ target }) => onChange(target, id)}
        />
      </div>
      <div className='col-4'>
      <AssetsInput
          label='Background Image'
          options={pageAssets.reduce((acc, asset) => (/(jpe?g)|(png)|(gif)|(svg)/).test(asset.extension) || asset.extension === undefined ? ([...acc, {
            display: asset.name,
            value: asset.relativePath.replace(/(url\(")|("\))/g, ''),
            extension: asset.extension
          }]) : acc, []) }
          pageAssetsPrefix={pageAssetsPrefix}
          name='options.css.backgroundImage'
          value={value.options.css.backgroundImage.replace(/(url\(")|("\))/g, '')}
          onChange={({ target }) => onChange({
            name: target.name,
            value: `url("${target.value}")`
          }, id)}
        />
      </div>
      <div className='col-4'>
        <TextInput
          name='options.css.backgroundSize'
          value={value.options.css.backgroundSize}
          onChange={({ target }) => onChange(target, id)}
          label='Background Image Size'
          labelClassName='image-size-input'
        />
      </div>
      <div className='col-4'>
        <BoxModelInput
          label='Padding'
          name='options.css'
          inputNames={[
            'paddingTop',
            'paddingRight',
            'paddingBottom',
            'paddingLeft'
          ]}
          inputPlaceholders={['0px', '0px', '0px', '0px']}
          value={value.options.css}
          onChange={({ target }) => onChange(target, id)}
        />
      </div>
      <BorderInput
        label='Border'
        name='options.css'
        value={value.options.css}
        onChange={({ target }) => onChange(target, id)}
      />
      <div className='col-4'>
        <CheckboxInput
          label='Hide on Desktop'
          name='options.classes.0.hideOnDesktop'
          value={value.options.classes[0].hideOnDesktop}
          onChange={({ target }) => onChange(target, id)}
        />
        <CheckboxInput
          label='Hide on Tablet'
          name='options.classes.0.hideOnTablet'
          value={value.options.classes[0].hideOnTablet}
          onChange={({ target }) => onChange(target, id)}
        />
        <CheckboxInput
          label='Hide on Mobile'
          name='options.classes.0.hideOnMobile'
          value={value.options.classes[0].hideOnMobile}
          onChange={({ target }) => onChange(target, id)}
        />
      </div>
    </form>
  </div>

ColumnEditor.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  pageAssets: PropTypes.array.isRequired,
  pageAssetsPrefix: PropTypes.string.isRequired
}

export default ColumnEditor
