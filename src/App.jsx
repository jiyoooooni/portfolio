import React from 'react';
import Contact from './components/Contact'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import Menu from './components/Menu'
import Projects from './components/Projects'
import RollingBanner from './components/RollingBanner'
import Welcome from './components/Welcome'
import './stylesheets/reset.css'
import './stylesheets/app.css'

class App extends React.Component {
  constructor() {
    super();

    this.elevatorRef = React.createRef();
    this.contentRef = React.createRef();
    this.onClickOption = [
      this.switchElevator.bind(this, 1),
      this.switchElevator.bind(this, 2),
      this.switchElevator.bind(this, 3),
      this.switchElevator.bind(this, 4)
    ];
  }

  switchElevator(num, e) {
    e.preventDefault();

    const sectionEls = Array.from(this.contentRef.current.children).slice(0, num);
    const height = sectionEls.reduce((accum, sectionEl) => {
      accum += sectionEl.clientHeight;

      return accum;
    }, 0);

    window.scrollTo(0, height);
  }

  render() {
    return (
      <div className="wrap">
        <Menu onClickOption={this.onClickOption} />
        <div className="elevator" ref={this.elevatorRef}>
          <div className="content" ref={this.contentRef}>
            <RollingBanner />
            <Welcome />
            <Introduction />
            <Projects />
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
