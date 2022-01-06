import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './header.css';
import { Modal } from '../Form/Modal';





import {
  HeaderContainer,
  HeaderContent,
  HeaderItems,
  HeaderH1,
  HeaderP,
  HeaderBtn
} from './HeaderComponents';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <HeaderContainer className="HeaderContainer">
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeaderContent>
        <HeaderItems>
          <HeaderH1 className="h1">Excellent Printing world</HeaderH1>
          <HeaderP className="p">Design helps us to stand out</HeaderP>
          <HeaderBtn className="head-btn" onClick={openModal}>Place order Now</HeaderBtn>
          <Modal showModal={showModal} setShowModal={setShowModal} />

        </HeaderItems>
      </HeaderContent>
    </HeaderContainer>
    </>
  );
};

export default Header;