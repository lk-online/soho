import React from "react";
import NewPost from "../../profile/NewPost";
import Feed from "../../feed/Feed";
import Profile from "../../profile/Profile";
import Post from "../../post/Post";

function Icon(props) {
  return <img src={`assets/icons/${props.icon}.svg`} alt="" onClick={props.onClick} />;
}

class Icons extends React.Component {
  renderIcons(props) {
    return <Icon icon={props} onClick={() => this.props.onClick(props)} />;
  }

  render() {
    return (
      <div className="btmNavIcons">
        {this.renderIcons("home")}
        {this.renderIcons("plus")}
        {this.renderIcons("zoom")}
        {this.renderIcons("user")}
      </div>
    );
  }
}

class BtmNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "Feed",
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
  }

  handleClick(props) {
    switch (props) {
      case "home":
        this.setState({ component: "Feed" });
        break;
      case "user":
        this.setState({ component: "Profile" });
        break;
      case "plus":
        this.setState({ component: "Create" });
        break;
      default:
        break;
    }
  }

  renderComponent(props) {
    let component;
    switch (props) {
      case "Feed":
        component = <Feed />;
        break;
      case "Profile":
        component = <Profile />;
        break;
      case "Create":
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
    return (
      <div>
        {this.renderComponent(this.state.component)}
        <Icons onClick={this.handleClick} />
      </div>
    );
  }
}

export default BtmNav;
