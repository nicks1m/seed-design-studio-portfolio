import Head from 'next/head'
import Link from 'next/link'
import { server } from '../config'
import styled from 'styled-components'
import { data } from '../data'
import Image from 'next/image'
import Clientele from '../components/Clientele'
import { Rerousel } from 'rerousel';
import { useRef } from 'react'
import { keyframes } from 'styled-components'
const lineAnimation = keyframes`
    0% { width:0; opacity:0.1; }
    100% { width:100%; opacity:1; }
   }
   `
const Container = styled.div`
height:100%;
`
const ServicesBox = styled.div`
animation-name:${lineAnimation};
animation-duration:3.5s;
border-top:1px solid black;
border-bottom:1px solid black;
margin-bottom:15px;

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

const ImageBox = styled.div`
margin-bottom:15px;
span{
  font-size:3rem;
}
`
const ContentBox = styled.div`
border-top:1px solid black;
display:flex;
font-size:5rem;
margin-top:50px;
`
const ClientList = styled.div`
display:flex;
flex-wrap:wrap;
width:50%;
padding:2rem;
`
const Header = styled.div`
width:50%;
align-content:start;
h2{
  margin-top:0;
}
`
const ContactBox = styled.div`
padding:0 2rem;
a {
  display:inline-block;
  position:relative;
  font-size:2rem;

  &::before {
    content:"";
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    width:0%;
    height:2px;
    background-color:black;
    transition:1s;
  }
  &:hover::before {
    width:100%;
    left:0;
    right:auto;
  }
}
`


export default function Home({ articles }) {
  return (
    <div>
      <Container>
        <ServicesBox>
          <p>We are a specialist creative studio focusing on bringing conceptual ideas to life.
            Our work is centered around fashion, music, design
            and the arts. We love to challenge norms and be subversive in a creative way.
            We're passionate about challenging the
            conventional. We truly believe in not settling for
            ordinary. We're the antidote to common. We will not settle for less.
          </p>
        </ServicesBox>
        <ImageBox>
          <Rerousel >
            {data.images.map((item,index) => {
              return <Image layout="intrinsic" key={index} src={item}  />
            })}
          </Rerousel>
          <span>Samizdat FW19 MENSWEAR - COSMIC TERROR</span>
        </ImageBox>
        <ContentBox>
          <Header>
            <h2>
              CLIENTELE
            </h2>
          </Header>
          <ClientList>
            {data.clients.map((c,index) => {
              return <Clientele key={index} c={c} />
            })}
          </ClientList>
        </ContentBox>
        <ContentBox>
          <Header>
            <h2>CONTACT US</h2>
          </Header>
          <ContactBox>
            <Link href='/contact'>
              REACH OUT TO US
            </Link>
          </ContactBox>
        </ContentBox>
      </Container>
    </div>
  )
}

