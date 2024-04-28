import styled from "styled-components";
import { Props } from ".";
import { colors } from "../../styles";

export const TagContainer = styled.div<Props>`
    width: ${(props) => (props.size === 'big' ? '122px' : '62px')};
    height: 26px;
    font-size: .75rem;
    font-weight: 700;
    line-height: 14px;
    text-align: center;
    color: ${colors.bege};
    display: inline-block;
    padding: 6px 4px;
    background-color: ${colors.rose};
    
`