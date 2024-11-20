import styles from "../styles/Navi.module.css";
import BeakoImg from "../assests/BEAKO.png";


export function Beako() {


    return (
        <><div>
            <a href="https://07th-expansion.net/beako.html">
                <img className={styles.beako} src={BeakoImg}/>
            </a>
        </div>
        </>

      );
  }