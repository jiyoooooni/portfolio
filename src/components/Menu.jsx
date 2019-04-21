import React from "react";

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      isFixed: false
    };
    this.menuRef = React.createRef();
  }

  componentDidMount() {
    const self = this;
    const height = this.menuRef.current.getBoundingClientRect().height;

    window.addEventListener("scroll", function(e) {
      const pivot = window.Math.floor(window.innerHeight / 2 - height / 2);

      if (window.scrollY > pivot && !self.state.isFixed) {
        self.setState({
          isFixed: true
        });
      } else if (window.scrollY <= pivot && self.state.isFixed) {
        self.setState({
          isFixed: false
        });
      }
    });
  }

  render() {
    const { isFixed } = this.state;
    const { onClickOption } = this.props;

    return (
      <nav
        className={`global_menu ${isFixed ? "is_fixed" : ""}`}
        ref={this.menuRef}
      >
        <ul className="nav_wrap">
          <li className="nav_list">
            <a href="#" className="nav_list_in" onClick={onClickOption[0]}>
              <span className="text">Prolog</span>
              <img src="/portfolio/assets/woman.svg" alt="" className="icon" />
            </a>
          </li>
          <li className="nav_list">
            <a href="#" className="nav_list_in" onClick={onClickOption[1]}>
              <span className="text">Intro&amp;Skill</span>
              <img src="/portfolio/assets/icon.svg" alt="" className="icon" />
            </a>
          </li>
          <li className="nav_list">
            <a href="#" className="nav_list_in" onClick={onClickOption[2]}>
              <span className="text">My projects</span>
              <img
                src="/portfolio/assets/project.svg"
                alt=""
                className="icon"
              />
            </a>
          </li>
          <li className="nav_list">
            <a href="#" className="nav_list_in" onClick={onClickOption[3]}>
              <span className="text">Contacts</span>
              <img src="/portfolio/assets/phone.svg" alt="" className="icon" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
