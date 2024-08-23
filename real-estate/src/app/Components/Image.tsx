"use client"
import Image from 'next/image';
import MainImg from '../../../public/assets/image/MainPageHome.jpeg';
const MyImage = () => {
    return (
        <Image 
        
            src={MainImg} 
            alt="Szczęśliwi ludzie w nowym domu" 
            fill
            style={{ objectFit: 'cover' }} // lub "contain" w zależności od potrzeb
        
    
        />
    )
}

export default MyImage;