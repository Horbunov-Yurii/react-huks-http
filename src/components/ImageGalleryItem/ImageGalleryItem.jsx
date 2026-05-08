import style from "../ImageGalleryItem/ImageGalleryItem.module.css";
export const ImageGalleryItem = ({ image,  onClick}) => {
    return (
      <li className={style.ImageGalleryItem}>
        <img
        onClick={() => onClick(image.largeImageURL)}
          src={image.largeImageURL}
          alt={image.name}
          className={style.ImageGalleryItem_image}
        />
      </li>
    );
}






