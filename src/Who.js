import { Parallax } from "react-parallax";
import "./App.css";
import Aa from "./images/aa.jpg";
import Bb from "./images/bb.jpg";
import Cc from "./images/cc.jpg";
import Dd from "./images/dd.jpg";
import styled from "styled-components";

const Gero = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  color:white;

`;

function Who() {
  return (
    <Gero>
      <h1 class="text-gray-50">Contents</h1>
    </Gero>
  );
}

export default Who;
