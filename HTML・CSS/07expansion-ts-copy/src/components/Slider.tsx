import React, { useState, useEffect} from "react";
import styles from "../styles/Slider.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


type SliderProps = {
    images: {
    image: string;
    url: string;
    }[]
}

export function Slider({images}: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);


    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;


    const goPrevImg = () => {
        setCurrentIndex(prevIndex);
    };
    
    const goNextImg = () => {
        setCurrentIndex(nextIndex);
    };    



    useEffect(() => {
        const timer = setInterval(goNextImg, 2000);

        return () => clearInterval(timer);
    }, [currentIndex, images.length]);


    return (
        <div className={styles.sliderContainer}>
            <button onClick={goPrevImg} className={styles.leftButton} style={{left: 100}}><IoIosArrowBack /></button>
            <div className={styles.imgContainer} >
                    <a href={images[prevIndex].url}><img src={images[prevIndex].image} className={`${styles.sliderImg} ${styles.prevImg}`}/></a>
                    <a href={images[currentIndex].url}><img src={images[currentIndex].image} className={`${styles.sliderImg} ${styles.mainImg}`}/></a>
                    <a href={images[nextIndex].url}><img src={images[nextIndex].image} className={`${styles.sliderImg} ${styles.nextImg}`}/></a>
            </div>
            <button onClick={goNextImg} style={{right: 20}}><IoIosArrowForward /></button>
            <div className={styles.dotContainer}>
                {images.map((_, index) => (
                <div
                    key={index}
                    className={`${styles.dotIndex} ${index === currentIndex ? styles.activeDot : ''}`}
                    onClick={() => setCurrentIndex(index)}/>
                ))}
            </div>
            </div>

    
    )
};
