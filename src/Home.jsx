import Navbar from './components/navbar/navbar';
import style from './styles/home/home.module.css';

function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.logo}>
            <img src="./munlogo.png" alt='logo'></img>
          </div>
          <div className={style.title}>BITSMUN CHRONICLE</div>
          <div className={style.underTitle}>
            Blog run by BITSMUN Society, BITS Pilani Hyderabad Campus
          </div>
        </div>
        <div className={style.footer}></div>
      </div>
      <section className={style.bitsmun}>
        <div className={style.headName}>BITSMUN Hyderabad 2019</div>
        <div className={style.videoBox}>
          <div className={style.video}></div>
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
      </section>
    </>
  );
}

export default Home;