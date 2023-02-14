import styles from "./App.module.css";
import Navbar from "./components/NavBar";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className={styles["all"]}>
      {/* <Navigation/> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/Login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
