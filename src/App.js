import { Parallax } from "react-parallax";
// import "./App.css";
import styled from "styled-components";

import Contacts from "./Contacts";
import Hero from "./Hero";
import Who from "./Who";
import Works from "./Works";

import Aa from "./images/aa.jpg";
import Bb from "./images/bb.jpg";
import Cc from "./images/cc.jpg";
import Dd from "./images/dd.jpg";

const Comp = styled.div`
  height: 100vh;
  /* scroll-snap-type: y mandatory; */
   overflow-y: auto;
  scrollbar-width: 1px; 
  background: url("https://4kwallpapers.com/images/walls/thumbs_3t/4523.jpg");
  &::-webkit-scrollbar{
    display: none;
      /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
  }
  
  `;

function App() {
  return (
    <Comp>
      <Hero />
      <Who />
      <Works />
      <Contacts />
    </Comp>

    //  <Parallax strength={600} bgImage={Aa} className='width = {400}'>
    //     <div className="content">
    //       <div className="text-content blur">Normal Parallax</div>
    //     </div>
    //   </Parallax>

    //   <Parallax strength={600} bgImage={Bb}>
    //     <div className="content">
    //       <div className="text-content">Normal Parallax</div>
    //     </div>
    //   </Parallax>

    //   <Parallax strength={600} bgImage={Cc}>
    //     <div className="content">
    //       <div className="text-content">Normal Parallax</div>
    //     </div>
    //   </Parallax>

    //   <Parallax strength={600} bgImage={Dd}>
    //     <div className="content">
    //       <div className="text-content">Normal Parallax</div>
    //     </div>
    //   </Parallax>
    //   <div className="content"></div>
  );
}

export default App;
