import React from "react";
import { Link } from "react-router-dom";
import styles from  "../Main.module.css"
import Navbar from "./Navbar";
import Cards from "./Cards"
import Shops from "./Shop"



function Home(props) {
  return (

    <><Navbar /><Cards />
       
      </>
  );
}

export default Home;