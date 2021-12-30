import styled from 'styled-components';

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #000;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: rgba(222, 226, 230, 0.4) -5px 5px, rgba(222, 226, 230, 0.4) -10px 10px, rgba(222, 226, 230, 0.4) -15px 15px, rgba(222, 226, 230, 0.1) -20px 20px, rgba(222, 226, 230, 0.05) -25px 25px;;
  &:hover {
    opacity:0.3;
  }
  }
  `;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e9ecef;
  color: #fca311;
  transition: 0.2 ease-out;
  font-weight: 700;
  &:hover {
    background: #fca311;
    transform scale(1.03);
    transition: 0.4s ease-out;
    cursor: pointer;
    color: #e9ecef;
  }
`;