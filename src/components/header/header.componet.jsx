import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';

const Header =  () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />

        </Link> 
        <div className='options'>
            <Link className='option' t0='/shop'>
                SHOP
            </Link>
            <Link className='option' t0='/shop'>
                CONTACT
            </Link>

        </div>

    </div>
)

export default Header;