import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import { pullPageAssets } from 'app/redux/reducers/pageAssets/pageAssetsReducer'
import { pullPageAssetsPrefix, getPageAssetsPrefix } from 'app/redux/reducers/pageAssets/pageAssetsPrefixReducer'

class PageAssetsContainer extends Component {
  componentDidMount() {
    const { pullPageAssetsPrefix, pullPageAssets } = this.props
    const defaultOption = [{ name: 'None', relativePath: '' }]

    if (window.opener) {
      pullPageAssetsPrefix(window.opener.pageAssetsURLPrefix)

      const pageAssets = window.opener.pageAssets[3].children.list.source

      // set path to empty string if the user leaves the default option selected
      pullPageAssets(defaultOption.concat(pageAssets.map(asset => ({
        extension: asset.extension,
        name: asset.name,
        relativePath: `{wcsUrl}${asset.relativePath}` || ''
      }))))
    }

    /* eslint-disable */
    if (NODE_ENV === 'development') {
    /* eslint-enable */
      const mockPrefix = `${window.location.origin}/mocks/images/`

      pullPageAssetsPrefix(mockPrefix)

      const pageAssets = [
        {
          extension: 'jpeg',
          name: 'image 1',
          relativePath: '{wcsUrl}image-1.jpeg'
        },
        {
          extension: 'jpeg',
          name: 'image 2',
          relativePath: '{wcsUrl}image-2.jpeg'
        },
        {
          extension: 'jpeg',
          name: 'image 3',
          relativePath: '{wcsUrl}image-3.jpeg'
        },
        {
          extension: 'jpeg',
          name: 'image 4',
          relativePath: '{wcsUrl}image-4.jpeg'
        },
        {
          extension: 'jpeg',
          name: 'image 5',
          relativePath: '{wcsUrl}image-5.jpeg'
        },
        {
          extension: 'mp4',
          name: 'video',
          relativePath: '{wcsUrl}sample.mp4'
        },
        {
          extension: 'mp4',
          name: 'video second',
          relativePath: '{wcsUrl}sample_second.mp4'
        }
      ]

      // set path to empty string if the user leaves the default option selected
      pullPageAssets(defaultOption.concat(pageAssets.map(asset => ({
        extension: asset.extension,
        name: asset.name,
        relativePath: asset.relativePath ? asset.relativePath : ''
      }))))
    }
  }

  render() {
    return null
  }
}

PageAssetsContainer.propTypes = {
  pullPageAssetsPrefix: PropTypes.func.isRequired,
  pullPageAssets: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  pageAssetsPrefix: getPageAssetsPrefix(state.combinedPageAssetsReducer.pageAssetsPrefixReducer)
})

const mapDispatchToProps = dispatch => bindActionCreators({ pullPageAssets, pullPageAssetsPrefix }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PageAssetsContainer)
