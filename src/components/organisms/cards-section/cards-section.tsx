import React from 'react';
import CardComponent from '../../molecules/card/card';
import stylesCard from '../../../styles/organisms/cards-section/cards-section.module.css'
import stylesText from '../../../styles/atoms/text-color/text-color.module.css'
import TextColorComponent from '../../atoms/text-color/text-color';

interface CardsSection {
    icon?: string;
    title?: string;
    description?: string;
    buttonMsg?: string;
}

const CardsSection = (props: CardsSection) => {

    return (
        <section>
            {props.icon ? 
            <CardComponent
                icon={props.icon}
                title={props.title}
                description={props.description}
                buttonMsg={props.buttonMsg}
            />
            : 
            <div className={stylesCard.cardContainerGradient}>
                <TextColorComponent 
                    title={props.title}
                    className={stylesText.textWhiteWPadding}
                />
            </div>
            }
        </section>
    );
}

export default CardsSection;