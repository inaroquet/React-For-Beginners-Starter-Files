import React from "react";

export const Header = ({tagline, age}) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  </header>
);

class Header1 extends React.Component {
  render() {
    return (
        <h3 className="tagline">
          <span>WRONG HEADER</span>
        </h3>
    );
  }
}

export default Header1;
