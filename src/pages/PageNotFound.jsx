import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    text-align:center;
`
const Title = styled.span`
    font-size:30px;

`
const Hr = styled.hr`
  background-color: #eee;
  border:none;
  height:1px;
  margin-top:10px;
  `

function PageNotFound() {
  return (
    <Container>
        <Title>
            404 error! Page Not Found
        </Title>
        <Hr />
    </Container>
  )
}

export default PageNotFound