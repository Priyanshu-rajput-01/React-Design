import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './Home';
import First from "./Design/Parallaxsceen/index";
import Second from "./Design/NeonCat/index";
import Third from "./Design/Textanimate/index";
import Fourth from "./Design/loaders/index";
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
  <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cat">CAT</Link>
          </li>
          <li>
            <Link to="/parallex">Parallex</Link>
          </li>
          <li>
            <Link to="/text">text</Link>
          </li>
          <li>
            <Link to="/loader">loader</Link>
          </li>
          
        </ul>

        <hr />

        
        <Routes>
          <Route exact path="/"
            element={<Home />}/>
          <Route path="/cat"
           element={ <Second />}/>
          <Route path="/parallex"
           element={ <First />}/>
          <Route path="/text"
            element={<Third />}/>
          <Route path="/loader"
            element={<Fourth />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;
