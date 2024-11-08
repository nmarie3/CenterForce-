import styles from "../styles/Navi.module.css"
import { NaviDetails } from "./NaviDetails";
import Beako from "../assests/BEAKO.png";

export function Navi() {



    return (
        <>
        <div className={styles.naviContainer}>
            <NaviDetails/>
        </div>
        <div>
            <a href="https://07th-expansion.net/beako.html">
                <img className={styles.beako} src={Beako}/>
            </a>
        </div>
        </>

      );
  }
  