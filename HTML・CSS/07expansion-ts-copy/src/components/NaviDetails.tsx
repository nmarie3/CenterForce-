import { useState } from "react";
import styles from "../styles/Navi.module.css"




type SideNavi = {
    title: string;
    link?: {label: string; url: string} [];
}


const items: SideNavi[] = [
    {
        title: "作品一覧 🢓",
        link: [
            {label: "キコニアのなく頃に", url: "https://07th-expansion.net/cico/"},
            {label: "ひぐらしのなく頃に", url: "https://07th-expansion.net/higurasi.html"},
            {label: "うみねこのなく頃に", url: "https://07th-expansion.net/umineko.html"},
            {label: "彼岸花の咲く夜に", url: "https://07th-expansion.net/higannbana.html"},
            {label: "ローズガンズデイズ", url: "https://07th-expansion.net/rgd.html"},
            {label: "トライアンソロジー", url: "https://07th-expansion.net/trt.html"},
        ]
    },    {
        title: "イベント 🢓",
        link: [
            {label: "最新コミックスまとめ情報！", url: "https://07th-expansion.net/eventpage/event02.html"},
            {label: "ひぐらし令色尊し篇連載中！", url: "https://07th-expansion.net/eventpage/event03.html"},
            {label: "ひぐうみ合同ポータル", url: "https://07th-expansion.net/eventpage/event04.html"},
            {label: "白川村ふるさと納税情報！", url: "https://07th-expansion.net/eventpage/event05.html"},
        ]
    },
    {
        title: "その他お仕事"
    },
    {
        title: "Download 🢓",
        link: [
            {label: "お試し版PCゲーム", url: "https://07th-expansion.net/dl.html#higu"},
            {label: "公式小冊子&寄稿作品", url: "https://07th-expansion.net/dl.html#box"}
        ]
    },
    {
        title: "お取扱店舗",
    },
    {
        title: "お問い合わせ",
    }
]

export function NaviDetails() {
    const[hoveredIndex, setHoveredIndex] = useState<number | null>(null);

        const handleMouseEnter = (index: number) => setHoveredIndex(index);
        const handleMouseLeave = () => setHoveredIndex(null)
    


    return (
        <div className={styles.naviStyle}>
        {items.map((item, index) => (
            <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave}>
                    <div className={styles.titleStyle}>
                        {item.title}
                    </div>
                        {hoveredIndex === index && (
                    <div className={styles.dropdownStyle}>
                    {item.link?.map((link, index) => (
                        <a
                        key={index}
                        href={link.url}>
                        {link.label}
                      </a>
                    ))}
                </div>
            
            )}
          </div>
        ))}
      </div>
    );
  }