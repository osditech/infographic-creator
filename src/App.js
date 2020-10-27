import logo from './logo.svg';
import './App.css';
import React from 'react';
import * as htmlToImage from 'html-to-image';
import * as download from 'downloadjs';

class App extends React.Component {
  node;
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.node = this.myRef.current;
    // console.log(node);
    this.downloadImage();
  }
  downloadImage() {
    // const node = this.myRef;
    // console.log('App -> downloadImage -> node', node);

    htmlToImage.toPng(this.node).then(dataUrl => {
      download(dataUrl, 'sample-image.png');
    });
  }
  render() {
    return (
      <div>
        <div className='App' ref={this.myRef}>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>
          </header>
        </div>
        <div>
          <h1>Download button</h1>
          {/* <button onClick={this.downloadImage()}>download</button> */}
        </div>
      </div>
    );
  }
}

export default App;
