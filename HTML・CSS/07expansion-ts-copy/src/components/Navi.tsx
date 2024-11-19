import styles from "../styles/Navi.module.css"
import { NaviPC } from "./NaviPC";
import {NaviMobile} from "./NaviMobile";
import { items } from "./NaviDetails";
import Beako from "../assests/BEAKO.png";


export function Navi() {


    return (
        <>
        <div className={styles.naviContainer}>
            <NaviMobile items={items}/>
            <NaviPC items={items}/>
        </div>
        <div>
            <a href="https://07th-expansion.net/beako.html">
                <img className={styles.beako} src={Beako}/>
            </a>
        </div>
        </>

      );
  }
  