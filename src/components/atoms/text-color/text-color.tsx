import React from 'react';

interface TextColor {
    title?: string;
}

const TextColorComponent = (props: TextColor) => {
    
    return (
        <div>{props.title}</div>
    );
}

export default TextColorComponent;