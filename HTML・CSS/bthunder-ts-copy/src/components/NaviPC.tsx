import React from 'react';
import styles from "../styles/Header.module.css";
import logo from "../assests/logo.png";
import navi2 from "../assests/menu-02.png";
import navi3 from "../assests/menu-03.png";
import navi4 from "../assests/menu-04.png";
import navi5 from "../assests/menu-05.png";
import navi6 from "../assests/menu-06.png";
import navi7 from "../assests/menu-07.png";
import shop from "../assests/online-shop.png"


export function NaviPC() {

    
  return (
    <div className={styles.headerContainer}>
      <a className={styles.logoImg} href="https://blackthunder.jp/"><img src={logo}/></a>
        <ul className={styles.ulContainer}>
          <a href="https://blackthunder.jp/"><img src={navi2}/></a>
          <a href="https://blackthunder.jp/"><img src={navi3}/></a>
          <a href="https://blackthunder.jp/"><img src={navi4}/></a>
          <a href="https://blackthunder.jp/"><img src={navi5}/></a>
          <a href="https://blackthunder.jp/"><img src={navi6}/></a>
          <a href="https://blackthunder.jp/"><img src={navi7}/></a>
        </ul>
        <a className={styles.shopImg} href="https://blackthunder.jp/"><img src={shop}/></a>
    </div>
  )
}
