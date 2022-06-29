import React from "react";

class ButtonCarousel extends React.Component {
  render() {
    const { btnClickHandler = () => {}, btnText = "" } = this.props;
    return <button onClick={btnClickHandler}>{btnText}</button>;
  }
}

export default ButtonCarousel;
