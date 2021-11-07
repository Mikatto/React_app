import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavWrapper=styled.div`
    grid-template-columns: repeat(3,100px);
    padding:10px 0 20px 0;
    display: grid;
    justify-items: center;
    justify-content: center;
    align-content: center;
    position: sticky;
    top: 0;
    background-color: #f8f8f8;
    z-index:2;
`
export const NavItem=styled(NavLink)`
    text-decoration:none;
    color:black;
    padding:8px;
    position:relative;
    font-weight:600;
    &:hover {
        color: #1a76d2;
        background-color:#e0eafd;
        border-radius: 6px
    }

    &.active {
        color: #1a76d2;

        &:before {
            content:'';
            position:absolute;
            background-color:#1a76d2;
            width:8px;
            height:8px;
            border-radius:50%;
            left: 45%;
            top: 40px;
        }
    }
`