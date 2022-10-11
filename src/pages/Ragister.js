
import React from 'react'
import styled from 'styled-components'
  
const Container =styled.div`
width:100vw;
height:100vh;
background-color:black;
display:flex;
justify-content:center;
align-items:center;`;

const Wrapper =styled.div`
padding:20px;
width:40%;
background-color:white;`;

const Form =styled.form`
display:flex;
flex-wrap:wrap;
`;
const Title =styled.h1`
font-size:24px;
font-weight:600;`;

const Input =styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;`;
const Aggrement =styled.span`
font-size:12px;
margin:20px 0px;
`;
const Button =styled.button`
width:40%;
border:none;
padding:12px;
background-color:teal;
color:white;
cursor:pointer;`;

const Ragister = () => {
  return (
    <Container>
     <Wrapper>
          <Title>
              CREATE AN ACCOUNT
          </Title>
          <Form>
               <Input placeholder="name" />
               <Input placeholder="lastname" />
               <Input placeholder="username" />
               <Input placeholder="email" />
               <Input placeholder="password" />
               <Input placeholder="confirmpassword" />
               <Aggrement>By create an account . I Consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Aggrement>               
               <Button>CREATE</Button>
          </Form>
     </Wrapper>

    </Container>
  )
}

export default Ragister