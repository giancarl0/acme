import React from 'react';

import './cards.scss'

const Card = ( props ) => {
    return <div className = {`acme-cards__card ${props.variant === 'contrast' ? 'acme-cards__card--contrast' :''}`}>
            <div className = 'acme-cards__img' style = {{backgroundImage: `url(${props.img})`}} />
            <h2 className = 'acme-cards__title'>
                {props.text}
            </h2>
           </div>
}

function Cards( props ) {
    const {
        cards = []
    } = props
    return <>
            {cards.map( (card) => <Card key = {card.id} {...card} />)}
           </>
}

export default Cards;