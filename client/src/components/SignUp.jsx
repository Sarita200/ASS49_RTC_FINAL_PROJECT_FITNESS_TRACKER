import React from 'react'
import styled from 'styled-components'
import TextInput from './TextInput';
import Button from './Button';


const Container=styled.div`

`;
const Title = styled.div`
    font-size:30px;
    font-weight:800;
    color: ${({ theme }) => theme.text_primary};
`;
const Span=styled.div`
    font-size:;
    font-weight:400;
    color: ${({ theme }) => theme.text_secondary + 90};
`;

const SignUp =() => {
  return (
    <Container>
        <div>
            <Title>Welcome to Fitness Tracker💪</Title>
            <Span>Please login with your details here</Span>
        </div>
        <div style={{
            display: "flex",
            gap: "20px",
            flexDirection: "column"
        }}>
            <TextInput
            placeholder="Enter Your Email"
            />
            
            <TextInput
            placeholder="Enter Your Password"
            password
            />
            <Button text="SignUp"/>
        </div>
   </Container>
  )
}

export default SignUp
