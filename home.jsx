import React from "react";
import { Link } from "react-router-dom";
import styles from  "../Main.module.css"

function Home(props) {
  return (
    <div className={styles.container}>
    <div className={styles.navbar}>
      <div className={styles.footer}>
        <h1>
         
          <Link to="/login"><button>Login</button></Link>

        </h1>
     
        <h1>
          <Link to="/signup"><button>Signup</button></Link>
        </h1>
      </div>

      

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
    </div>
  );
}

export default Home;