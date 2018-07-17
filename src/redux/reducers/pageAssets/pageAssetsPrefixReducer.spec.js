import pageAssetsPrefixReducer from './pageAssetsPrefixReducer'
import { pullPageAssetsPrefix, getPageAssetsPrefix } from './pageAssetsPrefixReducer'

describe('pageAssetsPrefixReducer', () => {
  const initialState = ''
  const mockPageAssets = {
    prefix: 'https://myawesomepageassetsserver.arcadia.co.uk/json'
  }

  describe('given no arguments', () => {
    it('returns the initial state', () => {
      expect(pageAssetsPrefixReducer()).toEqual(initialState)
    })
  })

  describe('given pullPageAssets action with a valid object path argument', () => {
    it('returns a list of the page assets at that path', () => {
      expect(pageAssetsPrefixReducer(initialState, pullPageAssetsPrefix(mockPageAssets.prefix))).toBe(mockPageAssets.prefix)
    })
  })
})

describe('getPageAssetsPrefix', () => {
  describe('given the application state', () => {
    it('returns the pageAssetsPrefix', () => {
      const state = 'https://myawesomepageassetsserver.arcadia.co.uk/json'
      expect(getPageAssetsPrefix(state)).toEqual(state)
    })
  })
})
