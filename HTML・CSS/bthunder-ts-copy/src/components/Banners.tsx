import React from 'react';
import styles from "../styles/Banners.module.css"
import Top1 from "../assests/kv-item-01-1.jpg";
import Top2 from "../assests/kv-item04.jpg";
import Grid1 from "../assests/kv-item-06.gif";
import Grid2 from "../assests/kv-item-05.png";
import Grid3 from "../assests/kv-item-11.jpg";
import Grid4 from "../assests/kv-item-09-op.png";
import Grid5 from "../assests/kv-item-08-op.png";
import Grid6 from "../assests/top-bnr01.gif";
import Grid7 from "../assests/top-bnr02.gif";
import Grid8 from "../assests/top-bnr03.gif";
import Pickup from "../assests/hazelnut.png";

export function Banners() {
  return (
    <div className={styles.bannersContainer}>
        <div className={styles.gridContainer1}>
            <div className={styles.topItem1}><a href="https://www.yurakuseika.co.jp/lineup/product_83.html"><img src={Top1}/></a></div>
            <div className={styles.topItem2}><a href="https://caseplay.shop/collections/yurakuseika?utm_source=referral&utm_medium=hp&utm_campaign=yurakuseika"><img src={Top2}/></a></div>
            <div className={styles.topItem3}>T3</div>
        </div>
        <div className={styles.gridContainer2}>
            <div className={styles.gridItem1}><img src={Grid1}/></div>
            <div className={styles.gridItem2}><a href="https://blackthunder.jp/about/"><img src={Grid2}/></a></div>
            <div className={styles.gridItem3}><a href="https://blackthunder.jp/item/"><img src={Grid3}/></a></div>
            <div className={styles.gridItem4}><a href="https://blackthunder.jp/history/"><img src={Grid4}/></a></div>
            <div className={styles.gridItem5}><a href="https://blackthunder.jp/factory/"><img src={Grid5}/></a></div>
            <div className={styles.gridItem6}><img src={Grid6}/></div>
            <div className={styles.gridItem7}><img src={Grid7}/></div>
            <div className={styles.gridItem8}><img src={Grid8}/></div>
        </div>
        <div className={styles.pickupContainer}>
          <div className={styles.pickupImgContainer}>
            <a href="https://blackthunder.jp/column/1-36/"><img src={Pickup}/></a>
          </div>
          <a href="https://blackthunder.jp/column/1-36/"><div className={styles.pickupTxt}>
            <p className={styles.pickupTitle}>『ブラックサンダー優雅な余韻ジャンドゥーヤ』裏話!!</p>
            <p className={styles.pickupSum}>【もくじ】0.序章1.ジャンドゥーヤを選んだ理由2.突然の妄想劇場から見えた、プレミアムな味わいへの道すじ3.「優雅な余韻」に込めた思い0.序章
                  ブラックサンダーの「おいしさ」を発展させた「想像を超えるおいしさ」を具現化して、み</p>
            <div className={styles.bottomSum}>
              <p className={styles.pickupDate}>2021.04.09</p>
              <p className={styles.pickupRead}>もっと見る！！</p>
            </div>
            <div className={styles.bolt}></div>
          </div></a>
        </div>
    </div>
  )
}
