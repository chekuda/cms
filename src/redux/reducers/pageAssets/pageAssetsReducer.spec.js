import pageAssetsReducer from './pageAssetsReducer'
import { pullPageAssets, getImageFiles } from './pageAssetsReducer'

describe('pageAssetsReducer', () => {
  const initialState = []
  const mockPageAssets = {
    relativePath: [
      'apples/oranges/bananas.jpg',
      'foo/bar.jpg',
      'stuff/morestuff/evenmorestuff.jpg'
    ]
  }

  describe('given no arguments', () => {
    it('returns the initial state', () => {
      expect(pageAssetsReducer()).toEqual(initialState)
    })
  })

  describe('given pullPageAssets action with a valid object path argument', () => {
    it('returns a list of the page assets at that path', () => {
      expect(pageAssetsReducer(initialState, pullPageAssets(mockPageAssets.relativePath))).toBe(mockPageAssets.relativePath)
    })
  })
})

describe('getImageFiles', () => {
  describe('given the application state', () => {
    it('returns the image file prefix', () => {
      const state = [
        {
          name: 'apples',
          relativePath: 'apples.jpg',
          stuff: 'stuff'
        },
        {
          name: 'oranges',
          relativePath: 'oranges.jpg',
          stuff: 'stuff'
        },
        {
          name: 'bananas',
          relativePath: 'bananas.jpg',
          stuff: 'stuff'
        }
      ]

      expect(getImageFiles(state)).toEqual(state)
    })
  })
})
