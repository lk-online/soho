import React from "react";
import Success from "../profile/Success";
import "./NewPost.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.createTag = this.createTag.bind(this);
  }
  createTag(props) {
    let basicTag;
    let geoTag;
    let areaTag;
    let priceTag;
    let requiredTag;
    let optionalTag;

    if (props.props.length !== 0) {
      geoTag = props.props
        .filter((i) => i.category === "geo")
        .map((val) => (
          <div key={val._id}>
            <input type="checkbox" id={val._id} name="tag" value={val._id} checked={val.checked} />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      areaTag = props.props
        .filter((i) => i.category === "area")
        .map((val) => (
          <div key={val._id}>
            <input type="checkbox" id={val._id} name="tag" value={val._id} checked={val.checked} />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      basicTag = props.props
        .filter((i) => i.category === "basic")
        .map((val) => (
          <div key={val._id}>
            <input type="checkbox" id={val._id} name="tag" value={val._id} checked={val.checked} />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      priceTag = props.props
        .filter((i) => i.category === "price")
        .map((val) => (
          <div key={val._id}>
            <input type="checkbox" id={val._id} name="tag" value={val._id} checked={val.checked} />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      requiredTag = props.props
        .filter((i) => i.category === "required")
        .map((val) => (
          <div key={val._id}>
            <input type="checkbox" id={val._id} name="tag" value={val._id} checked={val.checked} />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      optionalTag = props.props
        .filter((i) => i.category === "optional")
        .map((val) => (
          <div key={val._id}>
            <input type="checkbox" id={val._id} name="tag" value={val._id} checked={val.checked} />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
    }
    return (
      <form id="newPostForm" name="newPostForm" onSubmit={props.onSubmit}>
        <div className="geoTag">
          <h2>Διεύθυνση</h2>
          {geoTag}
        </div>
        <div className="areaTag">
          <h2>Τετραγωνικά</h2>
          {areaTag}
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
          <input type="hidden" id="user" name="user" value="600922218b0ad82910cbf460"></input>
        </div>
        <input type="submit" value="δημιουργία"></input>
      </form>
    );
  }
  render() {
    return <div>{this.createTag(this.props)}</div>;
  }
}

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
      saved: false,
      ID: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.save = this.save.bind(this);
    this.addAnother = this.addAnother.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:9000/actions/post/create")
      .then((res) => res.json())
      .then((res) => this.setState({ apiResponse: res, saved: false }));
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
    })
      .then((res) => res.json())
      .then((res) => this.setState({ ID: res, saved: true }))
      .catch((err) => {
        console.error(err);
      });
    e.preventDefault();
  }

  addAnother() {
    return this.setState({ saved: false, ID: "" });
  }

  save(props) {
    return props ? (
      <div className="newPostSuccess">
        <Success props={this.state.ID} />
        <button onClick={this.addAnother}>δημιουργία νέας</button>
      </div>
    ) : (
      <div className="newPost">
        <Form props={this.state.apiResponse} onSubmit={this.handleSubmit} />
      </div>
    );
  }

  render() {
    return <div>{this.save(this.state.saved)}</div>;
  }
}

export default NewPost;
