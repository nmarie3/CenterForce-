import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import styles from "../styles/Navi.module.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";


type NaviItem = {
  title: string;
  url?: string;
  link?: { label: string; url: string }[];
};

type NaviMobileProps = {
  items: NaviItem[];
};

export function NaviMobile({ items }: NaviMobileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState <number | null> (null);

  const toggleDrop = (index: number) => {
    setDropOpen(dropOpen === index ? null : index);
  };

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
    <>
    {isOpen ? closeIcon : burgerIcon}
    <nav className={styles.naviMainMobile}
    style={isOpen ? {backgroundColor: "rgba(0, 0, 0, 0.9)", paddingTop: "100px", paddingBottom: "100vh", top:"-20px"} : {}}>
      {isOpen && (
        <div>
          {items.map((item, index) => (
            <div key={index} className={styles.mapAfterLine}>
              <ul className={styles.titleStyleMobile}
              onClick={() => toggleDrop(index)}>
                <a href={item.url}>{item.title}</a>
                {item.link && (dropOpen === index ? <FaMinus className={styles.minusIcon} /> : <FaPlus className={styles.plusIcon} />)}
              </ul>
              {item.link && dropOpen === index && (
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
    </>
  );
}