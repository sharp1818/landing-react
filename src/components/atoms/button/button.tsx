import React from 'react';

interface Button {
    title?: string;
}

const ButtonComponent = (props: Button) => {
    
    return (
        <button>
            {props.title}
        </button>
    );
}

export default ButtonComponent;