import styles from "../styles/Navi.module.css"
import { NaviPC } from "./NaviPC";
import {NaviMobile} from "./NaviMobile";
import { items } from "./NaviDetails";


export function Navi() {


    return (
        <>
        <div className={styles.naviContainer}>
            <NaviMobile items={items}/>
            <NaviPC items={items}/>
        </div>
        </>

      );
  }
  