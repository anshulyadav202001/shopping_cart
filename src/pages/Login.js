import React from 'react'
import styled from 'styled-components';

const Container =styled.div`
width:100vw;
height:100vh;
background-color:black;
display:flex;
justify-content:center;
align-items:center;`;

const Wrapper =styled.div`
padding:20px;
width:25%;
background-color:white;`;

const Form =styled.form`
display:flex;
flex-direction:column;
`;
const Title =styled.h1`
font-size:24px;
font-weight:600;`;

const Input =styled.input`
flex:1;
min-width:40%;
margin:10px 0px ;
padding:10px;`;


const Button =styled.button`
width:40%;
border:none;
padding:12px;
background-color:teal;
color:white;
margin-top:10px;
cursor:pointer;`;

const Link=styled.a`
 margin:10px;
 font-size:15px;
 font-weight:500;
 text-decoration:underline;
 cursor:pointer;
`;

const Login = () => {
  return (
     <Container>
     <Wrapper>
          <Title>
          SIGN IN
          </Title>
          <Form>
               
               <Input placeholder="username" />
               <Input placeholder="password" />               
               <Button>Login</Button>
               <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>
               <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
     </Wrapper>

    </Container>
  )
}

export default Login