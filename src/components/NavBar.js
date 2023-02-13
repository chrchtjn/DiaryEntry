import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [state, setState] = useState("/Login");
  const [name, setName] = useState("Login");

  const change = () => {
    if (state === "/Login") {
      setState("/");
      setName("Sign Up");
    } else {
      setState("/Login");
      setName("Login");
    }
  };

  return (
    <nav className={styles["nav-bar"]}>
      <ul>
        <li>
          <span className={styles["title"]}>NAMEGOESHERE</span>
        </li>
        <li>
          <Link to="/Discover">Discover</Link>
          <Link to={state} onClick={change}>
            {name}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
