// styles.ts
import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  border: 1px solid ${colors.rose};
  background-color: ${colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  

  @media (max-width: ${breakpoints.mobile}) {
        max-width: 300px;
        width: 100%;
    }
`;

export const ImageCard = styled.img`
    height: 217px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px 8px;

`;


export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
`

export const Title = styled.h2`
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 21px;
`

export const Description = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 22px;
    margin-top: 16px;
    margin-bottom: 16px;
`

export const HeaderText = styled.div`
    display: flex;
    align-content: center ;
    justify-content: space-between;
`

export const Rating = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 8px;
`
