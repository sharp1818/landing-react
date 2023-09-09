import React from 'react';
import TextColorComponent from '../../atoms/text-color/text-color';
import ButtonComponent from '../../atoms/button/button';

interface Header {
    textTitle?: string;
    buttonTitle?: string;
}

const Header = (props: Header) => {

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

export default Header;