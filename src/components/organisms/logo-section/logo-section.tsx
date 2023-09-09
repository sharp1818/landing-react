import React from 'react';
import TextColorComponent from '../../atoms/text-color/text-color';
import ButtonComponent from '../../atoms/button/button';
import CardInfoComponent from '../../molecules/card-info/card-info';
import stylesText from '../../../styles/atoms/text-color/text-color.module.css'
import stylesButton from '../../../styles/atoms/button/button.module.css'
import stylesLogo from '../../../styles/organisms/logo-section/logo-section.module.css'

interface CardInfo {
    title: string;
    number: string;
    id: string;
}
interface LogoSection {
    title?: string;
    description?: string;
    buttonText?: string;
    cardInfo?: CardInfo[];
}

const LogoSection = (props: LogoSection) => {

    return (
        <section className={stylesLogo.sectionGrid}>
            <div className={stylesLogo.cardContainer}>
                <TextColorComponent title={props.title} className={stylesText.textBlueXL}/>
                <TextColorComponent title={props.description} className={stylesText.textGray}/>
                <ButtonComponent 
                    title={props.buttonText} 
                    className={stylesButton.buttonGradient2}
                />
            </div>
            <div className={stylesLogo.flexEnd}>
                <div className={stylesLogo.sectionImageBg}>
                    {props.cardInfo?.map((card, index) => (
                        <CardInfoComponent key={index}
                            title={card.title}
                            number={card.number}
                            className={card.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LogoSection;