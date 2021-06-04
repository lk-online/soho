import React from "react";
import "./NewPost.css";

class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
    };
    this.renderNewPost = this.renderNewPost.bind(this);
  }

  componentDidMount() {
    fetch(`https://lk-soho.herokuapp.com/actions/post/${this.props.props}`)
      .then((res) => res.json())
      .then((res) => this.setState({ apiResponse: res }))
  }

  renderNewPost() {
    let post;
    if (this.state.apiResponse.length !== 0) {
      post = (
        <ol className="newPost">
          <div className="geo-tags">
            {this.state.apiResponse.tag
              .filter((i) => i.category === "geo")
              .map((val) => (
                <li className="tag" key={val._id} id={val._id}>
                  {val.name}
                </li>
              ))}
          </div>
          <div className="basic-tags">
            {this.state.apiResponse.tag
              .filter((i) => i.category === "basic")
              .map((val) => (
                <li className="tag" key={val._id} id={val._id}>
                  {val.name}
                </li>
              ))}
          </div>
          <div className="area-tag">
            {this.state.apiResponse.tag
              .filter((i) => i.category === "area")
              .map((val) => (
                <li className="tag" key={val._id} id={val._id}>
                  {val.name}
                </li>
              ))}
          </div>
          <div className="price-tag">
            {this.state.apiResponse.tag
              .filter((i) => i.category === "price")
              .map((val) => (
                <li className="tag" key={val._id} id={val._id}>
                  {val.name}
                </li>
              ))}
          </div>
          <div className="post-images">
            <img alt="" src="assets/images/IMG_4142.JPEG" />
            <img alt="" src="assets/images/IMG_4142.JPEG" />
            <img alt="" src="assets/images/IMG_4142.JPEG" />
            <img alt="" src="assets/images/IMG_4142.JPEG" />
          </div>
          <div className="required-tags">
            {this.state.apiResponse.tag
              .filter((i) => i.category === "required")
              .map((val) => (
                <li className="tag" key={val._id} id={val._id}>
                  {val.name}
                </li>
              ))}
          </div>
          <div className="optional-tags">
            {this.state.apiResponse.tag
              .filter((i) => i.category === "optional")
              .map((val) => (
                <li className="tag" key={val._id} id={val._id}>
                  {val.name}
                </li>
              ))}
          </div>
        </ol>
      );
    }

    return (
      <div>
        <h2>Η αγγελία σας</h2>
        <ol>{post}</ol>
      </div>
    );
  }

  render() {
    return this.renderNewPost();
  }
}

export default Success;
