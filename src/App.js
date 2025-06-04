import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav"
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Research from "./Research"
import Publications from './Publications';
import ConferencesAndTalks from './Conference';
import CV from './Cv';
import { FaArrowUp } from "react-icons/fa";
import ScrollToTopButton from './ScrollToTopButton';




function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="h-full  justify-center">
      

     
      
    <Nav/>
    
    
    
    
    <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/research" element={<Research/>} ></Route>
<Route path="/publications" element={<Publications/>}></Route>
<Route path="/conandtalks" element={<ConferencesAndTalks/>}></Route>
<Route path="/cv" element={<CV/>} ></Route>
<Route path="/contact"></Route>
    </Routes>
    <Footer/>
          <ScrollToTopButton />

    </div>
  );

}

export default App;
