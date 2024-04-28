import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles";



export const ButtonLink = styled(Link)`
    background-color: ${colors.rose};
    color: ${colors.bege};
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    border: none;
    padding: 4px 6px;
    width: 82px;
    cursor: pointer;
    text-decoration: none;
`