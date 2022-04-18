import Navbar from './components/navbar/navbar';
import style from './styles/home/home.module.css'


function App() {
  return (
    <div className={style.container}>
      <div className={style.header}>
      <div className={style.logo}>
       <img src="./bitsmunLogo.png"></img>
      </div> 
        <div className={style.title}>BITSMUN CHRONICLE</div>
        <div className={style.underTitle}>
          Blog run by BITSMUN Society, BITS Pilani Hyderabad Campus
        </div>
      </div>
      <div className={style.footer}>

      </div>
    </div>
  );
}

export default App;
