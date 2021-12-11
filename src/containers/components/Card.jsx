import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../componentStyles';
import { fonts } from '../../assets/styles';

const CardWrapper = styled.div`
    border: 1px solid ${props => props.color};
    padding: .5em;
    width: 350px;
    min-height: auto;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 7px 4px ${props => props.color};

    h1, h2 {
        margin: 0;
        text-transform: uppercase;
    }
    .title {
        margin-bottom: .5em;

        span { 
            color: ${props => props.color}
        }
    }
    .price {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1em;
        width: 100%;
        text-align: center;
        
        strong {
            margin: 0;
            margin-left: .5em;
        }
    }
`;
const FeaturesWrapper = styled.div`
    width: 100%;
    height: auto;
`;
const ButtonStyled = styled(Button)`
    margin-bottom: 2em;
    background-color: ${props => props.color};
`;

// SUBCOMPONENT
const FeatureWrapper = styled.div`
    display: flex;
    margin-bottom: 3em;
`;
const IconWrapper = styled.div`
    width: 20%;
    padding-top: .5em;

    i {
        font-size: 1.8em;
        color: ${props => props.color};
    }
`;
const DescriptionWrapper = styled.div`
    width: 80%;
    text-align: start;


    strong {
        margin: 0;
        font-size: 1.8em;
        font-family: ${fonts.pri};
    }
    p {
        font-size: .9em;
        margin: 0;
    }
`;
function Feature({ icon, title, description, color }) {
    return (
        <FeatureWrapper>
            <IconWrapper
                color={color}
            >
                <i className={ icon }></i>
            </IconWrapper>
            <DescriptionWrapper>
                <strong>{ title }</strong>
                <p>{ description }</p>
            </DescriptionWrapper>
        </FeatureWrapper>
    )
}

function Card({ plan, price, color }) {
    const navigate = useNavigate();

    return (
        <CardWrapper
            // color={plan==="PLUS" ? colors.sec : colors.pri}
            color={color}
            plan={plan}
        >
            <h2 className="title">pequejuegos <span>{plan}</span></h2>
            <div className="price">
                <h1>${price}.00</h1>
                <strong>/month</strong>
            </div>
            
            <FeaturesWrapper>
                { plan === "FREE" &&
                    <>
                        <Feature
                            icon="fas fa-dice"
                            title="Juego básicos"
                            description="Te permitiran practicar con los juegos de prueba y entender el verdadero potencial que tienes."
                            color={color}
                        />
                        <Feature
                            icon="fas fa-puzzle-piece"
                            title="Inicio perfecto"
                            description="Ideal para el inicio del desarrollo mental de los niños, antes del Plus o Diamante."
                            color={color}
                        />
                        <ButtonStyled
                            color={color}
                            onClick={() => navigate("/")}
                        >Adquirir</ButtonStyled>
                    </>
                }
                { plan === "PLUS" &&
                    <>
                        <Feature
                            icon="fas fa-heart"
                            title="Renovación de vidas"
                            description="Si terminas tus vidas mientras practicas, en poco tiempo se te renovarán."
                            color={color}
                        />
                        <Feature
                            icon="fas fa-dumbbell"
                            title="Demuestra tus habilidades"
                            description="Este plan te brinda una mejor manera de que demuestres tus habilidades."
                            color={color}
                        />
                        <Feature
                            icon="fas fa-brain"
                            title="Ejecicios preparados"
                            description="Los ejercicios con esta cuenta han sido preparados especialmente para tu crecimiento mental."
                            color={color}
                        />
                        <Feature
                            icon="fas fa-cubes"
                            title="Diversidad"
                            description="Este plan cuenta con mayor diversidad de juegos que el Free."
                            color={color}
                        />
                        <ButtonStyled
                            color={color}
                            onClick={() => navigate("/pagar/")}
                        >Adquirir</ButtonStyled>
                    </>
                }
                { plan === "DIAMOND" &&
                    <>
                        <Feature
                            icon="fas fa-heart"
                            title="Renovación de vidas"
                            description="Si terminas tus vidas mientras practicas, en poco tiempo se te renovarán."
                            color={color}
                        />
                        <Feature
                            icon="fas fa-dumbbell"
                            title="Demuestra tus habilidades"
                            description="Este plan te brinda una mejor manera de que demuestres tus habilidades."
                            color={color}
                        />
                        <Feature
                            icon="fas fa-brain"
                            title="Ejecicios preparados"
                            description="Los ejercicios con esta cuenta han sido preparados especialmente para tu crecimiento mental."
                            color={color}
                        />
                        <Feature
                            icon="fas fa-cubes"
                            title="Diversidad"
                            description="Este plan cuenta con mayor diversidad de juegos que el Free."
                            color={color}
                        />
                        <Feature
                            icon="fas fa-user-tie"
                            title="Mentor"
                            description="Los estudiantes en este nivel cuentan con el apoyo de un mentor para resolver sus dudasl"
                            color={color}
                        />
                        <Feature
                            icon="fas fa-medal"
                            title="Certificación"
                            description="Al terminar un nivel de aprendizaje, los estudiantes Diamante, reciben una certificación por su esfuerzo."
                            color={color}
                        />
                        <ButtonStyled
                            color={color}
                            onClick={() => navigate("/pagar/")}
                        >Adquirir</ButtonStyled>
                    </>
                }
            </FeaturesWrapper>
        </CardWrapper>
    )
}

export default Card;
