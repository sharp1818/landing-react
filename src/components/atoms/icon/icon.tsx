import React from 'react';

interface Icon {
    name?: string;
}

const IconComponent = (props: Icon) => {
    
    return (
        <div>{props.name}</div>
    );
}

export default IconComponent;