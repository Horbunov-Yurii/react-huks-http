import React from "react";
import { Audio, Oval, Vortex } from "react-loader-spinner";
import styles from "../Loader/Loader.module.css";
export default function Loader() {
  return (
    <div className={styles.spiner}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
}
