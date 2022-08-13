import Link from 'next/Link'
import Image from 'next/image'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const spinAnimation = keyframes`
    0% { transform:rotate(0);  }
    50% { transform:rotate(180); }
    100% { transform:rotate(360deg); }
   }
   `
const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
const BrandWrapper = styled.div`
width:70%;
`
const Brand = styled.h1`
font-size:4rem;
font-weight:300;
margin-top:0;
margin-bottom:0;
color:black;
`
const Wrapper = styled.div`
position:relative;

ul {
    margin-top:0;
    display: flex;
    flex-direction:column;
    color:black;
}

a {
    display:inline-block;
    position:relative;
    font-size:2rem;
    text-decoration:none;
    &::before {
        content:"";
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        width:0%;
        height:2px;
        background-color:black;
        transition:0.5s;
    }
    &:hover::before {
        width:100%;
        left:0;
        right:auto;
    }
}
`

const Nav = () => {
    return (
        <Container >
            <BrandWrapper>
                <Brand >SEED. </Brand>
                <Brand >Design Studio</Brand>
            </BrandWrapper>
            <Wrapper>
                <ul>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/services'>Services</Link>
                    <Link href='/contact'>Contact</Link>
                </ul>
            </Wrapper>
        </Container>
    );
};

export default Nav;