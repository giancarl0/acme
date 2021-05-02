import React from 'react';
import Header from 'components/common/cards/Header';
import Cards from 'components/common/cards/Cards';

import './cards.scss'

function CardsContainer( props ) {
    const {
        title,
        subtitle,
        cards,
        children,
        className
    } = props;

    return (
        <div className = {`acme-cards-container ${className}`}>
            <Header title = {title} subtitle = {subtitle}  />
            <div className = 'acme-cards'>
                {children ? 
                children :
                <Cards cards = {cards}/>
                }
            </div>
        </div>
    )
}

export default CardsContainer;