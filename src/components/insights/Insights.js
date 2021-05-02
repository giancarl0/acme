import React from 'react';

import CardsContainer from 'components/common/cards/CardsContainer';
import { CARDS } from 'mockData';

import './insights.scss'

function Insights() {
    return <CardsContainer {...CARDS} className = 'acme-cards-container--insights'  />
}

export default Insights;