import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import styles from "../styles/Header.module.css";
import logo from "../assests/logo.png";
import navi2 from "../assests/menu-02.png";
import navi3 from "../assests/menu-03.png";
import navi4 from "../assests/menu-04.png";
import navi5 from "../assests/menu-05.png";
import navi6 from "../assests/menu-06.png";
import navi7 from "../assests/menu-07.png";


  
  export function NaviMobile() {
    const [isOpen, setIsOpen] = useState(false);

    const burgerIcon = (
        <TbMenu2
          className={styles.burgerImg}
          size="25px"
          color="white"
          style={{ marginLeft: "10px" }}
          onClick={() => setIsOpen(!isOpen)}
        />
      );
    
      const closeIcon = (
        <VscChromeClose
          className={styles.burgerImg}
          size="25px"
          color="white"
          style={{marginLeft: "10px"}}
          onClick={() => setIsOpen(!isOpen)}
        />
    
      );

    return (
        <div className={styles.headerContainerMobile}>
          <a className={styles.logoImg} href="https://blackthunder.jp/"><img src={logo}/></a>
            <ul className={styles.ulContainer}>
              <a href="https://blackthunder.jp/"><img src={navi2}/></a>
              <a href="https://blackthunder.jp/"><img src={navi3}/></a>
              <a href="https://blackthunder.jp/"><img src={navi4}/></a>
              <a href="https://blackthunder.jp/"><img src={navi5}/></a>
              <a href="https://blackthunder.jp/"><img src={navi6}/></a>
              <a href="https://blackthunder.jp/"><img src={navi7}/></a>
            </ul>
        </div>
      )
}

