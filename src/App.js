
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import { Contact } from './components/Contact/Contact';
import { Header } from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';


function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <About/>
      <Portfolio/>
      <Blogs/>
      <Contact/>


    </div>
  );
}

export default App;
