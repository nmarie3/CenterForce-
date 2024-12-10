import styles from "../styles/ItemCarousel.module.css";
import Choco1 from "../assests/OG.png";
import Choco2 from "../assests/caramel.png";
import Choco3 from "../assests/butter.png";
import Choco4 from "../assests/imo.png";
import Choco5 from "../assests/sugar.png";
import Choco6 from "../assests/mini.png";
import Choco7 from "../assests/osaka.png";
import Choco8 from "../assests/milk.png";
import Choco9 from "../assests/miniOG.png";
import Choco10 from "../assests/bigT.png";
import Choco11 from "../assests/choco200.png";
import Choco12 from "../assests/hitokuchi.png";
import Choco13 from "../assests/hitokuchi-strawberry.png";
import Choco14 from "../assests/almond.png";
import Choco15 from "../assests/kakao.png";
import Choco16 from "../assests/strawberry.png";
import Choco17 from "../assests/white.png";
import Choco18 from "../assests/okinawa.png";
import Choco19 from "../assests/hokkaido.png";
import Choco20 from "../assests/macha.png";
import ItemLogo from "../assests/item-title.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRef, useEffect, useState } from "react";


type imgItems = {
  image: string,
  url: string,
}


const items: imgItems[] = [
    {image: Choco1, url: 'https://blackthunder.jp/item/1-125/'},
    {image: Choco2, url: 'https://blackthunder.jp/item/1-145/'},
    {image: Choco3, url: 'https://blackthunder.jp/item/1-105/'},
    {image: Choco4, url: 'https://blackthunder.jp/item/1-150/'},
    {image: Choco5, url: 'https://blackthunder.jp/item/1-149/'},
    {image: Choco6, url: 'https://blackthunder.jp/item/1-151/'},
    {image: Choco7, url: 'https://blackthunder.jp/item/1-147/'},
    {image: Choco8, url: 'https://blackthunder.jp/item/1-142/'},
    {image: Choco9, url: 'https://blackthunder.jp/item/1-124/'},
    {image: Choco10, url: 'https://blackthunder.jp/item/1-69/'},
    {image: Choco11, url: 'https://blackthunder.jp/item/1-126/'},
    {image: Choco12, url: 'https://blackthunder.jp/item/1-136/'},
    {image: Choco13, url: 'https://blackthunder.jp/item/1-115/'},
    {image: Choco14, url: 'https://blackthunder.jp/item/1-92/'},
    {image: Choco15, url: 'https://blackthunder.jp/item/1-109/'},
    {image: Choco16, url: 'https://blackthunder.jp/item/1-133/'},
    {image: Choco17, url: 'https://blackthunder.jp/item/1-87/'},
    {image: Choco18, url: 'https://blackthunder.jp/item/1-101/'},
    {image: Choco19, url: 'https://blackthunder.jp/item/1-89/'},
    {image: Choco20, url: 'https://blackthunder.jp/item/1-11/'},
  ];





export function ItemCarousel() {
  const [imgIndex, setImgIndex] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStatrtX] = useState(0);
  const [slideLeftState, setSlideLeftState] = useState<number | null>(null);
  const [mouseMoved, setMouseMoved] = useState(0);


  const showNextImg = () => {
    setImgIndex(index => {
      if (index === items.length - 1) return 0
      return index + 1
      })
  };

  const showPrevImg = () => {
    setImgIndex(index => {
    if (index === 0) return items.length - 1
    return index - 1
    })
  };

  useEffect(() => {
    const timer = setInterval(showNextImg, 2000);

    return () => clearInterval(timer);
  }, [imgIndex, items.length]);


  const carouselContainer = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent)=> {
    if (!carouselContainer.current) return;
    setMouseDown(true);
    setStatrtX(e.pageX - carouselContainer.current.offsetLeft);
    setSlideLeftState(carouselContainer.current.scrollLeft);
    setMouseMoved(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if(!mouseDown|| !carouselContainer.current) 
      return;
  
    const currentMousePosition = (e.pageX - carouselContainer.current.offsetLeft);
    setMouseMoved(currentMousePosition - startX);
  }
  
  useEffect(() => {
    if (carouselContainer.current && slideLeftState !== null) {
      carouselContainer.current.scrollLeft = slideLeftState - mouseMoved;
    }
  }, [slideLeftState, mouseMoved]);





    return (
      <div className={styles.carouselContainer}>
        <button onClick={showPrevImg} className={styles.leftArrow}><IoIosArrowBack /></button>
        <button onClick={showNextImg} className={styles.rightArrow}><IoIosArrowForward /></button>
        <div className={styles.itemLogo}><img src={ItemLogo}/></div>
        <div className={`${styles.carousel} ${mouseDown ? styles.activeClass : ''}`} ref={carouselContainer}
         onMouseDown={(e) =>handleMouseDown(e)} 
         onMouseUp={() => setMouseDown(false)} 
         onMouseLeave={()=> setMouseDown(false)}
         onMouseMove={(e) => handleMouseMove(e)}>
            <a href={items[imgIndex].url}><img src={items[imgIndex].image}/></a>
          </div>
          

          
        </div>
    )
  };
