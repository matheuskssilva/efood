import styled from "styled-components";
import background from '../../assets/backgroundHeader.png'
import { Link } from "react-router-dom";
import { colors } from "../../styles";

export const HeaderContainer = styled.div`
    background-image: url(${background});
    height: 163px;
    width: 100%; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InnerContainer = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LinkRestaurant = styled(Link)`
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    color: ${colors.rose};
`

export const TextCart = styled.p`
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    cursor: pointer;
`
