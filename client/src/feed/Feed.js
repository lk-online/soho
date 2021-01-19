import React from "react";
import "./Feed.css";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
    };
    this.renderFeed = this.renderFeed.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:9000/actions/posts")
      .then((res) => res.json())
      .then((res) => this.setState({ apiResponse: res }));
    //.then(() => console.log(this.state.apiResponse));
  }

  renderFeed() {
    let post;

    if (this.state.apiResponse.length !== 0) {
      post = this.state.apiResponse.map((i) => (
        <ol className="post" key={i._id} id={i._id}>
          <div className="geo-tags">
            {i.tag
              .filter((t) => t.category === "geo")
              .map((val) => (
                <li className="tag" key={val._id} id={val._id}>
                  {val.name}
                </li>
              ))}
          </div>
          <div className="basic-tags">
            {i.tag
              .filter((t) => t.category === "basic")
              .map((val) => (
                <li className="tag" key={val._id} id={val._id}>
                  {val.name}
                </li>
              ))}
          </div>
          <div className="price-tag">
            {i.tag
              .filter((t) => t.category === "price")
              .map((val) => (
                <li className="tag" key={val._id} id={val._id}>
                  {val.name}
                </li>
              ))}
          </div>
          {i.user.length === 1 ? (
            <div className="users">
              <div className="username">{i.user[0].username}</div>
              <div className="user-capacity">{i.user[0].capacity}</div>
            </div>
          ) : (
            <div className="users">
              <div className="username">{i.user[0].username}</div>
              <div className="user-capacity">{i.user[0].capacity}</div>
              <div className="username">+{i.user.length - 1} ακόμα</div>
            </div>
          )}
          <div className="post-images">
            <img alt="" src="assets/images/IMG_4142.JPEG" />
            <img alt="" src="assets/images/IMG_4142.JPEG" />
            <img alt="" src="assets/images/IMG_4142.JPEG" />
            <img alt="" src="assets/images/IMG_4142.JPEG" />
          </div>
          <div className="required-tags">
            {i.tag
              .filter((t) => t.category === "required")
              .map((val) => (
                <li className="tag" key={val._id} id={val._id}>
                  {val.name}
                </li>
              ))}
          </div>
          <div className="optional-tags">
            {i.tag
              .filter((t) => t.category === "optional")
              .map((val) => (
                <li className="tag" key={val._id} id={val._id}>
                  {val.name}
                </li>
              ))}
          </div>
        </ol>
      ));
    }

    return <ol>{post}</ol>;
  }

  render() {
    return this.renderFeed();
  }
}

export default Feed;
