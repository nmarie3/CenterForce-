import styles from "../styles/Header.module.css";
import Logo from "../assests/logo2.png";

export function Header() {
    return (
        <>
        <section>
        <a href="https://07th-expansion.net/index.html">
            <img className={styles.logo} src={Logo}/>
            </a>
        </section>
        </>


      );
  }
  