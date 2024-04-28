
import Logo from '../../assets/logo.svg'
import { HeaderContainer, InnerContainer, LinkRestaurant, TextCart } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
        <InnerContainer>
            <LinkRestaurant to='/'>Restaurantes</LinkRestaurant>
            <img src={Logo} alt="" />
            <TextCart>0 produto(s) no carrinho</TextCart>
        </InnerContainer>
    </HeaderContainer>
  )
}
