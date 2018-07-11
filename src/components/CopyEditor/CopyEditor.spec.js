import React from 'react'
import { mount } from 'enzyme'
import * as SpecHelpers from 'app/helpers/specHelpers'

import { copyInitialState } from 'app/redux/initialState'
import CopyEditor from './CopyEditor'

expect.extend(SpecHelpers)

describe('@CopyEditor', () => {
  const mockPageAssets = SpecHelpers.mockPageAssets()

  it('has fields for Copy Component', () => {
    const value = copyInitialState()
    const handleChange = jest.fn()
    const name = 'rootPath'
    const copyEditor = mount(
      <CopyEditor
        {...mockPageAssets}
        name={name}
        value={value}
        onChange={handleChange}
      />
    )

    expect(copyEditor).toHaveInputsFor({ name, value, handleChange })
  })
})
