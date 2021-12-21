import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import First from "./Design/Parallaxsceen/index";
import Second from "./Design/NeonCat/index";
import Third from "./Design/Textanimate/index";
import Fourth from "./Design/loaders/index";
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);
function App() {
  
  return (

  <>
  <Fourth/>
  </>
  );
}

export default App;
