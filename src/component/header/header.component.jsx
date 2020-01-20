import React from 'react'
import './header.style.scss'

import {Link} from 'react-router-dom'
//(1)this is how to make link from 'react-router-dom'

import {ReactComponent as Logo} from '../../assets/crown.svg'
//(2)make new folder called "assets" and add the svg-file in it
//(3)use line 7 => this is a special syntax in React for improving SVG
const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      <Link className='option' to='/signin'>
        SIGN IN
      </Link>
    </div>
  </div>
)

export default Header;
// now we will import this in App.js ////////////