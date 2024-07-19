import styled from "styled-components";
import { colors } from "../../styles";

type InputProps = {
    maxWidth?: string
  }


export const CheckoutContainer = styled.form`
    color: ${colors.bege};
    h2 {
        font-size: 16px;
        font-weight: bold;
    }

    label {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
    }
    

    .flex {
        display: flex;
        align-items: center;
        gap: 34px;
    }

    .dFlex {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 24px;

      p {
        width: 344px;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
      }

      button {
        width: 344px;
        height: 24px;
        color: ${colors.rose};
        background-color: ${colors.bege};
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        border: none;
        cursor: pointer;
      }
    }

    .marginTop {
        margin-top: 16px;
    }
`

export const InputGroup = styled.div<InputProps>`

  input {
    width: 100%;
    max-width: ${(props) => props.maxWidth || 'auto'};
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 8px;
    background-color: ${colors.bege};
    border: none;
    height: 32px;

    

    &.error {
      border: 2px solid red;
      background-color: ${colors.red};
      box-shadow: 2px 2px;
    }
  }
`