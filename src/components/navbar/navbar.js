import React, { useState } from 'react'
import styles from '../../styles/home/navbar.module.css'

function Navbar() {
  const [on, setOn]=useState(1)
  return (
    <div className={styles.navContainer}>
      <div className={styles.left}>
        <img id={styles.img} src="./bitsmunNav.png"></img>
      </div>
      <div className={styles.right}>
        <div
          className={on == 1 ? styles.buttonOn : styles.buttons}
          onClick={() => {
            if (on != 1) {
              setOn(1);
            }
          }}
        >
          Home
        </div>
        <div
          className={on == 2 ? styles.buttonOn : styles.buttons}
          onClick={() => {
            if (on != 2) {
              setOn(2);
            }
          }}
        >
          About Us
        </div>
        <div
          className={on == 3 ? styles.buttonOn : styles.buttons}
          onClick={() => {
            if (on != 3) {
              setOn(3);
            }
          }}
        >
          Our Team
        </div>
        <div
          className={on == 4 ? styles.buttonOn : styles.buttons}
          onClick={() => {
            if (on != 4) {
              setOn(4);
            }
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
}

export default Navbar