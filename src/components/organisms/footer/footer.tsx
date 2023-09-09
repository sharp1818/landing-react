import React from 'react';
import TextColorComponent from '../../atoms/text-color/text-color';
import ButtonComponent from '../../atoms/button/button';
import styles from '../../../styles/atoms/button/button.module.css'
import stylesText from '../../../styles/atoms/text-color/text-color.module.css'
import stylesFooter from '../../../styles/organisms/footer/footer.module.css'

interface Footer {
    textTitle?: string;
    buttonTitle?: string;
}

const Footer = (props: Footer) => {

    return (
        <div className={stylesFooter.footerBg}>
            <footer className={stylesFooter.footer}>
                <TextColorComponent
                    title={props.textTitle}
                    className={stylesText.textWhite}
                />
                <ButtonComponent
                    title={props.buttonTitle}
                    className={styles.buttonGradient}
                />
            </footer>
        </div>
    );
}

export default Footer;