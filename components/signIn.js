import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/SignIn.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { login } from "./Login";
import twitterlogo from "../image/twitterlogo.png";
import { signup } from "../reducers/users";

function SignIn(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [error, setError] = useState("");

  const handleConnection = () => {
    console.log("ok");
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            signup({
              username: signInUsername,
              token: data.token,
              firstname: data.firstname,
            })
          );
          setSignInUsername("");
          setSignInPassword("");
          console.log("anais");
          router.push("/");
        } else {
          setError("husxhbhb");
        }
      });
  };

  return (
    <div className={styles.modalSignIn}>
      <button className={styles.SignInCloseButton} onClick={props.closeModal}>
        X
      </button>
      <div className={styles.modalContent}>
        <div>
          <Image src={twitterlogo} alt="Logo Twitter" width={40} height={30} />
        </div>
        <h1>Connect to Hackatweet</h1>
        {error && <p className={styles.errorMessage}>{error}</p>}{" "}
        <div className={styles.modalInputButton}>
          <input
            className={styles.modalInput}
            type="text"
            placeholder="Username"
            id="signInUsername"
            onChange={(e) => setSignInUsername(e.target.value)}
            value={signInUsername}
          />
          <input
            className={styles.modalInput}
            type="password"
            placeholder="Password"
            id="signInPassword"
            onChange={(e) => setSignInPassword(e.target.value)}
            value={signInPassword}
          />
          <button
            className={styles.modalButton}
            onClick={() => handleConnection()}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
