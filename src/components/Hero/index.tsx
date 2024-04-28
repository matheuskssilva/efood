import logo from '../../assets/logo.svg'
import { Title, Logo, Container, Heros } from './styles'

import backgroundHero from '../../assets/backgroundHeader.png'

export const Hero = () => {
    return (
        <Heros>
          <Container style={{backgroundImage: `url(${backgroundHero})`}}>
          <Logo src={logo} alt="Logo Efood" />
          <Title>
            Viva experiências gastronômicas <br />
            no conforto da sua casa
          </Title>
          </Container>

      </Heros>
     
    );
  };