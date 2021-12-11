import styled from 'styled-components';
import { useState } from 'react';
import Sound from 'react-sound';
import Swal from 'sweetalert2';
import { colors, fonts } from '../assets/styles';
import a from '../media/a.png';
import r from '../media/r.png';
import f from '../media/f.png';
import m from '../media/m.png';
import aguila from '../media/aguila.jpg';
import rana from '../media/rana.jpg';
import foca from '../media/foca.jpg';
import mariposa from '../media/mariposa.jpg';
import aSound from '../media/mp3/a.mp3';
import rSound from '../media/mp3/r.mp3';
import fSound from '../media/mp3/f.mp3';
import mSound from '../media/mp3/m.mp3';
// AGE610
import apple from '../media/apple.png';
import pera from '../media/pera.png';
import plus from '../media/plusr.png';
import menos from '../media/menos.png';
import equal from '../media/equal.png';
import perro from '../media/perro.png';
import multi from '../media/multi.png';
import bad from '../media/mp3/bad.mp3';
import good from '../media/mp3/good.mp3';





// const MySwal = withReactContent(Swal);

const GameWrapper = styled.div`
    width: 100%;
    height: 570px;
    color: white;
    text-align: end;
    background-color: ${colors.pri};
    font-family: ${fonts.pri};
    border-radius: 10px;
    box-shadow: 0 0 10px 5px #51bbb1;

    i {
        margin: 0 .5em;
        color: red;
        font-size: 2em;
        cursor: pointer;
    }
    h1 {
        margin: 0;
        text-align: center;
        font-size: 4em;
        text-transform: uppercase;
        color: ${colors.sec};
    }
`;
const LetterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    padding: 0 1em;
    box-sizing: border-box;

    figure {
        border: 2px solid #fff;
        background-color: #fff;
        margin: 0;
        padding: .5em;
        width: calc(100% / 6);
        border-radius: 10px;
        cursor: pointer;
        transition: .2s transform;

        img {
            width: 100%;
            height: 100%;
        }
    }
    figure:active {
        transform: scale(1.1);
    }
`;
const ImageContainer = styled.figure`
    margin: 0 auto;
    margin-top: 2em;
    width: 300px;
    height: 200px;

    img {
        width: auto;
        height: 100%;
        border-radius: 25px;
    }

`;
const AnimalName = styled.h1`
    margin: 0;
`;


// AGE610
const AddContainer = styled.div`
    width: 100%;
    height: auto;

    /* AGE610 */
    .age610 {
        background: transparent;
        border: none;
        margin: 0;
        padding: .5em;
        width: 75px;
        height: 75px;

        img {
            width: 100%;
            height: 100%;
        }
    }
    button {
        margin: 0 2em;
        font-size: 1.5em;
        width: 50px;
        height: 50px;
    }
`;
const OperationWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 3em 0;
`;

function PlayGame({ changeAgeRange, ageRange }) {
    // AGE15
    const [sound, setSound] = useState(null);
    const [SoundStatus, setSoundStatus] = useState('STOPPED');
    const [animal, setAnimal] = useState(aguila);
    const [animalName, setAnimalName] = useState("");
    
    // AGE15
    const letterSelected = (name) => {

        switch(name) {
            case "A":
                setSound(aSound);
                setAnimal(aguila);
                setAnimalName("aguila")
                break;
            case "R":
                setSound(rSound);
                setAnimal(rana);
                setAnimalName("rana")
                break;
            case "F":
                setSound(fSound);
                setAnimal(foca);
                setAnimalName("foca")
                break;
            case "M":
                setSound(mSound);
                setAnimal(mariposa);
                setAnimalName("mariposa")
                break;
            default:
                break;
        } 
        setSoundStatus(Sound.status.PLAYING);
    }

    // AGE610
    const badFunc = () => {
        Swal.fire({
            title: '¡Respuesta incorrecta!',
            confirmButtonText: 'Seguir',
            icon: 'error'
        });
        setSound(bad);
        setSoundStatus(Sound.status.PLAYING);
    }
    const successFunc = () => {
        Swal.fire({
            title: '¡FELICITACIONES 🎉!',
            confirmButtonText: 'Seguir',
            icon: 'success'
        });
        setSound(good);
        setSoundStatus(Sound.status.PLAYING);
    }

    return (
        // Adivina la letra
        <GameWrapper>
            <i
                className="fas fa-times"
                onClick={() => changeAgeRange()}
            ></i>
            { ageRange === "AGE15" &&
                <>
                    <h1>selecciona una letra</h1>
                    <LetterContainer>
                        <figure>
                            <img 
                                src={a}
                                alt=""
                                name="A"
                                onClick={(e) => letterSelected(e.target.name)}
                            />
                        </figure>
                        <figure>
                            <img
                                src={r} 
                                alt=""
                                name="R"
                                onClick={(e) => letterSelected(e.target.name)}
                            />
                        </figure>
                        <figure>
                            <img 
                                src={f} 
                                alt="" 
                                name="F"
                                onClick={(e) => letterSelected(e.target.name)}
                            />
                        </figure>
                        <figure>
                            <img 
                                src={m} 
                                alt="" 
                                name="M"
                                onClick={(e) => letterSelected(e.target.name)}
                            />
                        </figure>

                        <Sound
                            url={sound}
                            autoLoad={true}
                            playStatus={SoundStatus}
                            playFromPosition={0}
                            onFinishedPlaying={() =>
                            setSoundStatus(Sound.status.STOPPED)
                            }
                        />

                    </LetterContainer>
                    <ImageContainer>
                        <img src={animal} alt="" />
                    </ImageContainer>
                    <AnimalName>{ animalName }</AnimalName>
                </>
            }

            { ageRange === "AGE610" &&
                <>
                    <h1>operaciones matemáticas</h1>
                    <AddContainer>
                        {/* ADD */}
                        <OperationWrapper>
                            <figure className="age610">
                                <img 
                                    src={apple}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={apple}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={apple}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={plus}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={apple}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={apple}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={equal}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <button onClick={() => badFunc()}>7</button>
                            <button onClick={() => badFunc()}>3</button>
                            <button onClick={() => successFunc()}>5</button>
                        </OperationWrapper>

                        {/* RESTA */}
                        <OperationWrapper>
                            <figure className="age610">
                                <img 
                                    src={pera}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={pera}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={pera}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={menos}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={pera}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={pera}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={equal}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <button onClick={() => badFunc()}>7</button>
                            <button onClick={() => successFunc()}>1</button>
                            <button onClick={() => badFunc()}>5</button>
                        </OperationWrapper>


                        {/* MULTIPLICACIÓN */}
                        <OperationWrapper>
                            <figure className="age610">
                                <img 
                                    src={perro}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={perro}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={perro}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={multi}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={perro}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={perro}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <figure className="age610">
                                <img 
                                    src={equal}
                                    alt=""
                                    name="A"
                                    onClick={(e) => letterSelected(e.target.name)}
                                />
                            </figure>
                            <button onClick={() => successFunc()}>6</button>
                            <button onClick={() => badFunc()}>12</button>
                            <button onClick={() => badFunc()}>9</button>
                        </OperationWrapper>

                        <Sound
                            url={sound}
                            autoLoad={true}
                            playStatus={SoundStatus}
                            playFromPosition={0}
                            onFinishedPlaying={() =>
                            setSoundStatus(Sound.status.STOPPED)
                            }
                        />

                    </AddContainer>
                </>
            }

        </GameWrapper>
    )
}

export default PlayGame;
