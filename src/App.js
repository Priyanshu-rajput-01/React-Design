import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import First from "./Design/Parallaxsceen/index";
import Second from "./Design/NeonCat/index";
import Third from "./Design/Textanimate/index";
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);
function App() {
  
  return (

  <>
  <Third/>
  </>
  );
}

export default App;
