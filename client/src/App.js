import React from "react";
//import NewPost from "./profile/NewPost";
import Feed from "./feed/Feed";
import Profile from "./profile/Profile";
import Post from "./post/Post";
import "./profile/NewPost.css";
import "./App.css";

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

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
    };
    this.createTag = this.createTag.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:9000/actions/post/create")
      .then((res) => res.json())
      .then((res) => this.setState({ apiResponse: res }))
      .then(() => console.log(this.state.apiResponse));
  }

  handleSubmit(e) {
    const formData = new FormData(e.target);

    const params = new URLSearchParams();
    for (let pair of formData.entries()) {
      typeof pair[1] == "string" && params.append(pair[0], pair[1]);
    }

    fetch("http://localhost:9000/actions/post/create", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    }).catch((err) => {
      console.error(err);
    });
    e.preventDefault();
  }

  createTag() {
    let basicTag;
    let geoTag;
    let priceTag;
    let requiredTag;
    let optionalTag;

    if (this.state.apiResponse.length !== 0) {
      geoTag = this.state.apiResponse
        .filter((i) => i.category === "geo")
        .map((val) => (
          <div key={val._id}>
            <input
              type="checkbox"
              id={val._id}
              name="tag"
              value={val._id}
              checked={val.checked}
              onChange={this.handleInputChange}
            />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      basicTag = this.state.apiResponse
        .filter((i) => i.category === "basic")
        .map((val) => (
          <div key={val._id}>
            <input
              type="checkbox"
              id={val._id}
              name="tag"
              value={val._id}
              checked={val.checked}
              onChange={this.handleInputChange}
            />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      priceTag = this.state.apiResponse
        .filter((i) => i.category === "price")
        .map((val) => (
          <div key={val._id}>
            <input
              type="checkbox"
              id={val._id}
              name="tag"
              value={val._id}
              checked={val.checked}
              onChange={this.handleInputChange}
            />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      requiredTag = this.state.apiResponse
        .filter((i) => i.category === "required")
        .map((val) => (
          <div key={val._id}>
            <input
              type="checkbox"
              id={val._id}
              name="tag"
              value={val._id}
              checked={val.checked}
              onChange={this.handleInputChange}
            />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      optionalTag = this.state.apiResponse
        .filter((i) => i.category === "optional")
        .map((val) => (
          <div key={val._id}>
            <input
              type="checkbox"
              id={val._id}
              name="tag"
              value={val._id}
              checked={val.checked}
              onChange={this.handleInputChange}
            />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
    }

    return (
      <form id="newPostForm" name="newPostForm" onSubmit={this.handleSubmit}>
        <div className="geoTag">
          <h2>Διεύθυνση</h2>
          {geoTag}
        </div>
        <div className="basicTag">
          <h2>Βασικά</h2>
          {basicTag}
        </div>
        <div className="priceTag">
          <h2>Τιμή</h2>
          {priceTag}
        </div>
        <div className="requiredTag">
          <h2>Υποχρεωτικά</h2>
          {requiredTag}
        </div>
        <div className="optionalTag">
          <h2>Προαιρετικά</h2>
          {optionalTag}
        </div>
        <div>
          <input type="hidden" id="user" name="user" value="6002e370cebc10364c88bb6b"></input>
        </div>
        <input type="submit" value="δημιουργία"></input>
      </form>
    );
  }

  render() {
    return <div>{this.createTag()}</div>;
  }
}

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
