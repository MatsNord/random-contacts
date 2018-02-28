import React from 'react';
import ReactDOM from 'react-dom';
import './loader.css';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.getElementById('loader-root').appendChild(this.el);
  }

  componentWillUnmount() {
    document.getElementById('loader-root').removeChild(this.el);
  }
  
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default Loader;