import react from 'react';
import "./App.css";
import Home from './Home';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam';
import ContactPage from './ContactPage';

function App() {
  return(
    <div className="App">
        <Home />
        <AboutUs />
        <OurTeam />
        <ContactPage/>
    </div>
  )
}      

export default App;
