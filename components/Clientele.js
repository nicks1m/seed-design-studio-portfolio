import styled from 'styled-components'
const Name = styled.span`
font-size:1.5rem;
text-transform:uppercase;
padding:0;
width:50%;
transition:1.5s;
&:hover{
    color:white;
    cursor:crosshair;
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: black;
}
`
const Clientele = ({c}) => {
    return (
            <Name>{c}</Name>
    );
};

export default Clientele;