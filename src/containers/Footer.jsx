import styled from 'styled-components';

const FooterWrapper = styled.nav`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
    width: 100%;
    height: 50px;
    color: #fff;
    background-color: #0f0728;
    font-family: 'Open Sans';
    box-sizing: border-box;

    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 400px;
        
        p {
            margin: 0;
        }
        .location {
            display: flex;
            align-items: center;
            
            i {
                font-size: 1.3em;
                vertical-align: middle;
            }
            .location-text {
                margin-left: 1em;

                p {
                    font-size: .9em;
                }
            }
        }
        .phone {
            display: flex;
            align-items: center;
            
            i {
                font-size: 1.3em;
                vertical-align: middle;
            }
            .phone-text {
                margin-left: 1em;

                p {
                    font-size: .9em;
                }
            }
        }
    }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <small>Copyright ©2021 Pequejuego</small>
            <div className="info">
                <div className="location">
                    <i className="fas fa-map-marker"></i>     
                    <div className="location-text">
                        <p>2da. calle A 45-30 Zona 5</p>
                        <p>Quetzaltenango, Guatemala.</p>
                    </div>
                </div>
                <div className="phone">
                    <i className="fas fa-phone"></i>
                    <div className="phone-text">
                        <p>7767-4233</p>
                        <p>77679-801</p>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}
