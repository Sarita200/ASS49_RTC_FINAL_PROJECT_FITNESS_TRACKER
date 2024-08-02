import React, { useState } from 'react'
import styled from 'styled-components';
import LogoImage from "./../utils/Images/Logo.png";
import AuthImage from "./../utils/Images/AuthImage.jpg";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import './Authentication.css'

const Logo = styled.img`
  position: absolute;
  width: 70px;
  top: 40px;
  left: 60px;
  z-index: 10px;
`;

const Image = styled.img`
  position : relative;
  height : 100%;
  width: 100%;
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px){
  font-size:14px;
  }
  `;
const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor:pointer;
  transition: all 0.3s ease;
  font-weight: 600;

`;

const Authentication = () => {
  const [login,setLogin] = useState(false);
  return (
    <div className='Container'>
        <div className='Left'>
          <Logo src={ LogoImage }/>
          <Image src={AuthImage}/>
        </div>
        <div className='Right'>
          { !login ?( 
            <>
            <SignIn/>SignIn
          <p className='Text'>
            Don't have an account ? <span className='TextButton' onClick={() =>setLogin(true)}>SignUp</span>
          </p>
            </> )
            : (
              <>
              <SignUp/>SignUp
                <Text>Already have an account? <TextButton onClick={() =>setLogin(false)}>SignIn</TextButton></Text>
              </>
            ) }
        </div>
    </div>
  )
}

export default Authentication 