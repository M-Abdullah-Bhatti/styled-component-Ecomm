import React from 'react';
import styled from 'styled-components';
import Product from '../components/Product';
import { popularProducts } from '../components/data';

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

function Products() {
  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products