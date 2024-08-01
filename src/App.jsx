
import './App.css'
import { About } from './Components/About/About';
import { Experience } from './Components/Experience/Experience';
import { Introduction } from './Components/Introduction/Introduction';
import { Navbar } from './Components/Navbar/Navbar';
import { Seperator } from './Components/Seperator/Seperator';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';


//Homepage with the different sections of the page, seperated by a line.
function App() {
  return (
        <div className = 'App'>
          <Navbar />
          <Seperator/>
          <Introduction/>
          <Seperator/>
          <Projects/>
          <Seperator/>
          <About/>
          <Seperator/>
          <Experience/>
          <Seperator/>
          <Contact/>
          
        </div>

  )
}

export default App
