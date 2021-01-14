import React from "react";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
    };
    this.callAPI = this.callAPI.bind(this);
    this.createTag = this.createTag.bind(this);
  }

  callAPI() {
    fetch(`http://localhost:9000/actions/post/create`)
      .then((res) => console.log(res))
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  createTag() {
    return (
      <form action="http://localhost:9000/actions/post/create" method="post">
        <input type="submit" value="δημιουργία"></input>
      </form>
    );
  }

  render() {
    return (
      <div>
        {this.state.apiResponse}
        {this.createTag()}
      </div>
    );
  }
}

export default Create;
