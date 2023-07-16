import React from 'react';
import styled from 'styled-components';
import Aa from "./images/aa.jpg";

const Section = styled.div`
  height: 10vh;

  scroll-snap-align: center;
  position:static;
  width:200px;
  background: url("./images/Aa.jpg");
`;
const navbar = () =>{
    return(
        <Section>
        </Section>
    )
}


export default navbar;
