import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import NewsLetters from '../Components/NewsLetters';
import pad from '../image/pad.jpg'

const Container= styled.div`
`;

const Wrapper= styled.div`
padding:50px;
display:flex;
`;
const ImageContainer= styled.div`
 flex:1;`;
const Image= styled.img`
width:100%;
height:90vh;
object-fit:cover;
`;
const InfoContainer= styled.div`
flex:1;
padding:0px 35px;`;
const Title= styled.h1`
font-weight:200;

`;
const Decs= styled.p`
margin:15px 10px;
`;

const Price= styled.span`
font-size:45px;
font-weight:100;
`;

const FilterContainer =styled.div`
width:50%;
margin:15px 0px;
display:flex;
justify-content:space-between;
`;

const Filter =styled.div`
display:flex;
align-items:center;`;

const FilterTitle =styled.span`
font-size:20px;
font-weight:200px;
`;

const FilterColor =styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor:pointer;
`;



const FilterSize =styled.select`
margin:15px;
padding:10px;`;

const FilterSizeOption =styled.option`
padding:25px;`;

const AddContainer =styled.div`
width:50%;
display:flex;
justify-content:space-between;
align-item:center;
`;

const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:600;
`;

const Amount =styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px`;

const Button =styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
     background-color:#f8f4f4
}
`;


export const Product = () => {
  return (
    <Container>
     <Navbar />
     <Announcement />
     <Wrapper>
          <ImageContainer>
               <Image src={pad} />
          </ImageContainer>
          <InfoContainer>
               <Title > SG Pad</Title>
               <Decs>SG cricket brand for 2017 is like Virat Kohli in a high pressure run chase. They have produced a line-up of cricket gear and cricket equipment that is the equivalent of every shot in the book. Not only that every piece of cricket equipment is a smashing success. One of the areas that SG have really produced impeccable products for 2017 is in the range of SG cricket batting pads.</Decs>
               <Price>₹500</Price>
               <FilterContainer >
                    <Filter>
                         <FilterTitle>Color</FilterTitle>
                         <FilterColor color='red'/>
                         <FilterColor color='yellow' />
                         <FilterColor color='green' />
                         <FilterColor color='royalblue' />

                    </Filter>
                    <Filter>
                         <FilterTitle>Size</FilterTitle>
                         <FilterSize>
                              <FilterSizeOption>XS</FilterSizeOption>
                              <FilterSizeOption>S</FilterSizeOption>
                              <FilterSizeOption>M</FilterSizeOption>
                              <FilterSizeOption>L</FilterSizeOption>
                              <FilterSizeOption>XL</FilterSizeOption>
                              <FilterSizeOption>XXL</FilterSizeOption>
                         </FilterSize>
                    </Filter>
               </FilterContainer>
               <AddContainer>
                    <AmountContainer>
                         <Remove></Remove>
                         <Amount>1</Amount>
                         <Add></Add>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
               </AddContainer>
          </InfoContainer>
     </Wrapper>
     <NewsLetters />
     <Footer />
    </Container>
  )
}
