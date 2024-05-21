// CardsList.tsx
import { Restaurant } from "../../pages/Home/menu";
import { Cards } from "../Cards";
import * as S from "./styles";

type Props = {
  cardapio: Restaurant[]
};

const CardsList = ({ cardapio }: Props) => (
  <S.Container>
    <S.CardContainer className="container">
      {cardapio.map((restaurant) => (
        <Cards
          id={restaurant.id}
          key={restaurant.id}
          image={restaurant.capa}
          category={restaurant.tipo}
          description={restaurant.descricao}
          rating={restaurant.avaliacao}
          title={restaurant.titulo}
        />
      ))}
    </S.CardContainer>
  </S.Container>
);

export default CardsList;
