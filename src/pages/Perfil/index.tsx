import { Header } from "../../components/Header"
import { Presentation } from "../../components/Presentation"
import Restaurant from "../../models/Restaurant"

import Pizza from '../../assets/pizza.png'
import { RestaurantList } from "../../components/RestaurantList"

const restaurant: Restaurant[] = [
  {
    id: 1,
    image: Pizza,
    title: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 2,
    image: Pizza,
    title: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 3,
    image: Pizza,
    title: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 4,
    image: Pizza,
    title: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 5,
    image: Pizza,
    title: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 6,
    image: Pizza,
    title: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  }
]

export const Perfil = () => {
  return (
      <>
          <Header />
          <Presentation />
          <RestaurantList restaurant={restaurant} />
      </>
  )
}
