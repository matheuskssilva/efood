import styled from "styled-components";


import { colors } from "../../styles";


export const PresentationContainer = styled.div`
  height: 280px;
  position: relative;
  z-index: 1;

  ::after {
   position: absolute;
   top: 0;
   left: 0%;
   width: 100%;
   height: 280px;
   content: '';
   background-color: rgba(0, 0, 0, 0.3);
   z-index: -1;
 }
  
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

