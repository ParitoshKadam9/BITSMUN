import React from 'react';
import style from './styles/home/AboutUs.module.css';

function App() {
    return (
        <>
           <div className={style.BitsMun}>
                <div className={style.Info}>ABOUT US</div>
                <div className={style.ImageBox}>
                    <div className={style.Image}></div>
                    <div className={style.info}>
                        
BITSMUN Society is a student orgnaization in BITS Pilani Hyderabad Campus. With over a hundred members the society is a vibrant forum for discussions on Public Policy, Foreign Policy and Current events.

The BITSMUN conference, held annually, is one of the biggest MUN Conferences in India witnessing over 300 participants from all over the nation and as well as International participants.
                    </div>
                </div>
            </div>     
               
        </>
    );
}

export default App;
