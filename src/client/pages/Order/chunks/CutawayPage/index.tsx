import React, { useEffect, useRef } from 'react';
import './index.sass';
import styled from 'styled-components';
import { StyledCarouselWrapper } from '../ViewsCarousel';
import { Icons } from '../../../../component/UI/Icons';

const Title = styled.span`
  line-height: 1.5;
  font-size: 26px;
  padding: 25px 0;
  //color: white;
  //background: #6c5070;
  color: #6c5070;
  display: flex;
  align-items: center;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 25px;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background: #bfbfb0;
  }
`;

const ContainerWithSubstrate = styled.div`
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1));
  background: #f5f5ef;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 25px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: #6c5070;
`;

const Text = styled.span`
  line-height: 1.5;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

const PriceItem = styled.div`
  flex-grow: 1;
  text-align: center;
  background: #f5f5ef;
  margin: 0 5px;
  padding: 10px;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1));
`;

const PriceLogo = styled.div`
    
  & svg {
    width: 30px;
    height: 30px;
    fill: #6C5070;
  }
`;

const BadgePlatform = styled.div`
  width: 20px;
  height: 20px;
  background: #6C5070;
  border-radius: 15%;
  padding: 2px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 70%;
    height: 70%;
    fill: white;
  }
`;

export const CutawayPage = (props) => {
  const {

  } = props;
  const ref = useRef(null);
  useEffect(() => {
    console.log('width', ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);
  // const margin = useMemo(() => {
  //   if (ref.current && ref.current.offsetWidth > 1200) {
  //     return 22;
  //   }
  //   return 0;
  // }, [ref.current]);
  return (
    <PageWrapper
      // className="content-wrapper"
      ref={ref}
    >
      <Title>
        <span>Портфолио </span>
        <BadgePlatform>
          {Icons.Desktop({ size: 'm' })}
        </BadgePlatform>
        <BadgePlatform>
          {Icons.Tablet({ size: 'm' })}
        </BadgePlatform>
        <BadgePlatform>
          {Icons.Phone({ size: 'm' })}
        </BadgePlatform>
      </Title>
      <StyledCarouselWrapper />
      {/* <Title> */}
      {/*  Что это? */}
      {/* </Title> */}
      <Text>
        Одностраничный информационный сайт,
        который позволит разместить в интернете информацию о компании,
        ее телефон и адрес с картой проезда, подробности об услугах и ценах.
        Это своего рода виртуальная визитная карточка:
        небольшой сайт с информацией, которая позволяет получить представление
        о деятельности компании.
      </Text>
      <PriceContainer>
        <PriceItem>
          <PriceLogo>
            {Icons.Desktop({ size: 'm' })}
          </PriceLogo>
        </PriceItem>
        <PriceItem>
          <PriceLogo>
            {Icons.Tablet({ size: 'm' })}
          </PriceLogo>
        </PriceItem>
        <PriceItem>
          <PriceLogo>
            {Icons.Phone({ size: 'm' })}
          </PriceLogo>
        </PriceItem>
      </PriceContainer>
      {/* <Title> */}
      {/*  Что это? */}
      {/* </Title> */}
      {/* <div className="carousel__content"> */}
      {/* </div> */}
      {/* <div className="content-wrapper__order-description content-wrapper__container" /> */}
      {/* <div className="content-wrapper__order-form"> */}
      {/*  <Form /> */}
      {/* </div> */}
    </PageWrapper>
  );
};
