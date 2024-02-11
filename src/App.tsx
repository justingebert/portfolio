import { BrowserRouter } from "react-router-dom";
import {Navbar, Projects} from "./components"
import {About, Contact, Experience, Home}  from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" relative z-0 ">
          <div>
            <Navbar />
            <Home />
          </div>
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
