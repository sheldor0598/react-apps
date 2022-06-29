import React from "react";
import ButtonCarousel from "./ButtonCarousel";
import "../index.css";

const ImageItems = [
  {
    name: "Image One",
    link:
      "https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750_960_720.jpg"
  },
  {
    name: "Image Two",
    link:
      "https://media.istockphoto.com/photos/wild-berry-mix-strawberries-blueberries-blackberries-and-raspberries-picture-id499658564?s=612x612"
  },
  {
    name: "Image Three",
    link:
      "https://cdn.pixabay.com/photo/2022/05/26/19/14/child-7223632_960_720.jpg"
  },
  {
    name: "Image Four",
    link:
      "https://media.istockphoto.com/photos/happy-indian-mother-having-fun-with-her-daughter-outdoor-family-and-picture-id1325578537?s=612x612"
  }
];

const arraySize = ImageItems.length;

class CustomCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  PreviousImage = () => {
    this.setState((prevState) => ({
      index:
        prevState.index > 0
          ? (prevState.index = prevState.index - 1)
          : prevState.index
    }));
  };

  NextImage = () => {
    this.setState((prevState) => ({
      index:
        prevState.index < arraySize - 1
          ? (prevState.index = prevState.index + 1)
          : prevState.index
    }));
  };

  render() {
    return (
      <div>
        <ButtonCarousel btnClickHandler={this.PreviousImage} btnText="Prev" />
        <ButtonCarousel btnClickHandler={this.NextImage} btnText="Next" />
        <li>
          <h3>{ImageItems[this.state.index].name}</h3>
          <img
            className="border"
            src={ImageItems[this.state.index].link}
            alt="images"
          />
        </li>
      </div>
    );
  }
}

export default CustomCarousel;
