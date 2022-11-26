import React, { Component } from 'react'
import HeaderRCC from './HeaderRCC'
import SideBarRCC from './SideBarRCC'
import ContentRCC from './ContentRCC'
import FooterRCC from './FooterRCC'

export default class 
 extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-12 p-0">
              <HeaderRCC />
            </div>
        </div>
        <div className="row">
          <div className="col-4 p-0">
            <SideBarRCC />
          </div>
          <div className="col-8 p-0">
            <ContentRCC />
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <FooterRCC />
          </div>
        </div>
      </div>
    )
  }
}
