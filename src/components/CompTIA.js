import React from 'react';
import ReactCardFlip from 'react-card-flip';

const CompTIA = () => {
  return (
    <div>
      {/* <h1>CompTIA flash cards app coming soon :)</h1> */}

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <YOUR_FRONT_CCOMPONENT>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_FRONT_CCOMPONENT>

        <YOUR_BACK_COMPONENT>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_BACK_COMPONENT>
      </ReactCardFlip>


    </div>
  )
}

export default CompTIA;