
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import * as S from './styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
        <S.InnerContainer>
            <S.LinkRestaurant to='/'>Restaurantes</S.LinkRestaurant>
            <Link to='/'><img src={Logo} alt=""  /></Link>
            <S.TextCart>0 produto(s) no carrinho</S.TextCart>
        </S.InnerContainer>
    </S.HeaderContainer>
  )
}
