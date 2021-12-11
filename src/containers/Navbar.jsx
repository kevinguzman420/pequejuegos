import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../media/logo_.gif';
import { colors, fonts, fontS } from '../assets/styles';

const NavWrapper = styled.nav`
    display: flex;
    padding: 0 2em;
    width: 100%;
    height: 140px;
    box-sizing: border-box;
    font-family: ${fonts.pri};
    font-size: ${fontS.pri};
    color: ${colors.pri};
    
`;
const Logo = styled.figure`
    margin: 0;
    width: 20%;
    height: 100%;

    img { 
        width: auto;
        height: 100%;
    }
`;
const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 60%;
    height: 100%;

    li {
        margin: 0 2em;
        list-style: none;
        transition: .5s;

        a {
            text-decoration: none;
            color: ${colors.pri};
        }
    }
    li:hover {
        text-shadow: 0 0 5px #03e9f4,
                    0 0 25px #03e9f4,
                    0 0 50px #03e9f4,
                    0 0 150px #03e9f4,
                    0 0 200px #03e9f4;
    }
`;
const AccountBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 20%;
    
    a { 
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 30px;
        border-radius: 25px;
        color: #fff;
        background: ${colors.pri};
        border: none;
        font-size: 1em;
        font-family: ${fonts.pri};
        text-decoration: none;
        cursor: pointer;

        i {
            font-size: .6em;
            margin-right: .5em;
        }
    }
`;

export default function Navbar() {
    return (
        <NavWrapper>
            <Logo>
                <img src={logo} alt="" />
            </Logo>
            <Menu>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/plus/">Plus</Link></li>
                <li><Link to="/diamante/">Diamante</Link></li>
                <li><Link to="/nosotros/">Nosotros</Link></li>
            </Menu>
            <AccountBtn>
                <Link
                    to="/cuenta/"
                ><i className="fas fa-user-circle"></i>Cuenta</Link>
            </AccountBtn>
        </NavWrapper>
    )
}
