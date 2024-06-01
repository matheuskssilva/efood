import styled from "styled-components";
import { colors } from "../../styles";

import bin from '../../assets/bin.png'

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    display: flex;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const SideBar = styled.aside`
    background-color: ${colors.rose};
    max-width: 360px;
    width: 100%;
    height: 100%;
    padding: 32px 8px;
    z-index: 1;
    
`

export const CartItem = styled.li`
    display: flex;
    background-color: ${colors.bege};
    max-width: 344px;
    width: 100%;
    padding: 8px;

    img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
    }

    >div{
        display: flex;
        flex-direction: column;
        gap: 16px;
        position: relative;
        button {
            display: flex;
            position: absolute;
            bottom: 0;
            background-image: url(${bin});
            width: 16px;
            height: 16px;
            border: none;
            cursor: pointer;
            background-color: transparent ;
        }
    }

`

export const Price = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    color: ${colors.bege};
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
`

export const Button = styled.button`
    max-width: 360px;
    width: 100%;
    height: 24px;
    margin-top: 16px;
    background-color: ${colors.bege};
    color: ${colors.rose};
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    border: none;
    cursor: pointer;
`