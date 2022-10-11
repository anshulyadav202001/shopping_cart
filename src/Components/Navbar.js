import React from 'react';
import styled from 'styled-components';
import {FiSearch} from 'react-icons/fi';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from "../Responsive";


const Container = styled.div`
height:90px;
${mobile({height:"50px"})}
`;
const Wrapper = styled.div`
padding:12px 10px;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({padding:"5px 0px"})}
`;

const Left =styled.div`
flex:1;
display:flex;
align-items:center;
`;

const Language= styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}
`;

const SearchContainer=styled.div`
display:flex;
align-items:center;
border:0.5px solid lightgrey;
margin-left:35px;
padding:5px;
`;
const Input =styled.input`
border:none;
${mobile({width:"50px"})}
`;
const Center =styled.div`
flex:1;
text-align:center;
`;
const Logo =styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}
`;
const Right =styled.div`
flex:1;
display:flex;
align-item:center;
justify-content: flex-end;
${mobile({justifyContent:"center"})}
`;
 const MenuItem = styled.div`
 font-size:14px;
 cursor:pointer;
 ${mobile({fontSize:"12px",marginLeft:"1px"})}`


const Navbar = () => {
  return (
    <Container>
     <Wrapper>
          <Left>
          <Language>EN</Language>
          <SearchContainer>
               <Input placeholder='search' />
               <FiSearch style={{color:"gray",fontSize:16}} />
          </SearchContainer>
          </Left>
          <Center><Logo>Shopping Cart</Logo></Center>
          <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>SignUp</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
           </Badge>
  
  
            </MenuItem>
          </Right>
     </Wrapper>
    </Container>
  )
}

export default Navbar