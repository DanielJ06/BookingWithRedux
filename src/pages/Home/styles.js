import styled from 'styled-components';

export const Container = styled.div`
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        list-style: none;

        li {
            display: flex;
            flex-direction: column;
            background: #fff;
            border-radius: 4px;
            padding: 13px;

            img {
                max-width: 280px;
                max-height: 220px;
                border-radius: 4px;
            }

            strong {
                font-size: 16px;
                line-height: 20px;
                color: #191919;
                margin-top: 10px;
            }

            button {
                margin-top: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                background-color: #191919;
                border: 0;
                border-radius: 4px;
                padding: 10px;
            }
        }
    }
`;

