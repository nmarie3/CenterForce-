import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import styles from "../styles/NaviMobile.module.css";
import logo from "../assests/logo.png";
import navi1 from "../assests/menu-00.png";
import navi2 from "../assests/menu-02.png";
import navi3 from "../assests/menu-03.png";
import navi4 from "../assests/menu-04.png";
import navi5 from "../assests/menu-05.png";
import navi6 from "../assests/menu-06.png";
import navi7 from "../assests/menu-07.png";
import shop from "../assests/menu-08.png"


  
  export function NaviMobile() {
    const [isOpen, setIsOpen] = useState(false);

    const burgerIcon = (
        <TbMenu2
          className={styles.burgerImg}
          size="25px"
          color="white"
          style={{ marginLeft: "10px", zIndex: "900"}}
          onClick={() => setIsOpen(!isOpen)}
        />
      );
    
      const closeIcon = (
        <VscChromeClose
          className={styles.burgerImg}
          size="25px"
          color="white"
          style={{marginLeft: "10px", zIndex: "900"}}
          onClick={() => setIsOpen(!isOpen)}
        />
    
      );

    return (
        <div className={styles.headerContainerMobile} style={isOpen ? {backgroundColor: "rgba(0, 0, 0, 0.9)", height: "100vh", position: "fixed", zIndex: 1000} : {}}>
          {isOpen ? closeIcon : burgerIcon}
          <a className={styles.logoImg} href="https://blackthunder.jp/"><img src={logo}/></a>
          {isOpen && (
            <ul className={styles.ulContainer}>
              <a href="https://blackthunder.jp/news/"><img src={navi2}/></a>
              <a href="https://blackthunder.jp/about/"><img src={navi3}/></a>
              <a href="https://blackthunder.jp/history/"><img src={navi4}/></a>
              <a href="https://blackthunder.jp/factory/"><img src={navi5}/></a>
              <a href="https://blackthunder.jp/column/"><img src={navi6}/></a>
              <a href="https://blackthunder.jp/news/"><img src={navi7}/></a>
            </ul>)}
        </div>
      )
}

