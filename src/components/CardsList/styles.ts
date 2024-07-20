import styled from "styled-components";
import { breakpoints } from "../../styles";

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;
    

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
        column-gap: 0;
        row-gap: 24px;  
    }
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 120px;

    @media (max-width: ${breakpoints.mobile}) {
        max-width: 300px;
        width: 100%;
    }
`