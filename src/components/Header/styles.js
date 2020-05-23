import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;

    & strong {
      display: block;
      color: #191919;
    }

    & span {
      font-size: 12px;
      color: #999;
    }

    > span:last-child {
    background: #7159c1;
    color: #fff;
    font-size: 11px;
    line-height: 20px;
    text-align: center;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: absolute;
    right: -2px;
    top: -6px;
    display: none;
  }
`;