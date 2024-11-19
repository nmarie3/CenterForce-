import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import styles from "../styles/Navi.module.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";


type NaviItem = {
  title: string;
  link?: { label: string; url: string }[];
};

type NaviMobileProps = {
  items: NaviItem[];
};

export function NaviMobile({ items }: NaviMobileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

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


  const plusIcon = (
    <FaPlus
      className={styles.plusIcon}
      size="9px"
      color="#E91926"
      style={{position: "absolute", right: "0"}}
      onClick={() => setDropOpen(!dropOpen)}
    />
  );

  const minusIcon = (
    <FaMinus
      className={styles.minusIcon}
      size="9px"
      color="#E91926"
      style={{position: "absolute", right: "0" }}
      onClick={() => setDropOpen(!dropOpen)}
    />

  );

  return (
    <nav className={styles.naviMainMobile}>
      {isOpen ? closeIcon : burgerIcon}
      {isOpen && (
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
          {items.map((item, index) => (
            <div key={index} className={styles.mapAfterLine}>
              <ul className={styles.titleStyleMobile}>
                {item.title}
                {item.link && (dropOpen ? minusIcon : plusIcon)}
              </ul>
              {item.link && (
                <ul className={styles.dropdownStyleMobile}>
                  {item.link.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}>
                      <FaLocationArrow className={styles.arrowIcon} />
                      {link.label}
                    </a>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className={`${styles.titleStyleMobile} ${styles.beakoRoom}`}>
          <a href="https://07th-expansion.net/beako.html">ベア子部屋</a>
          </div>
        </div>
      )}
    </nav>
  );
}