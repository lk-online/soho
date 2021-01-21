import React from "react";

function Icon(props) {
  return <img src={`assets/icons/${props.icon}.svg`} alt="" onClick={props.onClick} />;
}

class Icons extends React.Component {
  renderIcons(props) {
    return <Icon icon={props} onClick={() => this.props.onClick(props)} />;
  }

  render() {
    return (
      <div className="btmNavIcons">
        {this.renderIcons("home")}
        {this.renderIcons("plus")}
        {this.renderIcons("zoom")}
        {this.renderIcons("user")}
      </div>
    );
  }
}

class BtmNav extends React.Component {
  render() {
    return (
      <div>
        <Icons onClick={this.props.onClick} />
      </div>
    );
  }
}

export default BtmNav;
