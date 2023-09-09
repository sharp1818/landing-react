import React from 'react';
import Header from '../../components/organisms/header/header';
import LogoSection from '../../components/organisms/logo-section/logo-section';
import CardsSection from '../../components/organisms/cards-section/cards-section';
import Footer from '../../components/organisms/footer/footer';
import stylesHome from './home.module.css';
import data from '../../data/home/data.json'

const Home = () => {
  return (
    <div>
      <Header
        textTitle={data.header.textTitle} 
        buttonTitle={data.header.buttonTitle} 
      />
      <LogoSection
        title={data.logoSection.title}
        description={data.logoSection.description}
        buttonText={data.logoSection.buttonText}
        cardInfo={data.logoSection.cardInfo}
      />
      <div className={stylesHome.cardsLayout}>
        {data.cardSection.map((card, index) => (
          <CardsSection key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              buttonMsg={card.buttonMsg}  
          />
        ))}
      </div>
      <Footer
        textTitle={data.footer.textTitle}
        buttonTitle={data.footer.buttonTitle}
      />
    </div>
  );
};

export default Home;