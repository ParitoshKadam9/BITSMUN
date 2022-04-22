import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';
import reportWebVitals from '../reportWebVitals';
import style from './styles/home/OurTeam.module.css';
import Footer from '.components/footer/footer';

function App() {
    return (
      <div className="wrapper">
        <Card
          img=""
          title="X"
          description="Abc"
        />
  
        <Card
          img=""
          title="Y"
          description="Abc"
        />
  
        <Card
          img=""
          title="Z"
          description="Abc"
        />
      </div>
    );
  }

  export default App;
  
  function Card(props) {
    return (
      <div className="card">
        <div className="card__body">
          <img src={props.img} class="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <Navbar />
        <App />
        <Footer/>
    </React.StrictMode>
    );

reportWebVitals();