import React from "react";
import "./Feed.css";

function Icons(props) {
  let liked;
  const like = <img src="assets/icons/like.svg" alt="" />;
  const nolike = <img src="assets/icons/nolike.svg" alt="" />;
  let interest;
  const interested = <img src="assets/icons/interested.svg " alt="" />;
  const notinterested = <img src="assets/icons/notinterested.svg" alt="" />;
  let history;
  const seen = <img src="assets/icons/seen.svg" alt="" />;
  const notseen = <img src="assets/icons/new.svg" alt="" />;

  props.value.like.includes(props.postID) ? (liked = like) : (liked = nolike);
  props.value.interested.includes(props.postID) ? (interest = interested) : (interest = notinterested);
  props.value.seen.includes(props.postID) ? (history = seen) : (history = notseen);

  return (
    <div className="state-icons">
      {liked}
      {interest}
      {history}
    </div>
  );
}

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
      loggedUserID: "600922218b0ad82910cbf460",
      like: [],
      interested: [],
      seen: [],
    };
    this.renderFeed = this.renderFeed.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:9000/actions/posts")
      .then((res) => res.json())
      .then((res) => this.setState({ apiResponse: res }));
    //.then(() => console.log(this.state.apiResponse));

    fetch(`http://localhost:9000/actions/user/${this.state.loggedUserID}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          like: res.like,
          interested: res.interested,
          seen: res.seen + res.like + res.interested,
        })
      )
      .then(() => console.log(this.state.like));
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
          <div className="area-tag">
            {i.tag
              .filter((t) => t.category === "area")
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
          <Icons value={this.state} postID={i._id} />
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
