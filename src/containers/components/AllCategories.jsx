import React from 'react';
import styled from 'styled-components';
import { Button } from '../componentStyles';
import { fonts, colors } from '../../assets/styles';
import one from '../../media/1.jpg';
import two from '../../media/2.jpg';
import three from '../../media/3.jpg';
import four from '../../media/4.jpg';
import five from '../../media/5.jpg';
import six from '../../media/6.jpg';

const AllCategoriesWrapper = styled.div`
    margin: 10em 0;
    width: 100%;
    height: auto;
`;
const Title = styled.h1`
    text-transform: uppercase;
    font-size: ${fonts.pri};
`;
const GamesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 275px);
    grid-template-rows: repeat(2, auto);
    row-gap: 5em;
    justify-content: space-between;
    
    width: 100%;
    height: auto;

    figure {
        margin: 0;
        /* margin-bottom: 2em; */
        height: 270px;
        border-radius: 25px;
        background-color: ${colors.pri};
        box-shadow: 0 0 10px 5px ${colors.pri};
        text-align: center;

        img {
            width: 100%;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            margin-bottom: 0.5em;
        }
        strong {
            margin: 1em 0;
            text-transform: uppercase;
            color: ${colors.sec};
        }
        .puntuation {
            margin: .5em 0;
            i {
                margin-right: .5em;
            }
        }
    }
`;
const ButtonCustom = styled(Button)`
    background-color: ${colors.sec};
`;

function AllCategories() {
    return (
        <AllCategoriesWrapper>
            <Title>todas las categorias</Title>
            <GamesContainer>
                <figure>
                    <img src={one} alt="" />
                    <strong>Bingo alfabeto</strong>
                    <div className="puntuation">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <ButtonCustom>Jugar</ButtonCustom>
                </figure>
                <figure>
                    <img src={two} alt="" />
                    <strong>Reconoce las vocales</strong>
                    <div className="puntuation">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <ButtonCustom>Jugar</ButtonCustom>
                </figure>
                <figure>
                    <img src={three} alt="" />
                    <strong>Conecta los puntos</strong>
                    <div className="puntuation">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <ButtonCustom>Jugar</ButtonCustom>
                </figure>
                <figure>
                    <img src={four} alt="" />
                    <strong>Reconoce las letras</strong>
                    <div className="puntuation">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <ButtonCustom>Jugar</ButtonCustom>
                </figure>
                <figure>
                    <img src={five} alt="" />
                    <strong>Identifica las vocales</strong>
                    <div className="puntuation">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <ButtonCustom>Jugar</ButtonCustom>
                </figure>
                <figure>
                    <img src={six} alt="" />
                    <strong>Ordena las vocales</strong>
                    <div className="puntuation">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <ButtonCustom>Jugar</ButtonCustom>
                </figure>
            </GamesContainer>
        </AllCategoriesWrapper>
    )
}

export default AllCategories
