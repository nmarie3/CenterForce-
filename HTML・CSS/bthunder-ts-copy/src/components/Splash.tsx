import styles from "../styles/Splash.module.css";
import splash from "../assests/modal-pc.png";


type SplashProps = {
  onClose: () => void;
};

export function Splash({onClose}: SplashProps)  {
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "splashContainer") {
      onClose();
    }
  };
    
    return (
      <div onClick={handleOutsideClick} className={styles.splashContainer}>
          <a href="https://blackthunder.yurakuseika.co.jp//"><img src={splash}/></a>
      </div>
    )
}