import React from 'react';

interface Button {
    title?: string;
    className: string;
}

const ButtonComponent = (props: Button) => {
    
    return (
        <button className={`${props.className}`}>
            {props.title}
        </button>
    );
}

export default ButtonComponent;