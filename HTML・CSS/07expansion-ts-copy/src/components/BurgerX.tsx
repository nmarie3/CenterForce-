import {useState} from 'react';
import styles from '../styles/NaviBurger.module.css'

export function BurgerX(){

    const [burgerLine, setBurgerLine] = useState("burgerLine unClicked");
    const [burgerMenu, setBurgerMenu] = useState("hideMenu");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerLine("burgerLine clicked")
            setBurgerMenu("visible")
        } else {
            setBurgerLine("burgerLine unClicked")
            setBurgerMenu("hidden")
        }
    }

    return (
        <div className={styles.burgerStyle}>
            <div className={styles.burgerMenu} onClick={updateMenu}>
                <div className={styles.burgerClass}></div>
                <div className={styles.burgerClass}></div>
                <div className={styles.burgerClass}></div>
            </div>
        </div>
    
    )
};