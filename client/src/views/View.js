import React from "react";
import NewPost from "../profile/NewPost";
import Feed from "../feed/Feed";
import Profile from "../profile/Profile";
import Post from "../post/Post";

class View extends React.Component {
  renderComponent(props) {
    let view;
    switch (props.view) {
      case "Feed":
        view = <Feed />;
        break;
      case "Profile":
        view = <Profile />;
        break;
      case "NewPost":
        view = <NewPost />;
        break;
      case "Post":
        view = <Post />;
        break;
      default:
        break;
    }
    return view;
  }

  render() {
    return this.renderComponent(this.props);
  }
}

export default View;
