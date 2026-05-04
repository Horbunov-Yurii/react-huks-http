import { useState, useEffect } from 'react'
import { Searchbar } from "./components/Searchbar/Searchbar"
import { ImageGallery } from './components/ImageGallery/ImageGallery'

import fetchImages from "./api"
import './App.css'

function App() {
  const [query, setQuery] = useState("")
  const [images, setImages] = useState([])

  const handleSearch = (newQuery) => {
    setImages([])
    setQuery(newQuery)
  }
  
  useEffect(() => {
   if (query === "") {
  return  
   }
    
    fetchImages(query).then((res) => {
    
      setImages(res.hits)
    })
  }, [query])

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} />
    </>
  )
}

export default App
