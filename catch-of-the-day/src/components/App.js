import React from "react";
import fishes from "../sample-fishes";
import { Header } from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
import PropTypes from "prop-types";
class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
  componentDidMount() {
    console.log("Mounting.");
    const { params } = this.props.match;
    // first reinstate our local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      console.log("localStorageRef = " + localStorageRef);
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    // this persists state.fishes in the Google Firebase. But not order!
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }
  componentDidUpdate() {
    //console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
    //console.log("It updated!");
  }
  componentWillUnmount() {
    console.log("Unmounting!");
    base.removeBinding(this.ref);
  }
  addFish = (fish) => {
    console.log("Adding a fish!");
    // 1. take a copy of an existing state - "..." takes a copy, it's not a deepclone just a top level copy
    const newFishes = { ...this.state.fishes };
    // 2. add our new fish to the fishes variable
    newFishes[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState({
      fishes: newFishes,
    });
    // if I had named newFishes as fishes could just say this.setState({fishes});
  };
  updateFish = (key, updatedFish) => {
    // 1. take a copy of the current state fish - "..." takes a copy, it's not a deepclone just a top level copy
    const fishes = { ...this.state.fishes };
    // 2. update that state
    fishes[key] = updatedFish;
    // 3. set that to state
    this.setState({ fishes });
  };
  deleteFish = (key) => {
    // 1. take a copy of state
    const fishes = { ...this.state.fishes };
    // delete fishes[key]; would do this normally but in order to delete it in firebase need to set it to null
    // 2. update the state
    fishes[key] = null;
    // 3. update state
    this.setState({ fishes });
  };
  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes,
    });
  };
  addToOrder = (key) => {
    // 1. take copy of state
    const order = this.state.order;
    // 2. add to order or update quantity in order
    order[key] = order[key] + 1 || 1;
    // 3. call setState to update state object
    this.setState({ order }); // shortcut if new order var name is same as old state.order var name
  };
  deleteFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };
  render() {
    return (
      <>
        <React.StrictMode>
          <div className="catch-of-the-day">
            <div className="menu">
              <Header tagline="Fresh Seafood Market" age={340} cool={true} />
              <ul className="fishes">
                {this.state.fishes
                  ? Object.keys(this.state.fishes).map((key) => (
                      <Fish
                        key={key}
                        myKey={key}
                        details={this.state.fishes[key]}
                        addToOrder={this.addToOrder}
                      />
                    ))
                  : null}
              </ul>
            </div>
            {/* <Order {...this.state} />  ...this.state passes everything from the state into the order but it could be an issue... 
             if you add lots to state later on it all gets passed 
             don't pass data unless you explicitly need it */}
            <Order
              order={this.state.order}
              fishes={this.state.fishes}
              deleteFromOrder={this.deleteFromOrder}
            />
            <Inventory
              addFish={this.addFish}
              updateFish={this.updateFish}
              deleteFish={this.deleteFish}
              loadSampleFishes={this.loadSampleFishes}
              fishes={this.state.fishes}
            />
          </div>
        </React.StrictMode>
      </>
    );
  }
}

export default App;
