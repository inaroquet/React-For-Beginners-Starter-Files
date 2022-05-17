import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  goToStore = (event) => {
    // 1. stop the form from submitting (& refreshing page)
    event.preventDefault();
    // 2. get text from the input
    const storeName = this.myInput.current.value;
    // 3. change page to /store/value-from-input WITHOUT RELOADING - 
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Enter Store Name"
            defaultValue={getFunName()}
          />
          <button type="Submit">Visit Store → </button>
        </form>
      </>
    );
  }
}

export default StorePicker;
