import React from 'react';
import ReactCardFlip from 'react-card-flip';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
}


// function handleClick(e) {
//   e.preventDefault();
//   this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
// }


const CompTIA = () => {

  // constructor(); {
  //   super();
  //     this.state = {
  //     isFlipped: false
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(e) {
  //   e.preventDefault();
  //   this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  // }
  // this.state = {
  //   isFlipped: false
  // };


  // const state  = React.setState(
  //   { 
  //     isFlipped: false
  //   })

  this.state = {
    isFlipped: false
  };

  return (
    <div>
      {/* <h1>CompTIA flash cards app coming soon :)</h1> */}

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <p>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </p>

        <p>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </p>
      </ReactCardFlip>


    </div>
  )
}

export default CompTIA;