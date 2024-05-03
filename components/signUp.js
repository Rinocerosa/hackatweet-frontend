import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/SignUp.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { login } from "./Login";
import twitterlogo from "../image/twitterlogo.png";

function SignUp(props) {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.value);
  const router = useRouter();

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpFirstname, setSignUpFirstName] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!signUpFirstname || !signUpUsername || !signUpPassword) {
      setError("Missing  field");
      return;
    }
    let data = {
      firstname: signUpFirstname,
      username: signUpUsername,
      password: signUpPassword,
    };
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              firstname: signUpFirstname,
              username: signUpUsername,
              token: data.token,
            })
          );
          setSignUpFirstName("");
          setSignUpPassword("");
          setSignUpUsername("");
          setError("");
          router.push("/tweet");
        } else {
          setError("Username is already taken");
        }
      });
  };

  return (
    <div className={styles.modalSignUp}>
      <button className={styles.SignUpCloseButton} onClick={props.closeModal}>
        X
      </button>
      <div className={styles.modalContent}>
        <Image
          src={twitterlogo}
          alt="Logo Tw
          itter"
          width={40}
          height={30}
        />
        <h1>Connect to Hackatweet</h1>
        {error && <p className={styles.errorMessage}>{error}</p>}

        <div className={styles.modalInputButton}>
          <input
            className={styles.modalInput}
            type="text"
            placeholder="Firstname"
            id="signUpFirstname"
            onChange={(e) => setSignUpFirstName(e.target.value)}
            value={signUpFirstname}
          />
          <input
            className={styles.modalInput}
            type="text"
            placeholder="Username"
            id="signUpUsername"
            onChange={(e) => setSignUpUsername(e.target.value)}
            value={signUpUsername}
          />
          <input
            className={styles.modalInput}
            type="password"
            placeholder="Password"
            id="signUpPassword"
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
          />
          <button
            className={styles.modalButton}
            onClick={() => handleRegister()}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
