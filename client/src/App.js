import React from "react";
import NewPost from "./profile/NewPost";
import Feed from "./feed/Feed";
import Profile from "./profile/Profile";
import Post from "./post/Post";
import BtmNav from "./navigation/bottom/BtmNav";
import "./profile/NewPost.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "Feed",
    };
  }

  render() {
    return (
      <div>
        <BtmNav />
      </div>
    );
  }
}

export default App;
