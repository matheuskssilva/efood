
import { Restaurant } from '../../pages/Home/menu'
import { Restaurante } from '../Restaurant'
import * as S from './styles'

type Props = {
    restaurant: Restaurant[]
}

export const RestaurantList = ({ restaurant }: Props) => {
  
  return (
   <S.Container>
    <S.RestaurantContainer className='container'>
    {restaurant.map((restaurants) => (
       <Restaurante
         key={restaurants.id}
         title={restaurants.titulo}
         description={restaurants.descricao}
         image={restaurants.capa}
       />
     ))}
    </S.RestaurantContainer>

   </S.Container>
 )
}


