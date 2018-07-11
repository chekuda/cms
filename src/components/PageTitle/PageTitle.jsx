import React from 'react'
import PropTypes from 'prop-types'

const PageTitle = ({ title, children }) => (
  <h1>{title}{children}</h1>
)

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object
}

export default PageTitle
