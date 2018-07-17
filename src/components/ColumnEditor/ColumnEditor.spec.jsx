import React from 'react'
import { mount } from 'enzyme'
import * as SpecHelpers from 'app/helpers/specHelpers'

import { columnInitialState } from 'app/reducers/initialState'
import ColumnEditor from './ColumnEditor'

expect.extend(SpecHelpers)

describe('@ColumnEditor', () => {
  const mockPageAssets = SpecHelpers.mockPageAssets()

  it('has fields for a Column', () => {
    const value = columnInitialState()
    const name = 'rootPath'

    // backgroundSize, backgroundPosition and backgroundRepeat are ignored
    // delete value.options.css.backgroundSize
    delete value.options.css.backgroundPosition
    delete value.options.css.backgroundRepeat

    const handleChange = jest.fn()

    const columnEditor = mount(
      <ColumnEditor
        {...mockPageAssets}
        name={name}
        value={value}
        onChange={handleChange}
      />
    )

    expect(columnEditor).toHaveInputsFor({ name, value, handleChange })
  })
})
