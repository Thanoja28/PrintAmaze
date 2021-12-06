import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

import {
  HeaderContainer,
  HeaderContent,
  HeaderItems,
  HeaderH1,
  HeaderP,
  HeaderBtn
} from './HeaderComponents';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <HeaderContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeaderContent>
        <HeaderItems>
          <HeaderH1>Excellent Printing world</HeaderH1>
          <HeaderP>Ready in 1 day</HeaderP>
          <Link to='/LoginContainer'>
          <HeaderBtn>Place order Now</HeaderBtn>
          </Link>
        </HeaderItems>
      </HeaderContent>
    </HeaderContainer>
    </>
  );
};

export default Header;