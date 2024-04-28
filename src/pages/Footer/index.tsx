
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import { Div, FooterContent, Links, Copy } from './styles'


export const Footer = () => {
  return (
    <FooterContent>
        <Div>
        <img src={logo} alt="Logo Efood" />
        <Links>
            <li>
                <Link to="/"><img src={instagram} alt="" /></Link>
            </li>
            <li>
                <Link to="/"><img src={facebook} alt="" /></Link>
            </li>
            <li>
                <Link to="/"><img src={twitter} alt="" /></Link>
            </li>
        </Links>
            <Copy>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br />dos produtos é toda do estabelecimento contratado. </Copy>
        </Div>
    </FooterContent>
  )
}
