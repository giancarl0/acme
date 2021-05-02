import React from 'react';

import Button from 'components/common/Button';
import './header.scss'

function HeaderNavButtons() {
    return (
        <div className = 'acme-header__nav-buttons'>
            <Button text = {'Home'} />
            <Button text = {'About Us'} />
            <Button text = {'Insights'} />
            <Button text = {'Events'} />
            <Button text = {'Contact Us'} />
        </div>
    )
}

export default HeaderNavButtons;