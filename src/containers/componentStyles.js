import styled from 'styled-components';
import { colors } from '../assets/styles'

export const Button = styled.button`
    width: 90%;
    height: 30px;
    text-align: center;
    color: ${colors.back};
    background: ${colors.pri};
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
`;