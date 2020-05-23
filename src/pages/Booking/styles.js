import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
    padding: 30px;
    background: #f3f3f6;
    border-radius: 4px;

    footer {
        display: flex;
        justify-content: flex-end;
    }
`;

export const CardContainer = styled.div`
    padding: 20px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        max-height: 100px;
        border-radius: 5px;
    }
`;

export const Title = styled.h1`
    color: #191919;
`;

export const FinishButton = styled.button.attrs({
    type: "button"
})`
    border: 0;
    display: flex;
    padding: 10px;
    text-transform: uppercase;
    border-radius: 4px;
    margin-top: 10px;
    font-weight: bold; 
    color: #fff;
    background-color: #191919;
`;

export const QtdArea = styled.div`
    display: flex;
    align-items: center;

    input {
        border: 1px solid #eee;
        border-radius: 4px;
        color: #191919;
        padding: 5px;
        width: 45px;
        text-align: center;
    }
`;

export const EmptyCart = styled.section`
    min-height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    svg {
        font-size: 260px;
        color: #999;
        position: absolute;
    }

    div {
        z-index: 1;
        text-align: center;

        h2 {
            font-size: 56px;
        }

        p {
            margin: 12px 0 28px;
            font-size: 16px;
        }
    }
`;

export const StartShopping = styled(Link)`
    background: #191919;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
`;