import { useState, useEffect } from "react";

import CardsList from "../../components/CardsList";


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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurants(res));
  }, []);

  return (
    <div>
      <CardsList cardapio={restaurants} />
    </div>
  );
};
