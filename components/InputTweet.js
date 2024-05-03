import { useEffect, useState } from "react";
import styles from "../styles/inputtweet.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/users";
export default function InputTweet({ ...props }) {
  const [tweet, setTweet] = useState("");
  const user = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  // a revoir ça marche pas
  //   const regex = "\\W(\\#[a-zA-Z]+\b)(?!;)";
  const handleTweet = () => {
    // if (new RegExp(regex).test(tweet)) {
    //   console.log(tweet.match(new RegExp(regex)));
    // }
    if (user.token) {
      fetch("http://localhost:3000/messages/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          textContent: tweet,
          like: 222,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTweet("");
          props.handleTweetUpdate(data.result);
        });
    }
  };
  return (
    <div className={styles.inputtweet}>
      <input
        className={styles.inputitem}
        type="text"
        name="textContent"
        maxLength="256"
        value={tweet}
        placeholder="Votre tweet"
        onChange={(e) => {
          setTweet(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleTweet();
        }}
        type="submit"
        className={styles.inputtweetbutton}>
        TWEET
      </button>
      <span>likes</span>
    </div>
  );
}
