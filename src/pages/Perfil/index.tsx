import { Header } from "../../components/Header"
import { Presentation } from "../../components/Presentation"


import { RestaurantList } from "../../components/RestaurantList"
import { Restaurant } from "../Home/menu"
import { useEffect, useState } from "react"




export const Perfil = () => {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, []);


  return (
      <>
          <Header />
          <Presentation />
          <RestaurantList restaurant={restaurant} />
      </>
  )
}
