
import { useRef, useEffect } from "react";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Bg from "./main";
import Second from "./Design/NeonCat/index";
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);
function Bgeffect() {
  useEffect(() => {
    

  }, []);
  return (

  <>
  <Second/>
  </>
  );
}

export default Bgeffect;
