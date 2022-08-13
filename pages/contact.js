import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
min-height:100vh;
`
const Header = styled.div`
font-size:4rem;
`

const ContactBox = styled.div`
display:flex;
flex-direction:column;
span{
    display:inline-block;
    position:relative;
    font-size:2rem;
    margin-left:50%;
    &::before{
        content:"";
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        width:0;
        height:2px;
        background-color:black;
        transition:1s;
    }
    &:hover::before{
        width:100%;
        left:0;
        right:auto;
    }
    &:hover{
        cursor:crosshair;
    }
}
`

const contact = () => {
    return (
        <Container>
                <Header>
                    <h2>DROP US AN EMAIL</h2>
                </Header>
                <ContactBox>
                    <span>hello@seed-design.com</span>
                    <span>Studio 385, Hackney Central, E1 CXX</span>
                </ContactBox>


        </Container>
    );
};

export default contact;