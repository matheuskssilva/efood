
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderContainer>
        <S.InnerContainer>
            <S.LinkRestaurant to='/'>Restaurantes</S.LinkRestaurant>
            <Link to='/'><img src={Logo} alt=""  /></Link>
            <S.TextCart onClick={openCart}>{items.length} produto(s) no carrinho</S.TextCart>
        </S.InnerContainer>
    </S.HeaderContainer>
  )
}
