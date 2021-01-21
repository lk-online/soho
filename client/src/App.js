import React from "react";
import View from "./views/View";
import BtmNav from "./navigation/bottom/BtmNav";
import "./profile/NewPost.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "Feed",
    };
    this.handleClick = this.handleClick.bind(this);
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
        this.setState({ component: "NewPost" });
        break;
      case "success":
        this.setState({ component: "Feed" });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <View props={this.state.component} />
        <BtmNav onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
