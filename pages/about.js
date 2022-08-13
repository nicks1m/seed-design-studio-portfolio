import styled from 'styled-components'
import { device } from '../device';

const Container = styled.div`
border-top:1px solid black;
`
const Description = styled.p`
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
@media ${device.tablet}{
      margin-bottom:0;
      font-size:4rem;
`

const about = () => {
    return (
    <Container>
        <Description>
        SEED. Design Studio was conceived in 2022 as a fictitious design studio working with some of the artists and brands
        that the I like. The aim of the website is to showcase my web development skill and eye for design, although
        I acknowledges it might not be for everyone. I love experimental design aesthetics and things that are left-field,
        especially when it comes to music. I hope the website gives you a taste of my world and some of my capabilities as a 
        frontend developer!
        </Description>
    </Container>
    );
};

export default about;