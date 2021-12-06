import React from 'react';
import styled from 'styled-components';
import { AccountBox } from '../AccountBox';
import { Backbutton } from './common';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar'


const AppContainer = styled.div`
  background: rgb(221,184,146);
  background: radial-gradient(circle, rgba(221,184,146,1) 0%, rgba(221,184,146,1) 9%, rgba(40,54,24,1) 98%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function LoginContainer() {
    return (
      <>
      <Navbar />
      <AppContainer>
        <Link to='/'>
        <Backbutton />
        </Link>
        <AccountBox />
      </AppContainer>
      </>
    )
}

export default LoginContainer;
