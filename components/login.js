import styles from "../styles/Login.module.css";
import Image from "next/image";
import SignUp from "./signUp";
import SignIn from "./SignIn";
import twitterlogo from "../image/twitterlogo.png";
import twitter1 from "../image/twitter1.png";
import { useState } from "react";

function Login() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  //pas ouvrir les deux ensembles
  const openSignUpModal = () => {
    setShowSignInModal(false);
    setShowSignUpModal(true);
  };

  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const openSignInModal = () => {
    setShowSignUpModal(false);
    setShowSignInModal(true);
  };

  const closeSignInModal = () => {
    setShowSignInModal(false);
  };

  return (
    <div className={styles.main_loginPage}>
      <div className={styles.container}>
        <div className={styles.leftcontainer}>
          <h1 className={styles.title}>
            <div className={styles.logo}>
              <Image src={twitter1} alt="Logo" width={400} height={200} />
            </div>
          </h1>
        </div>
        <div className={styles.rightcontainer}>
          <div className={styles.rightContent}>
            <div className={styles.logo2}>
              <Image src={twitterlogo} alt="Logo" width={100} height={50} />
            </div>
            <h1 className={styles.rightTitre}>
              See what's <br />
              happening
            </h1>
            <div className={styles.rightTexte}>
              <h3>Join Hackatweet today.</h3>
            </div>
            <div className={styles.rightButton}>
              <button
                className={styles.rightButtonUp}
                onClick={openSignUpModal}
              >
                Sign up
              </button>
              {showSignUpModal && <Signup closeModal={closeSignUpModal} />}
              <p>Already have an account?</p>
              <button
                className={styles.rightButtonIn}
                onClick={openSignInModal}
              >
                Sign in
              </button>
              {showSignInModal && (
                <div className={styles.modal}>
                  <SignIn closeModal={closeSignInModal} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
