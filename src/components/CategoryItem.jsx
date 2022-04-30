import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
   flex:1;
   margin:3px;
   /* padding: 3px; */
   height:70vh;
 position: relative;
`
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height:"30vh"})}

/* object-fit:contain; */
`
const Info = styled.div`
   position: absolute;
   top:0;
   bottom:0;
   width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Title = styled.h1`
   color:white;
   margin-bottom:20px;
`
const Button = styled.button`
   border:none;
   padding: 10px;
   background-color: white ;
   color:grey;
   cursor:pointer;
   font-weight:600;
`




function CategoryItem({items}) {

   const navigate = useNavigate();
  return (

   <Container>
       <Image src={items.img}/>
       <Info>
           <Title>{items.title}</Title>
           <Button onClick = {() => navigate("/productlist")}>SHOP NOW </Button>
       </Info>
   </Container>
  )
}

export default CategoryItem