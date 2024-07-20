import styled from "styled-components";
import { breakpoints } from "../../styles";


export const Heros = styled.div`
  text-align: center;

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  
`

export const Title = styled.h2`
  font-weight: 900;
  font-size: 2.25rem;
  line-height: 42px;
  text-align: center;
  max-width: 539px;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
        font-size: 30px;
        line-height: 36px;
    }
`;

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  margin-bottom: 138px;

  @media (max-width: ${breakpoints.mobile}) {
        margin-bottom: 50px;
    }
`
