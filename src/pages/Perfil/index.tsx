
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Presentation } from "../../components/Presentation";
import { RestaurantList } from "../../components/RestaurantList";
import { useGetRestaurantSelectedQuery } from "../../services/api";
import { Loader } from "../../components/Loader";

type Params = {
  id: string;
};

export const Perfil = () => {
  const { id } = useParams() as Params
  const { data: restaurantFood, isLoading: isLoadingSale } = useGetRestaurantSelectedQuery(id)


 
if(restaurantFood) {
  return (
    <>
      <Header />
      <Presentation restaurant={restaurantFood} />
      <RestaurantList cardapio={restaurantFood.cardapio} isLoading={isLoadingSale}/>
    </>
  );
}
 return <Loader />

};
