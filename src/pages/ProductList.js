import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import NewsLetters from '../Components/NewsLetters';
import Product from '../Components/Product';

const Container= styled.div``;

const Title= styled.h1`
margin-top:15px;`;
const FilterContaine= styled.div`
display:flex;
justify-content:space-between;`;

const Filter= styled.div`
margin:35px;
`;

const FilterText =styled.span`
 font-size:20px;
 font-weight:600;
 margin-right:20px;`;

 const Select =styled.select`
 padding:11px 10px;
  margin-right:15px;
 `;
 
 const Option =styled.option`
 padding-top:5px;
 padding-bottom:5px;
 background-color:grey;
 `;

const ProductList = () => {
  return (
    <Container>
     <Navbar></Navbar>
     <Announcement />
     <Title>Cricket kit</Title>
     <FilterContaine>
       <Filter>
      <FilterText>Filter Products:</FilterText>
      <Select>
          <Option disabled selected >Color</Option>
          <Option >White</Option>
          <Option >Black</Option>
          <Option >Red</Option>
          <Option >Blue</Option>
          <Option >Yellow</Option>
          <Option >Green</Option>
      </Select>
      <Select>
          <Option disabled selected >Size</Option>
          <Option >S</Option>
          <Option >M</Option>
          <Option >L</Option>
          <Option >XL</Option>
          <Option >XXl</Option>
      </Select>
       </Filter>
       <Filter>
       <FilterText>Short Products:</FilterText>
       <Select>
          <Option disabled selected >Price</Option>
          <Option >lessthan500</Option>
          <Option >500 to 1000</Option>
          <Option >1000 to 1500</Option>
          <Option >1500 to 2000</Option>
          <Option >2000 to 10000</Option>
      </Select>
     </Filter>

     </FilterContaine>
     <Product />
     <NewsLetters />
     <Footer />

    </Container>
  )
}

export default ProductList