import React from "react";
import "./Profile.css";

function Liked() {}

function Interested() {}

function Seen() {}

function SelfPosts() {}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUserID: "600922218b0ad82910cbf460",
      view: "",
      like: [],
      interested: [],
      seen: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:9000/actions/user/${this.state.loggedUserID}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          like: res.like,
          interested: res.interested,
          seen: res.seen,
        })
      );
  }

  render() {
    return <div>Profile: not implemented yet</div>;
  }
}

export default Profile;
