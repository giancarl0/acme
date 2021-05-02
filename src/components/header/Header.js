import React from 'react';

import AcmeLogo from 'assets/acme-logo.png'
import SiteTitle from 'assets/site-title.png'
import HeaderNavButtons from 'components/header/HeaderNavButtons';

import './header.scss'

function Header() {
    return (
        <div className = 'acme-header'>
            <img src = {AcmeLogo} href = '#' alt = 'acme-logo' className = 'acme-header__logo' />
            <img src = {SiteTitle} href = '#' alt = 'site-title' className = 'acme-header__site-title' />
            <HeaderNavButtons />
        </div>
    )
}

export default Header;