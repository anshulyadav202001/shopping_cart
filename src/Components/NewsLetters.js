
import SendIcon from '@mui/icons-material/Send';
import React from "react";
import styled from "styled-components";
import {mobile} from '../Responsive';

const Container =styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title =styled.h1`
font-size:35px;
margin-bottom:14px
`;
const Description =styled.p`
font-size:24px;
font-weight:300;
letter-spacing:4px;
${mobile({textAlign:"center"})}
`;
const InputContainer =styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid grey;
${mobile({width:"80%"})}
`;
const Input =styled.input`
border:none;
flex:8;
padding-left:20px;
`;
const Button =styled.button`
flex:1;
border:none;
background-color:teal;
color:white;
`;

const NewsLetters = () => {
  return (
    <Container>
      <Title>NewsLetters</Title>
      <Description> Get timely updates your favorite Products.</Description>
      <InputContainer>
        <Input  placeholder="Your email"/>

        <Button>
        <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetters;
