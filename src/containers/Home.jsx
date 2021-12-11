import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../assets/styles';
import Footer from "./Footer";
import logo from '../media/logo_.gif';
import Games15 from './Games15';
import Games610 from './Games610';

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    /* background-color: black; */
`;

// MODAL
const SelectAgeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 500px;
    height: 300px;
    border-radius: 10px;
    background-color: ${colors.back};
    box-shadow: 0 0 10px 5px ${colors.pri};
`;
const Logo = styled.figure`
    margin: 0;
    width: 100px;
    height: 100px;

    img {
        width: 100%;
        height: 100%;
    }
`;
const H1text = styled.h4`
    text-transform: uppercase;
    margin: 0;
    margin-top: 1em;
    color: ${colors.sec};
`;
const OptionsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1.5em;
    width: 100%;
    height: 100px;

    button {
        width: 100px;
        border: 0;
        background-color: ${colors.pri};
        cursor: pointer;
        border-radius: 5px;

        h1, h3 {
            margin: 0;
        }
        h1 {
            margin-bottom: .5em;
        }
    }
`;

export default function Home() {
    const [askAge, setAskAge] = useState(true);
    const [age15, setAge15] = useState(false);
    const [age610, setAge610] = useState(false);

    const selectAge15 = (e) => {
        e.stopPropagation();
        setAskAge(false);
        setAge15(true);
        setAge610(false);
    }
    const selectAge610 = (e) => {
        e.stopPropagation()
        setAskAge(false);
        setAge610(true);
        setAge15(false);
    }

    return (
        <HomeWrapper>
            { askAge &&
                <SelectAgeWrapper>
                    <Logo>
                        <img src={logo} alt="" />
                    </Logo>
                    <H1text>selecciona tu rango de edad para iniciar</H1text>
                    <OptionsWrapper>
                        <button
                            onClick={(e) => selectAge15(e)}
                        >
                            <h1 onClick={(e) => selectAge15(e)}>1-5</h1>
                            <h3 onClick={(e) => selectAge15(e)}>AÑOS</h3>
                        </button>
                        <button
                            name="AGE610"
                            onClick={(e) => selectAge610(e)}
                        >
                            <h1 onClick={(e) => selectAge610(e)}>6-10</h1>
                            <h3 onClick={(e) => selectAge610(e)}>AÑOS</h3>
                        </button>
                    </OptionsWrapper>
                </SelectAgeWrapper>
            }

            { age15 &&
                <Games15
                    setAskAge={setAskAge}
                    setAge15={setAge15}
                    setAge610={setAge610}
                />
            }
            { age610 &&
                <Games610
                    setAskAge={setAskAge}
                    setAge15={setAge15}
                    setAge610={setAge610}
                />
            }
            <Footer />
        </HomeWrapper>
    )
}
