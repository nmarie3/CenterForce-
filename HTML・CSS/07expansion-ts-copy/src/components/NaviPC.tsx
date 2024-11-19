import { useState } from "react";
import styles from "../styles/Navi.module.css";

type NaviItem = {
  title: string;
  link?: { label: string; url: string }[];
};

type NaviPCProps = {
  items: NaviItem[];
};

export function NaviPC({ items }: NaviPCProps) {

    const[hoveredIndex, setHoveredIndex] = useState<number | null>(null);

        const handleMouseEnter = (index: number) => setHoveredIndex(index);
        const handleMouseLeave = () => setHoveredIndex(null)



  return (
    <nav className={styles.naviMainPC}>
        {items.map((item, index) => (
            <ul
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave}>
                    <div className={styles.titleStylePC}>
                        {item.title}
                    </div>
                        {hoveredIndex === index && (
                    <div className={styles.dropdownStylePC}>
                    {item.link?.map((link, index) => (
                        <a
                        key={index}
                        href={link.url}>
                        {link.label}
                      </a>
                    ))}
                </div>
            
            )}
          </ul>
        ))}
      </nav>
  );
}