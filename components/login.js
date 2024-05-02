import styles from "../styles/Login.module.css";
import Signup from "./Signup";
import logo from "../image/twitterlogo.png";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.leftcontainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className={styles.rightcontainer}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <Signup></Signup>
          </h1>
        </main>
      </div>
    </div>
  );
}

export default Login;
