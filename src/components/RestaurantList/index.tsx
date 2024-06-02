import { Cardapio } from '../../pages/Home/menu';
import { Restaurante } from '../Restaurant';
import * as S from './styles';

type Props = {
  cardapio: Cardapio[];
};

export const RestaurantList = ({ cardapio }: Props) => (
  <S.Container>
    <S.RestaurantContainer className='container'>
      {cardapio.map((item) => (
        <Restaurante
          key={item.id}
          title={item.nome}
          description={item.descricao}
          image={item.foto}
          porcao={item.porcao}
          price={item.preco}
          cardapio={item}
        />
      ))}
    </S.RestaurantContainer>
  </S.Container>
);
