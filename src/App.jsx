import { useState, useEffect } from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import fetchImages from "./api";
import "./App.css";
import Loader from "./components/Loader/Loader";
import LoadMore from "./components/LoadMore/LoadMore";
import Modal from "./components/Modal/Modal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectImage, setSelectImage] = useState(null);

  const handleSearch = (newQuery) => {
    setImages([]);
    setQuery(newQuery);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    setIsLoading(true);
    fetchImages(query, page)
      .then((res) => {
        // setImages(res.hits);
        setImages((prevImages) => [...prevImages, ...res.hits]);
      })
      .finally(() => setIsLoading(false));
  }, [query, page]);
  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      <ImageGallery images={images} onImageClick={setSelectImage}/>
      {images.length > 0 && !isLoading && <LoadMore onClick={handleLoadMore}/>}
      {selectImage && <Modal image={selectImage} onClose={() => {setSelectImage(null)}}/>}
    </>
  );
}

// largeImageURL

export default App;
