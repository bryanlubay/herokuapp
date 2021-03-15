import React from 'react';
import ReactCardFlip from 'react-card-flip';

const CompTIA = () => {
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