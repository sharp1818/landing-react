import React from 'react';
import TextColorComponent from '../../atoms/text-color/text-color';
import stylesText from '../../../styles/atoms/text-color/text-color.module.css'
import stylesCard from '../../../styles/molecules/card-info/card-info.module.css'
import './card-info.css'

interface CardInfo {
    title?: string;
    number?: string; 
    className: string;
}

const CardInfoComponent = (props: CardInfo) => {

    return (
        <div className={props.className}>
            <div className={stylesCard.boxInfo}>
                <TextColorComponent
                    className={stylesText.textGray}
                    title={props.title}
                />
                <TextColorComponent
                    className={stylesText.textBlueLg}
                    title={props.number}
                />
            </div>
        </div>
    );
}

export default CardInfoComponent;