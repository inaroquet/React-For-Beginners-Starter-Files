import React from "react";
import PropTypes from "prop-types";

// this is a Stateless Functional Component
export const Header = props => (
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
      <span>{props.tagline}</span>
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
};

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header1;
