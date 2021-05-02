import React from 'react';

import Button from 'components/common/Button';
import CardsContainer from 'components/common/cards/CardsContainer';
import { EVENTS } from 'mockData';

import './events.scss'

const EventsCard = ( props ) => {
    const {
        date,
        title,
        subtitle,
        location
    } = props
    const [month, day] = date.split(' ')
    return <div className = 'acme-cards__container--main'>
            <div className = 'acme-cards__top-fold' />
            <div className = 'acme-cards__container--date'>
                <p className = 'acme-cards__month'>{month}</p>
                <h2 className = 'acme-cards__day'>{day}</h2>
            </div>
            <div className = 'acme-cards__container--content'>
                <h3 className = 'acme-cards__title'>{title}</h3>
                <p className = 'acme-cards__subtitle'>{subtitle}</p>
            </div>
            <Button text = 'Get More Insight' className = 'acme-cards__button' variant = 'outlined' />
            <div className = 'acme-cards__container--location'>
              <h4 className = 'acme-cards__location'>{location}</h4>
            </div>
           </div>
}

function Events( props ) {
    const { cards, ...otherProps } = EVENTS 
    return <CardsContainer {...otherProps} > 
            {cards.map( card => <EventsCard key = {card.id} {...card} />)}
           </CardsContainer>
}

export default Events;