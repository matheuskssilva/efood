import styled from "styled-components";

import ApresentacaoFundo from '../../assets/background2.png'
import { colors } from "../../styles";


export const PresentationContainer = styled.div`
  background-image: url(${ApresentacaoFundo});
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`
export const Category = styled.h3`
    font-size: 32px;
    font-weight: 100;
    color: ${colors.white};
    line-height: 37px;
    padding-top: 25px;
`

export const Dish = styled.h3`
    font-size: 32px;
    font-weight: 900;
    color: ${colors.white};
    line-height: 37px;
    padding-top: 157px;
`