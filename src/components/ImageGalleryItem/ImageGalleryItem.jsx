import style from "../ImageGalleryItem/ImageGalleryItem.module.css";
export const ImageGalleryItem = ({ image }) => {
    
console.log(image);
    return (
      <li className={style.ImageGalleryItem}>
        <img
          src={image.largeImageURL}
          alt={image.name}
          className={style.ImageGalleryItem_image}
        />
      </li>
    );
}






