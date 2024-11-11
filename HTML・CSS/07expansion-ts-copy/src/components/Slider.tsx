import { useState, useEffect } from "react";
import styles from "../styles/Slider.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


type SliderProps = {
    images: string[];
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
        const timer = setInterval(goNextImg, 3000);

        return () => clearInterval(timer);
    }, [images]);


    return (
        <div className={styles.sliderContainer}>
            <div className={styles.imgContainer}>
                <img src={images[prevIndex]} className={`${styles.sliderImg} ${styles.prevImg}`}/>
                <img src={images[currentIndex]} className={`${styles.sliderImg} ${styles.mainImg}`}/>
                <img src={images[nextIndex]} className={`${styles.sliderImg} ${styles.nextImg}`}/>
            </div>
            <button onClick={goPrevImg} style={{left: 0}}><IoIosArrowBack /></button>
            <button onClick={goNextImg} style={{right: 0}}><IoIosArrowForward /></button>
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
