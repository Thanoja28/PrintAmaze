import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
  url(https://www.paradigmgraphics.com/wp-content/uploads/2020/10/Printing-Services-home.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeaderContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeaderItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeaderH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));
  letter-spacing: 3px;
`;

export const HeaderP = styled.p`
  font-family: 'PT Sans', sans-serif;
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeaderBtn = styled.button`
  font-family: 'PT Sans', sans-serif;
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: transparent;
  border: 5px solid #926c15;
  color: #fff;
  font-weight: 500;
  transition: 0.2s ease-out;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #926c15;
  }
`;