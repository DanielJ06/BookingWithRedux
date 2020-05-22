import styled from 'styled-components';

export const Container = styled.div`
  
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
    color: #fff;
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