import styles from "../styles/Info.module.css"
import {InfoChange} from "./InfoChange";

export function Info() {



    return (
        <>
        <div className={styles.infoWrapper}>
            <div className={styles.infoLinks}>
                <a href="https://07th-expansion.net/osirase.html">07thExpansionより大切なお知らせ</a>
                <a href="https://07th-expansion.net/kenkai.html" className={styles.centerText}>同人活動での<br />二次創作に関する当サークルの見解</a>
            </div>
        <InfoChange/>
        <p className={styles.copyright}>Copyright © 2023年 07th Expansion Official Website. All Rights Reserved.</p>
        </div>
        </>


      );
  }
