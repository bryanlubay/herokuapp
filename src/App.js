// heroku git:remote -a bryanlubay

import React, { useEffect, useState } from 'react';
import { Card, Form, Button, Alert, Accordion, Table, Image } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { HashLink as Link } from 'react-router-hash-link';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function convertState(state) {
  state = state.toUpperCase()
  if (state == "AL" || state == "ALABAMA") {
    document.getElementById('state').textContent = "Alabama"
    return ('al')
  }
  else if (state == "AK" || state == "ALASKA") {
    document.getElementById('state').textContent = "Alaska"
    return ('ak')
  }
  else if (state == "AZ" || state == "ARIZONA") {
    document.getElementById('state').textContent = "Arizona"
    return ('az')
  }
  else if (state == "AR" || state == "ARKANSAS") {
    document.getElementById('state').textContent = "Arkansas"
    return ('ar')
  }
  else if (state == "CA" || state == "CALIFORNIA") {
    document.getElementById('state').textContent = "California"
    return ('ca')
  }
  else if (state == "CO" || state == "COLORADO") {
    document.getElementById('state').textContent = "Colorado"
    return ('co')
  }
  else if (state == "CT" || state == "CONNECTICUT") {
    document.getElementById('state').textContent = "Connecticut"
    return ('ct')
  }
  else if (state == "DE" || state == "DELAWARE") {
    document.getElementById('state').textContent = "Delaware"
    return ('de')
  }
  else if (state == "FL" || state == "FLORIDA") {
    document.getElementById('state').textContent = "Florida"
    return ('fl')
  }
  else if (state == "GA" || state == "GEORGIA") {
    document.getElementById('state').textContent = "Georgia"
    return ('ga')
  }
  else if (state == "HI" || state == "HAWAII") {
    document.getElementById('state').textContent = "Hawaii"
    return ('hi')
  }
  else if (state == "IL" || state == "ILLINOIS") {
    document.getElementById('state').textContent = "Illinois"
    return ('il')
  }
  else if (state == "IN" || state == "INDIANA") {
    document.getElementById('state').textContent = "Indiana"
    return ('in')
  }
  else if (state == "IA" || state == "IOWA") {
    document.getElementById('state').textContent = "Iowa"
    return ('ia')
  }
  else if (state == "KS" || state == "KANSAS") {
    document.getElementById('state').textContent = "Kansas"
    return ('ks')
  }
  else if (state == "KY" || state == "KENTUCKY") {
    document.getElementById('state').textContent = "Kentucky"
    return ('ky')
  }
  else if (state == "LA" || state == "LOUISIANA") {
    document.getElementById('state').textContent = "Louisiana"
    return ('la')
  }
  else if (state == "ME" || state == "MAINE") {
    document.getElementById('state').textContent = "Maine"
    return ('me')
  }
  else if (state == "MD" || state == "MARYLAND") {
    document.getElementById('state').textContent = "Maryland"
    return ('md')
  }
  else if (state == "MA" || state == "MASSACHUSETTS") {
    document.getElementById('state').textContent = "Massachusetts"
    return ('ma')
  }
  else if (state == "MI" || state == "MICHIGAN") {
    document.getElementById('state').textContent = "Michigan"
    return ('mi')
  }
  else if (state == "MN" || state == "MINNESOTA") {
    document.getElementById('state').textContent = "Minnesota"
    return ('')
  }
  else if (state == "MS" || state == "MISSISSIPPI") {
    document.getElementById('state').textContent = "Mississippi"
    return ('ms')
  }
  else if (state == "MO" || state == "MISSOURI") {
    document.getElementById('state').textContent = "Missouri"
    return ('mo')
  }
  else if (state == "MT" || state == "MONTANA") {
    document.getElementById('state').textContent = "Montana"
    return ('mt')
  }
  else if (state == "NE" || state == "NEBRASKA") {
    document.getElementById('state').textContent = "Nebraska"
    return ('ne')
  }
  else if (state == "NV" || state == "NEVADA") {
    document.getElementById('state').textContent = "Nevada"
    return ('nv')
  }
  else if (state == "NH" || state == "NEW HAMPSHIRE") {
    document.getElementById('state').textContent = "New Hampshire"
    return ('nh')
  }
  else if (state == "NJ" || state == "NEW JERSEY") {
    document.getElementById('state').textContent = "New Jersey"
    return ('nj')
  }
  else if (state == "NM" || state == "NEW MEXICO") {
    document.getElementById('state').textContent = "New Mexico"
    return ('nm')
  }
  else if (state == "NY" || state == "NEW YORK") {
    document.getElementById('state').textContent = "New York"
    return ('ny')
  }
  else if (state == "NC" || state == "NORTH CAROLINA") {
    document.getElementById('state').textContent = "North Carolina"
    return ('nc')
  }
  else if (state == "ND" || state == "NORTH DAKOTA") {
    document.getElementById('state').textContent = "North Dakota"
    return ('nd')
  }
  else if (state == "OH" || state == "OHIO") {
    document.getElementById('state').textContent = "Ohio"
    return ('oh')
  }
  else if (state == "OK" || state == "OKLAHOMA") {
    document.getElementById('state').textContent = "Oklahoma"
    return ('ok')
  }
  else if (state == "OR" || state == "OREGON") {
    document.getElementById('state').textContent = "Oregon"
    return ('or')
  }
  else if (state == "PA" || state == "PENNSYLVANIA") {
    document.getElementById('state').textContent = "Pennsylvania"
    return ('pa')
  }
  else if (state == "RI" || state == "RHODE ISLAND") {
    document.getElementById('state').textContent = "Rhode Island"
    return ('ri')
  }
  else if (state == "SC" || state == "SOUTH CAROLINA") {
    document.getElementById('state').textContent = "South Carolina"
    return ('sc')
  }
  else if (state == "SD" || state == "SOUTH DAKOTA") {
    document.getElementById('state').textContent = "South Dakota"
    return ('sd')
  }
  else if (state == "TN" || state == "TENNESSEE") {
    document.getElementById('state').textContent = "Tennessee"
    return ('tn')
  }
  else if (state == "TX" || state == "TEXAS") {
    document.getElementById('state').textContent = "Texas"
    return ('tx')
  }
  else if (state == "UT" || state == "UTAH") {
    document.getElementById('state').textContent = "Utah"
    return ('ut')
  }
  else if (state == "VT" || state == "VERMONT") {
    document.getElementById('state').textContent = "Vermont"
    return ('vt')
  }
  else if (state == "VA" || state == "VIRGINIA") {
    document.getElementById('state').textContent = "Virginia"
    return ('va')
  }
  else if (state == "WA" || state == "WASHINGTON") {
    document.getElementById('state').textContent = "Washington"
    return ('wa')
  }
  else if (state == "WV" || state == "WEST VIRGINIA") {
    document.getElementById('state').textContent = "West Virginia"
    return ('wv')
  }
  else if (state == "WI" || state == "WI") {
    document.getElementById('state').textContent = "Wisconsin"
    return ('wi')
  }
  else if (state == "WY" || state == "WYOMING") {
    document.getElementById('state').textContent = "Wyoming"
    return ('wy')
  }
  else
    document.getElementById('state').textContent = "Error, invalid state"
  return ('xx')
}

function convertEpoch(epoch) {
  var d = new Date(0);
  d.setUTCSeconds(epoch)
  return d
}

const get_data = async (state = 'nv') => {

  document.getElementById("formStateInput").hidden = true
  document.getElementById("loading").hidden = false

  let res = await fetch('https://bryanlubayapi.herokuapp.com/get_data/' + state + '/', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    params: {
      'state': state
    }
  })

  let data = await res.json()
  let asterik = "*"
  convertState(state)
  var number = parseInt(document.getElementById('tested').textContent = data.Tested[data.Tested.length - 1]) - parseInt(document.getElementById('tested').textContent = data.Tested[data.Tested.length - 2])
  document.getElementById('tested').textContent = data.Tested[data.Tested.length - 1] + " Tested (+" + number + ")" + asterik

  number = parseInt(document.getElementById('cases').textContent = data.Positive[data.Positive.length - 1]) - parseInt(document.getElementById('cases').textContent = data.Positive[data.Positive.length - 2])
  document.getElementById('cases').textContent = data.Positive[data.Positive.length - 1] + " Cases (+" + number + ")" + asterik

  number = parseInt(document.getElementById('deaths').textContent = data.Deaths[data.Deaths.length - 1]) - parseInt(document.getElementById('deaths').textContent = data.Deaths[data.Deaths.length - 2])
  document.getElementById('deaths').textContent = data.Deaths[data.Deaths.length - 1] + " Deaths (+" + number + ")" + asterik

  document.getElementById('last_updated').textContent = "Last Updated: " + convertEpoch(data.Date[data.Date.length - 1])

  document.getElementById('update_before_last').textContent = asterik + "Update Before Last: " + convertEpoch(data.Date[data.Date.length - 2])

  document.getElementById("loading").hidden = true
  document.getElementById("formStateInput").hidden = false

  return data
};

function update_data() {
  let temp = convertState(document.getElementById('input').value)
  get_data(temp)
}

function show_prevent() {
  document.getElementById("prevent").hidden = false
  document.getElementById("frequently_asked_questions").hidden = true
  document.getElementById("masks").hidden = true
  document.getElementById("symptoms").hidden = true
  document.getElementById("if_you_are_sick").hidden = true

}

function hide_prevent() {
  document.getElementById("prevent").hidden = true
}

function show_frequently_asked_questions() {
  document.getElementById("prevent").hidden = true
  document.getElementById("frequently_asked_questions").hidden = false
  document.getElementById("masks").hidden = true
  document.getElementById("if_you_are_sick").hidden = true
  document.getElementById("symptoms").hidden = true
}

function hide_frequently_asked_questions() {
  document.getElementById("frequently_asked_questions").hidden = true
}

function show_masks() {
  document.getElementById("prevent").hidden = true
  document.getElementById("frequently_asked_questions").hidden = true
  document.getElementById("masks").hidden = false
  document.getElementById("if_you_are_sick").hidden = true
  document.getElementById("symptoms").hidden = true
}

function hide_masks() {
  document.getElementById("masks").hidden = true
}

function show_if_you_are_sick() {
  document.getElementById("prevent").hidden = true
  document.getElementById("frequently_asked_questions").hidden = true
  document.getElementById("masks").hidden = true
  document.getElementById("symptoms").hidden = true
  document.getElementById("if_you_are_sick").hidden = false
}

function hide_if_you_are_sick() {
  document.getElementById("if_you_are_sick").hidden = true
}

function show_symptoms () {
  document.getElementById("prevent").hidden = true
  document.getElementById("frequently_asked_questions").hidden = true
  document.getElementById("masks").hidden = true
  document.getElementById("if_you_are_sick").hidden = true
  document.getElementById("symptoms").hidden = false
}

function hide_symptoms () {
  document.getElementById("symptoms").hidden = true
}

function App() {

  useEffect(() => {
    get_data('nv')
  }, [])

  document.title = "Bryan Lubay's App :)"

  return (


    <div className="App" >
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="App-header">

        <h3 id="loading">Loading . . .</h3>

        <Form id="formStateInput" onSubmit={e => { update_data(); e.preventDefault(); }}>
          <Form.Group controlId="formInput">
            <div class="form-inline">
              <Form.Label className="enter-state">Enter State</Form.Label><br></br>
              <Form.Control id="input" type="text" defaultValue="ca"></Form.Control>
              <Button className="submit-button" variant="light" type="submit" >Submit</Button>
            </div>
          </Form.Group>
        </Form>

        <Card id="root" className="card" border="secondary" bg="light" text="dark">
          <Card.Body>
            <Card.Header id="state" as="h1"></Card.Header>
            <Card.Text id="tested"></Card.Text>
            <Card.Text id="cases"></Card.Text>
            <Card.Text id="deaths"></Card.Text>
            <Card.Footer>
              <small id="last_updated"></small><br></br>
              <small id="update_before_last"></small>
            </Card.Footer>
          </Card.Body>
        </Card>

        <div>
                                   
          <Button className="info-buttons" variant="success" onClick={() => show_prevent()}>Prevent Getting Sick </Button>
          <Button className="info-buttons" variant="primary" onClick={() => show_frequently_asked_questions()}>Frequently Asked Questions</Button>
          <Button className="info-buttons" variant="secondary" onClick={() => show_masks()}>Masks</Button>
          <Button className="info-buttons" variant="warning" onClick={() => show_symptoms()}>Symptoms</Button>
          <Button className="info-buttons" variant="danger" onClick={() => show_if_you_are_sick()}>If You Are Sick</Button>

          <Alert className="alerts" id="prevent" variant="success" onClose={() => hide_prevent()} dismissible hidden="true">
            <Alert.Heading className="alert-headings">Prevent Getting Sick</Alert.Heading>
            <p>

              <b className="alert-subjects">How It Spreads</b>
              <ul>
                <li className="alerts-li">There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19).</li>
                <li className="alerts-li">The best way to prevent illness is to avoid being exposed to this virus.</li>
                <li className="alerts-li">The virus is thought to spread mainly from person-to-person.
            <ul>
                    <li className="alerts-nested-li">Between people who are in close contact with one another (within about 6 feet).</li>
                    <li className="alerts-nested-li">Through respiratory droplets produced when an infected person coughs, sneezes or talks.</li>
                    <li className="alerts-nested-li">These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs.</li>
                    <li className="alerts-nested-li">Some recent studies have suggested that COVID-19 may be spread by people who are not showing symptoms.</li>
                  </ul>
                </li>
              </ul>

              <b className="alert-subjects">Wash Your Hands Often</b>
              <ul>
                <li className="alerts-li">
                  <a target="_blank" href="https://www.cdc.gov/handwashing/when-how-handwashing.html" target="_blank">Wash your hands</a> often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.</li>
                <li className="alerts-li">It’s especially important to wash:
            <ul>
                    <li className="alerts-nested-li">Before eating or preparing food</li>
                    <li className="alerts-nested-li">Before touching your face</li>
                    <li className="alerts-nested-li">After using the restroom</li>
                    <li className="alerts-nested-li">After leaving a public place</li>
                    <li className="alerts-nested-li">After blowing your nose, coughing, or sneezing</li>
                    <li className="alerts-nested-li">After handling your mask</li>
                    <li className="alerts-nested-li">After changing a diaper</li>
                    <li className="alerts-nested-li">After caring for someone sick</li>
                    <li className="alerts-nested-li">After touching animals or pets</li>
                  </ul>
                </li>
                <li className="alerts-li">If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.</li>
                <li className="alerts-li"><b>Avoid touching your eyes, nose, and mouth with unwashed hands.</b></li>
              </ul>


              <b className="alert-subjects">Avoid Close Contact</b>
              <ul>

                <li className="alerts-li"><b>Inside your home: </b>avoid close contact with people who are sick.
            <ul>
                    <li className="alerts-nested-li">If possible, maintain 6 feet between the person who is sick and other household members.</li>
                  </ul>
                </li>


                <li className="alerts-li"><b>Outside your home: </b>Put 6 feet of distance between yourself and people who don’t live in your household.
            <ul>
                    <li className="alerts-nested-li">Remember that some people without symptoms may be able to spread virus.</li>
                    <li className="alerts-nested-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">Stay at least 6 feet (about 2 arms' length) from other people.</a></li>
                    <li className="alerts-nested-li">Keeping distance from others is especially important for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">people who are at higher risk of getting very sick.</a></li>
                  </ul>
                </li>
              </ul>

              <b className="alert-subjects">Cover Your Mouth And Nose With A Mask When Around Others</b>
              <ul>

                <li className="alerts-li">You could spread COVID-19 to others even if you do not feel sick.</li>
                <li className="alerts-li">The mask is meant to protect other people in case you are infected.</li>
                <li className="alerts-li">Everyone should wear a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html"></a>mask in public settings and when around people who don’t live in your household, especially when other <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing measures are difficult to maintain.</a></li>
                <ul>
                  <li className="alerts-nested-li">Masks should not be placed on young children under age 2, anyone who has trouble breathing, or is unconscious, incapacitated or otherwise unable to remove the mask without assistance.</li>
                </ul>
                <li className="alerts-li">Do NOT use a mask meant for a healthcare worker. Currently, surgical masks and N95 respirators are critical supplies that should be reserved for healthcare workers and other first responders.</li>
                <li className="alerts-li">Continue to keep about 6 feet between yourself and others. The mask is not a substitute for social distancing.</li>

              </ul>

              <b className="alert-subjects">Cover Coughs And Sneezes</b>
              <ul>

                <li className="alerts-li"><b>Always cover your mouth and nose </b>with a tissue when you cough or sneeze or use the inside of your elbow and do not spit.</li>
                <li className="alerts-li"><b>Throw used tissues </b>in the trash.</li>
                <li className="alerts-li">Immediately<b> wash your hands</b> with soap and water for at least 20 seconds. If soap and water are not readily available, clean your hands with a hand sanitizer that contains at least 60% alcohol.</li>
              </ul>

              <b className="alert-subjects">Clean And Disinfect</b>
              <ul>

                <li className="alerts-li"><b>Clean AND disinfect<a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html"> frequently touched surfaces</a> daily.</b>  This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.</li>
                <li className="alerts-li"><b>If surfaces are dirty, clean them.</b> Use detergent or soap and water prior to disinfection.</li>
                <li className="alerts-li"><b>Then, use a household disinfectant.</b> Most common <a target="_blank" href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">EPA-registered household disinfectants</a> will work.</li>
              </ul>

              <b className="alert-subjects">Monitor Your Health Daily</b>
              <ul>

                <li className="alerts-li"><b>Be alert for symptoms.</b> Watch for fever, cough, shortness of breath, or <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">other symptoms</a><b> of COVID-19.</b>
                  <ul>
                    <li className="alerts-nested-li">Especially important if you are <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/essential-goods-services.html">running essential errands</a>, going into the office or workplace, and in settings where it may be difficult to keep a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">physical distance of 6 feet.</a></li>
                  </ul></li>
                <li className="alerts-li"><b>Take your temperature</b> if symptoms develop.</li>
                <ul>
                  <li className="alerts-nested-li">Don’t take your temperature within 30 minutes of exercising or after taking medications that could lower your temperature, like acetaminophen.</li>
                </ul>
                <li className="alerts-li">Follow <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">CDC guidance</a> if symptoms develop.</li>
              </ul>

            </p>

          </Alert>

          <Alert className="alerts" id="frequently_asked_questions" variant="primary" onClose={() => hide_frequently_asked_questions()} dismissible hidden="true">
            <Alert.Heading className="alert-headings">Frequently Asked Questions</Alert.Heading>
            <p>


              <Table className="table">
                <a id="Top"><thead className="on-this-page">On This Page</thead></a><br></br>
                <tbody>
                  <tr >
                    <a href="#Water"><td className="tdleft" >Water</td></a>

                    <a href="#Spread"><td className="tdright" >Spread</td></a>
                  </tr>
                  <tr className="table-row">
                    <a href="#Basics"><td className="tdleft" >Basics</td></a>
                    <a href="#Testing"><td className="tdright">Testing</td></a>



                  </tr>
                  <tr className="table-row">
                    <a href="#Children"><td className="tdleft" >Children</td></a>
                    <a href="#Funerals"><td className="tdright" >Funerals</td></a>


                  </tr>
                  <tr className="table-row">
                    <a href="#Pets-and-Animals"><td className="tdleft">Pets and Animals</td></a>
                    <a href="#Prevention"><td className="tdright">Prevention</td></a>


                  </tr>
                  <tr className="table-row">
                    <a href="#Community-Mitigation"><td className="tdleft">Community Mitigation</td></a>
                    <a href="#Contact-Tracing"><td className="tdright" >Contact Tracing</td></a>


                  </tr>

                  <tr className="table-row">
                    <a href="#Preparing-for-an-Outbreak"><td className="tdleft" >Preparing for an Outbreak</td></a>
                    <a href="#Cleaning-and-Disinfection"><td className="tdright" >Cleaning and Disinfection</td></a>

                  </tr>
                  <tr className="table-row">
                    <a href="#People-at-Higher-Risk-for-Severe-Illness"><td className="tdcenter">People at Higher Risk for Severe Illness</td></a>

                  </tr>

                  <tr className="table-row">
                    <a href="#Symptoms-and-Emergency-Warning-Signs"><td className="tdcenter">Symptoms and Emergency Warning Signs</td></a>
                  </tr>

                  <tr className="table-row">
                    <a href="#If-You-or-Someone-You-Know-is-Sick-or-Had-Contact-with-Someone-who-Has-COVID-19"><td className="tdcenter" >If You or Someone You Know is Sick or Had Contact with Someone who Has COVID-19 </td></a>

                  </tr>
                </tbody>
              </Table><br></br>

              <Accordion>

                <Card><a id="Basics"><Card.Header className="alert-subjects">Basics</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="0">
                    What is a novel coronavirus?
            </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="accordion-answer">A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the <a target="_blank" href="https://www.cdc.gov/coronavirus/types.html">coronaviruses that commonly circulate among humans</a> and cause mild illness, like the common cold.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1">
                    Why is the disease being called coronavirus disease 2019, COVID-19?
            </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                    <Card.Body className="accordion-answer">On February 11, 2020 the World Health Organization <a target="_blank" href="https://twitter.com/DrTedros/status/1227297754499764230">announced</a> an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”.<br></br><br></br>There are many types of human coronaviruses including some that commonly cause mild upper-respiratory tract illnesses. COVID-19 is a new disease, caused by a novel (or new) coronavirus that has not previously been seen in humans.</Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="Spread"><Card.Header className="alert-subjects">Spread</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="3">
                    How does the virus spread?
            </Accordion.Toggle>

                  <Accordion.Collapse eventKey="3">
                    <Card.Body className="accordion-answer">The virus that causes COVID-19 is thought to spread mainly from person to person, mainly through respiratory droplets produced when an infected person coughs, sneezes, or talks. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. Spread is more likely when people are in close contact with one another (within about 6 feet).<br></br><br></br>COVID-19 seems to be spreading easily and sustainably in the community (“community spread”) in <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-covid-spreads.html">many affected geographic areas.</a> Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected.
              </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="4">
                    Can I get COVID-19 from food (including restaurant take-out, produce, refrigerated, or packaged food) or drinking water?
            </Accordion.Toggle>

                  <Accordion.Collapse eventKey="4">
                    <Card.Body className="accordion-answer"><b>Currently there is no evidence that people can get COVID-19 by eating or handling food.</b>It may be possible that people can get COVID-19 by touching a surface or object, such as a food package or dining ware that has the virus on it and then touching their own mouth, nose, or possibly their eyes. However, this is not thought to be the main way the virus spreads.<br></br><br></br>There is also no current evidence that people can get COVID-19 by drinking water. The COVID-19 virus has not been detected in drinking water. Conventional water treatment methods that use filtration and disinfection, such as those in most municipal drinking water systems, should remove or kill the virus that causes COVID-19.
              </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="5">
                    Will warm weather stop the outbreak of COVID-19?
            </Accordion.Toggle>

                  <Accordion.Collapse eventKey="5">
                    <Card.Body className="accordion-answer">It is not yet known whether weather and temperature affect the spread of COVID-19. Some other viruses, like those that cause the common cold and flu, spread more during cold weather months but that does not mean it is impossible to become sick with these viruses during other months.  There is much more to learn about the transmissibility, severity, and other features associated with COVID-19 and investigations are ongoing.
              </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="6">
                    What is community spread?
            </Accordion.Toggle>

                  <Accordion.Collapse eventKey="6">
                    <Card.Body className="accordion-answer">Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected. Each health department determines community spread differently based on local conditions. For information on community spread in your area, please visit your health department’s website.
              </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="7">
                    Can mosquitoes or ticks spread the virus that causes COVID-19?
            </Accordion.Toggle>

                  <Accordion.Collapse eventKey="7">
                    <Card.Body className="accordion-answer">At this time, CDC has no data to suggest that this new coronavirus or other similar coronaviruses are spread by mosquitoes or ticks. The main way that COVID-19 spreads is from person to person. See <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-covid-spreads.html">How Coronavirus Spreads</a> for more information.
              </Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="Prevention"><Card.Header className="alert-subjects">Prevention</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="8">
                    How can I protect myself?
            </Accordion.Toggle>

                  <Accordion.Collapse eventKey="8">
                    <Card.Body className="accordion-answer">Visit the <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">How to Protect Yourself and Others</a> and cause mild illness, like the common cold.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="9">
                    Does CDC recommend the use of masks to prevent COVID-19?
            </Accordion.Toggle>

                  <Accordion.Collapse eventKey="9">
                    <Card.Body className="accordion-answer">Wear masks in public settings when around people not living in your household and particularly where other social distancing measures are difficult to maintain, such as grocery stores, pharmacies, and gas stations. Masks may slow the spread of the virus and help people who may have the virus and do not know it from transmitting it to others.<br></br><br></br>COVID-19 can be spread by people who do not have symptoms and do not know that they are infected. That’s why it’s important for everyone to practice <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancings</a>  (staying at least 6 feet away from other people) and wear masks in public settings. Masks provide an extra layer to help prevent the respiratory droplets from traveling in the air and onto other people.<br></br><br></br>The masks recommended are not surgical masks or N-95 respirators. Those are critical supplies that must continue to be reserved for healthcare workers and other medical first responders, as recommended by current CDC guidance.<br></br><br></br>More information about masks can be found on our masks site.

              <ul>
                        <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html"><li>How to Wear</li></a>

                        <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wash-cloth-face-coverings.html"><li>How to Wash</li></a>

                        <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-make-cloth-face-covering.html"><li>How to Make</li></a>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="10">
                    Is it safe to get care for my other medical conditions at this time?
            </Accordion.Toggle>

                  <Accordion.Collapse eventKey="10">
                    <Card.Body className="accordion-answer">
                      <ul>

                        <li><b>It is important to continue taking care of your health and wellness.</b></li>
                        <li><b>Continue your medications,</b> and do not change your treatment plan without talking to your healthcare provider.</li>
                        <li><b>Continue to manage your disease</b> the way your healthcare provider has told you.</li>
                        <li><b>Have at least a 2-week supply</b> of all prescription and non-prescription medications.</li>
                        <li><b>Talk to your healthcare provider about whether your vaccinations are up-to-date.</b></li>
                        <li><b>Call your healthcare provider</b>
                          <ul>
                            <li><b>if you have any concerns</b> about your medical conditions, or if you get sick.</li>
                            <li><b>to find out about different ways you can connect with your healthcare provider for chronic disease </b>management or other conditions.</li>
                          </ul>
                        </li>
                        <li><b>Do not delay getting emergency care for your health problems or any health condition that requires immediate attention.</b>
                          <ul>If you need emergency help, call 911.</ul>
                          <ul>Emergency departments have infection prevention plans to protect you from getting COVID-19 if you need care for your medical condition.</ul>
                        </li>
                        <li><b>Continue</b> to practice <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html">everyday prevention</a>. Wash your hands often, avoid close contact, wear a mask, cover coughs and sneezes, and clean and disinfect frequently touched surfaces often.</li>


                      </ul>
              For more information, see <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/groups-at-higher-risk.html">Groups at Higher Risk for Severe Illness</a>.

              </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="11">
                    Am I at risk for COVID-19 from mail, packages, or products?
            </Accordion.Toggle>

                  <Accordion.Collapse eventKey="11">
                    <Card.Body className="accordion-answer">There is still a lot that is unknown about COVID-19 and how it spreads. Coronaviruses are thought to be spread most often by respiratory droplets. Although the virus can survive for a short period on some surfaces, it is unlikely to be spread from domestic or international mail, products or packaging. However, it may be possible that people can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads.<br></br><br></br>Learn more about <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/essential-goods-services.html">safe handling of deliveries and mail</a>.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="12">
                    Is it okay for me to donate blood?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="12">
                    <Card.Body className="accordion-answer">In healthcare settings across the United States, donated blood is a lifesaving, essential part of caring for patients. The need for donated blood is constant, and blood centers are open and in urgent need of donations. CDC encourages people who are well to continue to donate blood if they are able, even if they are practicing social distancing because of COVID-19. CDC is supporting blood centers by providing recommendations that will keep donors and staff safe. Examples of these recommendations include spacing donor chairs 6 feet apart, thoroughly adhering to environmental cleaning practices, and encouraging donors to make donation appointments ahead of time.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="13">
                    Should contact lens wearers take special precautions to prevent COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="13">
                    <Card.Body className="accordion-answer">
                      <ul>
                        <li>Currently there is no evidence to suggest contact lens wearers are more at risk for acquiring COVID-19 than eyeglass wearers.</li>
                        <li>Contact lens wearers should continue to <a href="https://www.cdc.gov/contactlenses/protect-your-eyes.html">practice safe contact lens wear and care hygiene habits</a> to help prevent against transmission of any contact lens-related infections, such as always washing hands with soap and water before handling lenses.</li>
                        <li>People who are healthy can continue to wear and care for their contact lenses as prescribed by their eye care professional.</li>
                      </ul>
                Find more information about <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html">how coronavirus spreads</a> and <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html">how to protect yourself</a>.<br></br><br></br>
                Visit <a href="https://www.cdc.gov/contactlenses/index.html">CDC's contact lens website</a> for more information on healthy contact lens wear and care.
              </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="14">
                    Is contact lens disinfecting solution effective against COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="14">
                    <Card.Body className="accordion-answer">
                      <ul>
                        <li><a href="https://www.cdc.gov/contactlenses/care-systems.html">Hydrogen peroxide-based systems</a> for cleaning, disinfecting, and storing contact lenses should be effective against the virus that causes COVID-19.</li>
                        <ul>
                          <li>For other disinfection methods, such as multipurpose solution and ultrasonic cleaners, there is currently not enough scientific evidence to determine efficacy against the virus.</li>
                        </ul>
                        <li><a href="https://www.cdc.gov/contactlenses/care-systems.html">Always use solution</a> to disinfect your contact lenses and case to kill germs that may be present.</li>
                        <li>Handle your lenses over a surface that has been cleaned and disinfected.</li>
                      </ul>
                Find more information about <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html">how coronavirus spreads</a> and <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html">how to protect yourself</a>.<br></br><br></br>
                Visit <a href="https://www.cdc.gov/contactlenses/index.html">CDC's contact lens website</a> for more information on healthy contact lens wear and care.
              </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="15">
                    Should I use soap and water or hand sanitizer to protect against COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="15">
                    <Card.Body className="accordion-answer">Handwashing is one of the best ways to protect yourself and your family from getting sick. Wash your hands often with soap and water for at least 20 seconds, especially after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food. If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="16">
                    What cleaning products should I use to protect against COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="16">
                    <Card.Body className="accordion-answer">Clean and disinfect frequently touched surfaces such as tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.  If surfaces are dirty, clean them using detergent or soap and water prior to disinfection. To disinfect, most common EPA-registered household disinfectants will work. See CDC’s recommendations <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cleaning-disinfection.html">for household cleaning and disinfection</a>.</Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="If-You-or-Someone-You-Know-is-Sick-or-Had-Contact-with-Someone-who-Has-COVID-19"><Card.Header className="alert-subjects">If You or Someone You Know is Sick or Had Contact with Someone who Has COVID-19</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="17">
                    What should I do if I get sick or someone in my house gets sick?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="17">
                    <Card.Body className="accordion-answer">Most people who get COVID-19 will be able to recover at home. <a href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/guidance-prevent-spread.html">CDC has directions</a> for people who are recovering at home and their caregivers, including:<br></br>
                      <ul>
                        <li>Stay home when you are sick, except to get medical care.</li>
                        <li>Use a separate room and bathroom for sick household members (if possible).</li>
                        <li>Wash your hands often with soap and water for at least 20 seconds, especially after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food.</li>
                        <li>If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol. Always wash hands with soap and water if hands are visibly dirty.</li>
                        <li>Provide your sick household member with clean disposable facemasks to wear at home, if available, to help prevent spreading COVID-19 to others.</li>
                        <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/community/home/cleaning-disinfection.html">Clean the sick room and bathroom</a>, as needed, to avoid unnecessary contact with the sick person.</li>
                      </ul>
                  However, some people may need emergency medical attention. Watch for symptoms and learn <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">when to seek emergency medical attention</a>.<br></br><br></br>
                  When to Seek Emergency Medical Attention<br></br><br></br>
                  Look for <b>emergency warning signs* </b>for COVID-19. If someone is showing any of these signs, <b>seek emergency medical care immediately</b><br></br>
                      <ul>
                        <li>Trouble breathing</li>
                        <li>Persistent pain or pressure in the chest</li>
                        <li>New confusion</li>
                        <li>Inability to wake or stay awake</li>
                        <li>Bluish lips or face</li>
                      </ul>
                  *This list is not all possible symptoms. Please call your medical provider for any other symptoms that are severe or concerning to you.<br></br><br></br>
                      <b>Call 911 or call ahead to your local emergency facility:</b> Notify the operator that you are seeking care for someone who has or may have COVID-19.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="18">
                    What should I do if I have had close contact with someone who has COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="18">
                    <Card.Body className="accordion-answer">
                      <ul>
                        <li>Be alert for symptoms. Watch for fever, cough, shortness of breath, or other <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms</a> of COVID-19.</li>
                        <li>Take your temperature and follow CDC guidance if you have symptoms.</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="Children"><Card.Header className="alert-subjects">Children</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="19">
                    What is the risk of my child becoming sick with COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="19">
                    <Card.Body className="accordion-answer">
                      Based on available evidence, children do not appear to be at higher risk for COVID-19 than adults. While some children and infants have been sick with COVID-19, adults make up most of the known cases to date. However, a few children have developed <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/mis-c.html">multisystem inflammatory syndrome (MIS-C)</a>. Currently, information about this syndrome is limited. CDC is working with state and local health departments to learn more about MIS-C.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="20">
                    How can I protect my child from COVID-19 infection?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="20">
                    <Card.Body className="accordion-answer">
                      You can encourage your child to help stop the spread of COVID-19 by teaching them to do the same things everyone should do to stay healthy.<br></br>
                      <ul>
                        <li>Avoid close contact with people who are sick.</li>
                        <li>Stay home when you are sick, except to get medical care.</li>
                        <li>Cover your coughs and sneezes with a tissue and throw the tissue in the trash.</li>
                        <li>Wash your hands often with soap and water for at least 20 seconds.</li>
                        <li>If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol.</li>
                        <li>Clean and disinfect frequently touched surfaces and objects, like tables, countertops, light switches, doorknobs, and cabinet handles).</li>
                      </ul>
                You can find additional information on preventing COVID-19 at <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">How to Protect Yourself and Others</a>. Additional information on how COVID-19 is spread is available at <a href="https://www.cdc.gov/coronavirus/2019-ncov/about/transmission.html">How COVID-19 Spreads</a>.<br></br><br></br>
                More information on <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children.html">Keeping Children Healthy during the COVID19 Outbreak</a> is available online.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="21">
                    Are the symptoms of COVID-19 different in children than in adults?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="21">
                    <Card.Body className="accordion-answer">
                      No. The symptoms of COVID-19 are similar in children and adults. COVID-19 can look different in different people. For many people, being sick with COVID-19 would be a little bit like having the flu. People can get a fever, cough, or have a hard time taking deep breaths. Most people who have gotten COVID-19 have not gotten very sick. Only a small group of people who get it have had more serious problems.<br></br><br></br>
                CDC and partners are investigating cases of multisystem inflammatory syndrome in children (MIS-C) associated with COVID-19. Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/mis-c.html">COVID-19 and multisystem inflammatory syndrome in children (MIS-C)</a>.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="22">
                    Should children wear masks?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="22">
                    <Card.Body className="accordion-answer">CDC recommends that everyone 2 years and older wear a mask that covers their nose and mouth in public settings when around people not living in your household, particularly where other social distancing measures are difficult to maintain. Masks should NOT be put on babies or children younger than 2 because of the danger of suffocation. Children younger than 2 years of age are listed as an exception as well as anyone who has trouble breathing or is unconscious, incapacitated, or otherwise unable to remove the mask without assistance.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="23">
                    How do I prepare my children in case of COVID-19 outbreak in our community?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="23">
                    <Card.Body className="accordion-answer">
                      Outbreaks can be stressful for adults and children. When you talk with your child, try to stay calm, and reassure them that they are safe. <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/talking-with-children.html">Talk to your children</a> about COVID-19 and <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/for-parents.html">help them cope with stress</a>.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="24">
                    What is multisystem inflammatory syndrome in children (MIS-C) and who is at risk?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="24">
                    <Card.Body className="accordion-answer">
                      <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/mis-c.html">Multisystem inflammatory syndrome in children (MIS-C)</a> is a condition where different body parts can become inflamed, including the heart, lungs, kidneys, brain, skin, eyes, or gastrointestinal organs. We do not yet know what causes MIS-C. However, we know that many children with MIS-C had the virus that causes <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">COVID-19</a>, or had been around someone with COVID-19. MIS-C can be serious, even deadly, but most children who were diagnosed with this condition have gotten better with medical care.<br></br><br></br>
                      <b>Contact your child’s doctor, nurse, or clinic right away</b> if your child is showing <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/mis-c.html">symptoms</a> <b>of MIS-C. Seek emergency care right away</b> if your child is showing any of these <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/mis-c.html">emergency warning signs of MIS-C</a> or other concerning signs.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="25">
                    Can my child hang out with their friends?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="25">
                    <Card.Body className="accordion-answer">
                      The key to slowing the spread of COVID-19 is to practice social distancing. While school is out, children should not have in-person playdates with children from other households. If children are playing outside their own homes, it is essential that they remain 6 feet from anyone who is not in their own household. Some children with certain underlying <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html">medical conditions</a> are at higher risk for severe illness from COVID-19.<br></br><br></br>
                Make sure children practice <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">everyday preventive behaviors</a>, such as washing their hands often with soap and water. Remember, if children meet outside of school in groups, it can put everyone at risk. <br></br><br></br>
                For more information, see <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/protect-children.html">Help Stop the Spread of COVID-19 in Children</a>.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="26">
                    How can I help my child continue learning?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="26">
                    <Card.Body className="accordion-answer">
                      <ul>
                        <li>Stay in touch with your child’s school.
                      <ul>
                            <li>Many schools are offering lessons online (virtual learning). Review assignments from the school, and help your child establish a reasonable pace for completing the work. You may need to assist your child with turning on devices, reading instructions, and typing answers.</li>
                          </ul>
                        </li>
                        <li>Create a schedule and routine for learning at home, but remain flexible.</li>
                        <li>Consider the needs and adjustment required for your child’s age group.
                      <ul>
                            <li>The transition to being at home will be different for preschoolers, K-5, middle school students, and high school students. Talk to your child about expectations and how they are adjusting to being at home versus at school.</li>
                          </ul>
                        </li>
                        <li>Look for ways to make learning fun.</li>
                      </ul>
                  For moe information, see <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/learning.html">Help Children Learn at Home</a>.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="27">
                    Will kids have access to school meals?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="27">
                    <Card.Body className="accordion-answer">
                      Check with your school on plans to continue meal services during the school dismissal. Many schools are keeping school facilities open to allow families to pick up meals or are providing grab-and-go meals at a central location.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="28">
                    How can I keep my children healthy?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="28">
                    <Card.Body className="accordion-answer">
                      <ul>
                        <li><b>Watch your child for any signs of illness.</b></li>
                        <li><b>Watch for signs of stress in your child.</b></li>
                        <li><b>Teach and reinforce <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">everyday preventive actions</a>.</b></li>
                        <li><b>Help your child stay active.</b></li>
                        <li><b>Help your child stay socially connected.</b></li>
                      </ul>
                  For more information, see <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children.html">Keep Children Healthy during the COVID-19 Outbreak</a>.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="29">
                    Limit time with older adults, including relatives, and people with chronic medical conditions.</Accordion.Toggle>

                  <Accordion.Collapse eventKey="29">
                    <Card.Body className="accordion-answer">
                      <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">Older adults and people who have serious underlying medical conditions</a> are at highest risk of getting sick from COVID-19.<br></br>
                      <ul>
                        <li>If others in your home are at <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">higher risk for severe illness from COVID-19</a>, consider extra precautions to separate your child from those people.</li>
                        <li>If you are unable to stay home with your child during school dismissals and someone at higher risk for severe illness from COVID-19 will be providing care (older adult or someone with a serious underlying medical condition), limit your children’s contact with other people.</li>
                        <li>Consider postponing visits or trip to see older family members and grandparents. Connect virtually or by writing letters and sending via mail.</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="30">
                    Is my child with an underlying medical condition at higher risk for severe illness from COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="30">
                    <Card.Body className="accordion-answer">
                      It’s not known yet whether all children with underlying medical conditions are at higher risk for severe illness from COVID-19.<br></br><br></br>
                Although most COVID-19 cases in children are not severe, serious illness that needs to be treated at the hospital still happens. Some data on children reported that the majority who needed hospitalization for COVID-19 had at least one underlying medical condition. The most common underlying conditions reported among children with COVID-19 include chronic lung disease (including asthma), heart disease, and conditions that weaken the immune system. This information suggests that children with these underlying medical conditions may be at risk for more severe illness from COVID-19.<br></br><br></br>
                More data are needed to learn which underlying or complex medical conditions may put children at increased risk. CDC is monitoring new information as it becomes available and will provide updates as needed.<br></br><br></br>
                Learn more about caring for <a href="https://www.cdc.gov/childrenindisasters/children-with-special-healthcare-needs.html">children with special healthcare needs during a disaster</a> and <a href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/people-at-higher-risk.html">people who are at higher risk for severe illness from COVID-19</a>.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="31">
                    What additional steps should families that have a child with an underlying medical condition take?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="31">
                    <Card.Body className="accordion-answer">
                      In addition to following the recommendations to <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html">prevent getting sick</a> and <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/essential-goods-services.html">running essential errands</a>, families should take extra steps recommended for persons with <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/groups-at-higher-risk.html">higher risk of severe COVID-19 illness</a> and steps outlined for those with <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">potential COVID-19 exposure or confirmed illness</a>.
                <br></br>
                      <ul>
                        <li>Identify potential alternative caregivers, if you or other regular caregivers become sick and are unable to care for your child. If possible, these alternative caregivers would not be at <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">higher risk of severe illness from COVID-19</a> themselves.</li>
                        <li>Try to have at least one month of medication and medical supplies on hand. Some health plans allow for a 90-day supply of prescription medications. Consider discussing this option with your child’s healthcare provider.</li>
                        <li>Review any care plans for your child, such as an asthma action plan, and make sure caregivers and backup caregivers are familiar with these plans.</li>
                        <li>If you do not have <a href="https://www.cdc.gov/childrenindisasters/children-with-special-healthcare-needs.html">care plans or an emergency notebook</a>, try to make them. They typically include important information about your child’s medical conditions, how to manage those conditions, how to get in touch with your child’s doctors, allergies, information on medications (names, dosages, and administration instructions), preferences (food and other) or special needs, daily routines and activities, friends, and details about routines that are important to support behavioral and emotional health.</li>
                        <li>Learn if your child’s healthcare providers, including doctors and therapists, have new ways to be contacted or new ways of providing appointments. If they offer telemedicine visits, find out how those are arranged and any additional information you need.</li>
                        <li>If your child receives any support care services in the home that need to be continued, make plans for what you will do if those direct care providers get sick, or if persons in your household are sick.</li>
                        <li>Discuss with the support care agencies and the providers ways to minimize risk for exposure to the virus that causes COVID-19.</li>
                        <ul>
                          <li>If your child or other persons in your household are sick with COVID-19 and are able to recover at home, inform your direct care providers and consider postponing or rescheduling services until the criteria for <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">discontinuing home isolation</a> have been met.</li>
                          <li>Ask service providers if they are experiencing any <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a>, or if they have been in contact with someone who has COVID-19.</li>
                          <li>Tell the service provider to:
                      <ul>
                              <li>
                                Wear a <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover-faq.html">mask</a> if they will be close (less than 6 feet) to you or persons in your household. Their mask helps protect you if they are infected but do not have symptoms.
                        </li>
                              <li>Ask them to wash their hands with soap and water or, if unavailable, use hand sanitizer with at least 60% alcohol when they enter your home, before and after helping your child (dressing, bathing/showering, transferring, toileting and/or diapering, feeding), after handling tissues, and after changing linens or doing laundry. <a href="https://www.youtube.com/watch?v=d914EnpU4Fo">Learn more about proper handwashing</a>.</li>
                            </ul>
                          </li>
                          <li>Service providers and families should:
                      <ul>
                              <li>Routinely clean and disinfect frequently touched objects and surfaces (counters, tabletops, doorknobs, bathroom fixtures, toilets, phones, keyboards, tablets, bedside tables), and equipment such as wheelchairs, scooters, walkers, oxygen tanks and tubing, communication boards, and other assistive devices. Refer to CDC’s recommendations for <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html">Cleaning and Disinfecting Your Home</a>.</li>
                            </ul>
                          </li>

                        </ul>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="32">
                    What can I do if my child has difficulties adjusting to new routines and following recommendations?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="32">
                    <Card.Body className="accordion-answer">Helping children understand and follow recommendations, like social distancing and <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover.html">wearning masks</a>, can be challenging if your child has intellectual disabilities, sensory issues, or other special healthcare needs.<br></br>
                      <ul>
                        <li>Keeping children at home can lower stress created by social distancing and mask recommendations. Reach out to others for help in running essential errands.</li>
                        <li>Behavioral techniques can be used to address behavioral challenges and to develop new routines. These include social stories, video modeling, picture schedules, and visual cues. Try rewarding your child in small ways with his or her favorite non-food treat or activities to help switch routines and to follow recommendations.</li>
                        <li>Many of the organizations you turn to for information and support around your child’s complex, chronic medical condition may have information on their websites to help families address issues related to COVID-19.</li>
                        <li>Your child’s therapist(s) and teachers may also have resources to help successfully introduce new routines to your child.</li>
                        <li>While learning at home, continue special education services, accommodations, or services received in school through your child’s 504 plan or Individualized Educational Plan (IEP), as much as possible. Many schools are continuing interventions like speech therapy, small group classes, extended time and more. Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/developmental-behavioral-disorders.html">supporting children with distance learning</a></li>
                      </ul>
                Additional information on <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children.html">caring for children</a> and on <a href="https://www.cdc.gov/ncbddd/childdevelopment/conditions.html">child development specific conditions</a> are available.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="33">
                    How can my family cope with the added stress?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="33">
                    <Card.Body className="accordion-answer">
                      Supporting children with special healthcare needs can put additional demands and stress on families, especially during emergency situations. You have likely found ways to manage the stress and challenges unique to your family’s situation. It is important to continue your family’s coping methods, including reaching out to other family members, friends, support groups, and organizations that have been helpful in the past.<br></br><br></br>
                See information on <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/for-parents.html">helping children cope</a> and coping with stress (such as <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/visitors.html">visiting parks, trails, or open spaces</a>) and <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html">making your family stronger</a><br></br><br></br>
                If you, or someone you care about, are feeling overwhelmed with emotions like sadness, depression, or anxiety, or feel like you want to harm yourself or others:<br></br>
                      <ul>
                        <li>Call 911</li>
                        <li>Visit the <a href="https://www.samhsa.gov/disaster-preparedness">Disaster Distress Helpline</a></li>, call 1-800-985-5990, or text TalkWithUs to 66746
                  <li>Visit the <a href="https://www.thehotline.org/">National Domestic Violence Hotline</a> or call 1-800-799-7233 and TTY 1-800-787-3224</li>
                      </ul>
                    </Card.Body></Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="34">
                    What if my child or someone else in my home is sick with symptoms of COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="34">
                    <Card.Body className="accordion-answer">
                      If your child with special healthcare needs becomes sick with <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a>, contact your child’s healthcare provider. If your child has new or worsening <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">emergency warning signs</a>, such as trouble breathing, pain or pressure in the chest, confusion or inability to wake them up, or bluish lips or face, call 911. If you think your child may have COVID-19, notify the operator so that first responders may be appropriately prepared to protect themselves and others.<br></br><br></br>
                Notify your child’s healthcare provider if someone else in your house becomes sick with COVID-19, so they can provide any advice specific for your child.<br></br><br></br>
                See additional information if <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">someone in the home is sick with COVID-19</a> or suspected of having COVID-19.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="35">
                    What if my child's symptoms of their underlying medical condition or complex, chronic medical condition get worse?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="35">
                    <Card.Body className="accordion-answer">
                      <ul>
                        <li>Call your child’s healthcare provider if you have any concerns about your child’s medical conditions. If you need emergency help, call 911.</li>
                        <li>Emergency departments have infection prevention plans to protect you and your child from getting COVID-19 if your child needs care for medical conditions not related to COVID-19. Do not delay getting emergency care for your child’s underlying condition or complex medical condition because you are afraid of getting exposed to COVID-19 when visiting the healthcare setting.</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="36">
                    What if my child needs to go to the hospital?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="36">
                    <Card.Body className="accordion-answer">
                      If your child’s healthcare provider tells you to go to the hospital for any health problem, including COVID-19<br></br>
                      <ul>
                        <li>Ask the healthcare provider to let the hospital know you are coming and to share important information about caring for your child.</li>
                        <li>Visiting policies may have changed due to COVID-19. If your child’s hospital policy does not allow an adult to stay with a child, ask your child’s healthcare provider for a statement explaining your child’s need for a familiar adult to be present.</li>
                        <li>Bring your care plans/emergency notebook with you along with paper and pen to write down questions you have during your time at the hospital.</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="Preparing-for-an-Outbreak"><Card.Header className="alert-subjects">Preparing for an Outbreak</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="37">
                    How can I prepare for an outbreak in my area?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="37">
                    <Card.Body className="accordion-answer">
                      Create a household plan of action to help protect your health and the health of those you care about in the event of an outbreak of COVID-19 in your community:<br></br>
                      <ul>
                        <li>Talk with the people who need to be included in your plan, and discuss what to do if a COVID-19 outbreak occurs in your community.</li>
                        <li>Plan ways to care for those who might be at <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/index.html">greater risk for serious complications</a>.</li>
                        <ul>
                          <li>Make sure they have access to 2 weeks of medications and supplies in case you need to stay home for prolonged periods of time.</li>
                        </ul>
                        <li>Get to know your neighbors and find out if your neighborhood has a website or social media page to stay connected.</li>
                        <li>Create a list of local organizations that you and your household can contact in the event you need access to information, healthcare services, support, and resources.</li>
                        <li>Create an emergency contact list of family, friends, neighbors, carpool drivers, health care providers, teachers, employers, the local public health department, and other community resources.</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="38">
                    How can I prepare for COVID-19 at work?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="38">
                    <Card.Body className="accordion-answer">
                      Plan for potential changes at your workplace. Talk to your employer about their emergency operations plan, including sick-leave policies and telework options. <a href="https://www.cdc.govhttps//www.cdc.gov/coronavirus/2019-ncov/community/guidance-business-response.html">Learn how businesses and employers can plan for and respond to COVID-19</a>.
              </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="39">
                    Should I make my own hand sanitizer if I can't find it in stores?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="39">
                    <Card.Body className="accordion-answer">
                      CDC does not encourage the production and use of homemade hand sanitizer products <a href="https://www.fda.gov/media/136118/download">because of concerns over the correct use of the ingredients</a> and the need to work under sterile conditions to make the product. Local industries that are looking into producing hand sanitizer to fill in for commercial shortages can refer to the <a href="https://www.who.int/gpsc/5may/Guide_to_Local_Production.pdf">World Health Organization guidance</a>. Organizations should revert to the use of commercially produced, FDA-approved product once such supplies again become available. <br></br>
                      <ul>
                        <li>To be effective against killing some types of germs, <a href="https://www.cdc.gov/handwashing/show-me-the-science-hand-sanitizer.html">hand sanitizers</a> need to have a strength of at least 60% alcohol and be used when hands are not visibly dirty or greasy.</li>
                        <li>Do not rely on “Do It Yourself” or “DIY” recipes based solely on essential oils or formulated without correct compounding practices.</li>
                        <li>Do not use hand sanitizer to disinfect frequently touched surfaces and objects. <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html">See CDC's information for cleaning and sanitizing your home</a>.</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="Symptoms-and-Emergency-Warning-Signs"><Card.Header className="alert-subjects">Symptoms and Emergency Warning Signs</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="40">
                    What are the symptoms and complications that cause COVID-19 can cause?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="40">
                    <Card.Body className="accordion-answer">
                      People with COVID-19 have reported a wide range of symptoms – from mild symptoms to severe illness. Symptoms may appear <b>2-14 days after exposure to the virus</b>. If you have fever, cough, or other <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms</a>, you might have COVID-19.
              </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="41">
                    When should I seek emergency care if I have COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="41">
                    <Card.Body className="accordion-answer">
                      Look for <b>emergency warning signs*</b> for COVID-19. If someone is showing any of these signs, <b>seek emergency medical care immediately</b> <br></br>
                      <ul>
                        <li>Trouble breathing</li>
                        <li>Persistent pain or pressure in the chest</li>
                        <li>New confusion</li>
                        <li>Inability to wake or stay awake</li>
                        <li>Bluish lips or face</li>

                      </ul>
              *This list is not all possible symptoms. Please call your medical provider for any other symptoms that are severe or concerning to you.
              <b>Call 911 or call ahead to your local emergency facility: Notify the operator that you are seeking care for someone who has or may have COVID-19.</b>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="42">
                    Is it possible to have the flu and COVID-19 at the same time?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="42">
                    <Card.Body className="accordion-answer">Yes. It is possible to test positive for flu (as well as other respiratory infections) and COVID-19 at the same time.</Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="Testing"><Card.Header className="alert-subjects">Testing</Card.Header></a>


                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="43">
                    Should I be tested for a current infection?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="43">
                    <Card.Body className="accordion-answer">
                      Maybe; not everyone needs to be tested for COVID-19.<br></br><br></br>
                If you have <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a> and want to get tested, call your healthcare provider first. Most people will have mild illness and can recover at home without medical care and may not need to be tested.<br></br><br></br>
                CDC has guidance for who should be tested, but decisions about testing are made by state and local health departments and healthcare providers.<br></br><br></br>
                You can also visit your <a href="https://www.cdc.gov/coronavirus/2019-ncov/php/open-america/hd-search/">state or local health department's website</a> to look for the latest local information on testing.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="44">
                    How can I get tested for a current infection (viral test) and what does my test mean?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="44">
                    <Card.Body className="accordion-answer">
                      Decisions about testing are made by <a href="https://www.cdc.gov/publichealthgateway/healthdirectories/healthdepartments.html">state</a> and <a href="https://www.naccho.org/membership/lhd-directory">local</a> health departments or healthcare providers. If you have symptoms of COVID-19 and are not tested, it is important to stay home. <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">What to do if you are sick</a>.<br></br><br></br>
                COVID-19 testing differs by location. If you have symptoms of COVID-19 and want to get tested, call your healthcare provider first. You can also visit your <a href="https://www.cdc.gov/publichealthgateway/healthdirectories/healthdepartments.html">state</a> or <a href="https://www.naccho.org/membership/lhd-directory">local</a> health department’s website to look for the latest local information on testing. The U.S. Food and Drug Administration (FDA) has authorized viral tests that let you collect either a <a href="https://www.fda.gov/news-events/press-announcements/coronavirus-covid-19-update-fda-authorizes-first-test-patient-home-sample-collection">nasal swab</a> or a <a href="https://www.fda.gov/news-events/press-announcements/coronavirus-covid-19-update-fda-authorizes-first-diagnostic-test-using-home-collection-saliva">saliva sample</a> at home. However, you will still need to send your sample to a laboratory for analysis.<br></br><br></br>
                      <b>If you test positive for COVID-19</b>, know what protective steps to take <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/index.html">if you are sick or caring for someone</a>.<br></br><br></br>
                      <b>If you test negative for COVID-19</b>, you probably were not infected at the time your sample was collected. However, that does not mean you will not get sick. The test result only means that you did not have COVID-19 at the time of testing. You might test negative if the sample was collected early in your infection and test positive later during your illness. You could also be exposed to COVID-19 after the test and get infected then. This means you could still spread the virus. If you develop symptoms later, you might need another test to determine if you are infected with the virus that causes COVID-19.<br></br><br></br>
                For more information about viral tests, please visit <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/diagnostic-testing.html">Test for Current Infection</a>.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="45">
                    How can I get tested for a past infection (antibody test) and what does my test mean?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="45">
                    <Card.Body className="accordion-answer">
                      Antibody tests for COVID-19 are available through healthcare providers and laboratories. Check with your healthcare provider to see if they offer antibody tests and whether you should get one.<br></br><br></br>
                A positive test result shows you might have antibodies from an infection with the virus that causes COVID-19. However, there is a chance a positive result means that you have antibodies from an infection with a virus from the same family of viruses (called coronaviruses), such as the one that causes the common cold.<br></br><br></br>
                Having antibodies to the virus that causes COVID-19 might provide protection from getting infected with the virus again. If it does, we do not know how much protection the antibodies might provide or how long this protection might last.<br></br><br></br>
                You should continue to <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html">protect yourself and others</a> since you could get infected with the virus again. <br></br><br></br>
                If you test negative, you might not have ever had COVID-19. Talk with your healthcare provider about your test result and the type of test you took to understand what your result means.<br></br><br></br>
                Regardless of whether you test positive or negative, the results do not confirm whether or not you are able to spread the virus that causes COVID-19. Until we know more, continue to take steps to <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">protect yourself and others</a>.<br></br><br></br>
                If you want more information about antibody tests, see <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/serology-overview.html">Test for Past Infection</a>.
                </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="46">
                    Can someone test negative and later test positive on a viral test for COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="46">
                    <Card.Body className="accordion-answer">
                      Yes, it is possible. You may test negative if the sample was collected early in your infection and test positive later during this illness. You could also be exposed to COVID-19 after the test and get infected then. Even if you test negative, you still should take steps to <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">protect yourself and others</a>. See <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/diagnostic-testing.html">Testing for Current Infection</a> for more information.
                </Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="People-at-Higher-Risk-for-Severe-Illness"><Card.Header className="alert-subjects">People at Higher Risk for Severe Illness</Card.Header></a>


                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="47">
                    Who is at higher risk for serious illness from COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="47">
                    <Card.Body className="accordion-answer">
                      COVID-19 is a new disease and there is limited information regarding risk factors for severe disease. Based on currently available information and clinical expertise, <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/older-adults.html">older adults</a> and <b>people with underlying </b><a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html">medical conditions</a> are at higher risk for severe illness from COVID-19.
              </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="48">
                    What should people at higher risk of serious illness with COVID-19 do?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="48">
                    <Card.Body className="accordion-answer">
                      If you are at <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-increased-risk.html">higher risk for severe illness</a> from COVID-19, you should: <br></br>
                      <li>Limit your interactions with other people as much as possible.</li>
                      <li>Take <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">precautions to prevent getting</a> COVID-19 when you do interact with others.</li>
                      <li>If you decide to engage in public activities, continue to protect yourself by <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">practicing everyday preventive actions</a>.</li>
                      <li>Keep these items on hand and use them when venturing out: a mask, tissues, and a hand sanitizer with at least 60% alcohol, if possible.</li>
                      <li>If possible, avoid others who are not wearing <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">masks</a> or ask others around you to wear masks</li>
                      <li>Delay or cancel a visit if you or your visitors have <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms</a> of COVID-19 or have been exposed to someone with COVID-19 in the last 14 days.</li>
                      <li>Anyone who has had <a href="https://www.cdc.gov/coronavirus/2019-ncov/php/public-health-recommendations.html">close contact</a> with a person with COVID-19 should <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">stay home and monitor for symptoms</a>.</li>
                      <li><b>Continue your medicines</b> and do not change your treatment plan without talking to your healthcare provider.</li>
                      <li><b>Have at least a 30-day supply</b> of prescription and non-prescription medicines.</li>
                      <li><b>Do not delay getting emergency care for your underlying medical condition</b> because of COVID-19. Emergency departments have contingency infection prevention plans to protect you from getting COVID-19 if you need care.</li>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="49">
                    Are people with disabilities at higher risk?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="49">
                    <Card.Body className="accordion-answer">Most people with disabilities are not inherently at higher risk for becoming infected with or having severe illness from COVID-19.  Some people with physical limitations or other disabilities might be at a higher risk of infection because of their underlying medical condition.<br></br>
                      <ul>
                        <li>People with certain disabilities might experience higher rates of chronic health conditions that put them at higher risk of serious illness and poorer outcomes from COVID-19. Adults with disabilities are three times more likely to have heart disease, stroke, diabetes, or cancer than adults without disabilities.</li>
                      </ul>
                You should talk with your healthcare provider if you have a question about your health or how your health condition is being managed.
                </Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="Contact-Tracing"><Card.Header className="alert-subjects">Contact Tracing</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="50">
                    What is contact tracing?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="50">
                    <Card.Body className="accordion-answer">
                      Contact tracing has been used for decades by state and local health departments to slow or stop the spread of infectious diseases.<br></br><br></br>
                  Contact tracing slows the spread of COVID-19 by<br></br>
                      <ul>
                        <li>Letting people know they may have been exposed to COVID-19 and should monitor their health for signs and <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a></li>
                        <li>Helping people who may have been exposed to COVID-19 get tested</li>

                        <li>Asking people to <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/isolation.html">self-isolate</a> if they have COVID-19 or <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">self-quarantine</a> if they are a close contact of someone with COVID-19</li>
                      </ul>
                  During contact tracing, the health department staff will not ask you for
                  <uL>
                        <li>Money</li>
                        <li>Social Security number</li>
                        <li>Bank account information</li>
                        <li>Salary information</li>
                        <li>Credit card numbers</li>
                      </uL>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="52">
                    What will happen with my personal information during contact tracing?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="52">
                    <Card.Body className="accordion-answer">
                      Discussions with health department staff are confidential. This means that your personal and medical information will be kept private and only shared with those who may need to know, like your health care provider.<br></br><br></br>
                  If you have been diagnosed with COVID-19, your name will not be shared with those you came in contact with. The health department will only notify people you were in close contact with (within 6 feet for more than 15 minutes) that they might have been exposed to COVID-19. Each state and jurisdiction use their own method for collecting and protecting health information. To learn more, contact your state or local health department.<br></br><br></br>
                  You may also be interested in: <b>If I participate contact tracing for COVID-19 using a digital tool, is my personal health information secure?</b>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="53">
                    Who is considered a close contact to someone with COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="53">
                    <Card.Body className="accordion-answer">For COVID-19, a close contact is anyone who was within 6 feet of an infected person for at least 15 minutes. An infected person can spread COVID-19 starting 48 hours (or 2 days) before the person had any symptoms or tested positive for COVID-19.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="54">
                    Am I considered a close contact if I was wearing a mask?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="54">
                    <Card.Body className="accordion-answer">
                      Yes, you are still considered a close contact even if you were wearing a mask while you were around someone with COVID-19. Masks are meant to protect other people in case you are infected, and not to protect you from becoming infected.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="55">
                    If I am a close contact, will I be tested for COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="55">
                    <Card.Body className="accordion-answer">
                      If you have been around someone who is sick with COVID-19, CDC recommends that you get tested for COVID-19. Get tested for COVID-19 as soon as you know that you have been around a person diagnosed with COVID-19. The health department may be able to provide resources for testing in your area.
                  <ul>
                        <li>While you are waiting for your COVID-19 test result, stay home away from others (<a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">self-quarantine</a>) and monitor your health <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">for symptoms of COVID-19</a>to protect your friends, family, and others from possibly getting COVID-19.</li>
                        <li>If your <b>test is positive</b>, you should continue to stay home and <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/isolation.html">self-isolate</a> away from others and monitor your health. If you have symptoms of COVID-19 and they worsen or become severe, you should seek emergency medical care. Severe symptoms include trouble breathing, persistent pain or pressure in the chest, confusion, inability to wake or stay awake, or bluish lips or face. Someone from the health department may call you to<br></br>
                          <ul>
                            <li>Check on your health,</li>
                            <li>Discuss who you have been around, and</li>
                            <li>Ask where you have spent time while you may have been able to spread COVID-19 to others</li>
                          </ul>
                        </li>
                        <li>If your <b>test is negative</b> and you <b>don't have symptoms</b> you should continue to stay home and <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">self-quarantine</a> away from others for 14 days after your last exposure to COVID-19 and follow all recommendations from the health department. This is important because symptoms can appear up to 14 days after you’ve been exposed and are infected. A negative result before the end of your quarantine period does not rule out possible infection. Additionally, you do not need a repeat test unless you develop symptoms, or if you require a test to return to work.</li>
                        <li>If your <b>test is negative</b> and you<b>have symptoms</b> you should continue to self-quarantine away from others and follow all recommendations from the health department. A second test and additional medical consultation may be needed if your symptoms do not improve.</li>
                      </ul>

                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="56">
                    What will happen during contact tracing if I am diagnosed with COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="56">
                    <Card.Body className="accordion-answer">
                      If you are diagnosed with COVID-19, someone from the health department may call you to check on your health, discuss who you have been around, and ask where you spent time while you may have been able to spread COVID-19 to others. You will also be asked to continue to stay at home and <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/isolation.html">self-isolate</a>, away from others.<br></br>
                      <ul>
                        <li>Your name <b>will not</b>be shared with those you came in contact with.</li>
                        <li>The health department staff <b>will not</b> ask you for
                    <ul>
                            <li>Money</li>
                            <li>Bank account information</li>
                            <li>Salary information, or</li>
                            <li>Credit card numbers</li>
                          </ul>
                        </li>
                        <li>Self-isolation means staying at home in a specific room away from other people and <a href="https://www.cdc.gov/coronavirus/2019-ncov/animals/pets-other-animals.html">pets</a>, and using a separate bathroom, if possible.</li>
                        <li>Self-isolation helps slow the spread of COVID-19 and can help protect the health of your family, friends, neighbors, and others you may come in contact.</li>
                        <li>If you need support or assistance while in self-isolation, your health department or community organizations may be able to provide assistance.</li>
                      </ul>
                Watch for or monitor your <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a>. If your symptoms worsen or become severe, you should seek medical care.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="56">
                    What will happen during contact tracing if I have been around someone with COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="56">
                    <Card.Body className="accordion-answer">
                      If you were around someone who has been diagnosed with COVID-19, someone from the health department may call you to let you know that you may have been exposed to COVID-19. <br></br><br></br>
                  Stay home away from others for 14 days (<a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine-isolation.html">self-quarantine</a>) after your last contact with that person. Health department staff will help identify the dates for your self-quarantine. Health department staff can also provide resources for COVID-19 testing in your area.<br></br>
                      <ul>
                        <li>Self-quarantine means staying home away from others and monitoring your health.</li>
                        <li>If you need to be around other people or animals in or outside of the home, wear a mask. This will help protect the people around you.</li>
                        <li>If you need support or assistance while in self-quarantine, your health department or community organizations may be able to provide assistance.</li>
                      </ul>
                  Monitor your health and watch for <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a>. Remember, symptoms may appear 2-14 days after you were exposed to COVID-19. Tell the health department if you develop any symptoms. Tell people you were around recently if you become ill, so they can monitor their health. If your symptoms worsen or become severe, seek medical care. <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html#seek-medical-attention">Severe symptoms</a> include trouble breathing, persistent pain or pressure in the chest, new confusion, inability to wake or stay awake, or bluish lips or face.<br></br><br></br>
                  The health department staff <b>will not</b> ask you for <br></br>
                      <ul>
                        <li>Money</li>
                        <li>Social Security number</li>
                        <li>Bank account information</li>
                        <li>Salary information, or</li>
                        <li>Credit card numbers</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="57">
                    I was around someone who has COVID-19, and my COVID-19 test came back negative. Do I still need to quarantine for 14 days after I was last exposed?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="57">
                    <Card.Body className="accordion-answer">
                      Yes. You should still self-quarantine for 14 days since your last exposure. It can take up to 14 days after exposure to the virus for a person to develop COVID-19 symptoms. A negative result before end of the 14-day quarantine period does not rule out possible infection. By self-quarantining for 14 days, you lower the chance of possibly exposing others to COVID-19.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="58">
                    I was recently around someone who has COVID-19, but I feel fine. Why should I stay at home?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="58">
                    <Card.Body className="accordion-answer">People with COVID-19 can still spread the virus even if they don’t have any symptoms. If you were around someone who had COVID-19, it is critical that you stay home and away from others for 14 days from the last day that you were around that person. Staying home and away from others at all times helps your health department in the fight against COVID-19 and helps protect you, your family, and your community.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="59">
                    What if I have been around someone who was identified as a close contact?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="59">
                    <Card.Body className="accordion-answer">
                      If you have been around someone who was identified as a close contact to a person with COVID-19, closely monitor yourself for any <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a>. You do not need to self-quarantine unless you develop symptoms or if the person identified as a close contact develops COVID-19.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="60">
                    Will there be a national app for contact tracing?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="60">
                    <Card.Body className="accordion-answer">
                      No, there will not be a national app for contact tracing. There are many options available now, and it is up to each state and individual to decide which tools best fit their needs.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="61">
                    If I participate in contact tracing for COVID-19 using a digital tool, is my personal health information secure?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="61">
                    <Card.Body className="accordion-answer">
                      Yes, if you agree to participate in contact tracing for COVID-19 with the health department, your information is secure.
                  Discussions with health department staff are confidential. This means that your personal and medical information will be kept private and only shared with those who may need to know, like your health care provider. Your name will not be shared with those you came in contact with. If you have been diagnosed with COVID-19, the health department will only notify people you were in close contact with (within 6 feet for more than 15 minutes) that they might have been exposed to COVID-19.<br></br><br></br>
                  Health departments may use <i>case management tools</i>to help make the contact tracing process more efficient. If you choose to provide information through one of these tools, your information is secure and stored with the health department. These tools also help health departments quickly receive and analyze information about COVID-19. Case management tools are under the same laws and regulations for all sensitive health information use (e.g. HIPPA). You must provide consent for the health department to collect information using a case management tool. Just like traditional contact tracing, digital tools will not collect information regarding money, Social Security numbers, bank account information, salary information, or credit card numbers.<br></br><br></br>
                      <i>Exposure notification tools</i> may be an app that you can download on your personal cell phone. If you choose to download an exposure <i>notification</i> app for COVID-19, your information is secure. Exposure notification apps are developed in collaboration with or endorsed by health departments. These apps undergo rigorous testing to determine their trustworthiness, security, and ability to protect people’s privacy. Until you give consent to share information with your local health department, any information you have entered into the app is stored <i>only</i> on your personal phone. Your information is stored only on your own phone and is not sent to the health department or any other third party. <b>The app and your information can be deleted any time.</b> When you consent to share your information with the local health department, your information is secure.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="62">
                    Will I be required to download a contact training app for COVID-19 on my phone?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="62">
                    <Card.Body className="accordion-answer">
                      No, you are not required to download an app to give information for contact tracing for COVID-19. Health departments commonly use <i>case management tools</i> to make the contact tracing process more efficient. These types of tools are not downloaded on personal cell phones. <br></br><br></br>
                  If you choose to give information to your local or state health department for contact tracing for COVID-19, you do not need to download an app on your cell phone. The health department staff may call you to <br></br>
                      <ul>
                        <li>Check on your health,</li>
                        <li>Discuss who you have been around, and</li>
                        <li>Ask where you have spent time while you may have been able to spread COVID-19 to others.</li>
                      </ul>
                  It is up to you to decide if you download an <i>exposure notification</i> app for COVID-19.
                  </Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="Funerals"><Card.Header className="alert-subjects">Funerals</Card.Header></a>


                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="63">
                    Am I at risk if I go to a funeral or visitiation service for someone who died of COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="63">
                    <Card.Body className="accordion-answer">
                      There is currently no known risk associated with being in the same room at a funeral or visitation service with the body of someone who died of COVID-19.<br></br><br></br>
                  See <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">How to Protect Yourself and Others</a> to learn how to protect yourself from respiratory illnesses, like COVID-19, if you decide to attend a funeral or visitation.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="64">
                    Am I at risk if I touch someone who died of COVID-19 after they have passed away?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="64">
                    <Card.Body className="accordion-answer">
                      COVID-19 is a new disease and <b>we are still learning how it spreads</b>. The virus that causes COVID-19 is thought to <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-covid-spreads.html">spread</a> mainly from person-to-person through respiratory droplets produced when an infected person coughs, sneezes, or talks. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. This type of spread is not a concern after death. <br></br><br></br>
                  It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes. This is not thought to be the main way the virus spreads.<br></br><br></br>
                  People should consider not touching the body of someone who has died of COVID-19. Older people and people of all ages with severe underlying health conditions are at higher risk of severe illness from COVID-19. There may be less of a chance of the virus spreading from certain types of touching, such as holding the hand or hugging after the body has been prepared for viewing. Other activities, such as kissing, washing, and shrouding should be avoided before, during, and after the body has been prepared, if possible. If washing the body or shrouding are important religious or cultural practices, families are encouraged to work with their community’s cultural and religious leaders and funeral home staff on how to reduce their exposure as much as possible. At a minimum, people conducting these activities should wear disposable gloves. If splashing of fluids is expected, additional personal protective equipment (PPE) may be required (such as disposable gown, face shield, or goggles and N-95 respirator).
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="65">
                    How can loved ones safely handle belongings of someone who died from COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="65">
                    <Card.Body className="accordion-answer">
                      If desired, you may retrieve the belongings of a loved one who has died of COVID-19 outside their home (for example, in a hospital setting). Depending on local rules and regulations, family members may retrieve these belongings at the funeral home or the healthcare facility.<br></br><br></br>
                  You should use gloves and practice good hand hygiene when handling your loved ones’ belongings. Depending on the type of belongings, such as electronics, you should also follow the <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cleaning-disinfection.html">household item-specific cleaning and disinfection guidelines</a> when handling these items.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="66">
                    What should I do if my family member died from COVID-19 while overseas?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="66">
                    <Card.Body className="accordion-answer">When a US citizen dies outside the United States, the deceased person’s next of kin or legal representative should notify US consular officials at the Department of State. Consular personnel are available 24 hours a day, 7 days a week, to provide assistance to US citizens for overseas emergencies. If a family member, domestic partner, or legal representative is in a different country from the deceased person, he or she should call the Department of State’s Office of Overseas Citizens Services in Washington, DC, from 8 am to 5 pm Eastern time, Monday through Friday, at 888-407-4747 (toll-free) or 202-501-4444. For emergency assistance after working hours or on weekends and holidays, call the Department of State switchboard at 202-647-4000 and ask to speak with the Overseas Citizens Services duty officer. In addition, the <a href="https://www.usembassy.gov/">US Embassy</a> closest to or in the country where the US citizen died can provide assistance.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="67">
                    My family member died from COVID-19 while overseas. What are the requirements for returning the body to the United States?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="67">
                    <Card.Body className="accordion-answer">CDC does not require an autopsy before the remains of a person who died overseas are returned to the United States. Depending on the circumstances surrounding the death, some countries may require an autopsy. Sources of support to the family include the local consulate or embassy, travel insurance provider, tour operator, faith-based and aid organizations, and the deceased’s employer. There likely will need to be an official identification of the body and official documents issued by the consular office.<br></br><br></br>
                  CDC requirements for importing human remains depend upon if the body has been embalmed, cremated, or if the person died from a <a href="https://www.cdc.gov/quarantine/aboutlawsregulationsquarantineisolation.html">quarantinable communicable disease</a>.<br></br><br></br>
                  At this time, COVID-19 is a quarantinable communicable disease in the United States and the remains must meet the standards for importation found in 42 Code of Federal Regulations Part 71.55 and may be cleared, released, and authorized for entry into the United States only under the following conditions:<br></br>
                      <ul>
                        <li>The remains are cremated; OR</li>
                        <li>The remains are properly embalmed and placed in a leak-proof container; OR</li>
                        <li>The remains are accompanied by a permit issued by the CDC Director. The CDC permit (if applicable) must accompany the human remains at all times during shipment.</li>
                        <ul>
                          <li>Permits for the importation of the remains of a person known or suspected to have died from a quarantinable communicable disease may be obtained through the CDC Division of Global Migration and Quarantine by calling the CDC Emergency Operations Center at 770-488-7100 or emailing dgmqpolicyoffice@cdc.gov.</li>
                        </ul>
                      </ul>
                  Please see <a href="http://www.cdc.gov/importation/human-remains.html">CDC's guidance</a> for additional information.
                  </Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="Cleaning-and-Disinfection"><Card.Header className="alert-subjects">Cleaning and Disinfection</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="68">
                    What is the difference between cleaning and disinfecting?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="68">
                    <Card.Body className="accordion-answer">
                      <i>Cleaning</i> with soap and water removes germs, dirt, and impurities from surfaces. It lowers the risk of spreading infection. <i>Disinfecting</i> kills germs on surfaces. By killing germs on a surface after cleaning, it can further lower the risk of spreading infection.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="69">
                    Is it safe to vacuum in a school, business, or community facility after someone with suspected or confirmed COVID-19 has been present?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="69">
                    <Card.Body className="accordion-answer">
                      The risk of transmitting or spreading SARS-CoV-2, the virus that causes COVID-19, during vacuuming is unknown. In order to reduce the need for cleaning, disinfection, and vacuuming, consider removing area rugs completely, if possible. At this time, there are no reported cases of COVID-19 associated with vacuuming. If vacuuming is necessary or required in a school, business, or community facility that was used by a person with suspected or confirmed COVID-19, first follow the CDC recommendations for <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/organizations/cleaning-disinfection.html#Cleaning">Cleaning and Disinfection for Community Facilities</a> that apply, which includes a wait time of 24 hours, or as long as practical.<br></br><br></br>
                  After cleaning and disinfection, the following recommendations may help reduce the risk to workers and other individuals when vacuuming:<br></br>
                      <ul>
                        <li>Use a vacuum equipped with a high-efficiency particulate air (HEPA) filter, if available.</li>
                        <li>Do not vacuum a room or space that has people in it. Wait until the room or space is empty to vacuum, such as at night, for common spaces, or during the day for private rooms.</li>
                        <li>Wear disposable gloves to clean and disinfect. For soft (porous) surfaces, such as carpeted floors or rugs, clean the surface using soap and water or with cleaners appropriate for use on these surfaces, according to the textile’s label. After cleaning, disinfect with an appropriate EPA-registered disinfectant on <a href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2-covid-19">List N: Disinfectants for use against SARS-CoV-2</a>. Soft and porous materials, like carpet, are generally not as easy to disinfect as hard and non-porous surfaces. EPA has listed a limited number of products approved for disinfection for use on soft and porous materials on List N. Follow the disinfectant manufacturer’s safety instructions (such as wearing gloves and ensuring adequate ventilation), concentration level, application method and contact time. Allow sufficient drying time if vacuum is not intended for wet surfaces.</li>
                        <li>Temporarily turn off in-room, window-mounted, or on-wall recirculation HVAC to avoid contamination of the HVAC units.</li>
                        <li>Do NOT deactivate central HVAC systems. These systems tend to provide better filtration capabilities and introduce outdoor air into the areas that they serve.</li>

                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="70">
                    What is routine cleaning? How frequently should facilities be cleaned to reduce the potential spread of COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="70">
                    <Card.Body className="accordion-answer">Routine cleaning is the everyday cleaning practices that businesses and communities normally use to maintain a healthy environment. Surfaces frequently touched by multiple people, such as door handles, bathroom surfaces, and handrails, should be cleaned with soap and water or another detergent at least daily when facilities are in use. More frequent cleaning and disinfection may be required based on level of use. For example, certain surfaces and objects in public spaces, such as shopping carts and point of sale keypads, should be cleaned and disinfected before each use. Cleaning <i>removes</i> dirt and impurities, including germs, from surfaces. Cleaning alone does not kill germs, but it reduces the number of germs on a surface.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="71">
                    Is cleaning alone effective against the virus that causes COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="71">
                    <Card.Body className="accordion-answer">Cleaning does not kill germs, but by removing them, it lowers their numbers and the risk of spreading infection. If a surface may have gotten the virus on it from a person with or suspected to have COVID-19, the surface should be cleaned and disinfected. Disinfecting kills germs on surfaces.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="72">
                    Who should clean and disinfect community spaces?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="72">
                    <Card.Body className="accordion-answer">Regular cleaning staff can clean and disinfect community spaces. Cleaning staff should be trained on appropriate use of cleaning and disinfection chemicals and provided with the personal protective equipment (PPE) required for the chemicals used.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="73">
                    How long do companies need to close for disinfection after an exposure? How long before other workers can come back to work?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="73">
                    <Card.Body className="accordion-answer">
                      Companies do not necessarily need to close after a person with confirmed or suspected COVID-19 has been in a company facility. The area(s) used or visited by the ill person should be closed for 24 hours or as long as possible. Open outside doors and windows as much as possible ensuring that doing so does not pose a safety risk to children using the facility (i.e. make sure that children are not able to enter the closed off area through any windows or doors). and use ventilating fans to increase air circulation in the area. Once the area has been <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/disinfecting-building-facility.html">appropriately disinfected</a>, it can be opened for use. Workers without close contact with the person with confirmed or suspected COVID-19 can return to work immediately after disinfection is completed.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="74">
                    How effective are alternative disinfection methods, such as ultrasonic waves, high intensity UV radiation, and LED blue light?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="74">
                    <Card.Body className="accordion-answer">The efficacy of these disinfection methods against the virus that causes COVID-19 is not known. EPA only recommends use of the <a href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">surface disinfectants identified on List N</a> against the virus that causes COVID-19. EPA does not routinely review the safety or efficacy of pesticidal devices, such as UV lights, LED lights, or ultrasonic devices. Therefore, EPA cannot confirm whether, or under what circumstances, such products might be effective against the spread of COVID-19.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="75">
                    Should outdoor playgrounds, like those at schools or in parks, be cleaned and disinfected to prevent COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="75">
                    <Card.Body className="accordion-answer">Outdoor areas generally require normal routine cleaning and do not require disinfection. Spraying disinfectant on outdoor playgrounds is not an efficient use of disinfectant supplies and has not been proven to reduce the risk of COVID-19 to the public. You should maintain existing cleaning and hygiene practices for outdoor areas. If practical, high touch surfaces made of plastic or metal, such as grab bars and railings, should be cleaned routinely. Cleaning and disinfection of wooden surfaces (e.g., play structures, benches, tables) or groundcovers (e.g., mulch, sand) is not recommended.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="76">
                    Can sanitizing tunnels be used at building entrances or exits to prevent the spread of COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="76">
                    <Card.Body className="accordion-answer">CDC does not recommend the use of sanitizing tunnels. There is no evidence that they are effective in reducing the spread of COVID-19. Chemicals used in sanitizing tunnels could cause skin, eye, or respiratory irritation or damage.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="77">
                    Should sidewalks and roads be disinfected to prevent COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="77">
                    <Card.Body className="accordion-answer">CDC does not recommend disinfection of sidewalks or roads. Spraying disinfectant on sidewalks and roads is not an efficient use of disinfectant supplies and has not been proven to reduce the risk of COVID-19 to the public. The risk of spreading the virus that causes COVID-19 from these surfaces is very low and disinfection is not effective on these surfaces.</Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="Pets-and-Animals"><Card.Header className="alert-subjects">Pets and Animals</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="78">
                    Can I get COVID-19 from my pets or other animals?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="78">
                    <Card.Body className="accordion-answer">
                      At this time, there is no evidence that animals play a significant role in spreading the virus that causes COVID-19. Based on the limited information available to date, the risk of animals spreading COVID-19 to people is considered to be low.  A small number of pets have been reported to be infected with the virus that causes COVID-19, mostly after contact with people with COVID-19.<br></br><br></br>
                  Pets have other types of coronaviruses that can make them sick, like canine and feline coronaviruses. These other coronaviruses cannot infect people and are not related to the current COVID-19 outbreak.<br></br><br></br>
                  However, since animals can spread other diseases to people, it’s always a good idea to practice <a href="https://www.cdc.gov/healthypets/publications/stay-healthy-pets.html">healthy habits</a> around pets and other animals, such as washing your hands and maintaining good hygiene. For more information on the many benefits of pet ownership, as well as staying safe and healthy around animals including pets, livestock, and wildlife, visit CDC’s <a href="https://www.cdc.gov/healthypets/index.html">Healthy Pets, Healthy People website</a>.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="79">
                    Do I need to get my pet tested for Covid-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="79">
                    <Card.Body className="accordion-answer">No. At this time, routine testing of animals for COVID-19 is not recommended.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="80">
                    Can animals carry the virus that causes COVID-19 on their skin or fur?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="80">
                    <Card.Body className="accordion-answer">
                      Although we know certain bacteria and fungi can be carried on fur and hair, there is no evidence that viruses, including the virus that causes COVID-19, can spread to people from the skin, fur, or hair of pets.<br></br><br></br>
                  However, because animals can sometimes carry other germs that can make people sick, it’s always a good idea to practice <a href="https://www.cdc.gov/healthypets/publications/stay-healthy-pets.html">healthy habits</a> around pets and other animals, including washing hands before and after interacting with them.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="81">
                    Should I avoid contact with pets or other animals if I am sick with COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="81">
                    <Card.Body className="accordion-answer">
                      We are still learning about this virus, but it appears that it can spread from people to animals in some situations. Until we learn more about this new coronavirus, you should restrict contact with pets and other animals while you are sick with COVID-19, just like you would with people. When possible, have another member of your household care for your animals while you are sick. If you are sick with COVID-19, avoid contact with your pet, including<br></br>
                      <ul>
                        <li>Petting</li>
                        <li>Snuggling</li>
                        <li>Being kissed or licked</li>
                        <li>Sharing food or bedding</li>
                      </ul>
                  If you must care for your pet or be around animals while you are sick, wash your hands before and after you interact with pets and wear a mask.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="82">
                    What animals can get COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="82">
                    <Card.Body className="accordion-answer">
                      We don’t know for sure which animals can be infected with the virus that causes COVID-19. CDC is aware of a small number of pets, including dogs and cats, reported to be infected with the virus that causes COVID-19, mostly after close contact with people with COVID-19. A tiger at a zoo in New York has also tested positive for the virus.<br></br><br></br>
                  Recent research shows that ferrets, cats, and golden Syrian hamsters can be experimentally infected with the virus and can spread the infection to other animals of the same species in laboratory settings. Pigs, chickens, and ducks did not become infected or spread the infection based on results from these studies. Data from one study suggested dogs are not as likely to become infected with the virus as cats and ferrets. These findings were based on a small number of animals, and do not show whether animals can spread infection to people.<br></br><br></br>
                  At this time, there is no evidence that animals play a significant role in spreading the virus that causes COVID-19. Based on the limited information available to date, the risk of animals spreading COVID-19 to people is considered to be low. Further studies are needed to understand if and how different animals could be affected by the virus that causes COVID-19 and the role animals may play in the spread of COVID-19.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="83">
                    Should I worry about my pet cat?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="83">
                    <Card.Body className="accordion-answer">
                      We are still learning about this virus and how it spreads, but it appears it can spread from humans to animals in some situations. CDC is aware of a small number of pets, including cats, reported to be infected with the virus that causes COVID-19, mostly after close contact with people with COVID-19. Most of these animals had contact with a person with COVID-19. A tiger at a New York zoo has also tested positive for the virus that causes COVID-19.<br></br><br></br>
                  At this time, there is no evidence that animals play a significant role in spreading the virus that causes COVID-19. Based on the limited data available, the risk of animals spreading COVID-19 to people is considered to be low. The virus that causes COVID-19 spreads mainly from person to person, typically through respiratory droplets from coughing, sneezing, or talking.<br></br><br></br>
                  People sick with COVID-19 should isolate themselves from other people and animals, including pets, during their illness until we know more about how this virus affects animals. If you must care for your pet or be around animals while you are sick, wear a mask and wash your hands before and after you interact with pets.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="84">
                    Can I walk my dog during the COVID-19 pandemic?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="84">
                    <Card.Body className="accordion-answer">
                      Walking your dog is important for both animal and human health and wellbeing. Walk dogs on a leash, and stay at least 6 feet (2 meters) away from others. Do not gather in groups, stay out of crowded places, and avoid mass gatherings. To help maintain social distancing, do not let other people pet your dog when you are out for a walk.<br></br><br></br>
                  See "<b>Can I take my dog to a dog park?</b>" for information on dog parks.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="85">
                    Can I take my dog to a dog park?
                </Accordion.Toggle>

                  <Accordion.Collapse eventKey="85">
                    <Card.Body className="accordion-answer">
                      Dog parks provide socialization and exercise for dogs, which is an important part of their wellbeing. Because there is a small risk that people with COVID-19 could spread it to animals, CDC recommends that you do not let pets interact with people outside of your household, especially in places with community spread of COVID-19. Therefore, you should consider avoiding dog parks or other places where large numbers of people and dogs gather.<br></br><br></br>
                  Some areas are allowing dog parks to open. If you choose to go to a dog park, follow local guidelines. There are ways to reduce the risk of you or your dog getting infected with COVID-19 if you go to a dog park.<br></br><br></br>
                      <ul>
                        <li>Do not take your dog to a dog park if you are <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">sick</a> or if you have recently been in close contact with a person with COVID-19.
                    </li>
                        <li>Do not take your dog to a dog park if your dog is sick. Signs of sickness in dogs may include fever, coughing, difficulty breathing or shortness of breath, lethargy, sneezing, discharge from the nose or eyes, vomiting, or diarrhea.</li>
                        <li>If your dog has <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/positive-pet.html">tested positive</a> for the virus that causes COVID-19, talk to your veterinarian about when it is appropriate for your pet to go back to normal activities.
                    </li>
                        <li>Try to limit your dog’s interaction with other people outside of your household while at the dog park.</li>
                        <li>As much as possible, avoid touching common items in the dog park like water bowls. <a href="https://www.cdc.gov/handwashing/when-how-handwashing.html">Wash your hands</a> or use hand sanitizer after touching items from the park. To make sure your dog has fresh water, consider bringing your own portable water bowl.</li>
                        <li>Limit other pet items brought to the dog park, such as toys. <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html">Clean and disinfect</a> anything taken to the park and returned home (leashes, toys, water bowls).</li>
                        <li>Do not wipe or bathe your dog with chemical disinfectants, alcohol, hydrogen peroxide, or any other products not approved for animal use.</li>
                      </ul>
                  See more <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/pets.html">information on pets and COVID-19</a>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="86">
                    Can I take my dog to daycare or a groomer?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="86">
                    <Card.Body className="accordion-answer">Until we know more about how this virus affects animals, CDC encourages pet owners to treat pets as you would other human family members to protect them from possible infection. This means limiting contact between your pets and people outside your household as much as possible and avoiding places where large numbers of people gather.<br></br><br></br>
                  Some areas are allowing groomers and boarding facilities such as dog daycares to open. If you must take your pet to a groomer or boarding facility, follow any protocols put into place at the facility, such as wearing a <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover.html">mask</a> and maintaining at least 6 feet of space between yourself and others if possible.<br></br><br></br>
                  Limit pet items brought from home to the groomer or boarding facility, and disinfect any objects that are taken into a facility and returned home (such as leashes, bowls, and toys). Use an <a href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">EPA-registered disinfectant</a> to clean items and rinse thoroughly with clean water afterwards. <b>Do not</b> wipe or bathe your pet with chemical disinfectants, alcohol, hydrogen peroxide, or any other products not approved for animal use.<br></br><br></br>
                  Do not put masks on pets, and do not take a sick pet to a groomer or boarding facility. Signs of sickness in animals may include:
                  <ul>
                        <li>Fever</li>
                        <li>Coughing</li>
                        <li>Difficulty breathing or shortness of breath</li>
                        <li>Lethargy</li>
                        <li>Sneezing</li>
                        <li>Nasal/ocular discharge</li>
                        <li>Vomiting</li>
                        <li>Diarrhea</li>
                      </ul>
                  <br></br>If you think your pet is sick, call your veterinarian. Some veterinarians may offer telemedicine consultations or other plans for seeing sick pets. Your veterinarian can evaluate your pet and determine the next steps for your pet’s treatment and care.<br></br><br></br>
                  See more <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/pets.html">information on pets and COVID-19</a> and recommendations for how to help keep your pet safe.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="87">
                    What should I do if my pet gets sick and I think it's COVID-19?
                </Accordion.Toggle>

                  <Accordion.Collapse eventKey="87">
                    <Card.Body className="accordion-answer">There is a small number of animals around the world reported to be infected with the virus that causes COVID-19, mostly after having contact with a person with COVID-19. Talk to your veterinarian about any health concerns you have about your pets.<br></br><br></br>If your pet gets sick after contact with a person with COVID-19, <b>do not take your pet to the veterinary clinic yourself.</b> Call your veterinarian and let them know the pet was around a person with COVID-19. Some veterinarians may offer telemedicine consultations or other plans for seeing sick pets. Your veterinarian can evaluate your pet and determine the next steps for your pet’s treatment and care.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="88">
                    Why are animals being tested when many people can't get tested?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="88">
                    <Card.Body className="accordion-answer">Animals are only being tested in very rare circumstances. Routine testing of animals is not recommended at this time, and any tests done on animals are done on a case by case basis. For example, if the pet of a COVID-19 patient has a new, concerning illness with symptoms similar to those of COVID-19, the animal’s veterinarian might consult with public health and animal health officials to determine if testing is needed.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="89">
                    Are pets from a shelter safe to adopt?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="89">
                    <Card.Body className="accordion-answer">Based on the limited information available to date, the risk of animals spreading COVID-19 to people is considered to be low. There is no reason to think that any animals, including shelter pets, play a significant role in spreading the virus that causes COVID-19.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="90">
                    What should I do if there are pets at my long-term care facility or assisted living facility?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="90">
                    <Card.Body className="accordion-answer">
                      Based on the limited information available to date, the risk of animals spreading COVID-19 to people is considered to be low. However, it appears that the virus that causes COVID-19 can spread from people to animals after close contact with people with COVID-19.<br></br><br></br>
                  Until we learn more about how this virus affects animals, use similar precautions for pets and other animals in your facility as you would for other people in your facility. This will help protect both people and pets in your facility from COVID-19.<br></br>
                      <ul>
                        <li>Do not let pets in the facility interact with sick people.</li>
                        <li>Pets or other animals should not be allowed to roam freely around the facility.</li>
                        <li>Residents should avoid letting their pets interact with people as much as possible.</li>
                        <li>Dogs should be walked on a leash at least 6 feet (2 meters) away from others.</li>
                        <li>People sick with COVID-19 should <b>avoid contact with pets and other animals.</b></li>
                        <li>Do not allow pets into common areas of the facility such as cafeterias and social areas.</li>
                        <li>Cats should be kept indoors to prevent them from interacting with other animals or people outside of the facility.</li>
                      </ul>
                  <br></br>Talk to a veterinarian <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/positive-pet.html">if a pet in your facility gets sick</a> or if you have any concerns about the health of any pets in the facility. If you think a pet in the facility was exposed to or is showing <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/positive-pet.html">signs</a> consistent with COVID-19, contact your <a href="https://www.cdc.gov/publichealthgateway/healthdirectories/healthdepartments.html">state health official</a> to discuss guidance on testing pets or other animals for the virus that causes COVID-19.<br></br><br></br>
                  People who are at <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">higher risk for severe illness</a> from COVID-19 should avoid providing care for sick pets, if possible.<br></br><br></br>
                  For more information, visit CDC’s <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/pets.html">If You Have Pets</a> webpage.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="91">
                    What about imported animals or animal products?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="91">
                    <Card.Body className="accordion-answer">
                      CDC does not have any evidence to suggest that imported animals or animal products pose a risk for spreading COVID-19 in the United States. This is a rapidly evolving situation and information will be updated as it becomes available. CDC, the U. S. Department of Agriculture (USDA), and the U.S. Fish and Wildlife Service (FWS) play distinct but complementary roles in regulating the importation of live animals and animal products into the United States.<br></br>
                      <ul>
                        <li><a href="https://www.cdc.gov/importation/index.html">CDC regulates</a>animals and animal products that pose a threat to human health,</li>
                        <li><a href="https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/animal-and-animal-product-import-information/ct_animal_imports_home">USDA regulates</a> animals and animal products that pose a threat to agriculture; and</li>
                        <li><a href="https://www.fws.gov/le/businesses.html">FWS regulates</a> importation of endangered species and wildlife that can harm the health and welfare of humans, the interests of agriculture, horticulture, or forestry, and the welfare and survival of wildlife resources.</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="92">
                    Can I travel to the United States with dogs or import dogs into the United States during the COVID-19 outbreak?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="92">
                    <Card.Body className="accordion-answer">
                      Please refer to <a href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/index.html">CDC's requirements for brining a dog to the United States</a>. The current <a href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/rabies-vaccine.html">requirements for rabies vaccination</a> apply to dogs imported from high-risk countries for rabies.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="93">
                    What precautions should be taken for animals that have recently been imported from outside the United States (for example, by shelters, rescues, or as personal pets)?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="93">
                    <Card.Body className="accordion-answer">Imported animals will need to meet <a href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/index.html">CDC</a> and <a href="https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/animal-and-animal-product-import-information/live-animal-imports/import-live-animals">USDA</a> requirements for entering the United States. At this time, there is no evidence that companion animals, including pets and service animals, can spread the virus that causes COVID-19. As with any animal introduced to a new environment, animals recently imported should be observed daily for signs of illness. If an animal becomes ill, the animal should be examined by a veterinarian. Call your local veterinary clinic <b>before</b> bringing the animal into the clinic and let them know that the animal was recently imported from another country.<br></br><br></br>
                  This is a rapidly evolving situation and information will be updated as it becomes available.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="94">
                    Can wild animals spread the virus that causes COVID-19 to people or pets?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="94">
                    <Card.Body className="accordion-answer">Currently, there is no evidence to suggest the virus that causes COVID-19 is circulating in free-living wildlife in the United States, or that wildlife might be a source of infection for people in the United States. The first case of a wild animal testing positive for the virus in the United States was a tiger with a respiratory illness at a zoo in New York City. However, this tiger was in a captive zoo environment ,and public health officials believe the tiger became sick after being exposed to a zoo employee who was infected and spreading the virus.<br></br><br></br>
                  If a wild animal were to become infected with the virus, we don’t know whether the infection could then spread among wildlife or if it could spread to other animals, including pets. Further studies are needed to understand if and how different animals, including wildlife, could be affected by COVID-19. Because wildlife can carry other diseases, even without looking sick, it is always important to enjoy wildlife from a distance.<br></br><br></br>
                  Take steps to prevent getting sick from wildlife in the United States:<br></br>
                      <ul>
                        <li>Keep your family, including pets, a safe distance away from wildlife.</li>
                        <li>Do not feed wildlife or touch wildlife droppings.</li>
                        <li>Always wash your hands and supervise children washing their hands after working or playing outside.</li>
                        <li>Leave orphaned animals alone. Often, the parents are close by and will return for their young.</li>
                        <li>Consult your state wildlife agency’s guidance if you are preparing or consuming legally harvested game meat.</li>
                        <li>Do not approach or touch a sick or dead animal – contact your state wildlife agency instead.</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="95">
                    Can bats in United States get the virus that causes COVID-19, and can they spread it back to people?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="95">
                    <Card.Body className="accordion-answer">Other coronaviruses have been found in North American bats in the past, but there is currently no evidence that the virus that causes COVID-19 is present in any free-living wildlife in the United States, including bats. In general, coronaviruses do not cause illness or death in bats, but we don’t yet know if this new coronavirus would make North American species of bats sick. Bats are an important part of natural ecosystems, and their populations are already declining in the United States. Bat populations could be further threatened by the disease itself or by harm inflicted on bats resulting from a misconception that bats are spreading COVID-19. However, there is no evidence that bats in the United States are a source of the virus that causes COVID-19 for people. Further studies are needed to understand if and how bats could be affected by COVID-19.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="96">
                    Is hunter-harvested game meat safe to eat during the COVID-19 pandemic?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="96">
                    <Card.Body className="accordion-answer">
                      Currently, there is no evidence that you can get infected with the virus that causes COVID-19 by eating food, including wild hunted game meat. However, hunters can get infected with other diseases when processing or eating game.  Hunters should always practice good hygiene when processing animals by following these food safety recommendations:<br></br>
                      <ul>
                        <li>Do not harvest animals that appear sick or are found dead.</li>
                        <li>Keep game meat clean and cool the meat down as soon as possible after harvesting the animal.</li>
                        <li>Avoid cutting through the backbone and spinal tissues and do not eat the brains of any wild animal.</li>
                        <li>When handling and cleaning game:<br></br>
                          <ul>
                            <li>Wear rubber or disposable gloves.</li>
                            <li>Do not eat, drink, or smoke.</li></ul></li>
                        <li>When finished handling and cleaning game:<br></br>
                          <ul>
                            <li>Wash your hands thoroughly with soap and water.</li>
                            <li>Clean knives, equipment, and surfaces that were in contact with game meat with soap and water and then disinfect them. While these recommendations apply to general food safety practices, if you are concerned about COVID-19, you may use a product on the <a href="https://www.epa.gov/newsroom/list-n-disinfectants-use-against-sars-cov-2">EPA list of disinfectants for use against the COVID-19 Virus</a></li>
                            <li>Cook all game meat thoroughly (<a href="https://www.cdc.gov/foodsafety/keep-food-safe.html">to an internal temperature of 165 Fahrenheit</a></li>
                          </ul></li>
                        <li>Check with your state wildlife agency regarding any testing requirements for other diseases and for any specific instructions regarding preparing, transporting, and consuming game meat.</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="97">
                    How can I safely run my equestrian facility?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="97">
                    <Card.Body className="accordion-answer">
                      You should follow your state and/or local jurisdictional guidance regarding continuing operations at your facility. <b>There have not been any reports of horses testing positive for the virus that causes COVID-19</b>. Based on the limited information available to date, the risk of animals spreading the virus that causes COVID-19 to people is considered to be low. COVID-19 is primarily spread from person to person, so steps should be taken to reduce the risks for people visiting your facility.
                  <ul>

                        <li><b>Encourage employees and other visitors, including boarders, owners, farriers, veterinarians, and those taking lessons, not to enter the facility if they are sick</b>. Employees should not return to work until the <a href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/disposition-in-home-patients.html">criteria to discontinue home isolation</a> are met, after talking with their doctor. Implement sick leave policies that are flexible, nonpunitive, and consistent with public health guidance, allowing employees to stay home if they have symptoms of respiratory infection.
                    </li>

                        <li><b>Consider conducting daily health checks (e.g., symptom and/or temperature screening) of employees and others visiting the facility before they enter the premises.</b> People with a fever of 100.40(38.00C) or above or other <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">signs of illness</a> should not be admitted to the premises. If implementing health checks, conduct them safely and respectfully. See <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/general-business-faq.html">General Business FAQ</a> for more information.<br></br>

                          <ul>
                            <li>Employees or visitors who appear to have symptoms upon arrival or who become sick during their visit should immediately be separated from other employees and visitors and sent home.</li>
                          </ul>

                        </li>

                        <li>
                          <b>Limit the number of people entering the facility.</b> Consider staggering lesson and visiting times to limit the number of people in the facility and potential for person-to-person contact. If possible, you can also take steps to decrease high-traffic areas by limiting areas open to visitors/owners or staggering use of common areas like grooming or wash stalls and tack rooms.
                    </li>

                        <li>
                          <b>Increase distance and limit duration of contact between employees and visitors in the facility.</b> Whenever possible, people should maintain at least 6 feet of distance between each other at the facility, including instructors teaching lessons. Allow for <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing</a> and avoid large numbers of people within the facility, including in employee-only areas.
                    </li>

                        <li>
                          <b>Visitors and employees should wear masks </b>to protect others especially where social distancing measures are difficult to maintain. Wearing a mask does NOT replace the need to practice social distancing.
                    </li>



                        <li>
                          <b>Set up hand hygiene stations</b> at the entrance and within the facility, so that employees and people entering can clean their hands before they enter. Employees should <a href="https://www.cdc.gov/handwashing/when-how-handwashing.html">wash hands</ a> regularly with soap and water for at least 20 seconds. An alcohol-based hand sanitizer containing at least 60% alcohol can be used, but if hands are visibly dirty, they should be washed with soap and water before using an alcohol-based hand sanitizer. Examples of hand hygiene stations may be a hose and soap located at entrances to allow for handwashing before entry.
                    </li>


                        <li>
                          <b>Clean and disinfect frequently touched surfaces</b> such as grooming tools, halters, lead ropes, shared tack and equipment, and door handles/gates (including those to stall doors and pasture/turn out areas) on a routine basis. To disinfect, use products that meet <a href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">EPA's criteria for use against the </a> virus that causes COVID-19 and are appropriate for the surface, diluted household bleach solutions prepared according to the manufacturer’s label for disinfection, or alcohol solutions with at least 70% alcohol. Follow manufacturer’s directions for use, especially regarding product contact time and protections from chemical hazards posed by cleaners and disinfectants.
                    </li>



                        <li>
                          <b>Follow local guidance</b> on shelter in place and travel recommendations when traveling for showing, training, or trail riding.
                    </li>


                        <li>
                          If traveling to a new facility, <b>limit contact between people, horses, tack, equipment, and other supplies</b> from different facilities, and maintain a distance of at least 6 feet between horses and riders.
                          <ul>
                            <li>Follow state and local guidance on travel. People who are sick should not travel to other facilities.</li>
                            <li>People visiting other facilities should follow the same precautions as they would normally, including maintaining at least 6 feet of distance between each other, wearing a mask to protect others, and washing hands frequently with soap and water.</li>
                          </ul>
                        </li>


                        <li>If other animals, such as barn cats, are present at the facility, be aware that a small number of <a href="https://www.cdc.gov/coronavirus/2019-ncov/animals/pets-other-animals.html">pets</a> have been reported to be infected with the virus that causes COVID-19, mostly after contact with people with COVID-19.
                    </li>


                      </ul>



                  For more information, see <a href="https://www.osha.gov/Publications/OSHA3990.pdf">Guidance on Preparing Workplaces for Covid-19</a> and <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/guidance-business-response.html"> Interim Guidance for Businesses and Employers to Plan and Respond to Coronavirus Disease 2019</a>


                    </Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="Community-Mitigation"><Card.Header className="alert-subjects">Community Mitigation</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="98">
                    What is community mitigation?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="98">
                    <Card.Body className="accordion-answer">
                      Community mitigation activities are actions that people and communities can take to slow the spread of infectious diseases, and prepare for it if it occurs, including COVID-19. Community mitigation is especially important before a vaccine or drug becomes widely available.<br></br><br></br>For more information, see <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/community-mitigation.html">Community Mitigation Framework</a>.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="99">
                    What are community mitigation actions for COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="99">
                    <Card.Body className="accordion-answer">For individuals<br></br>
                      <ul>
                        <li><a href="https://www.cdc.gov/handwashing/when-how-handwashing.html">Washing</a> hands often</li>
                        <li>Avoiding close contact with people who are sick, and practicing <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing</a></li>
                        <li>Covering mouth and nose with a <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">mask</a> when around others</li>
                        <li>Covering coughs and sneezes</li>
                        <li>Cleaning and disinfecting frequently touched surfaces daily</li>
                      </ul></Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="100">
                    Who is involved in community mitigation actions?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="100">
                    <Card.Body className="accordion-answer">Individual people, communities, schools, businesses, and healthcare organizations have a role to play in community mitigation. Policies*, which include limits on large gatherings, restrictions on businesses, and school closures are often needed to fully put in place community mitigation strategies.<br></br><br></br>Each community is unique. Because some actions can be very disruptive to daily life, mitigation activities will be different depending on how much disease has spread within the community, what the community population is like, and the ability to take these actions at the local level. To identify appropriate activities, all parts of a community that might be affected need to be considered, including <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">populations most vulnerable to serve illness</a>, and those who might be more affected socially or economically. When selecting mitigation activities, states and communities need to consider the spread of disease locally, characteristics of the people who live in the community (for example, age groups, languages spoken, overall health status), and the kind of public health resources and healthcare systems (like hospitals) that are available in the community. State and local officials may need to adjust community mitigation activities and immediately take steps to scale them up or down depending on the changing local situation.<br></br><br></br>Putting mitigation into practice is based on
                  <ul>
                        <li>Emphasizing individual responsibility for taking recommended personal-level actions</li>
                        <li>
                          Empowering businesses, schools, and community organizations to take recommended actions, particularly in ways that protect persons at increased risk of severe illness</li>
                        <li>Focusing on settings that provide critical infrastructure or services to individuals at increased risk of severe illness</li>
                        <li>Minimizing disruptions to daily life to the extent possible</li>
                      </ul>
                  *CDC cannot address the policies of any business or organization. CDC shares recommendations based on the best available science to help people make decisions that improve their health and safety. In all cases, <b>follow the guidance of your healthcare provider and local health department</b>. Local decisions depend on local circumstances.<br></br><br></br>For more information, see <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/community-mitigation.html">Community Mitigation Framework</a>
                    </Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>

                </Card>

                <Card><a id="Water"><Card.Header className="alert-subjects">Water</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="101">
                    Can the virus that causes COVID-19 spread through treated drinking water?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="101">
                    <Card.Body className="accordion-answer">The virus that causes COVID-19 has not been detected in treated drinking water. Water treatment plants use filters and disinfectants to remove or kill germs, like the virus that causes COVID-19. The Environmental Protection Agency regulates water treatment plants to ensure that treated water is safe to drink.<br></br><br></br>Currently, there is no evidence that the virus that causes COVID-19 can be spread to people by drinking treated water. COVID-19 is spread mainly through close contact from person-to-person. You can continue to use and drink water from your tap as usual.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="102">
                    Is the virus that causes COVID0-19 found in feces (stool)?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="102">
                    <Card.Body className="accordion-answer">The virus that causes COVID-19 has been found in the feces of some patients diagnosed with COVID-19. However, it is unclear whether the virus found in feces may be capable of causing COVID-19. There has not been any confirmed report of the virus spreading from feces to a person. Scientists also do not know how much risk there is that the virus could be spread from the feces of an infected person to another person. However, they think this risk is low based on data from previous outbreaks of diseases caused by related coronaviruses, such as severe acute respiratory syndrome (SARS) and Middle East respiratory syndrome (MERS).</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="103">
                    Can the virus that causes COVID-19 spread through pools, hot tubs, spas, and water playgrounds?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="103">
                    <Card.Body className="accordion-answer">There is no evidence that the virus that causes COVID-19 can be spread to people through the water in pools, hot tubs, or water playgrounds. Additionally, proper operation of these aquatic venues and disinfection of the water (with chlorine or bromine) should inactivate the virus. However, chlorinated water alone should not be used as a surface disinfectant. CDC recommends use of <a href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">EPA-registered household disinfectants</a> to disinfect surfaces. Follow the instructions on the label to ensure safe and effective use of the product.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="104">
                    Can the COVID-19 virus spread through sewerage systems?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="104">
                    <Card.Body className="accordion-answer">Recently, ribonucleic acid (RNA) from the virus that causes COVID-19 has been found in untreated wastewater. While data are limited, there is little evidence of infectious virus in wastewater, and no information to date that anyone has become sick with COVID-19 because of exposure to wastewater. At this time, the risk of transmission of the virus that causes COVID-19 through properly designed and maintained sewerage systems is thought to be low.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="105">
                    Should wastewater workers take extra precautions to protect themselves from the virus that causes COVID-19?
                </Accordion.Toggle>

                  <Accordion.Collapse eventKey="105">
                    <Card.Body className="accordion-answer">
                      Recently, ribonucleic acid (RNA) from the virus that causes COVID-19 has been found in untreated wastewater. While data are limited, there is little evidence of infectious virus in wastewater, and no information to date that anyone has become sick with COVID-19 because of exposure to wastewater.<br></br><br></br>Standard practices associated with wastewater treatment plant operations should be sufficient to protect wastewater workers from the virus that causes COVID-19. These standard practices can include engineering and administrative controls, hygiene precautions, specific safe work practices, and personal protective equipment (<a href="https://www.cdc.gov/healthywater/global/sanitation/workers_handlingwaste.html">PPE</a>) normally required when handling untreated wastewater. No additional COVID-19–specific protections are recommended for workers involved in wastewater management, including those at wastewater treatment facilities.<br></br><br></br><a href="https://www.cdc.gov/coronavirus/2019-ncov/community/sanitation-wastewater-workers.html">See information for Wastewater and Sanitation System Workers on COVID-19</a> for additional information.
                  </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="106">
                    If my utility has issued a Boil Water Advisory, can I still use tap water to wash my hands?
                </Accordion.Toggle>

                  <Accordion.Collapse eventKey="106">
                    <Card.Body className="accordion-answer">
                      In most cases, it is safe to <a href="">wash your hands</a>with soap and tap water during a <a href="">Boil Water Advisory</a>. Follow the guidance from your local public health officials. If soap and water are not available, use an alcohol-based hand sanitizer containing at least 60% alcohol.
                  </Card.Body>
                  </Accordion.Collapse>

                  <a href="#Top">Return to Top</a>
                </Card>



              </Accordion>

            </p>
          </Alert>

          <Alert className="alerts" id="masks" variant="secondary" onClose={() => hide_masks()} dismissible hidden="true">
            <Alert.Heading className="alert-headings">Masks</Alert.Heading>
            <p>
            <b className="alert-subjects">Overview</b><br></br>
            <ul>

              <li className="alerts-li">Wear masks with two or more layers to stop the spread of COVID-19</li>
              <li className="alerts-li">Wear the mask over your nose and mouth and secure it under your chin</li>
              <li className="alerts-li">Masks should be worn by people two years and older</li>
              <li className="alerts-li">Masks should NOT be worn by children younger than two, people who have trouble breathing, or people who cannot remove the mask without assistance</li>
              <li className="alerts-li">Do <b>NOT</b> wear masks intended for healthcare workers, for example, N95 respirators</li><br></br>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ML3n1c0FHDI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ul>
            <b className="alert-subjects">How to Select</b><br></br>
            <p className="masks-p">When selecting a mask, there are many choices. Here are some do’s and don’ts</p>
            <div>
              <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/do-choose-masks-medium.jpg"></Image>
              <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/do-NOT-choose-masks-medium.jpg"></Image>
              

              <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/special-situations-children-medium.jpg"></Image>
              <br></br>
				<Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/caution-gaiters-face-shields-medium.jpg"></Image>
              <br></br><Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/special-situations-glasses-medium.jpg"></Image>
              </div>

            <b className="alert-subjects">How to Wear</b><br></br>
            <p className="masks-p">Wear a mask correctly and consistently for the best protection.<br></br>
            <ul>
              <li className="alerts-li">Be sure to wash your hands before putting on a mask</li>
              <li className="alerts-li">Do <b>NOT</b> touch the mask when wearing it</li>
            </ul>
            </p>
        </p>

        <p className="masks-p">Do wear a mask that<br></br>
        <ul>
          <li className="alerts-li">Covers your nose and mouth and secure it under your chin</li>
          <li className="alerts-li">Fits snugly against the sides of your face</li>
        </ul>
        For more information, visit our <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html">How to Wear Masks</a> web page.<br></br>
        <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/do-wear-mask-medium.jpg"></Image>
        </p>
        <p className="masks-p">Do NOT wear a mask that<br></br>
        <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/how-NOT-to-wear-mask-large.jpg"></Image>
        </p>
        <p className="masks-p">How to take off a mask<br></br>
        <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/how-to-take-off-mask-large.jpg"></Image>
        </p>
        <p className="masks-p">How to Clean<br></br>
        Masks should be washed regularly. Always <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html">remove masks correctly</a> and <a href="https://www.cdc.gov/handwashing/index.html">wash your hands</a> after handling or touching a used mask.
        <ul>
          <li className="alerts-li">Include your mask with your regular laundry</li>
          <li className="alerts-li">Use regular laundry detergent and the warmest appropriate water setting for the cloth used to make the mask</li>
          <li className="alerts-li">Use the highest heat setting and leave in the dryer until completely dry</li>
        </ul>
        For more information, visit our <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wash-cloth-face-coverings.html">How to Wash Masks</a> web page.
        </p>
        For more information, see our Masks web site. For information on the sources for our mask guidance, see <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover-guidance.html#recent-studies">Recent Studies</a>.<br></br>

        <b className="alert-subjects">How to Wear Masks</b><br></br>

        <b className="alert-subjects">Washing Masks</b><br></br>

        <b className="alert-subjects">Making Masks</b><br></br>

        <b className="alert-subjects">Considerations for Wearing Masks</b><br></br>

          </Alert>

          <Alert className="alerts" id="symptoms" variant="warning" onClose={() => hide_symptoms()} dismissible hidden="true">
            <Alert.Heading>Symptoms</Alert.Heading>
            <div data-cdc-widget='healthBot' data-cdc-theme='theme1' class='cdc-widget-color-blue'  data-cdc-language='en-us'></div>
{/* <script src='https://t.cdc.gov/1M1B'></script> */}
        hello
          </Alert>

          <Alert className="alerts" id="if_you_are_sick" variant="danger" onClose={() => hide_if_you_are_sick()} dismissible hidden="true">
            <Alert.Heading>If You Are Sick</Alert.Heading>
            <p>
              If you are sick :(
        </p>
          </Alert>

        </div>
        <p>Sources:
        <a target="_blank" href="https://coronavirusapi.com" > https://coronavirusapi.com</a> |
        <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov" > https://www.cdc.gov/coronavirus/2019-ncov</a>
        </p>

        <br></br>


      </header>
    </div>

  );
}

export default App;
