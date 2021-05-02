import React from 'react';

import './banner.scss'

function Banner( props ) {
    const { textLocation,
        header,
        subHeader,
        className,
        actions } = props

    return (
        <div className = {`acme-banner ${className}`}>
            <div className = {`acme-banner-contents ${textLocation ? `acme-banner-contents--${textLocation}` : ''}`}>
            <div>
                <h5 className = 'acme-banner-contents__header' >{header}</h5>
                <p className = 'acme-banner-contents__subheader' >
                    {subHeader}
                </p>
                {actions && actions}
            </div>
            </div>
        </div>
    )
}

export default Banner;