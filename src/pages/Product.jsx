import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../Footer'
import { mobile } from '../responsive';


const Container = styled.div`
     
`
const Wrapper = styled.div`
     padding: 50px;
     display: flex;
    ${mobile({padding:"10px", flexDirection:"column"})}

`
const ImgContainer = styled.div`
     flex:1;
`
const Image = styled.img`
     width:100%;
     height:90vh;
     object-fit:cover;
    ${mobile({height:"40vh"})}

`
const InfoContainer = styled.div`
     flex:1;
     padding: 0px 50px;
    ${mobile({padding:"10px"})}

`
const Title = styled.h1`
     font-weight:500;
`
const Desc = styled.p`
     margin:20px 0px;
`
const Price = styled.span`
     font-weight:100;
     font-size:40px;
`

const FilterContainer = styled.div`
   
    display: flex;
    justify-content:space-between;
    margin:30px 0px;
    width: 50%;
    ${mobile({width:"100%"})}


`
const Filter = styled.div`
   display: flex;
   align-items:center;
`
const FilterTitle = styled.span`
     font-size:20px;
     font-weight:200;
`
const FilterColor = styled.div`
     width:20px;
     height:20px;
     border-radius:50%;
     background-color:${props => props.color};
     margin:0px 5px;
     cusrsor:pointer;
`
const FilterSize = styled.select`
   margin-left:10px;
`
const FilterSizeOption = styled.option`
  
`
const AddContainer = styled.div`
  display: flex;
    justify-content:space-between;
    /* margin:30px 0px; */
    align-items:center;
    width: 50%;
    ${mobile({width:"100%"})}

`
const AmountContainer = styled.div`
     display: flex;
     justify-content:space-between;
     font-weight:700;
     align-items:center;
`
const Amount = styled.option`
     width: 30px;
     height:30px;
     border-radius:10px;
     border:1px solid teal;
     display:flex;
     align-items:center;
     justify-content:center;
     margin:0px 5px;
`
const Button = styled.button`
     padding:15px;
     border:2px solid teal;
     background-color:white;
     cusrsor:pointer;
     font-weight:500;

     &:hover{
          background-color:#f8f4f4 ;
     }
`

function Product() {
     return (
          <Container>
               <Navbar />
               <Announcement />

               <Wrapper>

                    <ImgContainer>
                         <Image src="images/jumpsuit.jpg" />
                    </ImgContainer>

                    <InfoContainer>
                         <Title>Denim Jumpsuit</Title>
                         <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus voluptates tenetur quia id est quam cupiditate consequatur, harum iusto molestiae et iure magni dicta distinctio! Laboriosam quisquam maxime delectus! Eum!</Desc>
                         <Price>$ 20</Price>

                         <FilterContainer>
                              <Filter>
                                   <FilterTitle>Color:</FilterTitle>
                                   <FilterColor color="black" />
                                   <FilterColor color="darkblue" />
                                   <FilterColor color="gray" />
                              </Filter>
                              <Filter>

                                   <FilterTitle>Size:</FilterTitle>
                                   <FilterSize>
                                        <FilterSizeOption>XS</FilterSizeOption>
                                        <FilterSizeOption>S</FilterSizeOption>
                                        <FilterSizeOption>M</FilterSizeOption>
                                        <FilterSizeOption>L</FilterSizeOption>
                                        <FilterSizeOption>XL</FilterSizeOption>
                                   </FilterSize>
                              </Filter>
                         </FilterContainer>

                         <AddContainer>
                              <AmountContainer>
                                   <Remove />
                                   <Amount>1</Amount>
                                   <Add />
                              </AmountContainer>
                              <Button>ADD TO CART</Button>
                         </AddContainer>


                    </InfoContainer>


               </Wrapper>

               <NewsLetter />
               <Footer />
          </Container>
     )
}

export default Product