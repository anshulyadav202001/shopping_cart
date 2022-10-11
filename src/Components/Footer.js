
import { FacebookOutlined, Instagram, LinkedIn, Mail, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components';
import {mobile} from '../Responsive'
const Container =styled.div`
display:flex;
background-color:black;
color:white;
${mobile({flexDirection:"column"})}

`;
const Left =styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;
const Logo=styled.h1``;
const Desc=styled.p`
padding:10px 0px`;
const SocialContainer=styled.div`
display:flex;
`;
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
justify-content:center;
align-items:center;
margin:15px`;



const Center =styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`;

const Title =styled.h3`
margin-bottom:30px;

`;

const List =styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;
const ListItem = styled.li`
width:50%;
margin-bottom:10px`;

const Right=styled.div`
flex:1;
`;
 const ContactItem= styled.div`
 margin:15px;

 `;



const Footer = () => {
  return (
    <Container>
     <Left>
          <Logo>Shopping Cart</Logo>
          <Desc >Batting Gloves. A pair of batting gloves will be included in your cricket kit. Batting gloves can protect your fingers and knuckles from injury while facing bowlers. Most kits contain batting …
          </Desc>
          <SocialContainer>
               <SocialIcon color="3B5999">
                 <FacebookOutlined  />
               </SocialIcon>
               <SocialIcon color="E4405F">
                 <Instagram />
               </SocialIcon>
               <SocialIcon color="55ACEE">
                 <Twitter />
               </SocialIcon>
               <SocialIcon color="E60023">
                 <LinkedIn />
               </SocialIcon>
          </SocialContainer>
 
     </Left>
     <Center>
     <Title>Useful Links</Title>
      <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man fashion</ListItem>
          <ListItem>Woman fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
         
      </List>
     </Center>
     <Right>
        <Title>Contact</Title>
        <ContactItem><Room />
          RamRaght Road ,Aligarh(202001)
        </ContactItem>
        <ContactItem><Phone/>
          +917088886004
        </ContactItem>
        <ContactItem>
          <Mail />Shoopingcart@gmail.com
        </ContactItem>
     </Right>
    </Container>
  )
}

export default Footer