import React from "react";
import "./NewPost.css";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
    };
    this.createTag = this.createTag.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:9000/actions/post/create")
      .then((res) => res.json())
      .then((res) => this.setState({ apiResponse: res }));

    //.then(() => console.log(this.state.apiResponse));
  }

  createTag() {
    let geoTag;
    let basicTag;
    let priceTag;
    let requiredTag;
    let optionalTag;

    if (this.state.apiResponse.length !== 0) {
      geoTag = this.state.apiResponse
        .filter((i) => i.category === "geo")
        .map((val) => (
          <div key={val._id}>
            <input type="checkbox" id={val._id} name="tag" value={val._id} checked={val.checked} />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      basicTag = this.state.apiResponse
        .filter((i) => i.category === "basic")
        .map((val) => (
          <div key={val._id}>
            <input type="checkbox" id={val._id} name="tag" value={val._id} checked={val.checked} />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      priceTag = this.state.apiResponse
        .filter((i) => i.category === "price")
        .map((val) => (
          <div key={val._id}>
            <input type="checkbox" id={val._id} name="tag" value={val._id} checked={val.checked} />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      requiredTag = this.state.apiResponse
        .filter((i) => i.category === "required")
        .map((val) => (
          <div key={val._id}>
            <input type="checkbox" id={val._id} name="tag" value={val._id} checked={val.checked} />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
      optionalTag = this.state.apiResponse
        .filter((i) => i.category === "optional")
        .map((val) => (
          <div key={val._id}>
            <input type="checkbox" id={val._id} name="tag" value={val._id} checked={val.checked} />
            <label htmlFor={val._id}>{val.name}</label>
          </div>
        ));
    }

    return (
      <form action="http://localhost:9000/actions/post/create" method="post">
        <div className="geoTag">
          <h2>Διεύθυνση</h2>
          {geoTag}
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
        <input type="submit" value="δημιουργία" onSubmit={this.handleSubmit}></input>
      </form>
    );
  }

  render() {
    return <div>{this.createTag()}</div>;
  }
}

export default NewPost;
