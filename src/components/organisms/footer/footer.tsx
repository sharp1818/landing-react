import React from 'react';
import TextColorComponent from '../../atoms/text-color/text-color';
import ButtonComponent from '../../atoms/button/button';

interface Footer {
    textTitle?: string;
    buttonTitle?: string;
}

const Footer = (props: Footer) => {

    return (
        <header>
            <TextColorComponent
                title={props.textTitle}
            />
            <ButtonComponent
                title={props.buttonTitle}
            />
        </header>
    );
}

export default Footer;