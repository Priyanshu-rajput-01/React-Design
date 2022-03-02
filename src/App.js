import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './Home';
import First from "./Design/Parallaxsceen/index";
import Second from "./Design/NeonCat/index";
import Third from "./Design/Textanimate/index";
import Fourth from "./Design/loaders/index";
import Clock from "./Design/clock/index";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
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
