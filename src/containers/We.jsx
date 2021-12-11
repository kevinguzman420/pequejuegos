import styled from 'styled-components';
import { fonts } from '../assets/styles';
import Footer from "./Footer";

const WeWrapper = styled.nav`
    display: flex;
    padding: 0 2em;
    width: 100%;
    height: 140px;
    color: #fff;
    text-align: center;
    box-sizing: border-box;

    h1 {
        margin: 0;
        margin-top: 1em;
        margin-bottom: 0em;
        font-size: 3.5em;
        font-family: ${fonts.pri};
        text-transform: uppercase;
    }
    .text {
        width: 60%;
        margin: 0 auto;
    }
`;
const WeTextWrapper = styled.div`
    width: 100%;
    height: 400px;
`;

export default function We() {
    return (
        <WeWrapper>
            <WeTextWrapper>
                <h1>misión</h1>
                <p className="text">Logran mediante esta página el crecimiento y desarrollo de nuestros niños de
                forma divertida y segura, con precios adaptados ala economía de guatemala</p>
                <h1>visión</h1>
                <p className="text">Ser una empresa virtual, la cual brinde apoyo a la educación Guatemalteca,
                estando a la disposición de todo público con tecnología de punta</p>
            </WeTextWrapper>

            <Footer />
        </WeWrapper>
    )
}
