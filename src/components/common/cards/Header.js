import React from 'react';

import './cards.scss'

function CardsHeader( props ) {
    return (
        <div className = 'acme-cards-header'>
            <h5 className = 'acme-cards-header__title'>
                { props.title }
            </h5>
            <p className = 'acme-cards-header__subtitle'>
                { props.subtitle }
            </p>
        </div>
    )
}

export default CardsHeader;