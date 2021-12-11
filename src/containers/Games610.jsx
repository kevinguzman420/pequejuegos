import { useState } from 'react';
import styled from 'styled-components';
import AllCategories from './components/AllCategories';
import { Button } from './componentStyles';
import { colors } from '../assets/styles';
import imgGame from '../media/cubos.jpeg';
import PlayGame from './PlayGame';

const GamesWrapper = styled.div`
    /* padding: 0 5em; */
    width: 80%;
    height: auto;
    color: #fff;

    /* background-color: gray; */

    .header {
        display: flex;
        justify-content: space-between;

        h1 {
            text-transform: uppercase;
            margin-bottom: 1.5em;
        }
        button {
            font-size: 1em;
            font-weight: bold;
            text-decoration: underline;
            text-transform: uppercase;
            color: #fff;
            border: none;
            background-color: transparent;
            cursor: pointer;
        }
    }
`;
const SelectedGame = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
`;
const DescWrapper = styled.div`
    width: 30%;
    height: 100%;

    h3 {
        margin: 0;
        margin-bottom: .5em;
        text-transform: uppercase;
        color: ${colors.sec};
    }
    .puntuation {
        margin-bottom: 1em;

        i {
            margin-right: .8em;
            font-size: .8em;
        }
    }
    strong {
        margin: 0;
    }
    p {
        margin: 0;
        margin-top: .5em;
        margin-bottom: 1em;
        width: 80%;
        line-height: 1.5em;
        font-size: .9em;
    }
`;
const GameWrapper = styled.div`
    width: 70%;
    height: 100%;
    border-radius: 25px;
    box-shadow: 0 0 10px 5px ${colors.sec};
    cursor: pointer;
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 25px;
    }
`;


function Games610({ setAskAge, setAge15, setAge610 }) {
    const [playGame, setPlayGame] = useState(false);

    const changeAgeRange = () => {
        setAskAge(true);
        setAge15(false);
        setAge610(false);
    }

    return (
        <GamesWrapper>
            { !playGame &&
                <>
                    <div className="header">
                        <h1>el más destacado (6-10 AÑOS)</h1>
                        <button
                            onClick={() => changeAgeRange()}
                        >cambiar rango</button>
                    </div>
                    <SelectedGame>
                        <DescWrapper>
                            <h3>adivina la letra</h3>
                            <div className="puntuation">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <strong>Instrucciones:</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium explicabo voluptatem quidem veritatis dignissimos ea, deserunt delectus fugiat excepturi sed laborum voluptatibus. Libero, molestiae velit illo obcaecati quis accusamus.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium explicabo voluptatem quidem veritatis dignissimos ea, deserunt delectus fugiat excepturi sed laborum voluptatibus. Libero, molestiae velit illo obcaecati quis accusamus.</p>

                            <Button
                                onClick={() => setPlayGame(true)}
                            >JUGAR</Button>
                        </DescWrapper>
                        <GameWrapper
                            onClick={() => setPlayGame(true)}
                        >
                            <img src={imgGame} alt="" />
                        </GameWrapper>
                    </SelectedGame>
                </>
            }

            {
                playGame && 
                    <PlayGame
                        changeAgeRange={changeAgeRange}
                        ageRange="AGE610"
                    />
            }

            <AllCategories />
        </GamesWrapper>
    )
}

export default Games610;
