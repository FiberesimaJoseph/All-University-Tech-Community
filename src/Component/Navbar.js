import React, { Component } from "react";
import MenuItems from "../Component/MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  HandleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div>
          <img className="logo" src="logo.png" alt={""} />
        </div>
        <div className="spacer"></div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
