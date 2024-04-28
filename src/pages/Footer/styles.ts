import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContent = styled.footer`
    background-color: ${colors.bege};
    width: 100%;

`
export const Div = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 32px;
    margin-bottom: 80px;
`

export const Copy = styled.p`
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    text-align: center;
`