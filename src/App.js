import styles from "./App.module.css";
import Navbar from "./components/Signup_Login/NavBar";
import SignUp from "./components/Signup_Login/SignUp";
import LogIn from "./components/Signup_Login/LogIn";
import LeftNavigation  from "./components/LeftPane/LeftNavigation";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
<>
    <LeftNavigation/>
    <WorkSpace/></>
  //  <div className={styles["checkIn"]}>
    
  //        <Navbar />
  //         <Routes>
  //            <Route exact path="/" element={<SignUp />} />
  //            <Route exact path="/Login" element={<LogIn />} />
  //         </Routes>
  //   </div> 
    
  );
}

export default App;
