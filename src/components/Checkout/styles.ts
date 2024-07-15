import styled from "styled-components";
import { colors } from "../../styles";

type InputProps = {
    maxWidth?: string
  }


export const CheckoutContainer = styled.form`
    color: ${colors.bege};
    h3 {
        font-size: 14px;
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
      border: 1px solid red;
      background-color: ${colors.red};
    }
  }
`