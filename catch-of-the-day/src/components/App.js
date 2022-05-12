import React from "react";
import { Header } from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  addFish = fish => {
      console.log("Adding a fish!");
      // 1. take a copy of an existing state - "..." takes a copy, it's not a deepclone just a top level copy
      const newFishes = {...this.state.fishes};
      // 2. add our new fish to the fishes variable
      newFishes[`fish${Date.now()}`] = fish;
      // 3. set the new fishes object to state
      this.setState({
          fishes: newFishes
      });
      // if I had named newFishes as fishes could just say this.setState({fishes});
  }
  render() {
    return (
      <>
        <React.StrictMode>
          <div className="catch-of-the-day">
            <div className="menu">
              <Header tagline="Fresh Seafood Market" age={340} cool={true} />
              <Header tagline="Ina's react site" age={340} cool={true} />
            </div>
            <Order />
            <Inventory addFish={this.addFish} />
          </div>
        </React.StrictMode>
      </>
    );
  }
}

export default App;
