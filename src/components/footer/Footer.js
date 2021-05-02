import React from 'react';

import Twitter from 'assets/twitter.png'
import Facebook from 'assets/facebook.png'
import Linkedin from 'assets/linkedin.png'
import Email from 'assets/email.png'


import './footer.scss'

function Footer() {
    return <div className = 'acme-footer'>
            <div className = 'acme-footer__contact'>
                {<>{'Call us at '}<a href="tel:+111-222-3333">+111-222-3333</a><br/>{'for more information'}</>}
            </div>
            <div className = 'acme-footer__social'>
                Social Share
                {/* No svg :( */}
                <img src = {Twitter} alt = 'Twitter' className = 'acme-footer__img' />
                <img src = {Facebook} alt = 'Facebook' className = 'acme-footer__img' />
                <img src = {Linkedin} alt = 'Linkedin' className = 'acme-footer__img' />
                <img src = {Email} alt = 'Email' className = 'acme-footer__img' />
            </div>
           </div>
}

export default Footer;