import React from 'react';
import styled from 'styled-components';
import { Button } from './componentStyles';
import { colors, fonts } from '../assets/styles';

const SigninWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: auto;
    font-family: ${fonts.pri};
`;
const StyledForm = styled.form`
    width: 35%;
    padding: 1em 2em;
    height: auto;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 25px;
    box-sizing: border-box;
    box-shadow: 0 0 20px 0px #fff;


    h1 {
        margin: 0;
        color: #fff;
        font-size: 3em;
        text-transform: uppercase;
        border-bottom: 1px solid #fff;
    }
`;
const Input = styled.input`
    margin-top: 1.5em;
    width: 99%;
    height: 2.5em;
    color: ${colors.pri};
    border: 2px solid ${colors.pri};
    background-color: transparent;
    border-radius: 5px;
    text-indent: .5em;
`;
const OptionLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5em 0;
    margin-bottom: 1em;
    width: 100%;
    color: ${colors.pri};
    
    input {
        width: 47%;
    }
`;
// Custom buttons
const SigninBtn = styled(Button)`
    width: 100%;
    height: 2.5em;
    text-transform: uppercase;
`;

function Signup() {
    return (
        <SigninWrapper>
            <StyledForm>
                <h1>detalles de pago</h1>
                <Input type="text" placeholder="Nombre de la tarjeta (John Doe)" />
                <br />  
                <Input type="text" placeholder="Número de la tarjeta (xxxx xxxx xxxx xxxx)" />
                <OptionLinks>
                    <Input type="text" placeholder="Código (CVC)" />
                    <Input type="text" placeholder="Fecha de expiración (MM/YY)" />
                </OptionLinks>
                <SigninBtn>pagar</SigninBtn>
            </StyledForm>
        </SigninWrapper>
    )
}

export default Signup;
