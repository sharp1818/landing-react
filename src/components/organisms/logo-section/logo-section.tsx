import React from 'react';
import TextColorComponent from '../../atoms/text-color/text-color';
import ButtonComponent from '../../atoms/button/button';
import CardInfoComponent from '../../molecules/card-info/card-info';
interface CardInfo {
    title: string;
    number: string;
}
interface LogoSection {
    title?: string;
    description?: string;
    buttonText?: string;
    cardInfo?: CardInfo[];
}

const LogoSection = (props: LogoSection) => {

    return (
        <section>
            <div>
                <TextColorComponent title={props.title} />
                <TextColorComponent title={props.description} />
                <ButtonComponent title={props.buttonText} />
            </div>
            <div>
                {props.cardInfo?.map((card, index) => (
                    <CardInfoComponent key={index}
                        title={card.title}
                        number={card.number}
                    />
                ))}
            </div>
        </section>
    );
}

export default LogoSection;