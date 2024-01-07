import { BrowserRouter } from "react-router-dom";
import {Navbar, Projects} from "./components"
import {About, Contact, Experience, Home}  from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
