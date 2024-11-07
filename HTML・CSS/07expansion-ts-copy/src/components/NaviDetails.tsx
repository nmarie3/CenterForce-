import styles from "../styles/Navi.module.css"



type SideNavi = {
    title: string;
    content?: JSX.Element;
}


function NaviDetails() {


    return (
        <div className={styles.navibox}>
            <p className={styles.dropdown}>作品一覧</p>
            <p className={styles.dropdown}>イベント</p>
            <p className={styles.dropdown}>その他お仕事</p>
            <p className={styles.dropdown}>Download</p>
            <p className={styles.dropdown}>お取扱店舗</p>
            <p className={styles.dropdown}>お問い合わせ</p>


        </div>



      );
  }
  
  export default NaviDetails;