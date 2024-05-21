import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
    background-color: ${colors.rose};
    color: ${colors.bege};
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 318px;
   
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 8px


`

export const Photo = styled.img`
    margin: 8;
    height: 167px;
`

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 900;
    color: ${colors.bege};
    line-height: 18px;
`

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${colors.bege};
    line-height: 22px;
`    

export const ButtonCart = styled.button`
    background-color: ${colors.bege};
    color: ${colors.rose};
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    padding-top: 4px;
    width: 304px;
    height: 24px;
    border: none;
    cursor: pointer;
`    