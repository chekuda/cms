import React, { Component } from 'react'
import './Page.scss'

import BrandLogo from 'app/components/BrandLogo/BrandLogo'
import PageTitle from 'app/components/PageTitle/PageTitle'


export default class Page extends Component {
  render() {
    return (
      <div className='monty-content-builder'>
        <div className='container'>
          <div className='row top-title-section'>
            <div className='col-10 top-title'>
              <PageTitle title={ this.props.title } />
            </div>
            <BrandLogo brand={ this.props.brand} />
          </div>
          { this.props.children }
        </div>
      </div>
    )
  }
}
