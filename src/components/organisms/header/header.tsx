import React from 'react';
import TextColorComponent from '../../atoms/text-color/text-color';
import ButtonComponent from '../../atoms/button/button';
import styles from '../../../styles/atoms/button/button.module.css'
import stylesText from '../../../styles/atoms/text-color/text-color.module.css'
import stylesHeader from '../../../styles/organisms/header/header.module.css'

interface Header {
    textTitle?: string;
    buttonTitle?: string;
}

const Header = (props: Header) => {

    return (
        <header className={stylesHeader.header}>
            <TextColorComponent
                title={props.textTitle}
                className={stylesText.textBlue}
            />
            <ButtonComponent
                title={props.buttonTitle}
                className={styles.bottonBlue}
            />
        </header>
    );
}

export default Header;