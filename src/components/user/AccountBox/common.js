import styled from "styled-components";
import { BiArrowBack } from 'react-icons/bi';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 13px;
  color: #283618;
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 12.5px;
  color: #f1f1f1;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: #ddb892;
    font-weight: 300px;
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    color: #283618;
    outline: none;
    border-bottom: 2px solid #283618;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #283618;
  &:hover {
    filter: brightness(1.08);
  }
`;

export const Backbutton = styled(BiArrowBack)`
  width: 40px;
  height: 40px;
  background: #ddb892;
  border-radius: 50px;
  position: absolute;
  top: 130px;
  left: 590px;
  color: #283618;
  cursor: pointer;
  z-index: 1;
  &:hover {
    background: transparent;
    color: #ddb892;
  }

  @media (max-width: 540px) {
    {
      top: 20px;
      left: 20px;
    }
  `;
