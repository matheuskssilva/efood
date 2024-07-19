import { Cardapio } from '../../pages/Home/menu';
import { Restaurante } from '../Restaurant';
import * as S from './styles';

type Props = {
  cardapio?: Cardapio[];
  isLoading: boolean;
};

export const RestaurantList = ({ cardapio, isLoading }: Props) => (
  <S.Container>
    <S.RestaurantContainer className='container'>
      {cardapio && cardapio.map((item) => (
        <Restaurante
          key={item.id}
          title={item.nome}
          description={item.descricao}
          image={item.foto}
          porcao={item.porcao}
          price={item.preco}
          cardapio={item}
          isLoading={isLoading}
        />
      ))}
    </S.RestaurantContainer>
  </S.Container>
);
