import Nav from './Nav'
import Head from 'next/head';
import styled from 'styled-components'
const Container = styled.div`
padding:0px 15px;
`
const Body = styled.div`
`
const Footer = styled.div`
background-color:white;
position:sticky;
bottom:0;
width:100%;
border-top:1px solid black;
display:flex;
justify-content:space-between;
color:black;

`
const Layout = ({ children }) => {
    return (
        <Container>
            <Head>
                <title>SEED. Design Studio</title>
                <meta name="keywords" content='Design Agency' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300&display=swap" rel="stylesheet" />
            </Head>
            <Nav />
            <Body >
                {children}
            </Body>
            <Footer>
                <h3>hello@seed-design.com</h3>
                <h4>Hackney Central, London, UK</h4>
            </Footer>
        </Container>
    );
};

export default Layout;