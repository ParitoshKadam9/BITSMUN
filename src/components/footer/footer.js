import React from 'react'
import styles from '../../styles/home/footer.module.css'

function Footer() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.head}>Follow Us</div>
            <div className={styles.subhead}>
              <div className={styles.logos}></div>
              <div className={styles.logos}></div>
              <div className={styles.logos}></div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.head}>Contact Us</div>
            <div className={styles.subhead}>
              <div className={styles.number}>1234567890</div>
              <div className={styles.email}>bitsmunHyderabad@gmail.com</div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.head}>BITSMUN Hyderabad</div>
            <div className={styles.subhead}>
              something about bitsmun hyderabad, just anything.
            </div>
          </div>
        </div>
        <div className={styles.UnderFooter}>
          <div className={styles.copy}>
            Copyright 2022 All rights reserved. Designed by BITSMUN
            Hyderabad
          </div>
        </div>
      </>
    );
}

export default Footer