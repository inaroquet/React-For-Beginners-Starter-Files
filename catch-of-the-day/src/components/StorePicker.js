import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    // 1. stop the form from submitting (& refreshing page)
    console.log(this.myInput.current.value);
    // 2. get text from the input

    // 3. change page to /store/value-from-input

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
