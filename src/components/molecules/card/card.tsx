import React from 'react';
import ButtonComponent from '../../atoms/text-color/text-color';
import IconComponent from '../../atoms/icon/icon';
import TextColorComponent from '../../atoms/text-color/text-color';
import styles from '../../../styles/atoms/icon/icon.module.css'
import stylesButton from '../../../styles/atoms/button/button.module.css'
import stylesText from '../../../styles/atoms/text-color/text-color.module.css'

interface Card {
    icon?: string;
    title?: string;
    description?: string;
    buttonMsg?: string;
}

const CardComponent = (props: Card) => {
    
    return (
        <div>
            <IconComponent 
                name={props.icon}
                className={styles.iconCircle}
            />
            <TextColorComponent 
                title={props.title}
                className={stylesText.textBlueXS}
            />
            <TextColorComponent 
                title={props.description}
                className={stylesText.textGray}
            />
            <ButtonComponent 
                title={props.buttonMsg}
                className={stylesButton.buttonTransparent}
            />
        </div>
    );
}

export default CardComponent;