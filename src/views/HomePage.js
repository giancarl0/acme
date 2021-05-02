import React from 'react';

import Button from 'components/common/Button'
import Header from 'components/header/Header';
import Banner from 'components/common/banner/Banner';
import { BANNER_MAIN, BANNER_WHOWEARE } from 'mockData';

import './homepage.scss'
import Insights from 'components/insights/Insights';
import Events from 'components/events/Events';
import Footer from 'components/footer/Footer';

function HomePage() {
    return (
        <div>
            <Header />
            <Banner {...BANNER_MAIN} textLocation = 'left'  />
            <Insights />
            <Banner className = 'acme-banner--fractal' {...BANNER_WHOWEARE} actions = {<Button text = 'Contact Us' variant = 'outlined' />} />
            <Events />
            <Footer />
        </div>
    )
}

export default HomePage;