
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import * as S from './styles'


export const Footer = () => {
  return (
    <S.FooterContent>
        <S.Div>
        <img src={logo} alt="Logo Efood" />
        <S.Links>
            <li>
                <Link to="/"><img src={instagram} alt="" /></Link>
            </li>
            <li>
                <Link to="/"><img src={facebook} alt="" /></Link>
            </li>
            <li>
                <Link to="/"><img src={twitter} alt="" /></Link>
            </li>
        </S.Links>
            <S.Copy>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br />dos produtos é toda do estabelecimento contratado. </S.Copy>
        </S.Div>
    </S.FooterContent>
  )
}
