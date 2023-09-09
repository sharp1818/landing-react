import React from 'react';
import CardComponent from '../../molecules/card/card';

interface CardsSection {
    icon?: string;
    title?: string;
    description?: string;
    buttonMsg?: string;
}

const CardsSection = (props: CardsSection) => {

    return (
        <section>
            <CardComponent
                icon={props.icon}
                title={props.title}
                description={props.description}
                buttonMsg={props.buttonMsg}
            />
        </section>
    );
}

export default CardsSection;