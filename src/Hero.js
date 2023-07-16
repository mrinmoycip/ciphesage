import { Parallax } from "react-parallax";
import "./App.css";
import Aa from "./images/aa.jpg";
import Bb from "./images/bb.jpg";
import Cc from "./images/cc.jpg";
import Dd from "./images/dd.jpg";
import styled from 'styled-components';
import Navbar from './navbar'

const Gero = styled.div`
  height: 10vh;
  border: 1px solid  ;
  /* scroll-snap-align: center;
  font-size: large; */
   /* position: fixed; */
   color:white;
  background: url("./images/back.Aa");

`;

function Hero() {
  return <Gero>
    <h1 class="text-sky-400/100">Navbar</h1>
<Navbar/>
  </Gero>;
}

export default Hero;
