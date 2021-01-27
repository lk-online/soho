import React from "react";
import View from "./views/View";
import BtmNav from "./navigation/bottom/BtmNav";
import "./profile/NewPost.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Feed",
    };
    // we bind handleClick in order for it to have access to App's state (parent component)
    // otherwise we won't be able to use this.setState
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(props) {
    switch (props) {
      case "home":
        this.setState({ view: "Feed" });
        break;
      case "user":
        this.setState({ view: "Profile" });
        break;
      case "plus":
        this.setState({ view: "NewPost" });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <View view={this.state.view} />
        <BtmNav onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
