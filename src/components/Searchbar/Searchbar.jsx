import { useState } from "react";
import style from "./Searchbar.module.css"
export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputvalue] = useState("");

  const handleChange = (evt) => {
    setInputvalue(evt.target.value);
  };
    
   const handleSubmit = (evt) => {
        evt.preventDefault()
        if(inputValue === "") {
            return
        }

       onSubmit(inputValue)
       setInputvalue("")
    }

  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.SearchForm_button}>
          <span className={style.SearchForm_button_label}>Search</span>
        </button>

        <input
          onChange={handleChange}
          value={inputValue}
          className={style.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

