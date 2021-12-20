import './App.css';
import Navbar from "./Navbar";
import Home from "./Home"
import ProjectDetails from './ProjectDetails';
import CV from "./CV";
import NotFound from "./NotFound";
import { ThemeProvider } from './contexts/ThemeContext';

import ScrollToTop from './components/ScrollToTop';

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <main className="App">
      <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<><Navbar/><Home/> </>} />
        <Route path="/projects" element={<><Navbar/><ProjectDetails/></>} />
        <Route path="/cv" element={<CV/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </ThemeProvider>
    </main>
  );
}

export default App;
