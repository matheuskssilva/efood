
import Restaurant from '../../models/Restaurant'
import { Restaurante } from '../Restaurant'
import { Container, RestaurantContainer } from './styles'

type Props = {
    restaurant: Restaurant[]
}

export const RestaurantList = ({ restaurant }: Props) => {
  return (
   <Container>
    <RestaurantContainer className='container'>
    {restaurant.map((restaurants) => (
       <Restaurante
         key={restaurants.id}
         title={restaurants.title}
         description={restaurants.description}
         image={restaurants.image}
       />
     ))}
    </RestaurantContainer>

   </Container>
 )
}


