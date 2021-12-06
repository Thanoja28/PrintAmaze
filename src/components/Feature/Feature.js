import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Amazing Company</h1>
      <p>Get your logo, business cards and brochures designed by the professionals</p>
      <Link to='/LoginContainer'>
        <FeatureButton>Place an Order</FeatureButton>
      </Link>
    </FeatureContainer>
  );
};

export default Feature;