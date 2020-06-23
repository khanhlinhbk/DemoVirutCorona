import React, {useState} from 'react';
import './header.css';
import Logo from './images/logo.jpg'
console.log(Logo)
export default function Header (){
    return(
        <div className="header">
            <img src={Logo} width="64px" height="64px" />
            <div className="header-title">News VR Corona</div>
        </div>
    )

}
