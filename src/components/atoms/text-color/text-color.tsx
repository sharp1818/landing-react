import React from 'react';

interface TextColor {
    title?: string;
    className: string;
}

const TextColorComponent = (props: TextColor) => {
    
    return (
        <div className={`${props.className}`}>{props.title}</div>
    );
}

export default TextColorComponent;