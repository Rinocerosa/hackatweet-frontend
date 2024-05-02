import InputTweet from "./InputTweet";
import styles from "../styles/tweet.module.css";
import { useEffect, useState } from "react";
function SingleTweet({ textContent, likes, date }) {
  return (
    <div className={styles.single}>
      <span>{date}</span>
      <div>{textContent}</div>
      <span>like : {likes}</span>
    </div>
  );
}
export default function Tweet() {
  const [postTweet, setPostTweet] = useState([]);
  const [teweeted, setTeweeted] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then((response) => response.json())
      .then((data) => setPostTweet(data.info));
  }, [teweeted]);
  const handleTweetUpdate = (update) => {
    setTeweeted(!teweeted);
  };
  return (
    <main className={styles.tweet}>
      <InputTweet handleTweetUpdate={handleTweetUpdate}></InputTweet>
      <div className={styles.tweetSinglesContainer}>
        {postTweet &&
          postTweet.map((e, i) => {
            return (
              <SingleTweet
                key={i}
                textContent={e.textContent}
                likes={e.like}
                date={e.date}></SingleTweet>
            );
          })}
      </div>
    </main>
  );
}
