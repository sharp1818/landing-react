import React from 'react';
import TextColorComponent from '../../atoms/text-color/text-color';

interface CardInfo {
    title?: string;
    number?: string;
}

const CardInfoComponent = (props: CardInfo) => {

    return (
        <div>
            <TextColorComponent
                title={props.title}
            />
            <TextColorComponent
                title={props.number}
            />
        </div>
    );
}

export default CardInfoComponent;