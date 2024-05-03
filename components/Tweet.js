import InputTweet from "./InputTweet";
import styles from "../styles/tweet.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function SingleTweet({ textContent, likes, date, username }) {
  return (
    <div className={styles.single}>
      <span>{date}</span>
      <div>{textContent}</div>
      <span>like : {likes}</span>
      <span> {username}</span>
    </div>
  );
}
export default function Tweet() {
  const [postTweet, setPostTweet] = useState([]);
  const [teweeted, setTeweeted] = useState(false);
  const user = useSelector((state) => {
    return state.users.value;
  });
  useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then((response) => response.json())
      .then((data) => {
        setPostTweet(data.info);
      });
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
            console.log(user);
            return (
              <SingleTweet
                key={i}
                textContent={e.textContent}
                likes={e.like}
                date={e.date}
                username={user.username}></SingleTweet>
            );
          })}
      </div>
    </main>
  );
}
