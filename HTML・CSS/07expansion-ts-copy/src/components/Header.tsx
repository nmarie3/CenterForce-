import styles from "../styles/Header.module.css";
import Logo from "../assests/logo2.png";

export function Header() {
    return (
        <>
        <section>
            <img className={styles.logo} src={Logo}/>
        </section>
        </>


      );
  }
  