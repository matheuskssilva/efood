
import CardsList from "../../components/CardsList";
import { useGetRestaurantsQuery } from "../../services/api";

export type Cardapio = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: string;
  descricao: string;
  capa: string;
  cardapio: Cardapio[];
};

export const MenuList = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

  if (!restaurants) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <CardsList restaurant={restaurants} />
    </div>
  );
};
