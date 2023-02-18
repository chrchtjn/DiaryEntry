import styles from "./SignUp.module.css";
import Man from "../../images/man.png";

export default function Signup() {
  return (
    <div>
      <div className={styles["back-Body"]} id={styles["signupformdiv"]}>
        <label className={styles["label-head"]}>
          Create an account, its free!
        </label>
        <label className={styles["label"]}>Email</label>
        <input
          type="text"
          id={styles["email"]}
          name="email"
          className={styles["text-box"]}
        ></input>
        <label className={styles["label"]}>Username</label>
        <input
          type="text"
          id={styles["username"]}
          name="username"
          className={styles["text-box"]}
        ></input>
        <label className={styles["label"]}>Password</label>
        <input
          type="password"
          id={styles["password"]}
          name="password"
          className={styles["text-box"]}
        ></input>
        <button className={styles["sbmt-btn"]}> Sign Up</button>
      </div>

      <div className={styles["desc-align"]}>
        <span className={styles["journal"]}>Your Daily Journal</span>
        <br></br>
        <br></br>
        <span className={styles["about"]}>
          something describing our website.
        </span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src={Man} alt="Man Logo" />
      </div>
    </div>
  );
}
