import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaForumbee } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { BsCart4 } from 'react-icons/bs';

export const Nav = styled.nav`
    background: rgba(0, 0, 0, 0.4);
    height: 80px;
    display: flex;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    padding-left: 8px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`;

export const NavLink = styled(Link)`
    font-family: 'PT Sans', sans-serif;
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #ddb892;
      transform: translate(1px, 1px);
    }

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
`;

export const Bars = styled(FaForumbee)`
  font-size: 2rem;
  transform: translate(-50%, 50%);
  &:hover {
    color: #ddb892;
  }
`;

export const SearchBar = styled(BsSearch)`
  font-size: 3rem;
  transform: translate(-50%, 50%);
  padding: 0 10px;
  color:#fff;
  &:hover {
    color: #ddb892;
  }
`;

export const LoginUser = styled(BiUser)`
  font-size: 3rem;
  transform: translate(-50%, 50%);
  padding: 0 10px;
  color:#fff;
  &:hover {
    color: #ddb892;
    z-index: 1;
  }
`;

export const AddToCart = styled(BsCart4)`
  font-size: 3rem;
  transform: translate(-50%, 50%);
  padding: 0 10px;
  color: #fff;
  &:hover {
    color: #ddb892;
  }
`;



