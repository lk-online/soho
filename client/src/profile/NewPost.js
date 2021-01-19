import React from "react";
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
          <input type="hidden" id="user" name="user" value="6002e370cebc10364c88bb6b"></input>
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
    };
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

  render() {
    return <Form props={this.state.apiResponse} onSubmit={this.handleSubmit} />;
  }
}

export default NewPost;
