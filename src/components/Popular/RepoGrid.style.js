import styled from 'styled-components';

export const SlItem = styled.div`
    font-weight:600;
    color:${props=>props.isSelectedLanguage?`#1a76d2`:`black`};
    cursor:pointer;
    &:hover {
        color: #90979f;
    }
`

export const SlList = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    gap: 24px;
    margin-left: auto;
    margin-right: auto;
    height: 44px;
    background-color: #ffffff;
    align-content: center;
    position: sticky;
    top: 65px;
    z-index:2;
    border-bottom:1px solid #e1e1e1;
`
export const Card = styled.div`
    display: grid;
    grid-auto-flow: row;
    justify-items: center;
    gap:12px;
    background-color: #f5f5f5;
    padding: 24px;
    border-radius:24px;
`
export const CardRank = styled.div`
    font-weight:700;
    color:#c5c5c5;
`
export const CardOwner = styled.div`
    font-weight:700;
`

export const CardCount = styled.div`
    font-weight:600;
    color:#8b8b8b;
`
export const CardLink = styled.a`
    font-weight:500;
    color:#1a76d2;
`