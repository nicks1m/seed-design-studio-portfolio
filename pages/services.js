import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:column;
font-size:1.5rem;
margin-bottom:30px;
min-height:100vh;
`
const Header = styled.div`
font-size:4rem;
`
const ContentBox = styled.div`
display:flex;
flex-direction:${props => props.row};
justify-content:space-between;
align-items:center;
border-top:1px solid black;

p{
    color:black;
    margin-bottom:0;
    margin-top:0;
    letter-spacing:-1.5px;
    text-transform:uppercase;
    font-size:5rem;
    transition:0.5s;
    &:hover{
    color:white;
    cursor:crosshair;
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: black;
  }
  
`
const Info = styled.div`
display:flex;
flex-direction:column;
span{
    display:inline-block;
    position:relative;
    font-size:2rem;
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
const services = () => {
    return (
        <Container>
            <ContentBox>
                <p>LEVERAGING OVER A DECADE WORTH OF EXPERIENCES TO TAILOR CUSTOM SOLUTIONS TO FIT YOUR NEEDS.</p>
            </ContentBox>
            <ContentBox row='row'>
                <Header>
                    <h2>GRAPHIC DESIGN</h2>
                </Header>
                <Info>
                    <span>Print Design</span>
                    <span>Apparel Design and Production</span>
                    <span>Logo Design</span>
                </Info>
            </ContentBox>
            <ContentBox row='row-reverse'>
                <Header>
                    <h2>WEB DESIGN</h2>
                </Header>
                <Info>
                    <span>Technical Leadership</span>
                    <span>Consultancy</span>
                    <span>Web Development</span>
                    <span>UI/UX Design</span>
                </Info>
            </ContentBox>
            <ContentBox row='row'>
                <Header>
                    <h2>BRAND CONSULTANCY</h2> 
                </Header>
                <Info>
                    <span>Visual Identity</span>
                    <span>Rebranding</span>
                    <span>Collateral Creation</span>
                    <span>Production Assistance</span>
                </Info>
            </ContentBox>
        </Container>
    );
};

export default services;