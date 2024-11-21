import React, { useState, useEffect, useRef } from "react";
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


    // const [isDragged, setIsDragged] = useState(false)
    // const dragRef = useRef<HTMLInputElement | null>(null);


    // const handleMouseDown = (e: React.MouseEvent) => {
    //     setIsDragged(true);
    // };

    // const handleMoveEvent = (e: React.MouseEvent) => {
    //     if (!isDragged || !dragRef.current) return;
    //     const slider = dragRef.current;
    //     const distance = e.movementX;
    //     slider.scrollLeft -= distance;
    //     }


    // const handleMouseUp = () => {
    //     setIsDragged(false);
    // };


    // useEffect(() => {
    //     const timer = setInterval(goNextImg, 3000);

    //     return () => clearInterval(timer);
    // }, [images]);


    return (
        <div className={styles.sliderContainer}>
            <div className={styles.imgContainer}
                // ref={dragRef}
                // onMouseDown={handleMouseDown}
                // onMouseMove={handleMoveEvent}
                // onMouseUp={handleMouseUp}
                // onMouseLeave={handleMouseUp}
                >
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




// const carousel = document.querySelector(".carousel");

// let isDragging = false;

// const dragStart = () => {
//     isDragging = true;
// }

// const dragging = (e) => {
//     if(!isDragging) return;
// carousel.scrollLeft = e.pageX;
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);