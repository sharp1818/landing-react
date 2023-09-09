import React, { Fragment } from 'react';
import { GetIcon } from '../../../utils/helpers';

interface Icon {
    name?: string | any;
    className: string;
}

const IconComponent = (props: Icon) => {
    
    return (
        <Fragment>
            <img src={GetIcon(props.name)} alt='logo' className={`${props.className}`}/>
        </Fragment>
    );
}

export default IconComponent;