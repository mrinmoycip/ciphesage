import { Parallax } from "react-parallax";
import "./App.css";
import Aa from "./images/aa.jpg";
import Bb from "./images/bb.jpg";
import Cc from "./images/cc.jpg";
import Dd from "./images/dd.jpg";
import styled from 'styled-components';


const Work = styled.div`
  height: 100vh;
`;

const Work1 = styled.h1`
  color: white;
`;


function Works() {
  return (
    <Work >
          <Work1>Contents 2</Work1>
    </Work>
  );
}

export default Works;
