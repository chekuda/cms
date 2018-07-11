import React from 'react'
import PropTypes from 'prop-types'

import './BrandLogo.scss'

const LogoImage = () => {
  return (<img src={'arcadiaLogo'} />)
}

const BrandLogo = ({ brand }) => (
  <div className="col-2 top-logo">
    { LogoImage(brand) }
  </div>
)

LogoImage.propTypes = {
  brand: PropTypes.string
}

BrandLogo.propTypes = {
  brand: PropTypes.string
}

export default BrandLogo
