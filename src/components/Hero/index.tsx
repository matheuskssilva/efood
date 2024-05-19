import logo from '../../assets/logo.svg'
import * as S from './styles'

import backgroundHero from '../../assets/backgroundHeader.png'

export const Hero = () => {
    return (
        <S.Heros>
          <S.Container style={{backgroundImage: `url(${backgroundHero})`}}>
          <S.Logo src={logo} alt="Logo Efood" />
          <S.Title>
            Viva experiências gastronômicas <br />
            no conforto da sua casa
          </S.Title>
          </S.Container>

      </S.Heros>
     
    );
  };