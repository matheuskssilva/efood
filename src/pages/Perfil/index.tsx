import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Presentation } from "../../components/Presentation";
import { RestaurantList } from "../../components/RestaurantList";
import { Restaurant } from "../Home/menu";

type Params = {
  id: string;
};

export const Perfil = () => {
  const { id } = useParams<Params>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data: Restaurant) => {
        setRestaurant(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Erro ao buscar dados da API");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!restaurant) {
    return <p>Restaurant não encontrado</p>;
  }

  return (
    <>
      <Header />
      <Presentation restaurant={restaurant} />
      <RestaurantList cardapio={restaurant.cardapio} />
    </>
  );
};
