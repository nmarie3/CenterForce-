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


export function Header() {

    
  return (
    <div className={styles.headerContainer}>
        <ul className={styles.ulContainer}>
          <a href="https://blackthunder.jp/"><img className={styles.logoImg} src={logo}/></a>
          <a href="https://blackthunder.jp/"><img src={navi2}/></a>
          <a href="https://blackthunder.jp/"><img src={navi3}/></a>
          <a href="https://blackthunder.jp/"><img src={navi4}/></a>
          <a href="https://blackthunder.jp/"><img src={navi5}/></a>
          <a href="https://blackthunder.jp/"><img src={navi6}/></a>
          <a href="https://blackthunder.jp/"><img src={navi7}/></a>
        </ul>
        <a href="https://blackthunder.jp/"><img className={styles.shopImg} src={shop}/></a>
    </div>
  )
}
