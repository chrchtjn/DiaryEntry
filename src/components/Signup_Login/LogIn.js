import styles from "./LogIn.module.css";
import PaperPlane from "../../images/Paperplane.png";

export default function Login() {
  return (
    <div>
      <div className={styles["Paper-plane"]}>
        <img src={PaperPlane} alt="PaperPlane Logo" />
      </div>

      <div className={styles["back-Body"]} id={styles["loginformdiv"]}>
        <label className={styles["label-head"]} id={styles["welcome"]}>
          Welcome Back!
        </label>
        <label className={styles["label"]}>Email</label>
        <input
          type="text"
          id={styles["email"]}
          name="email"
          className={styles["text-box"]}
        ></input>
        <label className={styles["label"]}>Password</label>
        <input
          type="password"
          id={styles["email"]}
          name="password"
          className={styles["text-box"]}
        ></input>
        <button className={styles["sbmt-btn"]}> Log In</button>
        <a href="/NavBar.js" className={styles["forgot"]}>
          Forgot Password?
        </a>
      </div>
    </div>
  );
}
