import styles from "../styles/Pickup.module.css";
import PickupImg from "../assests/hazelnut.png";


export function Pickup() {

    
    return (
        <div className={styles.pickupContainer}>
        <div className={styles.pickupImgContainer}>
          <a href="https://blackthunder.jp/column/1-36/"><img src={PickupImg}/></a>
        </div>
        <a href="https://blackthunder.jp/column/1-36/"><div className={styles.pickupTxt}>
          <p className={styles.pickupTitle}>『ブラックサンダー優雅な余韻ジャンドゥーヤ』裏話!!</p>
          <p className={styles.pickupSum}>【もくじ】0.序章1.ジャンドゥーヤを選んだ理由2.突然の妄想劇場から見えた、プレミアムな味わいへの道すじ3.「優雅な余韻」に込めた思い0.序章
                ブラックサンダーの「おいしさ」を発展させた「想像を超えるおいしさ」を具現化して、み</p>
          <div className={styles.bottomSum}>
            <p className={styles.pickupDate}>2021.04.09</p>
            <div className={styles.pickupReadMobile}><p className={styles.pickupRead}>もっと見る！！</p></div>
          </div>
          <div className={styles.bolt}></div>
        </div></a>
      </div>
    )
  }
  