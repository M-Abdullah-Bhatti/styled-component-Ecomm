import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    height:100%;
    background-color:#fcf4f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

`
const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
    margin-top:100px;
`
const Description = styled.div`
    font-size:24px;
    margin-bottom:20px;
    font-weight:300;
    ${mobile({textAlign:"center"})}

`
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    margin-bottom:100px;
    ${mobile({width:"80%"})}

`

const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`

const Button = styled.button`
    flex:2;
    border:none;
    background-color:teal;
    color:white;
`


function NewsLetter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite products.</Description>

            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <Send />
                </Button>
            </InputContainer>

        </Container>
    )
}

export default NewsLetter