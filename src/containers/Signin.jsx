import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from "./Footer";
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
    width: 30%;
    height: auto;
    text-align: center;

    h1 {
        margin: 0;
        color: #fff;
        font-size: 3em;
        text-transform: uppercase;
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
    
    a {
        color: ${colors.pri};
        font-size: 1.7em;
        text-decoration: underline;
        line-height: -2em;
    }
    button {
        border: none;
        color: ${colors.pri};
        font-family: ${fonts.pri};
        font-size: 1.7em;
        text-decoration: underline;
        line-height: -2em;
        background-color: transparent;
        cursor: pointer;
    }

    hr {
        border: none;
        border-top: 1px solid ${colors.pri};
        width: 45%;
    }
    p {
        margin: 0;
        font-family: 'Open Sans';
        font-size: 1.2em;
    }
`;
const OptionLinksAuth0 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5em 0;
    margin-bottom: 1em;
    width: 100%;
    color: ${colors.pri};
`;
// Custom buttons
const SigninBtn = styled(Button)`
    width: 100%;
    height: 2.5em;
    `;
const FbButton = styled(Button)`
    width: 40%;
    height: 2.5em;
    background-color: gray;
    i {
        margin-right: .5em;
    }
`;
const GoogleButton = styled(Button)`
    width: 40%;
    height: 2.5em;
    background-color: gray;
    i {
        margin-right: .5em;
    }
`;
const P = styled.p`
    color: #fff;
    text-align: center;
    font-family: '0pen Sans';
    font-size: .9em;
`;

function Signin() {
    const [signup, setSignup] = useState(false);

    const signupFunc = () => {
        setSignup(!signup);
    }

    return (
        <SigninWrapper>
            <StyledForm>
                <h1>
                { signup 
                    ? "Crear cuenta"
                    : "ingresar"
                }
                </h1>
                <Input type="text" placeholder="Correo o usuario" />
                <br />  
                <Input type="text" placeholder="Contraseña" />
                <OptionLinks>
                    <button
                        type="button"
                        onClick={() => signupFunc()}
                    >
                        { signup
                            ? "Ya tengo una cuenta"
                            : "Crear una cuenta"
                        }
                    </button>
                    {!signup && <Link to="/">Olvidé mi contraseña</Link>}
                </OptionLinks>
                <SigninBtn>{ signup ? "Crear" : "Ingresar" }</SigninBtn>
                <OptionLinks>
                    <hr /> <p>0</p> <hr />
                </OptionLinks>
                <OptionLinksAuth0>
                    <FbButton><i className="fab fa-facebook-f"></i>Facebook</FbButton>
                    <GoogleButton><i className="fab fa-google"></i>Google</GoogleButton>
                </OptionLinksAuth0>
                <P>Al registrarte aceptas nuestros <strong>términos</strong> y <strong>políticas de privacidad</strong></P>
            </StyledForm>

            <Footer />
        </SigninWrapper>
    )
}

export default Signin;
