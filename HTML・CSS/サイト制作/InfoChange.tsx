import React, {useState} from "react";
import styles from "../styles/Info.module.css";
import renaTwitter from "../assests/twitter.png"
import old07 from "../assests/bg_moon.png"

type TabContent = {
    title: string;
    content: JSX.Element;
};


export function InfoChange() {
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabContents: TabContent[] = [
        {
            title: "最新情報",
            content:
                <div className={styles.links}>
                    <p>2024年10月30日</p>
                    <a href="https://07th-expansion.net/topics/topics23.html">新作『幻想牢獄のカレイドスコープ2』2025年2月14日発売</a>
                    <p>2024年09月27日</p>
                    <a href="https://07th-expansion.net/topics/topics22.html">2D×3D同時進行プロジェクト『ブラザーアッシュ』情報公開！</a>
                    <p>2024年09月14日</p>
                    <a href="https://07th-expansion.net/reserve/cdgood.html">CD うみねこのなく頃に　Stage of the golden Witch ～ Memorial sound collection from EP1-EP4～予約開始！</a>
                    <p>2024年09月11日</p>
                    <a href="https://07th-expansion.net/topics/topics21.html">07thLIVE「うみねこのなく頃に唱」チケット予約開始！</a>
                    <p>2024年09月11日</p>
                    <a href="https://07th-expansion.net/topics/topics20.html">うみステEP5上演決定＆EVE開催決定！</a>
                    <p>2024年08月22日</p>
                    <a href="https://07th-expansion.net/topics/topics19.html">ひぐらしのなく頃に 鬼(3)09.12発売！</a>
                    <p>2024年08月19日</p>
                    <a href="https://07th-expansion.net/topics/topics18.html">うみステEp.4グッズ販売のお知らせ</a>
                    <p>2024年08月19日</p>
                    <a href="https://07th-expansion.net/topics/topics17.html">うみステEp.1～3DVD通販のお知らせ</a>
                    <p>2024年08月02日</p>
                    <a href="https://07th-expansion.net/topics/topics16.html">オリジナル舞台【あなた方は閉じ込められました。】情報解禁！</a>
                    <p>2024年08月02日</p>
                    <a href="https://07th-expansion.net/topics/topics15.html">ひぐらしのなく頃に令 色尊し編 3巻 8/9発売！</a>
                    <p>2024年07月18日</p>
                    <a href="https://07th-expansion.net/topics/topics14.html">うみステ4EVEグッズ販売のお知らせ</a>
                    <p>2024年06月03日</p>
                    <a href="https://07th-expansion.net/topics/topics13.html">うみステEp4情報解禁!</a>
                </div>
        },
        {
            title: "07th Expansionとは",
            content:
                <div>
                    <p>はじめまして、07th Expansionの代表、竜騎士07です。</p>
                    <p>僕の代表作である【ひぐらしのなく頃に】を発表してから、はや15年以上が経ちました。 応援してくださる皆様のお陰で、アニメや漫画などにメディア化していただき、多くの方に僕の作品を知って頂くこととなりました。</p>
                    <p>他にも、【うみねこのなく頃に】【彼岸花の咲く夜に】【ローズガンズデイズ】【トライアンソロジー】など、皆様に楽しんで頂けるよう、作品を作ってまいりました。 これらの作品も、コンシューマーゲーム、舞台化など、皆様のお陰でより多くの方々に知って頂ける機会を頂きました。</p>
                    <p>このサイトに置いてある体験版や作品紹介は、すべて僕の「原作」で構成されています。 漫画、アニメ、色々な媒体でもしも楽しんで下さった方も、もしご興味があれば、原作の魅力もどうぞ知って頂けたら幸いです。</p>
                    <p>2018年 竜騎士07</p>
                    
                    <a href="https://x.com/07th_official">
                        <img src={renaTwitter} className={styles.icon}/>
                    </a>
                    <a href="https://07th-expansion.net/kyu/Main.htm">
                        <img src={old07} className={styles.icon}/>
                    </a>
                    </div>

        }
    ];

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div>
        <div className={styles.tabWrapper}>
            <div className={styles.tabs}>
            {tabContents.map((tab, index) => (
            <div
              key={index}
              className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
              onClick={() => handleTabClick(index)}>
              {tab.title}
            </div>
          ))}
            </div>
                <div className={styles.tabContents}>
                    {tabContents[activeTab].content}
                </div>
        </div>
        </div>
    )
    }
