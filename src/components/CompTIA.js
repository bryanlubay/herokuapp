import React from 'react';
import {Button, Card} from 'react-bootstrap';

import './CompTIA.css'

function show_answer() {
  document.getElementById("back").hidden = false;
  document.getElementById("show_button").hidden = true;
  document.getElementById("hide_button").hidden = false;
}

function hide_answer() {
  document.getElementById("back").hidden = true;
  document.getElementById("show_button").hidden = false;
  document.getElementById("hide_button").hidden = true;
}


const CompTIA = () => {

  // document.getElementById("back").hidden = true;
  // document.getElementById("hide_button").hidden = true;

  return (
    <div>

    <Card>
      <p id="front" className="front">
        Front
      </p>
      <p id="back" className="back">
        Back
      </p>

      <Button id="show_button" onClick={() => show_answer()}>
        Show Answer
      </Button>

      <Button id="hide_button" onClick={() => hide_answer()}>
        Hide Answer
      </Button>

    </Card>


    </div>
  )
}

export default CompTIA;