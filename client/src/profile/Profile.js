import React from "react";
import "./Profile.css";

function Liked(props) {
  let liked =
    props.posts.apiResponse.length !== 0 &&
    props.posts.like.map((i) =>
      props.posts.apiResponse
        .filter((x) => x._id === i)
        .map((p) => (
          <ol className="post" key={p._id} id={p._id}>
            <div className="geo-tags">
              {p.tag
                .filter((c) => c.category === "geo")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="basic-tags">
              {p.tag
                .filter((c) => c.category === "basic")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="area-tag">
              {p.tag
                .filter((c) => c.category === "area")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="price-tag">
              {p.tag
                .filter((c) => c.category === "price")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            {p.user.length === 1 ? (
              <div className="users">
                <div className="username">{p.user[0].username}</div>
                <div className="user-capacity">{p.user[0].capacity}</div>
              </div>
            ) : (
              <div className="users">
                <div className="username">{p.user[0].username}</div>
                <div className="user-capacity">{p.user[0].capacity}</div>
                <div className="username">+{p.user.length - 1} ακόμα</div>
              </div>
            )}
            <div className="profile-post-images">
              <img alt="" src="assets/images/IMG_4142.JPEG" />
              <img alt="" src="assets/images/IMG_4142.JPEG" />
              <img alt="" src="assets/images/IMG_4142.JPEG" />
              <img alt="" src="assets/images/IMG_4142.JPEG" />
            </div>
            <div className="required-tags">
              {p.tag
                .filter((c) => c.category === "required")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="optional-tags">
              {p.tag
                .filter((c) => c.category === "optional")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
          </ol>
        ))
    );
  return liked;
}

function Interested(props) {
  let interested =
    props.posts.apiResponse.length !== 0 &&
    props.posts.interested.map((i) =>
      props.posts.apiResponse
        .filter((x) => x._id === i)
        .map((p) => (
          <ol className="post" key={p._id} id={p._id}>
            <div className="geo-tags">
              {p.tag
                .filter((c) => c.category === "geo")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="basic-tags">
              {p.tag
                .filter((c) => c.category === "basic")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="area-tag">
              {p.tag
                .filter((c) => c.category === "area")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="price-tag">
              {p.tag
                .filter((c) => c.category === "price")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            {p.user.length === 1 ? (
              <div className="users">
                <div className="username">{p.user[0].username}</div>
                <div className="user-capacity">{p.user[0].capacity}</div>
              </div>
            ) : (
              <div className="users">
                <div className="username">{p.user[0].username}</div>
                <div className="user-capacity">{p.user[0].capacity}</div>
                <div className="username">+{p.user.length - 1} ακόμα</div>
              </div>
            )}
            <div className="profile-post-images">
              <img alt="" src="assets/images/IMG_4142.JPEG" />
              <img alt="" src="assets/images/IMG_4142.JPEG" />
              <img alt="" src="assets/images/IMG_4142.JPEG" />
              <img alt="" src="assets/images/IMG_4142.JPEG" />
            </div>
            <div className="required-tags">
              {p.tag
                .filter((c) => c.category === "required")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="optional-tags">
              {p.tag
                .filter((c) => c.category === "optional")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
          </ol>
        ))
    );
  return interested;
}

function Seen(props) {
  let seen =
    props.posts.apiResponse.length !== 0 &&
    props.posts.seen.map((i) =>
      props.posts.apiResponse
        .filter((x) => x._id === i)
        .map((p) => (
          <ol className="post" key={p._id} id={p._id}>
            <div className="geo-tags">
              {p.tag
                .filter((c) => c.category === "geo")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="basic-tags">
              {p.tag
                .filter((c) => c.category === "basic")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="area-tag">
              {p.tag
                .filter((c) => c.category === "area")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="price-tag">
              {p.tag
                .filter((c) => c.category === "price")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            {p.user.length === 1 ? (
              <div className="users">
                <div className="username">{p.user[0].username}</div>
                <div className="user-capacity">{p.user[0].capacity}</div>
              </div>
            ) : (
              <div className="users">
                <div className="username">{p.user[0].username}</div>
                <div className="user-capacity">{p.user[0].capacity}</div>
                <div className="username">+{p.user.length - 1} ακόμα</div>
              </div>
            )}
            <div className="profile-post-images">
              <img alt="" src="assets/images/IMG_4142.JPEG" />
              <img alt="" src="assets/images/IMG_4142.JPEG" />
              <img alt="" src="assets/images/IMG_4142.JPEG" />
              <img alt="" src="assets/images/IMG_4142.JPEG" />
            </div>
            <div className="required-tags">
              {p.tag
                .filter((c) => c.category === "required")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="optional-tags">
              {p.tag
                .filter((c) => c.category === "optional")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
          </ol>
        ))
    );
  return seen;
}

function SelfPosts(props) { 
  let selfPosts =
    props.posts.apiResponse.length !== 0 &&
    props.posts.selfPosts.map((i) =>
      props.posts.apiResponse
        .filter((x) => x._id === i)
        .map((p) => (
          <ol className="post" key={p._id} id={p._id}>
            <div className="geo-tags">
              {p.tag
                .filter((c) => c.category === "geo")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="basic-tags">
              {p.tag
                .filter((c) => c.category === "basic")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="area-tag">
              {p.tag
                .filter((c) => c.category === "area")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="price-tag">
              {p.tag
                .filter((c) => c.category === "price")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="profile-post-images">
              <img alt="" src="assets/images/IMG_4142.JPEG" />
              <img alt="" src="assets/images/IMG_4142.JPEG" />
              <img alt="" src="assets/images/IMG_4142.JPEG" />
              <img alt="" src="assets/images/IMG_4142.JPEG" />
            </div>
            <div className="required-tags">
              {p.tag
                .filter((c) => c.category === "required")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
            <div className="optional-tags">
              {p.tag
                .filter((c) => c.category === "optional")
                .map((n) => (
                  <li className="tag" key={n._id} id={n._id}>
                    {n.name}
                  </li>
                ))}
            </div>
          </ol>
        ))
    );
  return selfPosts;
}

class ProfileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "selfPosts",
    };
  }
  addActiveState(props) {
    this.setState({ view: props });
  }
  render() {
    return (
      <div>
        <ol className="profile-nav">
          <h2 className="username">{this.props.props.username}</h2>
          <li
            className={this.state.view.length !== 0 && this.state.view === "selfPosts" ? "active" : undefined}
            onClick={() => {
              this.props.onClick("selfPosts");
              this.addActiveState("selfPosts");
            }}
          >
            οι καταχωρήσεις σας
          </li>
          <li
            className={this.state.view.length !== 0 && this.state.view === "like" ? "active" : undefined}
            onClick={() => {
              this.props.onClick("like");
              this.addActiveState("like");
            }}
          >
            σας αρέσουν
          </li>
          <li
            className={
              this.state.view.length !== 0 && this.state.view === "interested" ? "active" : undefined
            }
            onClick={() => {
              this.props.onClick("interested");
              this.addActiveState("interested");
            }}
          >
            σας ενδιαφέρουν
          </li>
          <li
            className={this.state.view.length !== 0 && this.state.view === "seen" ? "active" : undefined}
            onClick={() => {
              this.props.onClick("seen");
              this.addActiveState("seen");
            }}
          >
            έχετε δει
          </li>
        </ol>
      </div>
    );
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
      loggedUserID: "600e99e7126abc3228851bc2",
      username: "",
      view: "selfPosts",
      like: [],
      interested: [],
      seen: [],
      selfPosts: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderFeed = this.renderFeed.bind(this);
  }

  componentDidMount() {
    fetch("https://lk-soho.herokuapp.com/actions/posts")
      .then((res) => res.json())
      .then((res) => this.setState({ apiResponse: res }));

    fetch(`https://lk-soho.herokuapp.com/actions/user/${this.state.loggedUserID}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          username: res.username,
          like: res.like,
          interested: res.interested,
          seen: res.seen,
          selfPosts: res.posts,
        })
      );
  }

  handleClick(props) {
    this.setState({ view: props });
    this.renderFeed(props);
  }

  renderFeed(props) {
    let view;

    switch (props) {
      case "like":
        view = (
          <li>
            <Liked posts={this.state} />
          </li>
        );
        break;
      case "interested":
        view = (
          <li>
            <Interested posts={this.state} />
          </li>
        );
        break;
      case "seen":
        view = (
          <li>
            <Seen posts={this.state} />
          </li>
        );
        break;
      case "selfPosts":
        view = (
          <li>
            <SelfPosts posts={this.state} />
          </li>
        );
        break;
      default:
        break;
    }

    return <ol className="profile-posts">{view}</ol>;
  }

  render() {
    return (
      <div>
        <ProfileMenu props={this.state} onClick={this.handleClick} />
        {this.renderFeed(this.state.view)}
      </div>
    );
  }
}

export default Profile;
