import React, { useState } from 'react';
import styled from 'styled-components';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
// import batandball2 from '../Image/batandball2.jpeg';
import {sliderItems} from '../data';
import {mobile} from '../Responsive'

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
margin-top:3%;
position:relative;
overflow:hidden;
${mobile({display:"none"})}
`;

const Arrow=styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction === "left" && "10px"};
right:${props=>props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`;

const Wrapper=styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props =>props.slideIndex * -100}vw);
`;

const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
`;
const ImgContainer =styled.div`
height:100%;
 flex:1;

`;
const Image =styled.img`
height:80%;
margin-left:10%;
margin-top:10%;
`;
const InfoContainer=styled.div`
flex:1;
padding:20px;
`;

const Title=styled.h1`
font-size:70px;
margin-bottom:35px;
`;
const Desc=styled.p`
font-size:20px;
font-wight:300;
text-transform:upper-case;
letter-spacing:3px;
`;
const Button=styled.button`
padding:10px;
color:black;
border-radius:25px;
font-size:20px;
margin-top:2%;
border:1px solid grey;
`;

const Slider = () => {
   
  const [slideIndex,setSlideIndex]=useState(0)

  const handleCkick=(direction)=>{


    if(direction==="left"){
      setSlideIndex(slideIndex >0 ? slideIndex-1 :2)
    } else{
      setSlideIndex(slideIndex<2 ? slideIndex+1:0)
    }
  }
  return (
    <Container>
     <Arrow direction="left" onClick={()=>handleCkick('left')}>
         <FiChevronLeft />
     </Arrow>
     <Wrapper slideIndex={slideIndex}>
      {
        sliderItems.map((item)=>(
          <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
           <Image src={item.img} ></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>
               {item.title}
            </Title>
            <Desc>
             {item.desc}
            </Desc>
            <Button>
             SHOW NOW
            </Button>
          </InfoContainer>
          </Slide>
        )
      )}
     </Wrapper>
     <Arrow direction="right" onClick={()=>handleCkick('right')}>
          <FiChevronRight />
     </Arrow>
    </Container>
  )
}

export default Slider