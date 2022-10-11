import React from 'react'
import styled from 'styled-components'
import Products from './Products';
import {popularProduct} from '../data';

const Container =styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
`;

const Product = () => {
  return (
    <Container>
     {
          popularProduct.map(item=>(
               <Products item={item} key={item.id} />
          ))
     }
    </Container>
  )
}

export default Product