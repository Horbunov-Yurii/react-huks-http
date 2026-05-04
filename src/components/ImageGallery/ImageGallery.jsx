import { useState } from "react";
import style from "../ImageGallery/ImageGallery.module.css";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import { nanoid } from "nanoid";

export const ImageGallery = ({images}) => {
    
    return (<ul className={style.ImageGallery}>
        {images.map((image) => {
            return <ImageGalleryItem key={nanoid()} image={image} />;
           
        })}
    </ul>)
}