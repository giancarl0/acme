import React from 'react';

import './button.scss'

const ButtonRenderer = ( props ) => {
    const { link, text, component, className, ...otherProps } = props
    switch( component ) {
        case 'link': 
            return <a href = {link} className = {`acme-button ${className}`}  {...otherProps} >{text}</a>
        default:
            return <button className = {`acme-button ${className}`}  {...otherProps}>{text}</button>
    }
}

const getButtonVariant = ( variant ) => {
    const buttonClasses = {
        'outlined' : 'acme-button--outlined'
    }
    if( buttonClasses.hasOwnProperty(variant) ) return buttonClasses[variant]
    return ''
}



function Header( props ) {
    const {
        text,
        link,
        onClick,
        variant,
        //color,
        component,
        //fullWidth,
        className
    } = props

    return <ButtonRenderer text = {text} 
                           onClick = {(event) => onClick && onClick(event)} 
                           link = {link} 
                           component = {component}
                           className = {`${className} ${getButtonVariant(variant)}`} />
}

export default Header;