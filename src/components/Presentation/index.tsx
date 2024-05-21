import React from 'react';
import * as S from './styles';
import { Restaurant } from '../../pages/Home/menu';

type Props = {
  restaurant: Restaurant;
};

export const Presentation = ({ restaurant }: Props) => {
  return (
    <S.PresentationContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <S.Category>{restaurant.tipo}</S.Category>
        <S.Dish>{restaurant.titulo}</S.Dish>
      </div>
    </S.PresentationContainer>
  );
};
