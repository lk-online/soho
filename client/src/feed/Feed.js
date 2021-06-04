import React from "react";
import "./Feed.css";

function Icon(props) {
  return <input type="image" src={`assets/icons/${props.icon}.svg`} alt="" onClick={props.onClick} />;
}

class Icons extends React.Component {
  renderIcons() {
    let like;
    let interested;
    let seen;

    this.props.value.like.includes(this.props.postID) ? (like = "like") : (like = "nolike");
    this.props.value.interested.includes(this.props.postID)
      ? (interested = "interested")
      : (interested = "notinterested");
    this.props.value.seen.includes(this.props.postID) ? (seen = "seen") : (seen = "new");

    return (
      <div className="state-icons">
        <Icon icon={like} onClick={() => this.props.onClick(this.props.postID, "like")} />
        <Icon icon={interested} onClick={() => this.props.onClick(this.props.postID, "interested")} />
        <Icon icon={seen} onClick={() => this.props.onClick(this.props.postID, "seen")} />
      </div>
    );
  }

  render() {
    return this.renderIcons();
  }
}

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
      loggedUserID: "600e99e7126abc3228851bc2",
      like: [],
      interested: [],
      seen: [],
      posts: [],
    };
    this.renderFeed = this.renderFeed.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch("https://lk-soho.herokuapp.com/actions/posts")
      .then((res) => res.json())
      .then((res) => this.setState({ apiResponse: res }));

    fetch(`https://lk-soho.herokuapp.com/actions/user/${this.state.loggedUserID}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          like: res.like,
          interested: res.interested,
          seen: res.seen,
          posts: res.posts,
        })
      );
  }

  handleClick(e, icon) {
    const like_index = this.state.like.indexOf(e);
    const interested_index = this.state.interested.indexOf(e);
    const seen_index = this.state.seen.indexOf(e);

    switch (icon) {
      case "like":
        this.state.like.includes(e) ? this.state.like.splice(like_index, 1) : this.state.like.push(e);
        break;
      case "interested":
        this.state.interested.includes(e)
          ? this.state.interested.splice(interested_index, 1)
          : this.state.interested.push(e);
        break;
      case "seen":
        this.state.seen.includes(e) ? this.state.seen.splice(seen_index, 1) : this.state.seen.push(e);
        break;
      default:
        break;
    }

    const params = new URLSearchParams();

    for (let l of this.state.like) {
      params.append("like", l);
    }
    for (let i of this.state.interested) {
      params.append("interested", i);
    }
    for (let s of this.state.seen) {
      params.append("seen", s);
    }
    for (let p of this.state.posts) {
      params.append("posts", p);
    }

    fetch(`https://lk-soho.herokuapp.com/actions/user/${this.state.loggedUserID}/update`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    })
      .then((res) =>
        this.setState({
          like: this.state.like.concat(Object.values(res)),
          interested: this.state.interested.concat(Object.values(res)),
          seen: this.state.seen.concat(Object.values(res)),
        })
      )
      .catch((err) => console.error(err));
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
          <Icons value={this.state} postID={i._id} onClick={this.handleClick} />
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
