import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
      user: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/actions/post/:id")
      .then((res) => res.json())
      .then((res) => this.setState({ apiResponse: res }))
      .then(() => console.log(this.state.apiResponse));
  }

  renderPost() {
    return <div>hello</div>;
  }

  render() {
    return this.renderPost();
  }
}

export default Post;
