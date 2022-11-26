import React, { Component } from 'react'
// cách 1: import đường dẫn css -> ảnh hưởng trên toàn bộ ứng dụng
// import './Style.css'

// cách 2: import module css
import style from './Style.module.css'

// cách 3: import css cho từng thẻ


export default class StyleComponent extends Component {
  render() {

    let status = false;

    let classStyle = status ? 'text-green' : 'text-red';

    return (
        <div>
            <div>StyleComponent</div>
            <p className="text-red">Hello Cybersoft</p>
            <p className={`p-5 ${style[classStyle]} bg-dark`}>Hello Cybersoft</p>
            <p style={{backgroundColor:'#000', color:'blue', padding:'15px'}}>Hello world!</p>
        </div>
    )
  }
}
