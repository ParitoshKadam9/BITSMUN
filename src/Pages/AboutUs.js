import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';
import reportWebVitals from '../reportWebVitals';
import style from './styles/home/AboutUs.module.css';
import Footer from '.components/footer/footer';

function App() {
    return (
        <>
           <div className={style.BitsMun}>
                <div className={style.Info}>What is BITSMUN</div>
                <div className={style.ImageBox}>
                    <div className={style.Image}></div>
                    <div className={style.info}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum. remaining essentially
                        unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishi
                    </div>
                </div>
                <div className={style.Changes}>Changes we've made</div>
                <div className={style.ImageBox}>
                    <div className={style.Image}></div>
                    <div className={style.info}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum. remaining essentially
                        unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishi
                    </div>
                </div>
                <div className={style.gallery}>Gallery</div>
                <div className={style.ImageBox1}>
                    <div className={style.Image}></div>
                    <div className={style.Image}></div>
                    <div className={style.Image}></div>
                    <div className={style.Image}></div>
                    <div className={style.Image}></div>
                    <div className={style.Image}></div>
                </div>
                <div className={style.value}>We value your participation</div>
                    <div className={style.info1}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum. remaining essentially
                        unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishi
                    </div>
                <div className={style.why}>Why we are doing this</div>
                    <div className={style.info1}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum. remaining essentially
                        unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishi
                    </div>
            </div>
        </>
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

reportWebVitals();