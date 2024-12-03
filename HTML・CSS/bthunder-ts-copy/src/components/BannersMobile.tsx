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
import { ItemCarousel } from './ItemCarousel';

export function BannersMobile() {
  return (
    <div className={styles.bannersContainer}>
        <div className={styles.gridContainer1}>
            <div className={styles.topItem1}><a href="https://www.yurakuseika.co.jp/lineup/product_83.html"><img src={Top1}/></a></div>
            <div className={styles.topItem2}><a href="https://caseplay.shop/collections/yurakuseika?utm_source=referral&utm_medium=hp&utm_campaign=yurakuseika"><img src={Top2}/></a></div>
            <div className={styles.topItem3}><ItemCarousel/></div>
        </div>
        <div className={styles.gridContainer2Mobile}>
            <div className={styles.gridItem1Mobile}><a href="https://blackthunder.jp/item/"><img src={Grid3}/></a></div>
            <div className={styles.gridItem2Mobile}><img src={Grid6}/></div>
            <div className={styles.gridContainer3Mobile}>
                <div className={styles.gridItem3Mobile}><a href="https://blackthunder.jp/about/"><img src={Grid2}/></a></div>
                <div className={styles.gridItem4Mobile}><a href="https://blackthunder.jp/history/"><img src={Grid4}/></a></div>
                <div className={styles.gridItem5Mobile}><a href="https://blackthunder.jp/factory/"><img src={Grid5}/></a></div>
                <div className={styles.gridItem6Mobile}><img src={Grid1}/></div>
            </div>
            <div className={styles.gridItem7Mobile}><img src={Grid7}/></div>
            <div className={styles.gridItem8Mobile}><img src={Grid8}/></div>
        </div>
    </div>
  )
}