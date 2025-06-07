import Nav from "./Nav"
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Research from "./Research"
import Publications from './Publications';
import ConferencesAndTalks from './Conference';
import CV from './Cv';
import ScrollToTopButton from './ScrollToTopButton';
import  Contact  from './Contact';
import MathRain from "./MathRain";



function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="h-full  justify-center flex flex-col min-h-screen">
      

     
      
    <Nav/>
    <MathRain/>
    
    
    <main className="flex-1">
    <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/research" element={<Research/>} ></Route>
<Route path="/publications" element={<Publications/>}></Route>
<Route path="/conandtalks" element={<ConferencesAndTalks/>}></Route>
<Route path="/cv" element={<CV/>} ></Route>
<Route path="/contact" element={<Contact/>}></Route>
    </Routes>
          <ScrollToTopButton />
          </main>
    <Footer/>

    </div>
  );

}

export default App;
