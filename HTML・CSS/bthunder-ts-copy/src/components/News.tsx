import styles from "../styles/News.module.css";
import newsIcon from "../assests/news-title.png";


const articles = [
    {
        date: "2024.08.15",
        tag: "新発売",
        title: "『ブラックサンダーミニバー ハロウィン』 2024年8月19日(月)より全国のスーパーマーケット、ドラッグストアなどで発売",
        url: "https://blackthunder.jp/news/7015/"
    },
    {
        date: "2024.08.20",
        tag: "新発売",
        title: "『紫いものサンダー』2024年8月27日(火)より全国のコンビニエンスストアで先行発売、2024年9月16日(月)より全国のスーパーマーケット、 ドラッグストアなどで発売。",
        url: "https://blackthunder.jp/news/6991/"
    },
    {
        date: "2024.07.22",
        tag: "新発売",
        title: "『白いブラックサンダーどらやき』2024年7月26日(金)より北海道エリアの一部みやげ販売店等で発売。",
        url: "https://blackthunder.jp/news/7041/"
    },
]



export function News() {

    
    return (
      <div className={styles.newsContainer}>
        <div className={styles.bolt}/>
        <div className={styles.backgroundPattern}>
          <div className={styles.newsInner}>
            <img src={newsIcon}/>
            <div className={styles.newsList}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.newsItem}>
                        <div className={styles.dateTag}>
                            <div className={styles.articleDate}>{article.date}</div>
                            <div className={styles.articleTag}>{article.tag}</div>
                        </div>
                        <a href={article.url}>
                        <div className={styles.articleTitle}>{article.title}</div>
                        </a>
                    </div>
                ))}
            <div className={styles.readMoreMobile}><a href="https://blackthunder.jp/news/" className={styles.readMore}>もっとみる!! ＞</a></div>
            </div>
          </div>
          </div>
      </div>
    )
  }