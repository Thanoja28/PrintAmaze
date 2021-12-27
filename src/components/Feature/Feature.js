import React from 'react';
import { FeatureButton } from './FeatureElements';
import { Link } from 'react-router-dom';
import  { FeatureContainer } from './FeatureElements'; 
import './Feature.css';


const Feature = () => {
  return (
    <>
    <FeatureContainer className="wrapper">
      <h1>Amazing Company</h1>
      <p>Get your logo, business cards and brochures designed by the professionals</p>
        <Link to='/Form'>
          <FeatureButton>Place an Order</FeatureButton>
        </Link>
    </FeatureContainer>
    </>
  );
};

export default Feature;