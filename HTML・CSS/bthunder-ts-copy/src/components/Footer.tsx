import styles from "../styles/Footer.module.css";
import FB from "../assests/footer-sns-facebook.png";
import X from "../assests/footer-sns-twitter.png";
import Yuraku from "../assests/logo-yuraku.png";



export function Footer() {

    
    return (
      <div className={styles.footerContainer}>
          <div className={styles.SNS}>
            <a href="https://www.facebook.com/yurakuseika"><img src={FB}/></a>
            <a href="https://x.com/Black_Thunder_"><img src={X}/></a>
          </div>
          <div className={styles.footerNavi}>
          <a href="https://yurakuseika.co.jp/"><img src={Yuraku}/></a>
            <a href="https://www.yurakuseika.co.jp/company/about.html">会社概要</a>
            <a href="https://www.yurakuseika.co.jp/privacy/">プライバシーポリシー</a>
            <a href="https://www.yurakuseika.co.jp/security/">情報セキュリティーポリシー</a>
            <a href="https://www.yurakuseika.co.jp/customer/inquiry.html">お問い合わせ</a>
          </div>
          <p>© 2024 YURAKU CONFECTIONERY CO., LTD.</p>
      </div>
    )
  }