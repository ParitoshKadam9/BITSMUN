import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';
import style from './styles/home/OurTeam.module.css';
import Footer from './components/footer/footer';

function App() {
    return (
      <div className={style.ourteam}>
        <div className={style.title}>OUR TEAM</div> 
        <div className={style.teamone}>
        <div className={style.office}>
        <div className={style.heading}>BITSMUN OFFICE</div> 
        <div className={style.officemembers}>Secretary-General: Ankit Roy</div>
        <div className={style.officemembers}>Director-General: Sahiti Vedam</div>
        <div className={style.officemembers}>Secretary: Soumya Teotia</div>
        <div className={style.officemembers}>Deputy Secretary-General: Varun Srinivas</div>
        </div>
        <div className={style.director}>
        <div className={style.heading}>DIRECTORS</div> 
        <div className={style.directors}>Preeti Srihari</div>
        <div className={style.directors}>Sayyam Tiwari</div>
        <div className={style.directors}>Reet Agarwal</div>
        <div className={style.directors}>Arjun Khandelwal</div>
        <div className={style.directors}>Shresth Gattani</div>
        </div>
        </div>
        <div className={style.teamtwo}>
          <div className={style.design}>
          <div className={style.heading}>DESIGN</div>
          <div className={style.designmembers}>Dishank Srivastava</div>
          <div className={style.designmembers}>Anupam Mitra</div>
          <div className={style.designmembers}>Yashraj Jha</div>
          </div>
          <div className={style.content}>
        <div className={style.heading}>CONTENT</div> 
        <div className={style.contentmembers}>Preeti Srihari</div>
        <div className={style.contentmembers}>Reet Agarwal</div>
        </div>
        <div className={style.publicity}>
        <div className={style.heading}>PUBLICITY</div> 
        <div className={style.publicitymembers}>Krutik Soni</div>
        <div className={style.publicitymembers}>Anupam Manas</div>
        </div>
        </div>
        <div className={style.tech}>
        <div className={style.heading}>TECH TEAM</div>
        <div className={style.techteam}>Varun Rohida</div>
        <div className={style.techteam}>Paritosh Kadam</div>
        <div className={style.techteam}>Nikhil MS</div> 
        </div>
      </div>
    );
  }

export default App;

  const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <Navbar />
        <App />
        <Footer/>
    </React.StrictMode>
    );

