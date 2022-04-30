import React from 'react';
import styled from 'styled-components';
import CategoryItem from '../components/CategoryItem';
import { categories } from '../components/data';
import { mobile } from '../responsive';

const Container = styled.div`

    display:flex;
    padding:20px;
    justify-content:space-between;
    ${mobile({flexDirection:"column",padding:"0px" })}

`

function Categories() {
  return (
        <Container>
            {categories.map( (items) =>(
                    <CategoryItem items={items} key={items.id} />
            ))}
        </Container>
  )
}

export default Categories