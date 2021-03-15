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

  return (
    <div>

    <Card>
      <p id="question_number">
        Question #
      </p>
      <p id="front" className="front">
        Front
      </p>
      <p id="back" hidden="true" className="back">
        Back
      </p>

    </Card>

    <Button id="show_button" onClick={() => show_answer()}>
        Show Answer
      </Button>

      <Button id="hide_button" hidden="true" onClick={() => hide_answer()}>
        Hide Answer
      </Button>

      <Button>
        Add New Card
      </Button>

      <Button>
        Delete This Card
      </Button>


    </div>
  )
}

export default CompTIA;