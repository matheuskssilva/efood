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

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1;

    &.isVisible {
        display: flex;
    }

    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
`

export const ModalContent = styled.div`
   position: relative;
   max-width: 1024px;
    width: 100%;
   z-index: 1;

    > div {
        display: flex;
        padding:  32px;
        color: ${colors.white};
        background-color: ${colors.rose};
   

        >img {
            width: 280px;
            height: 280px;
            object-fit: cover;
            margin-right: 24px;
        }

        >div {
            display: block;

            >div{
                display: flex;
            justify-content: space-between;

                h2 {
                    font-size: 18px;
                    font-weight: 900;
                    line-height: 22px;
                }
                img {
                    width: 16px;
                    height: 16px;
                    cursor: pointer;
                }

            }
            p {
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                max-width: 660px;
                width: 100%;
                margin: 16px 0;
            }
            button {
                background-color: ${colors.bege};
                color: ${colors.rose};
                font-size: 14px;
                font-weight: 700;
                line-height: 22px;
                text-align: center;
                padding: 4px 6px ;
                border: none;
                cursor: pointer;
            }
        }
    }
    
`    