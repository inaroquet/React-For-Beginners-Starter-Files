import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
    myKey: PropTypes.string.isRequired,
    updateFish: PropTypes.func.isRequired,
  };
  handleChange = (event) => {
    console.log("event.currentTarget = ");
    console.log(event.currentTarget);
    console.log("event.currentTarget.value = ");
    console.log(event.currentTarget.value);
    // 1. take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    console.log("updatedFish = ");
    console.log(updatedFish);
    console.log("[event.currentTarget.name]: event.currentTarget.value = ");
    console.log({ [event.currentTarget.name]: event.currentTarget.value });
    // 2. update that fish
    this.props.updateFish(this.props.myKey, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type=""
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button
          onClick={(event) => {
            this.props.deleteFish(this.props.myKey);
          }}
        >
          Remove Fish
        </button>
      </div>
    );
  }
}
export default EditFishForm;
