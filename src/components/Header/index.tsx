
import Logo from '../../assets/logo.svg'
import * as S from './styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
        <S.InnerContainer>
            <S.LinkRestaurant to='/'>Restaurantes</S.LinkRestaurant>
            <img src={Logo} alt="" />
            <S.TextCart>0 produto(s) no carrinho</S.TextCart>
        </S.InnerContainer>
    </S.HeaderContainer>
  )
}
