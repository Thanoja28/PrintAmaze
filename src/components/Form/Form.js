import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import Navbar from '../Navbar/Navbar';
import { useSpring, animated } from 'react-spring';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const style1 = useSpring({
      from: {opacity: 0, marginTop: -100},
      to: { opacity: 1, marginTop: 0 },
      config: { duration: 1300 }
  })
  
  return (
      <>
      <Navbar />
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
        <animated.div style={style1} >
          <img className='form-img' src='https://i.stack.imgur.com/pNhWG.png' alt='webtech' />
        </animated.div>
        </div>

        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess /> 
        )}

      </div>
      </>
    
  );
};

export default Form;