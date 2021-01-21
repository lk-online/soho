import React from "react";
import NewPost from "../profile/NewPost";
import Feed from "../feed/Feed";
import Profile from "../profile/Profile";
import Post from "../post/Post";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.renderComponent = this.renderComponent.bind(this);
  }

  renderComponent(props) {
    let component;
    switch (props.props) {
      case "Feed":
        component = <Feed />;
        break;
      case "Profile":
        component = <Profile />;
        break;
      case "NewPost":
        component = <NewPost />;
        break;
      case "Post":
        component = <Post />;
        break;
      default:
        break;
    }
    return component;
  }
  render() {
    return <div>{this.renderComponent(this.props)}</div>;
  }
}

export default View;
