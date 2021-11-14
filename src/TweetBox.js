import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";
import { useAuth0 } from "@auth0/auth0-react";

function TweetBox() {
  const [tweetUserName, setTweetUserName] = useState("");
  const [tweetDisplayName, setTweetDisplayName] = useState("");
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetAvatarImage, setAvatarImage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const { user, isAuthenticated } = useAuth0();

  const sendTweet = (e) => {
    e.preventDefault();
    if(tweetMessage === "") return;
    db.collection("posts").add({
      displayName: isAuthenticated? user.name : tweetDisplayName? tweetDisplayName : "Dawg",
      username: isAuthenticated? user.name : tweetUserName? tweetUserName : "User_dawg",
      verified: false,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        isAuthenticated? user.picture : tweetAvatarImage? tweetAvatarImage : "data:image/jpeg;base64,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",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  if(!isAuthenticated) {
  return (
    <div className="tweetBox">
      <form>
      <input style={{width: "230px", borderRadius: "20px"}}
          value={tweetDisplayName}
          onChange={(e) => setTweetDisplayName(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter Display name | default: Dawg"
          type="text"
        />
      <input style={{width: "230px", borderRadius: "20px"}}
          value={tweetUserName}
          onChange={(e) => setTweetUserName(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter User name | default: User_dawg"
          type="text"
        />
        <div className="tweetBox__input">
          <Avatar src="data:image/jpeg;base64,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" />
          <input style={{width: "500px", borderRadius: "20px"}}
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What da dog doin?"
            type="text"
          />
        </div>
        <input style={{width: "500px", borderRadius: "20px"}}
          value={tweetAvatarImage}
          onChange={(e) => setAvatarImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter Avatar URL | default: Dawg_pic"
          type="text"
        />
        <input style={{width: "500px", borderRadius: "20px"}}
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Go!
        </Button>
      </form>
    </div>
  );
  }
  else{
    return(
      <div className="tweetBox">
      <form>
      <input style={{width: "230px", borderRadius: "20px"}}
          value={tweetDisplayName}
          onChange={(e) => setTweetDisplayName(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter Display name | default: Dawg"
          type="text"
        />
      <input style={{width: "230px", borderRadius: "20px"}}
          value={tweetUserName}
          className="tweetBox__imageInput"
          placeholder={user.name}
          disabled={true}
        />
        <div className="tweetBox__input">
          <Avatar src={user.picture} />
          <input style={{width: "500px", borderRadius: "20px"}}
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What da dog doin?"
            type="text"
          />
        </div>
        <input disabled style={{width: "500px", borderRadius: "20px"}}
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Go!
        </Button>
      </form>
    </div>
    );
  }
}

export default TweetBox;