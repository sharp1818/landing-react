import React from 'react';
import ButtonComponent from '../../atoms/text-color/text-color';
import IconComponent from '../../atoms/icon/icon';
import TextColorComponent from '../../atoms/text-color/text-color';

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
            />
            <TextColorComponent 
                title={props.title}
            />
            <TextColorComponent 
                title={props.description}
            />
            <ButtonComponent 
                title={props.buttonMsg}
            />
        </div>
    );
}

export default CardComponent;