import React from 'react';
import { Card, Form, Button, Alert, Accordion, Table, Image } from 'react-bootstrap';
import { Chart } from 'react-charts'
import '../App.css';

function show_vaccines() {
  document.getElementById("vaccines").hidden = false
  document.getElementById("prevent").hidden = true
  document.getElementById("frequently_asked_questions").hidden = true
  document.getElementById("masks").hidden = true
  document.getElementById("symptoms").hidden = true
  document.getElementById("if_you_are_sick").hidden = true

}

function hide_vaccines() {
  document.getElementById("vaccines").hidden = true
}


function show_prevent() {
  document.getElementById("prevent").hidden = false
  document.getElementById("frequently_asked_questions").hidden = true
  document.getElementById("masks").hidden = true
  document.getElementById("symptoms").hidden = true
  document.getElementById("if_you_are_sick").hidden = true
  document.getElementById("vaccines").hidden = true
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
  document.getElementById("vaccines").hidden = true
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
  document.getElementById("vaccines").hidden = true
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
  document.getElementById("vaccines").hidden = true
}

function hide_if_you_are_sick() {
  document.getElementById("if_you_are_sick").hidden = true
}

function show_symptoms() {
  document.getElementById("prevent").hidden = true
  document.getElementById("frequently_asked_questions").hidden = true
  document.getElementById("masks").hidden = true
  document.getElementById("if_you_are_sick").hidden = true
  document.getElementById("symptoms").hidden = false
  document.getElementById("vaccines").hidden = true
}

function hide_symptoms() {
  document.getElementById("symptoms").hidden = true
}


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
  return d.getUTCDate()
}

function update_chart () {
  return       [
    {
      label: 'Deaths',
      data: 
      [
        [sessionStorage.getItem("dates1"),  sessionStorage.getItem("deaths1") - sessionStorage.getItem("deaths2")],   
        [sessionStorage.getItem("dates2"),  sessionStorage.getItem("deaths2") - sessionStorage.getItem("deaths3")],   
        [sessionStorage.getItem("dates3"),  sessionStorage.getItem("deaths3") - sessionStorage.getItem("deaths4")],   
        [sessionStorage.getItem("dates4"),  sessionStorage.getItem("deaths4") - sessionStorage.getItem("deaths5")],   
        [sessionStorage.getItem("dates5"),  sessionStorage.getItem("deaths5") - sessionStorage.getItem("deaths6")],   
        [sessionStorage.getItem("dates6"),  sessionStorage.getItem("deaths6") - sessionStorage.getItem("deaths7")],   
        [sessionStorage.getItem("dates7"),  sessionStorage.getItem("deaths7") - sessionStorage.getItem("deaths8")],   
        [sessionStorage.getItem("dates8"),  sessionStorage.getItem("deaths8") - sessionStorage.getItem("deaths9")],   
        [sessionStorage.getItem("dates9"),  sessionStorage.getItem("deaths9") - sessionStorage.getItem("deaths10")],   
        [sessionStorage.getItem("dates10"),  sessionStorage.getItem("deaths10") - sessionStorage.getItem("deaths11")],   
        [sessionStorage.getItem("dates11"),  sessionStorage.getItem("deaths11") - sessionStorage.getItem("deaths12")],   
        [sessionStorage.getItem("dates12"),  sessionStorage.getItem("deaths12") - sessionStorage.getItem("deaths13")],   
        [sessionStorage.getItem("dates13"),  sessionStorage.getItem("deaths13") - sessionStorage.getItem("deaths14")],   
        [sessionStorage.getItem("dates14"),  sessionStorage.getItem("deaths14") - sessionStorage.getItem("deaths15")]   
      ] 
    },
    {
      label: 'New Positive Cases',
      data: 
      [
        [sessionStorage.getItem("dates1"),  sessionStorage.getItem("positives1") - sessionStorage.getItem("positives2")],   
        [sessionStorage.getItem("dates2"),  sessionStorage.getItem("positives2") - sessionStorage.getItem("positives3")],   
        [sessionStorage.getItem("dates3"),  sessionStorage.getItem("positives3") - sessionStorage.getItem("positives4")],   
        [sessionStorage.getItem("dates4"),  sessionStorage.getItem("positives4") - sessionStorage.getItem("positives5")],   
        [sessionStorage.getItem("dates5"),  sessionStorage.getItem("positives5") - sessionStorage.getItem("positives6")],   
        [sessionStorage.getItem("dates6"),  sessionStorage.getItem("positives6") - sessionStorage.getItem("positives7")],   
        [sessionStorage.getItem("dates7"),  sessionStorage.getItem("positives7") - sessionStorage.getItem("positives8")],   
        [sessionStorage.getItem("dates8"),  sessionStorage.getItem("positives8") - sessionStorage.getItem("positives9")],   
        [sessionStorage.getItem("dates9"),  sessionStorage.getItem("positives9") - sessionStorage.getItem("positives10")],   
        [sessionStorage.getItem("dates10"),  sessionStorage.getItem("positives10") - sessionStorage.getItem("positives11")],   
        [sessionStorage.getItem("dates11"),  sessionStorage.getItem("positives11") - sessionStorage.getItem("positives12")],   
        [sessionStorage.getItem("dates12"),  sessionStorage.getItem("positives12") - sessionStorage.getItem("positives13")],   
        [sessionStorage.getItem("dates13"),  sessionStorage.getItem("positives13") - sessionStorage.getItem("positives14")],   
        [sessionStorage.getItem("dates14"),  sessionStorage.getItem("positives14") - sessionStorage.getItem("positives15")]   
      ] 
    }]

}

const Coronavirus = () => {


  const get_data = async () => {

    sessionStorage.clear()
    let state = convertState(document.getElementById('input').value)
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
    sessionStorage.setItem("dates1", convertEpoch(data.Date[data.Date.length - 1])) 
    sessionStorage.setItem("dates2", convertEpoch(data.Date[data.Date.length - 2])) 
    sessionStorage.setItem("dates3", convertEpoch(data.Date[data.Date.length - 3])) 
    sessionStorage.setItem("dates4", convertEpoch(data.Date[data.Date.length - 4])) 
    sessionStorage.setItem("dates5", convertEpoch(data.Date[data.Date.length - 5])) 
    sessionStorage.setItem("dates6", convertEpoch(data.Date[data.Date.length - 6])) 
    sessionStorage.setItem("dates7", convertEpoch(data.Date[data.Date.length - 7])) 
    sessionStorage.setItem("dates8", convertEpoch(data.Date[data.Date.length - 8])) 
    sessionStorage.setItem("dates9", convertEpoch(data.Date[data.Date.length - 9])) 
    sessionStorage.setItem("dates10", convertEpoch(data.Date[data.Date.length - 10])) 
    sessionStorage.setItem("dates11", convertEpoch(data.Date[data.Date.length - 11])) 
    sessionStorage.setItem("dates12", convertEpoch(data.Date[data.Date.length - 12])) 
    sessionStorage.setItem("dates13", convertEpoch(data.Date[data.Date.length - 13])) 
    sessionStorage.setItem("dates14", convertEpoch(data.Date[data.Date.length - 14])) 
    sessionStorage.setItem("dates15", convertEpoch(data.Date[data.Date.length - 15])) 
  
    sessionStorage.setItem("positives1", parseInt(data.Positive[data.Positive.length - 1]))
    sessionStorage.setItem("positives2", parseInt(data.Positive[data.Positive.length - 2]))
    sessionStorage.setItem("positives3", parseInt(data.Positive[data.Positive.length - 3]))
    sessionStorage.setItem("positives4", parseInt(data.Positive[data.Positive.length - 4]))
    sessionStorage.setItem("positives5", parseInt(data.Positive[data.Positive.length - 5]))
    sessionStorage.setItem("positives6", parseInt(data.Positive[data.Positive.length - 6]))
    sessionStorage.setItem("positives7", parseInt(data.Positive[data.Positive.length - 7]))
    sessionStorage.setItem("positives8", parseInt(data.Positive[data.Positive.length - 8]))
    sessionStorage.setItem("positives9", parseInt(data.Positive[data.Positive.length - 9]))
    sessionStorage.setItem("positives10", parseInt(data.Positive[data.Positive.length - 10]))
    sessionStorage.setItem("positives11", parseInt(data.Positive[data.Positive.length - 11]))
    sessionStorage.setItem("positives12", parseInt(data.Positive[data.Positive.length - 12]))
    sessionStorage.setItem("positives13", parseInt(data.Positive[data.Positive.length - 13]))
    sessionStorage.setItem("positives14", parseInt(data.Positive[data.Positive.length - 14]))
    sessionStorage.setItem("positives15", parseInt(data.Positive[data.Positive.length - 15]))
  
    sessionStorage.setItem("deaths1", parseInt(data.Deaths[data.Deaths.length - 1]))
    sessionStorage.setItem("deaths2", parseInt(data.Deaths[data.Deaths.length - 2]))
    sessionStorage.setItem("deaths3", parseInt(data.Deaths[data.Deaths.length - 3]))
    sessionStorage.setItem("deaths4", parseInt(data.Deaths[data.Deaths.length - 4]))
    sessionStorage.setItem("deaths5", parseInt(data.Deaths[data.Deaths.length - 5]))
    sessionStorage.setItem("deaths6", parseInt(data.Deaths[data.Deaths.length - 6]))
    sessionStorage.setItem("deaths7", parseInt(data.Deaths[data.Deaths.length - 7]))
    sessionStorage.setItem("deaths8", parseInt(data.Deaths[data.Deaths.length - 8]))
    sessionStorage.setItem("deaths9", parseInt(data.Deaths[data.Deaths.length - 9]))
    sessionStorage.setItem("deaths10", parseInt(data.Deaths[data.Deaths.length - 10]))
    sessionStorage.setItem("deaths11", parseInt(data.Deaths[data.Deaths.length - 11]))
    sessionStorage.setItem("deaths12", parseInt(data.Deaths[data.Deaths.length - 12]))
    sessionStorage.setItem("deaths13", parseInt(data.Deaths[data.Deaths.length - 13]))
    sessionStorage.setItem("deaths14", parseInt(data.Deaths[data.Deaths.length - 14]))
    sessionStorage.setItem("deaths15", parseInt(data.Deaths[data.Deaths.length - 15]))
  
    let asterik = "*"
    convertState(state)
    var number = parseInt(document.getElementById('tested').textContent = data.Tested[data.Tested.length - 1]) - parseInt(document.getElementById('tested').textContent = data.Tested[data.Tested.length - 2])
  
    document.getElementById('tested').textContent = parseInt(data.Tested[data.Tested.length - 1]).toLocaleString() + " Tested (+" + number.toLocaleString() + ")" + asterik
  
    number = parseInt(document.getElementById('cases').textContent = data.Positive[data.Positive.length - 1]) - parseInt(document.getElementById('cases').textContent = data.Positive[data.Positive.length - 2])
    document.getElementById('cases').textContent = parseInt(data.Positive[data.Positive.length - 1]).toLocaleString() + " Positive Cases (+" + number.toLocaleString() + ")" + asterik
  
    number = parseInt(document.getElementById('deaths').textContent = data.Deaths[data.Deaths.length - 1]) - parseInt(document.getElementById('deaths').textContent = data.Deaths[data.Deaths.length - 2])
    document.getElementById('deaths').textContent = parseInt(data.Deaths[data.Deaths.length - 1]).toLocaleString() + " Deaths (+" + number.toLocaleString() + ")" + asterik
  
    var d = new Date(0);
    d.setUTCSeconds(data.Date[data.Date.length - 1])
  
    document.getElementById('last_updated').textContent = "Last Updated: " + d.toUTCString()
  
    d = new Date(0);
    d.setUTCSeconds(data.Date[data.Date.length - 2])
  
    document.getElementById('update_before_last').textContent = asterik + "Update Before Last: " + d.toUTCString()
  
    document.getElementById("loading").hidden = true
    document.getElementById("formStateInput").hidden = false
  
    updateChartData()
  
    return data
  }; // End get_data
  
  const [state, setState] = React.useState(
    { 
    data: [
      {
        label: 'Deaths',
        data: [[10000,10000]]
      },
      {
        label: 'New Positive Cases',
        data: [[10000,10000]]
      }]})
  
  function useChartConfig() { 

  React.useEffect(() => { 
    setState(old => ({
      ...old,
      data: [
      {
        label: 'Deaths',
        data: [[10000,10000]]
      },
      {
        label: 'New Positive Cases',
        data: [[10000,10000]]
      }]}))}, [])

    
  const updateChartData = () =>
    setState(old => ({
      ...old,
      data: update_chart()
    }))

  return {...state, updateChartData}

} // end useChartConfig

  const series = React.useMemo(() => ({showPoints: false}),[])

  const axes = React.useMemo(() => [{ primary: true, type: 'linear', position: 'bottom' }, { type: 'linear', position: 'left' }],[])

  const { data, updateChartData } = useChartConfig()

  let lineChart = (
    <div style={{ margin: 'auto', width: '80vw', height: '80vh', maxWidth: '-webkit-fill-available', maxHeight: '-webkit-fill-available' }}>
      <Chart id="chart" data={data} axes={axes} tooltip></Chart>
    </div>)

  return (
    <div>

      <br></br>
      <header className="coronavirus-header">

        {/* STATE SEARCH */}
        <h3 hidden="true" id="loading">Loading . . .</h3>
        <Form id="formStateInput" className="state-form" onSubmit={e => {get_data(); e.preventDefault();}}>
          <Form.Group controlId="formInput">
            <div class="form-inline">
              <Form.Label className="enter-state">Enter State </Form.Label>
              <Form.Control id="input" className="form-control" type="text" defaultValue="nv"></Form.Control>
              <Button className="submit-button" variant="light" type="submit"  > Submit</Button>
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

        <div className="card-chart">
          <p id="chart-header" className="x-axis"><div className="days-vs-infected">Date VS <div className="red-text">Positive Cases</div> and <div className="blue-text">Deaths</div></div> </p>
          {lineChart}
        </div>

        <div>

          <Button className="info-buttons" variant="light" onClick={() => show_vaccines()}>Vaccines</Button>
          <Button className="info-buttons" variant="success" onClick={() => show_prevent()}>Prevent Getting Sick</Button>
          <Button className="info-buttons" variant="primary" onClick={() => show_frequently_asked_questions()}>Frequently Asked Questions</Button>
          <Button className="info-buttons" variant="secondary" onClick={() => show_masks()}>Masks</Button>
          <Button className="info-buttons" variant="warning" onClick={() => show_symptoms()}>Symptoms</Button>
          <Button className="info-buttons" variant="danger" onClick={() => show_if_you_are_sick()}>If You Are Sick</Button>

          {/* START VACCINES */}
          <Alert className="alert" id="vaccines" variant="light" onClose={() => hide_vaccines()} dismissible hidden="true">
            <Alert.Heading className="card-top-heading"><a id="vaccines-top">Vaccines</a></Alert.Heading>

            <Table className="table">
              <tbody>
                <tr >
                  <a href="#vaccinated-first"><td className="tdleft">Who Gets Vaccinated First?</td></a>
                  <a href="#what-to-expect"><td className="tdright">What to Expect at Your Vaccine Appointment</td></a>
                </tr>
                <tr >
                  <a href="#different-vaccines"><td className="tdleft">Different Vaccines</td></a>
                  <a href="#vaccine-safety"><td className="tdright">Ensuring the Safety of Vaccines</td></a>
                </tr>
                <tr >
                  <a href="#ensuring-vaccines-work"><td className="tdleft">Ensuring Vaccines Work</td></a>
                  <a href="#vaccinated-benefits"><td className="tdright">Benefits of Getting Vaccinated</td></a>
                </tr>
                <tr >
                <a href="#faq-vaccination"><td className="tdcenter">Frequently Asked Questions about Vaccination</td></a>
                </tr>
                <tr>
                <a href="#vaccination-considerations"><td className="tdcenter">COVID-19 Vaccination Considerations for Persons with Underlying Medical Conditions</td></a>

                </tr>
              </tbody>
            </Table><br></br>

            <p className="vaccines-subject-header">8 Things to Know</p><br></br>
            <p className="vaccines-p">Now that there are authorized and recommended vaccines to prevent COVID-19 in the United States, here are 8 things you need to know about the new COVID-19 Vaccination Program and COVID-19 vaccines.</p>
            <ol type="1" >
              <li className="vaccines-li"><b>The safety of COVID-19 vaccines is a top priority.</b><br></br>
              The U.S. vaccine safety system ensures that all vaccines are as safe as possible. Learn how federal partners are working together to <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety.html">ensure the safety of COVID-19 vaccines</a>.
              CDC has developed a new tool, <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/vsafe.html"><b>v-safe</b></a>, as an additional layer of safety monitoring to increase our ability to rapidly detect any safety issues with COVID-19 vaccines. V-safe is a new smartphone-based, after-vaccination health checker for people who receive COVID-19 vaccines.</li>
              <li className="vaccines-li"><b>COVID-19 vaccination will help protect you from getting COVID-19. Two doses are needed.</b><br></br>
              Depending on the specific vaccine you get, a second shot 3-4 weeks after your first shot is needed to get the most protection the vaccine has to offer against this serious disease. <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-benefits.html">Learn more about the benefits of getting vaccinated</a>.</li>
              <li className="vaccines-li"><b>CDC is making recommendations for who should be offered COVID-19 vaccine first when supplies are limited.</b><br></br>To help guide decisions about how to distribute limited initial supplies of COVID-19 vaccine, CDC and the Advisory Committee on Immunization Practices have <a href="https://www.cdc.gov/vaccines/hcp/acip-recs/vacc-specific/covid-19.html">published recommendations</a> for which groups should be vaccinated first.<br></br>Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations.html">who should be vaccinated first when vaccine supplies are limited</a>.</li>
              <li className="vaccines-li"><b>There is currently a limited supply of COVID-19 vaccine in the United States, but supply will increase in the weeks and months to come.</b><br></br>The goal is for everyone to be able to easily get vaccinated against COVID-19 as soon as large enough quantities are available. Once vaccine is widely available, the plan is to have several thousand vaccination providers offering COVID-19 vaccines in doctors’ offices, retail pharmacies, hospitals, and federally qualified health centers.</li>
              <li className="vaccines-li"><b>After COVID-19 vaccination, you may have some side effects. This is a normal sign that your body is building protection.</b><br></br>The side effects from COVID-19 vaccination may feel like flu and might even affect your ability to do daily activities, but they should go away in a few days. Learn more about what <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect/after.html">side effects to expect and get helpful tips</a> on how to reduce pain and discomfort after your vaccination.
              <br></br><b>Making COVID-19 Vaccination Recommendations</b>CDC makes vaccination recommendations, including those for COVID-19 vaccines, based on input from the Advisory Committee on Immunization Practices. <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations-process.html">Learn more</a></li>
              <li className="vaccines-li"><b>Cost is not an obstacle to getting vaccinated against COVID-19.</b>Vaccine doses purchased with U.S. taxpayer dollars will be given to the American people at no cost. However, vaccination providers may be able to charge administration fees for giving the shot. Vaccination providers can get this fee reimbursed by the patient’s public or private insurance company or, for uninsured patients, by the <a href="https://www.hhs.gov/coronavirus/cares-act-provider-relief-fund/index.html">Health Resources and Services Administration’s Provider Relief Fund</a>.</li>
              <li className="vaccines-li"><b>The first COVID-19 vaccine is being used under an Emergency Use Authorization (EUA) from the U.S. Food and Drug Administration (FDA). Many other vaccines are still being developed and tested.</b><br></br>Learn more about <a href="https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/emergency-use-authorization">FDA’s Emergency Use Authorization authority</a> and watch a <a href="https://www.youtube.com/watch?v=iGkwaESsGBQ">video on what an EUA is</a>.<br></br>If more COVID-19 vaccines are authorized or approved by FDA, the <a href="https://www.cdc.gov/vaccines/acip/index.html">Advisory Committee on Immunization Practices (ACIP)</a> will quickly hold public meetings to review all available data about each vaccine and make recommendations for their use in the United States. <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations-process.html">Learn more about how CDC is making COVID-19 vaccine recommendations</a>.<br></br>All ACIP-recommended vaccines will be included in the U.S. COVID-19 Vaccination Program. CDC continues to work at all levels with partners, including healthcare associations, on a flexible COVID-19 vaccination program that can accommodate different vaccines and adapt to different scenarios. State, tribal, local, and territorial health departments have <a href="https://www.cdc.gov/vaccines/covid-19/covid19-vaccination-guidance.html">developed distribution plans</a> to make sure all recommended vaccines are available to their communities.</li>
              <li className="vaccines-li"><b>COVID-19 vaccines are one of many important tools to help us stop this pandemic.</b><br></br>It’s important for everyone to continue using all the tools available to help stop this pandemic as we learn more about how COVID-19 vaccines work in real-world conditions. Cover your mouth and nose with a mask when around others, stay at least 6 feet away from others, avoid crowds, and wash your hands often.<br></br>CDC will continue to update this website as vaccine recommendations and supply change.</li>
            </ol>


            <a id="vaccinated-first" className="return-top" href="#vaccines-top"><br></br>Return to Top</a><br></br>
            <p className="vaccines-subject-header">Who Gets Vaccinated First?</p><br></br>
            <p className="vaccines-p">Because the supply of COVID-19 vaccine in the United States is expected to be limited at first, CDC is providing recommendations to federal, state, and local governments about who should be vaccinated first. CDC’s recommendations are based on recommendations from the Advisory Committee on Immunization Practices (ACIP), an independent panel of medical and public health experts.<br></br>The recommendations were made with these goals in mind:
            <ul>
              <li className="vaccines-li">Decrease death and serious disease as much as possible.</li>
              <li className="vaccines-li">Preserve functioning of society.</li>
              <li className="vaccines-li">Reduce the extra burden COVID-19 is having on people already facing disparities.</li>
            </ul></p>
            <p className="vaccines-subject">Healthcare personnel and residents of long-term care facilities should be offered the first doses of COVID-19 vaccines (Phase 1a)</p>
            <p className="vaccines-p">CDC recommends that initial supplies of COVID-19 vaccine be allocated to healthcare personnel and long-term care facility residents. This is referred to as Phase 1a. CDC <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6949e1.htm">made this recommendation on December 3, 2020</a>.</p>
            
            
            <p className="vaccines-subject">Groups who should be offered vaccination next (Phases 1b and 1c)</p>
            <p className="vaccines-p">CDC recommends that, in the next phases (Phase 1b and Phase 1c), vaccination should be offered to people in the following groups. CDC made <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm695152e2.htm?s_cid=mm695152e2_w">this recommendation</a> on December 22, 2020.</p>

            <p className="vaccines-subject">Phase 1b</p>
            <ul>
              <li className="vaccines-li"><b>Frontline essential workers</b> such as fire fighters, police officers, corrections officers, food and agricultural workers, United States Postal Service workers, manufacturing workers, grocery store workers, public transit workers, and those who work in the educational sector (teachers, support staff, and daycare workers.)</li>
              <li className="vaccines-li"><b>People aged 75 years and older</b> because they are at high risk of hospitalization, illness, and death from COVID-19. People aged 75 years and older who are also residents of long-term care facilities should be offered vaccination in Phase 1a.</li>
            </ul>

            <p className="vaccines-subject">Phase 1c</p>
            <ul>
              <li className="vaccines-li"><b>People aged 65—74 years</b> because they are at high risk of hospitalization, illness, and death from COVID-19. People aged 65—74 years who are also residents of long-term care facilities should be offered vaccination in Phase 1a.</li>
              <li className="vaccines-li"><b>People aged 16—64 years with underlying medical conditions</b> which increase the risk of serious, life-threatening complications from COVID-19.</li>
              <li className="vaccines-li"><b>Other essential workers</b>, such as people who work in transportation and logistics, food service, housing construction and finance, information technology, communications, energy, law, media, public safety, and public health.</li>
            </ul>
            <p className="vaccines-subject">As vaccine availability increases, vaccination recommendations will expand to include more groups</p>
            <p className="vaccines-p">The goal is for everyone to be able to easily get a COVID-19 vaccination as soon as large quantities of vaccine are available. As vaccine supply increases but remains limited, ACIP will expand the groups recommended for vaccination.</p>

            
            <p className="vaccines-subject">The Importance of COVID-19 Vaccination for Healthcare Personnel</p>
            <p className="vaccines-p">Based on <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6949e1.htm">recommendations</a> from the <a href="https://www.cdc.gov/vaccines/acip/">Advisory Committee on Immunization Practices (ACIP)</a>, an independent panel of medical and public health experts, <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6949e1.htm">CDC recommends healthcare personnel be among those offered the first doses of COVID-19 vaccines</a>. Healthcare personnel include all paid and unpaid persons serving in healthcare settings who have the potential for direct or indirect exposure to patients or infectious materials.<br></br>This recommendation pertains to paid and unpaid healthcare personnel working in a variety of healthcare settings—for example, acute care facilities, long-term acute care facilities, inpatient rehabilitation facilities, nursing homes and assisted living facilities, home health care, mobile clinics, and outpatient facilities, such as dialysis centers and physicians’ offices.</p>

            <p className="vaccines-subject">Examples of healthcare personnel include:</p>
            <ul>
              <li className="vaccines-li">Emergency medical service personnel</li>
              <li className="vaccines-li">Nurses and nursing assistants</li>
              <li className="vaccines-li">Physicians</li>
              <li className="vaccines-li">Technicians</li>
              <li className="vaccines-li">Therapists</li>
              <li className="vaccines-li">Dentists</li>
              <li className="vaccines-li">Dental hygienists and assistants</li>
              <li className="vaccines-li">Phlebotomists</li>
              <li className="vaccines-li">Pharmacists</li>
              <li className="vaccines-li">Students and trainees</li>
              <li className="vaccines-li">Contractual staff</li>
              <li className="vaccines-li">Dietary and food services staff</li>
              <li className="vaccines-li">Environmental services staff</li>
              <li className="vaccines-li">Administrative staff</li>
              Learn more about who is included under the broad term “<a href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/infection-control-recommendations.html#anchor_1604360694408">healthcare personnel</a>.”
            </ul>
            <p className="vaccines-subject">Healthcare personnel are at risk of exposure</p>
            <p className="vaccines-p">Healthcare personnel continue to be on the front line of the nation’s fight against this deadly pandemic. Healthcare personnel’s race and ethnicity, underlying health conditions, occupation type, and job setting can contribute to their risk of acquiring COVID-19 and experiencing severe outcomes, including death. By providing critical care to those who are or might be infected with the virus that causes COVID-19, healthcare personnel have a high risk of being exposed to and getting sick with COVID-19. As of December 3, the day CDC published these recommendations, there were more than 249,000 confirmed COVID-19 cases and 866 deaths among healthcare personnel. <a href="https://covid.cdc.gov/covid-data-tracker/#health-care-personnel">View more recent numbers on the toll COVID-19 has taken on healthcare personnel</a>.</p>

            <p className="vaccines-subject">Vaccinating healthcare personnel protects healthcare capacity</p>
            <p className="vaccines-p">When healthcare personnel get sick with COVID-19, they are not able to work and provide key services for patients or clients. Given the evidence of ongoing COVID-19 infections among healthcare personnel and the critical role they play in caring for others, continued protection of them at work, at home, and in the community remains a national priority. Early vaccine access is critical to ensuring the health and safety of this essential workforce of approximately 21 million people, protecting not only them but also their patients, families, communities, and the broader health of our country.</p>
            <p className="vaccines-subject">Vaccinating healthcare personnel helps prevent patients from getting COVID-19</p>
            <p className="vaccines-p">Healthcare personnel who get COVID-19 can also spread the virus to those they are caring for—including  hospitalized patients and  residents of long-term care facilities. Many of these individuals may have underlying health conditions that put them at risk for severe COVID-19 illness. Healthcare personnel can also spread the virus to other healthcare personnel. Learn more about the importance of COVID-19 vaccination for residents of long-term care facilities.</p>
            <p className="vaccines-subject">Benefits of vaccination must outweigh possible risks</p>
            <p className="vaccines-p">To help make important medical products, including vaccines, available quickly during the <a href="https://www.youtube.com/results?search_query=%23COVID19">COVID-19</a> pandemic, the U.S Food and Drug Administration (FDA) can use what is known as an <a href="https://www.youtube.com/watch?v=iGkwaESsGBQ">Emergency Use Authorization (EUA)</a>. Before any vaccine can be authorized for use under an EUA, the FDA must determine that the vaccine’s known or potential benefits outweigh known or potential risks. This is true for all vaccines, including COVID-19 vaccines.Once a vaccine is authorized for use under an EUA, ACIP will review available data on the vaccine before voting and advising CDC on whether to recommend the vaccine. Learn more about how <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations-process.html">CDC is making COVID-19 vaccine recommendations</a>.</p>
            <p className="vaccines-subject">The safety of COVID-19 vaccines and of healthcare personnel receiving the vaccines is a top priority</p>
            <p className="vaccines-p">The safety of all vaccines are studied thoroughly in clinical trials. Once healthcare personnel and other members of the public begin receiving COVID-19 vaccinations, CDC and FDA will continue to closely monitor vaccine safety. Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety.html">COVID-19 vaccine safety monitoring</a>.</p>
            <p className="vaccines-subject">Risks and benefits will be explained to everyone offered a COVID-19 vaccination</p>
            <p className="vaccines-p">Before anyone can receive a COVID-19 vaccine, they must be given an EUA fact sheet with detailed information about the COVID-19 vaccine they will be receiving.</p>
            <p className="vaccines-subject">Importance of COVID-19 Vaccination for Residents of Long-term Care Facilities</p>
            <p className="vaccines-p">Based on <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6949e1.htm">recommendations</a> from the <a href="https://www.cdc.gov/vaccines/acip/">Advisory Committee on Immunization Practices (ACIP)</a>, an independent panel of medical and public health experts, CDC recommends residents of long-term care facilities (LTCF) be included among those offered the first supply of COVID-19 vaccines.</p>
            <p className="vaccines-subject">Vaccinating LTCF residents will save lives</p>
            <p className="vaccines-p">Making sure LTCF residents can receive COVID-19 vaccination as soon as vaccines are available will help save the lives of those who are most at risk of dying from COVID-19. According to ACIP’s recommendations, LTCF residents include adults who reside in facilities that provide a range of services, including medical and personal care, to persons who are unable to live independently. The communal nature of LTCFs and the population served (generally older adults often with underlying medical conditions) puts facility residents at increased risk of infection and severe illness from COVID-19. By November 6, 2020, <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6946a3.htm">approximately 569,000–616,000 COVID-19 cases and 91,500 deaths</a> were reported among LTCF residents and staff members in the United States, accounting for 39% of deaths nationwide.</p>
            <p className="vaccines-subject">Benefits of vaccination believed to outweigh possible risks</p>
            <p className="vaccines-p">All COVID-19 vaccines were tested in clinical trials involving tens of thousands of people to make sure they meet safety standards and protect adults of different races, ethnicities, and ages, including adults over the age of 65, participated in the clinical trials. There were no serious safety concerns. The most common side effects were pain at the injection site and signs and symptoms like fever and chills. After a review of all the available information, ACIP and CDC agreed the lifesaving benefits of COVID-19 vaccination for LTCF residents outweigh the risks of possible side effects.</p>
            <p className="vaccines-subject">The safety of COVID-19 vaccines is a top priority</p>
            <p className="vaccines-p">To help make important unapproved medical products, including vaccines, available quickly during the <a href="https://www.youtube.com/results?search_query=%23COVID19">COVID-19</a> pandemic, the US Food and Drug Administration (FDA) can use what is known as an <a href="https://www.fda.gov/vaccines-blood-biologics/vaccines/emergency-use-authorization-vaccines-explained">Emergency Use Authorization (EUA)</a>. Before any vaccine can be authorized for use under an EUA, FDA must determine that the vaccine’s benefits outweigh possible risks.CDC and FDA are monitoring vaccine safety closely. The United States is using existing robust systems and data sources to conduct ongoing safety monitoring. An additional layer of safety monitoring has also been added that allows CDC and FDA to evaluate COVID-19 vaccine safety almost immediately. Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety.html">COVID-19 vaccine safety monitoring</a>.<br></br>For LTCFs in particular, CDC will work with pharmacies and other partners to report possible side effects (called adverse events) to the <a href="https://vaers.hhs.gov/reportevent.html">Vaccine Adverse Event Reporting System (VAERS)</a>. Facility staff and residents’ families are encouraged to also report any adverse events immediately.<br></br>CDC is working with pharmacies and other partners to provide communication materials to help LTCFs educate residents and their families about the vaccine, answer their questions about vaccine safety and other issues, and prepare them for vaccination clinics. For some COVID-19 vaccines, two shots are needed to provide the best protection, and the shots are given several weeks apart. Each recipient or caregiver will receive a vaccination record card to ensure they receive the correct vaccine for the second dose.</p>
            <p className="vaccines-subject">Risks and benefits will be explained to everyone offered a COVID-19 vaccination</p>
            <p className="vaccines-p">Explaining the risks and benefits of any treatments to a patient – in a way that they understand – is the standard of care. Written consent is not required by federal law for COVID-19 vaccination in the United States; however, COVID-19 vaccine providers should consult with their own legal counsel for state requirements related to consent. In LTCFs, consent or assent for vaccination should be obtained from residents (or the person appointed to make medical decisions on their behalf) and documented in the resident’s chart per standard practice.<br></br>Pharmacy partners that are administering COVID-19 vaccine at LTCFs as part of the <a href="https://www.cdc.gov/vaccines/covid-19/long-term-care/pharmacy-partnerships.html">Federal Pharmacy Partnership for Long-term Care Program</a> may require verbal, email, or written consent from recipients before vaccination. This is at the discretion of the pharmacy. LTCF administrators can request pharmacy partners obtain consent from residents’ families in advance when they are serving as medical proxies.<br></br>Pharmacy partners will also work directly with LTCFs to ensure staff and residents who receive the vaccine also receive an EUA fact sheet before vaccination. The EUA fact sheet explains the risks and benefits of the COVID-19 vaccine they are receiving and what to expect. Each LTCF resident’s medical chart must note that this information was provided to the resident. If a resident is unable to make medical decisions due to decreased mental capacity or illness, the EUA fact sheet will be provided to the person appointed to make medical decisions on their behalf (the medical proxy or power of attorney).</p>
            <p className="vaccines-subject">COVID-19 Vaccination Considerations for People Who Are Pregnant</p>
            <p className="vaccines-p">CDC and the independent Advisory Committee on Immunization Practices (ACIP) have provided information to assist pregnant people with their decision to receive the COVID-19 vaccine. People who are pregnant may choose to be vaccinated. If they have questions around getting vaccinated, a discussion with a healthcare provider might help them make an informed decision.</p>
            <p className="vaccines-subject">There are limited data about the safety of COVID-19 vaccines for people who are pregnant</p>
            <p className="vaccines-p">Currently, there are limited data available on the safety of COVID-19 vaccines for people who are pregnant. Animal developmental and reproductive toxicity (DART) studies are ongoing and studies in people who are pregnant are planned. CDC and the Food and Drug Administration (FDA) have safety monitoring systems in place to capture information about vaccination during pregnancy and will closely monitor reports.<br></br>While studies have not yet been done, based on how mRNA vaccines work, experts believe they are unlikely to pose a risk for people who are pregnant. <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mRNA.html">mRNA vaccines</a> do not contain the live virus that causes COVID-19 and therefore cannot give someone COVID-19. Additionally, mRNA vaccines do not interact with genetic material DNA because the mRNA does not enter the nucleus of the cell. Cells break apart the mRNA quickly. However, the potential risks of mRNA vaccines to the pregnant person and her fetus are unknown because these vaccines have not been studied in pregnant women.</p>
            <p className="vaccines-subject">Pregnant people are at increased risk for severe illness from COVID-19</p>
            <p className="vaccines-p">Observational data demonstrate that, while the chances for these severe health effects are infrequent, pregnant people <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/pregnancy-breastfeeding.html">with COVID-19 have an increased risk of severe illness</a>, including illness that results in ICU admission, mechanical ventilation, and death. Additionally, pregnant people with COVID-19 might be at increased risk of adverse pregnancy outcomes, such as preterm births.</p>
            <p className="vaccines-subject">Because supplies are currently limited, CDC recommends certain groups receive the first supply of COVID-19 vaccines</p>
            <p className="vaccines-p">At this time, healthcare personnel are recommended to be among the first to receive the vaccine because they are at increased risk of exposure to the virus that causes COVID-19.<br></br>Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations-process.html">how CDC is making COVID-19 vaccination recommendations</a>, including recommendations while there is a limited supply.</p>
            <p className="vaccines-subject">Getting vaccinated is a personal choice for people who are pregnant</p>
            <p className="vaccines-p">People who are pregnant and part of a group recommended to receive the COVID-19 vaccine, such as healthcare personnel, may choose to be vaccinated. A conversation between pregnant patients and their clinicians may help them decide whether to get vaccinated with a vaccine that has been authorized for use under Emergency Use Authorization (EUA). While a conversation with a clinician may be helpful, it is not required prior to vaccination.<br></br>Key considerations pregnant patients can discuss with their healthcare provider include:</p>
            <ul>
              <li className="vaccines-li">The likelihood of exposure to SARS-CoV-2, the virus that causes COVID-19</li>
              <li className="vaccines-li">Risks of COVID-19 to them and potential risks to their fetuses</li>
              <li className="vaccines-li">What is known about the vaccine: how well it works to develop protection in the body, known side effects of the vaccine, and lack of data during pregnancy</li>
            </ul>
            Pregnant patients who decide to get vaccinated should continue to follow the current guidelines to prevent the spread of COVID-19 after they are vaccinated. That means:
            <ul>
              <li className="vaccines-li">Wearing a mask</li>
              <li className="vaccines-li">Staying at least six feet away from others</li>
              <li className="vaccines-li">Avoiding crowds</li>
              <li className="vaccines-li">Washing hands with soap and water for 20 seconds or using hand sanitizer with at least 60% alcohol</li>
              <li className="vaccines-li">Following <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html">CDC travel guidance</a></li>
              <li className="vaccines-li">Following quarantine guidance after exposure to COIV-19</li>
              <li className="vaccines-li">Following any applicable workplace guidance</li>
            </ul>

            <p className="vaccines-subject">Vaccine side effects</p>
            <p className="vaccines-p">These mRNA COVID-19 vaccines are expected to produce some side effects after vaccination, especially after the second dose. Pregnant women who experience fever following vaccination may be counseled to take acetaminophen because fever has been associated with adverse pregnancy outcomes. Acetaminophen may be offered as an option for pregnant women experiencing other post-vaccination symptoms as well.</p>
            <p className="vaccines-subject">Routine testing and pregnancy</p>
            <p className="vaccines-p">Routine testing for pregnancy before COVID-19 vaccination is not recommended. Women who are trying to become pregnant do not need to avoid pregnancy after receiving an mRNA COVID-19 vaccine.</p>
            <p className="vaccines-subject">COVID-19 vaccination considerations for people who are breastfeeding</p>
            <p className="vaccines-p">There are no data on the safety of COVID-19 vaccines in lactating women or on the effects of mRNA vaccines on the breastfed infant or on milk production/excretion. mRNA vaccines are not thought to be a risk to the breastfeeding infant. People who are breastfeeding and are part of a group recommended to receive a COVID-19 vaccine, such as healthcare personnel, may choose to be vaccinated.</p>
            <p className="vaccines-subject">How CDC Is Making COVID-19 Vaccine Recommendations</p>
            <p className="vaccines-p">When the Food and Drug Administration (FDA) authorizes or approves a COVID-19 vaccine, the Advisory Committee on Immunization Practices (ACIP) will quickly hold a public meeting to review all available data about that vaccine (sign up to receive email updates whenever ACIP’s Meeting Information is updated). From these data, ACIP will then vote on whether to recommend the vaccine and, if so, who should receive it.</p>
            <ul>
              <li className="vaccines-li">On December 1, 2020, ACIP <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6949e1.htm">recommended</a> that health care personnel and residents of long-term care facilities be offered COVID-19 vaccine in the initial phase of the vaccination program.</li>
              <li className="vaccines-li">On December 11, 2020, the FDA issued an <a href="https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/pfizer-biontech-covid-19-vaccine">Emergency Use Authorization for use of the Pfizer-BioNTech COVID-19 vaccine</a> in persons aged 16 years and older for the prevention of COVID-19.</li>
              <li className="vaccines-li">On December 13, 2020, the <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6950e2.htm">ACIP issued recommendations for the use of Pfizer-BioNTech’s COVID-19 vaccine</a> for the prevention of COVID-19.</li>
              <li className="vaccines-li">On December 18, 2020, the FDA issued an <a href="https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/moderna-covid-19-vaccine">Emergency Use Authorization for the use of the Moderna COVID-19 vaccine</a> ​for use in individuals 18 years of age and older.​</li>
              <li className="vaccines-li">On December 20, 2020, <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm695152e1.htm">ACIP issued recommendations for the use of Moderna COVID-19 vaccine</a> for the prevention of COVID-19.</li>
              <li className="vaccines-li">On December 20, 2020, ACIP updated interim vaccine allocation <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm695152e2.htm">recommendations</a>.</li>
            </ul>
            <p className="vaccines-subject">COVID-19 Vaccination Recommendations to Date<br></br>December 1, 2020</p>
            <p className="vaccines-p">Vaccination in the initial phase of the COVID-19 vaccination program (Phase 1a) should be offered to both 1) healthcare personnel and 2) residents of long-term care facilities.<br></br>Healthcare personnel are defined as paid and unpaid people serving in health care settings who have the potential for direct or indirect exposure to patients or infectious materials. Long-term care facility residents are defined as adults who reside in facilities that provide a variety of services, including medical and personal care, to persons who are unable to live independently.<br></br>Read more in CDC’s <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6949e1.htm">Morbidity and Mortality Weekly Report</a> and <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations-process.html#groups-considered">clinical considerations for further sub-prioritization</a> within these groups as needed.<br></br>Since the pandemic began, ACIP has been holding special meetings to review U.S. data on COVID-19 and the vaccines in development to help prevent it. Before making recommendations, ACIP plans to review all available clinical trial information, including descriptions of
            <ul>
              <li className="vaccines-li">Who is receiving each candidate vaccine (age, race, ethnicity, underlying medical conditions)</li>
              <li className="vaccines-li">How different groups respond to the vaccine</li>
              <li className="vaccines-li">Side effects experienced</li>
              </ul></p>
            <p className="vaccines-subject">Goals for vaccination if supply is limited</p>
            <p className="vaccines-p">
            ACIP set the following goals for recommending which groups should receive COVID-19 vaccines if supply is limited:
            <ul>
              <li className="vaccines-li">Decrease death and serious disease as much as possible</li>
              <li className="vaccines-li">Preserve functioning of society</li>
              <li className="vaccines-li">Reduce the extra burden the disease is having on people already facing disparities</li>
            </ul>
            </p>
            <p className="vaccines-subject">Ethical principles</p>
            <p className="vaccines-p">
            ACIP identified four ethical principles to guide their decision-making process if supply is limited:
              <ul>
                <li className="vaccines-li"><b>Maximize benefits and minimize harms</b> — Respect and care for people using the best available data to promote public health and minimize death and severe illness.</li>
                <li className="vaccines-li"><b>Mitigate health inequities</b> — Reduce health disparities in the burden of COVID-19 disease and death, and make sure everyone has the opportunity to be as healthy as possible.</li>
                <li className="vaccines-li"><b>Promote justice</b> — Treat affected groups, populations, and communities fairly. Remove unfair, unjust, and avoidable barriers to COVID-19 vaccination.</li>
                <li className="vaccines-li"><b>Promote transparency</b> — Make a decision that is clear, understandable, and open for review. Allow and seek public participation in the creation and review of the decision processes.</li>
              </ul>
              Learn more about <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6947e3.htm">ACIP’s Ethical Principles for Allocating Initial Supplies of COVID-19 Vaccine.</a>​
            </p>
            <p className="vaccines-subject">Groups considered for early vaccination if supply is limited</p>
            <p className="vaccines-p">
            Before making an official recommendation, ACIP considered four groups to possibly recommend for early COVID-19 vaccination if supply is limited:
            <ul>
              <li className="vaccines-li">Healthcare personnel</li>
              <li className="vaccines-li">Workers in essential and critical industries</li>
              <li className="vaccines-li">People at high risk for severe COVID-19 illness due to underlying medical conditions</li>
              <li className="vaccines-li">People 65 years and older</li>
            </ul>
            <b>Healthcare personnel</b> continue to be on the front line of the nation’s fight against this deadly pandemic. By providing care to those who are or might be infected with the virus that causes COVID-19, many healthcare personnel have a high risk of being exposed to and getting sick with COVID-19. Learn more <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations/hcp.html">about the importance of vaccination for healthcare personnel</a>.<br></br><b>Workers in essential and critical industries</b> are considered part of America’s critical infrastructure, as defined by the <a href="https://www.cisa.gov/publication/guidance-essential-critical-infrastructure-workforce">Cybersecurity & Infrastructure Security Agency</a>. Current data show that many of these workers are at increased risk for getting COVID-19. Early vaccine access is critical not only to protect them but also to maintain the essential services they provide U.S. communities. <br></br><b>People with certain</b> <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html">underlying medical conditions</a> are at increased risk for severe COVID-19 illness, regardless of their age. Severe illness means that the person with COVID-19 may require hospitalization, intensive care, or a ventilator to help them breathe, or that they may even die. Early vaccine access is critical to ensuring the health and safety of this population that is disproportionately affected by COVID-19.<br></br><b>Among adults, the risk for severe illness and death from COVID-19 increases with age, with <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/older-adults.html">older adults</a> at highest risk.</b> Early vaccine access is critical to help protect this population that is disproportionately affected by COVID-19.
            </p>
            <p className="vaccines-subject">Other frameworks</p>
            <p className="vaccines-p">
            Input from the public and the following professional groups is informing ACIP’s discussions on who should receive COVID-19 vaccines if supply is limited:
            <ul>
              <li className="vaccines-li"><b>Johns Hopkins Bloomberg School of Public Health:</b> <a href="https://www.centerforhealthsecurity.org/our-work/publications/interim-framework-for-covid-19-vaccine-allocation-and-distribution-in-the-us">Interim Framework for COVID-19 Vaccine Allocation and Distribution in the United States</a></li>
              <li className="vaccines-li"><b>The National Academies of Sciences, Engineering, and Medicine:</b> <a href="https://www.nap.edu/catalog/25914/discussion-draft-of-the-preliminary-framework-for-equitable-allocation-of-covid-19-vaccine">Framework for Equitable Allocation of COVID-19 Vaccine</a></li>
              <li className="vaccines-li"><b>World Health Organization (WHO) Strategic Advisory Group of Experts (SAGE):</b> <a href="https://apps.who.int/iris/bitstream/handle/10665/334299/WHO-2019-nCoV-SAGE_Framework-Allocation_and_prioritization-2020.1-eng.pdf">WHO SAGE Values Framework for the Allocation and Prioritization of COVID-19 Vaccination</a></li>
              <li className="vaccines-li"><b>WHO SAGE:</b> <a href="https://www.who.int/docs/default-source/immunization/sage/covid/sage-prioritization-roadmap-covid19-vaccines.pdf?Status=Temp&sfvrsn=bf227443_2&ua=1">WHO SAGE Roadmap for Prioritizing Uses of COVID-19 Vaccines in the Context of Limited Supply</a></li>
            </ul>
            </p>



            <a id="what-to-expect" className="return-top" href="#vaccines-top"><br></br>Return to Top</a><br></br>
            <p className="vaccines-subject-header">What to Expect at Your Vaccine Appointment</p><br></br>
            <p className="vaccines-p">It’s important for everyone to continue using all the tools available to help stop this pandemic as we learn more about how COVID-19 vaccines work in real-world conditions. Cover your mouth and nose with a mask when around others, stay at least 6 feet away from others, avoid crowds, and wash your hands often.<br></br>
            Because COVID-19 is a new disease with new vaccines, you may have questions about what happens before, during, and after your appointment to get vaccinated. These tips will help you know what to expect when you get vaccinated, what information your provider will give you, and resources you can use to monitor your health after you are vaccinated.</p>
            <p className="vaccines-subject">Before Vaccination</p>
            <ul>
              <li className="vaccines-li">See if COVID-19 vaccination is recommended for you right now.</li>
              <li className="vaccines-li">Learn more about the <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/about-vaccines/how-they-work.html">different types of COVID-19 vaccines and how they work</a>.</li>
              <li className="vaccines-li">Learn more about the <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/about-vaccines/vaccine-benefits.html">benefits of getting a COVID-19 vaccination</a>.</li>
              <li className="vaccines-li">When you go to your appointment, remember to cover your mouth and nose with a mask when you are around others and stay at least 6 feet away from others. <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/doctor-visits-medicine.html">Learn more about protecting yourself from COVID-19 during visits to the doctor or a pharmacy</a>.</li>
            </ul>
            <p className="vaccines-subject">When You Get Vaccinated</p>
            <ul>
              <li className="vaccines-li">You should receive a vaccination card or printout that tells you what COVID-19 vaccine you received, the date you received it, and where you received it.</li>
              <li className="vaccines-li">You should receive a paper or electronic version of a fact sheet that tells you more about the specific COVID-19 vaccine you are being offered. Each authorized COVID-19 vaccine has its own fact sheet that contains information to help you understand the risks and benefits of receiving that specific vaccine.</li>
              <li className="vaccines-li">All people who get a COVID-19 vaccine should be monitored on-site. Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/allergic-reaction.html">COVID-19 vaccines and rare severe allergic reactions</a>.</li>
            </ul>
            <p className="vaccines-subject">After Vaccination</p>
            <ul>
              <li className="vaccines-li">With most COVID-19 vaccines, you will need two shots in order for them to work. Get the second shot even if you have side effects after the first one, unless a vaccination provider or your doctor tells you not to get a second shot.</li>
              <li className="vaccines-li">Ask your healthcare provider about getting started with <b>v-safe</b>, a free, smartphone-based tool that uses text messaging and web surveys to provide personalized health check-ins after you receive a COVID-19 vaccination. V-safe also reminds you to get your second dose if you need one. Learn more at <a href="http://www.cdc.gov/vsafe">www.cdc.gov/vsafe</a>.</li>
              <li className="vaccines-li">It takes time for your body to build protection after any vaccination. COVID-19 vaccines that require 2 shots may not protect you until a week or two after your second shot.</li>
            </ul>
            <p className="vaccines-subject">What to Expect after Getting a COVID-19 Vaccine</p>
            <p className="vaccines-p">COVID-19 vaccination will help protect you from getting COVID-19. You may have some side effects, which are normal signs that your body is building protection. These side effects may affect your ability to do daily activities, but they should go away in a few days.</p>
            <p className="vaccines-subject">Common side effects</p>
            <p className="vaccines-p">
            On the arm where you got the shot:
            <ul>
              <li className="vaccines-li">Pain</li>
              <li className="vaccines-li">Swelling</li>
            </ul>
            Throughout the rest of your body:
            <ul>
              <li className="vaccines-li">Fever</li>
              <li className="vaccines-li">Chills</li>
              <li className="vaccines-li">Tiredness</li>
              <li className="vaccines-li">Headache</li>
            </ul>
            </p>
            <p className="vaccines-subject">Helpful tips</p>
            <p className="vaccines-p">
            If you have pain or discomfort, talk to your doctor about taking an over-the-counter medicine, such as ibuprofen or acetaminophen.<br></br>
            To reduce pain and discomfort where you got the shot:
            <ul>
              <li className="vaccines-li">Apply a clean, cool, wet washcloth over the area.</li>
              <li className="vaccines-li">Use or exercise your arm.</li>
            </ul>
            To reduce discomfort from fever:
            <ul>
              <li className="vaccines-li">Drink plenty of fluids.</li>
              <li className="vaccines-li">Dress lightly.</li>
            </ul>
            </p>
            <p className="vaccines-subject">When to call the doctor</p>
            <p className="vaccines-p">
            In most cases, discomfort from fever or pain is normal. Contact your doctor or healthcare provider:
            <ul>
              <li className="vaccines-li">If the redness or tenderness where you got the shot increases after 24 hours</li>
              <li className="vaccines-li">If your side effects are worrying you or do not seem to be going away after a few days</li>
            </ul>
            If you get a COVID-19 vaccine and you think you might be having a severe allergic reaction after leaving the vaccination site, seek immediate medical care by calling 911. Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/allergic-reaction.html">COVID-19 vaccines and rare severe allergic reactions</a>.
            </p>
            <p className="vaccines-subject">Remember</p>
            <ul>
              <li className="vaccines-li">Side effects may feel like flu and even affect your ability to do daily activities, but they should go away in a few days.</li>
              <li className="vaccines-li">With most COVID-19 vaccines, you will need 2 shots in order for them to work. Get the second shot even if you have side effects after the first shot, unless a vaccination provider or your doctor tells you not to get a second shot.</li>
              <li className="vaccines-li">It takes time for your body to build protection after any vaccination. COVID-19 vaccines that require 2 shots may not protect you until a week or two after your second shot.</li>
            </ul>
            <p className="vaccines-p">It’s important for everyone to continue using all the tools available to help stop this pandemic as we learn more about how COVID-19 vaccines work in real-world conditions. Cover your mouth and nose with a mask when around others, stay at least 6 feet away from others, avoid crowds, and wash your hands often.</p>

            <a id="vaccination-considerations" className="return-top" href="#vaccines-top"><br></br>Return to Top</a><br></br>
            <p className="vaccines-subject-header">COVID-19 Vaccination Considerations for Persons with Underlying Medical Conditions</p><br></br>
            <p className="vaccines-p">Adults of any age with <b>certain underlying medical conditions</b> are at increased risk for severe illness from the virus that causes COVID-19. mRNA COVID-19 vaccines may be administered to people with underlying medical conditions provided they have not had <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/allergic-reaction.html">a severe allergic reaction</a> to any of the ingredients in the vaccine. The following information aims to help people in the groups listed below make an informed decision about receiving the mRNA COVID-19 vaccine.</p>
            <p className="vaccines-subject">People who have weakened immune systems</p>
            <p className="vaccines-p">
            People with HIV and those with weakened immune systems due to other illnesses  or medication <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html">might be at increased risk for severe COVID-19</a>. They may receive a COVID-19 vaccine. However, they should be aware of the limited safety data:
            <ul>
              <li className="vaccines-li">Information about the safety of mRNA COVID-19 vaccines for people who have weakened immune systems in this group is not yet available.</li>
              <li className="vaccines-li">People living with HIV were included in clinical trials, though safety data specific to this group are not yet available at this time.</li>
            </ul>
            People with weakened immune systems should also be aware of the  potential for reduced immune responses to the vaccine, as well as the need to continue following all <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">current guidance</a> to protect themselves against COVID-19 (see below).
            </p>
            <p className="vaccines-subject">People who have autoimmune conditions</p>
            <p className="vaccines-p">People with autoimmune conditions may receive an mRNA COVID-19 vaccine. However, they should be aware that no data are currently available on the safety of mRNA COVID-19 vaccines for them. Individuals from this group were eligible for enrollment in clinical trials.</p>
            <p className="vaccines-subject">People who have previously had Guillain-Barre syndrome</p>
            <p className="vaccines-p">Persons who have previously had GBS may receive an mRNA COVID-19 vaccine. To date, no cases of Guillain-Barre syndrome (GBS) have been reported following vaccination among participants in the mRNA COVID-19 vaccine clinical trials. With few exceptions, the independent Advisory Committee on Immunization Practices (ACIP) <a href="https://www.cdc.gov/vaccines/hcp/acip-recs/general-recs/index.html">general best practice guidelines for immunization</a> do not include a history of GBS as a precaution to vaccination with other vaccines.</p>
            <p className="vaccines-subject">People who have previously had Bell’s palsy</p>
            <p className="vaccines-p">Cases of Bell’s palsy were reported in participants in the mRNA COVID-19 vaccine clinical trials. However, the Food and Drug Administration (FDA) does not consider these to be above the rate expected in the general population. They have not concluded these cases were caused by vaccination. Therefore, persons who have previously had Bell’s Palsy may receive an mRNA COVID-19 vaccine.</p>
            <p className="vaccines-subject">After vaccination, current guidelines to prevent the spread of COVID-19 should be followed</p>
            <p className="vaccines-p">Until experts learn more about the protection that COVID-19 vaccines provide under real-life conditions, people who decide to get vaccinated should continue to follow all <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">current guidance</a> to protect themselves against COVID-19 after they are vaccinated. That means:
            <ul>
              <li className="vaccines-li">Wearing a mask</li>
              <li className="vaccines-li">Staying at least six feet away from others</li>
              <li className="vaccines-li">Avoiding crowds</li>
              <li className="vaccines-li">Washing hands with soap and water for 20 seconds or using hand sanitizer with at least 60% alcohol</li>
              <li className="vaccines-li">Following <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html">CDC travel guidance</a></li>
              <li className="vaccines-li">Following quarantine guidance after exposure to COVID-19</li>
              <li className="vaccines-li">Following any applicable workplace guidance</li>
            </ul>
            </p>


            <a id="vaccinated-benefits" className="return-top" href="#vaccines-top"><br></br>Return to Top</a><br></br>
            <p className="vaccines-subject-header">Benefits of Getting Vaccinated</p><br></br>
            <p className="vaccines-p">We understand that some people may be concerned about getting vaccinated now that COVID-19 vaccines are available in the United States. While more COVID-19 vaccines are being developed as quickly as possible, routine processes and procedures remain in place to <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety.html">ensure the safety</a> of any vaccine that is authorized or approved for use. Safety is a top priority, and there are many reasons to get vaccinated.<br></br>Below is a summary of the benefits of COVID-19 vaccination based on what we currently know. CDC will continue to update this page as more data become available.</p>
            <p className="vaccines-subject">COVID-19 vaccination will help keep you from getting COVID-19</p>
            <ul>
              <li className="vaccines-li">All COVID-19 vaccines currently available in the United States have been shown to be highly effective at preventing COVID-19. <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines.html">Learn more about the different COVID-19 vaccines</a>.</li>
              <li className="vaccines-li">All COVID-19 vaccines that are in development are being carefully evaluated in clinical trials and will be authorized or approved only if they make it substantially less likely you’ll get COVID-19. <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/effectiveness.html">Learn more about how federal partners are ensuring COVID-19 vaccines work</a>.</li>
              <li className="vaccines-li">Based on what we know about vaccines for other diseases and early data from clinical trials, experts believe that getting a COVID-19 vaccine may also help keep you from getting seriously ill even if you do get COVID-19.</li>
              <li className="vaccines-li">Getting vaccinated yourself may also protect people around you, <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/index.html">particularly people at increased risk for severe illness from COVID-19</a>.</li>
              <li className="vaccines-li">Experts continue to conduct more studies about the effect of COVID-19 vaccination on severity of illness from COVID-19, as well as its ability to keep people from spreading the virus that causes COVID-19.</li>
            </ul>
            <p className="vaccines-subject">COVID-19 vaccination is a safer way to help build protection</p>
            <ul>
              <li className="vaccines-li">COVID-19 can have <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">serious, life-threatening complications</a>, and there is no way to know how COVID-19 will affect you. And if you get sick, you could spread the disease to friends, family, and others around you.</li>
              <li className="vaccines-li">Clinical trials of all vaccines must first show they are safe and effective before any vaccine can be authorized or approved for use, including COVID-19 vaccines. The known and potential benefits of a COVID-19 vaccine must outweigh the known and potential risks of the vaccine for use under what is known as an Emergency Use Authorization (EUA). <a href="https://www.youtube.com/watch?v=iGkwaESsGBQ">Watch a video on what an EUA is</a>.</li>
              <li className="vaccines-li">Getting COVID-19 may offer some natural protection, known as immunity. But experts don’t know how long this protection lasts, and the risk of severe illness and death from COVID-19 far outweighs any benefits of natural immunity. COVID-19 vaccination will help protect you by creating an antibody (immune system) response without having to experience sickness.</li>
              <li className="vaccines-li">Both natural immunity and immunity produced by a vaccine are important parts of COVID-19 disease that experts are trying to learn more about, and CDC will keep the public informed as new evidence becomes available.</li>
            </ul>
            <p className="vaccines-subject">COVID-19 vaccination will be an important tool to help stop the pandemic</p>
            <ul>
              <li className="vaccines-li">Wearing masks and social distancing help reduce your chance of being exposed to the virus or spreading it to others, but these measures are not enough. Vaccines will work with your immune system so it will be ready to fight the virus if you are exposed.</li>
              <li className="vaccines-li">The combination of getting vaccinated and following CDC’s recommendations <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">to protect yourself and others</a> will offer the best protection from COVID-19.</li>
              <li className="vaccines-li">Stopping a pandemic requires using all the tools we have available. As experts learn more about how COVID-19 vaccination may help reduce spread of the disease in communities, CDC will continue to update the recommendations to protect communities using the latest science.</li>
            </ul>
            <p className="vaccines-subject">Facts about COVID-19 Vaccines</p>
            <p className="vaccines-p">Now that there are authorized and recommended COVID-19 vaccines in the United States, accurate vaccine information is critical.</p>
            <p className="vaccines-subject">FACT: COVID-19 vaccines will not give you COVID-19</p>
            <p className="vaccnies-p">None of the <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines.html">COVID-19 vaccines currently in development or in use in the United States</a>, contain the live virus that causes COVID-19. There are several different types of vaccines in development. However, the goal for each of them is to teach our immune systems how to recognize and fight the virus that causes COVID-19. Sometimes this process can cause symptoms, such as fever. These symptoms are normal and are a sign that the body is building immunity. <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/about-vaccines/how-they-work.html">Learn more about how COVID-19 vaccines work</a>.<br></br>It typically takes a few weeks for the body to build immunity after vaccination. That means it’s possible a person could be infected with the virus that causes COVID-19 just before or just after vaccination and get sick. This is because the vaccine has not had enough time to provide protection.</p>
            <p className="vaccines-subject">FACT: COVID-19 vaccines will not cause you to test positive on COVID-19 viral tests</p>
            <p className="vaccnies-p">Neither the recently authorized and recommended vaccines nor the other COVID-19 vaccines currently in clinical trials in the United States cause you to test positive on <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/diagnostic-testing.html">viral tests</a>, which are used to see if you have a <b>current infection</b>.​If your body develops an immune response, which is the goal of vaccination, there is a possibility you may test positive on some <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/serology-overview.html">antibody tests</a>. Antibody tests indicate you had a <b>previous infection</b> and that you may have some level of protection against the virus. Experts are currently looking at how COVID-19 vaccination may affect antibody testing results.</p>
            <p className="vaccines-subject">FACT: People who have gotten sick with COVID-19 may still benefit from getting vaccinated</p>
            <p className="vaccnies-p">Due to the severe health risks associated with COVID-19 and the fact that re-infection with COVID-19 is possible, people may be advised to get a COVID-19 vaccine even if they have been sick with COVID-19 before.<br></br>At this time, experts do not know how long someone is protected from getting sick again after recovering from COVID-19. The immunity someone gains from having an infection, called natural immunity, varies from person to person. Some early evidence suggests natural immunity may not last very long.<br></br>We won’t know how long immunity produced by vaccination lasts until we have a vaccine and more data on how well it works.<br></br>Both natural immunity and vaccine-induced immunity are important aspects of COVID-19 that experts are trying to learn more about, and CDC will keep the public informed as new evidence becomes available.</p>
            <p className="vaccines-subject">FACT: Getting vaccinated can help prevent getting sick with COVID-19</p>
            <p className="vaccnies-p">While many people with COVID-19 have only a mild illness, others may get a <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">severe illness</a> or they may even die. There is no way to know how COVID-19 will affect you, even if you are not at <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/index.html">increased risk of severe complications</a>. If you get sick, you also may spread the disease to friends, family, and others around you while you are sick. COVID-19 vaccination helps protect you by creating an antibody response without having to experience sickness. Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/about-vaccines/how-they-work.html">how COVID-19 vaccines work</a>.</p>
            <p className="vaccines-subject">FACT: Receiving an mRNA vaccine will not alter your DNA</p>
            <p className="vaccnies-p">mRNA stands for messenger ribonucleic acid and can most easily be described as instructions for how to make a protein or even just a piece of a protein. mRNA is not able to alter or modify a person’s genetic makeup (DNA). The mRNA from a COVID-19 vaccine never enter the nucleus of the cell, which is where our DNA are kept. This means the mRNA does not affect or interact with our DNA in any way. Instead, COVID-19 vaccines that use mRNA work with the body’s natural defenses to safely develop protection (immunity) to disease. Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html">how COVID-19 mRNA vaccines work</a>.</p>
            <p className="vaccines-subject">How do I know which sources of COVID-19 vaccine information are accurate?</p>
            <p className="vaccines-p">It can be difficult to know which sources of information you can trust. Learn more about <a href="https://www.cdc.gov/vaccines/vac-gen/evalwebs.htm">finding credible vaccine information</a>.</p>


            <a id="different-vaccines" className="return-top" href="#vaccines-top"><br></br>Return to Top</a><br></br>
            <p className="vaccines-subject-header">Different Vaccines</p><br></br>
            <p className="vaccines-subject">Vaccine Types</p>
            <p className="vaccines-p"><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/about-vaccines/how-they-work.html">Understanding How COVID-19 Vaccines Work</a> <br></br>This web page explains how the body fights infection and how COVID-19 vaccines protect people by producing immunity. It also describes the different types of COVID-19 vaccines that currently are available or are undergoing large-scale (Phase 3) clinical trials in the United States.<br></br><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html">Understanding COVID-19 mRNA Vaccines</a><br></br>This fact sheet provides information about mRNA vaccines generally and about COVID-19 vaccines that use this new technology specifically.</p>
            <p className="vaccines-subject">Authorized and Recommended Vaccines</p>
            <p className="vaccines-p">As COVID-19 vaccines are authorized and then recommended for use in the United States, it will be important to understand what is known about each vaccine. CDC will provide information on who is and is not recommended to receive each vaccine and what to expect after vaccination, as well as ingredients, safety, and effectiveness.
<br></br>Currently, two vaccines are authorized and recommended to prevent COVID-19:
            <ul>
              <li className="vaccines-li">​​​​<a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/Pfizer-BioNTech.html">Pfizer-BioNTech COVID-19 vaccine</a></li>
              <li className="vaccines-li"><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/Moderna.html">Moderna’s COVID-19 vaccine</a></li>
            </ul>
            </p>
            <p className="vaccines-subject">Vaccines in Phase 3 Clinical Trials</p>
            <p className="vaccines-p">As of December 28, 2020, large-scale (Phase 3) clinical trials are in progress or being planned for three COVID-19 vaccines in the United States:
              <ul>
                <li className="vaccines-li">AstraZeneca’s COVID-19 vaccine</li>
                <li className="vaccines-li">Janssen’s COVID-19 vaccine</li>
                <li className="vaccines-li">Novavax’s COVID-19 vaccine</li>
              </ul>
              Learn more about U.S. COVID-19 vaccine clinical trials, including vaccines in earlier stages of development, by visiting <a href="http://www.clinicaltrials.gov/">clinicaltrials.gov</a>            </p>
            <p className="vaccines-subject">The Immune System—The Body’s Defense Against Infection</p>
            <p className="vaccines-p">To understand how COVID-19 vaccines work, it helps to first look at how our bodies fight illness. When germs, such as the virus that causes COVID-19, invade our bodies, they attack and multiply. This invasion, called an infection, is what causes illness. Our immune system uses several tools to fight infection. Blood contains red cells, which carry oxygen to tissues and organs, and white or immune cells, which fight infection. Different types of white blood cells fight infection in different ways:
            <ul>
              <li className="vaccines-li"><b>Macrophages</b> are white blood cells that swallow up and digest germs and dead or dying cells. The macrophages leave behind parts of the invading germs called antigens. The body identifies antigens as dangerous and stimulates antibodies to attack them.</li>
              <li className="vaccines-li"><b>B-lymphocytes</b> are defensive white blood cells. They produce antibodies that attack the pieces of the virus left behind by the macrophages.</li>
              <li className="vaccines-li"><b>T-lymphocytes</b> are another type of defensive white blood cell. They attack cells in the body that have already been infected.</li>
              </ul>
              <br></br>The first time a person is infected with the virus that causes COVID-19, it can take several days or weeks for their body to make and use all the germ-fighting tools needed to get over the infection. After the infection, the person’s immune system remembers what it learned about how to protect the body against that disease.<br></br>The body keeps a few T-lymphocytes, called memory cells, that go into action quickly if the body encounters the same virus again. When the familiar antigens are detected, B-lymphocytes produce antibodies to attack them. Experts are still learning how long these memory cells protect a person against the virus that causes COVID-19.
              </p>
            <p className="vaccines-subject">How COVID-19 Vaccines Work</p>
            <p className="vaccines-p">COVID-19 vaccines help our bodies develop immunity to the virus that causes COVID-19 without us having to get the illness. Different types of vaccines work in different ways to offer protection, but with all types of vaccines, the body is left with a supply of “memory” T-lymphocytes as well as B-lymphocytes that will remember how to fight that virus in the future.<br></br>It typically takes a few weeks for the body to produce T-lymphocytes and B-lymphocytes after vaccination. Therefore, it is possible that a person could be infected with the virus that causes COVID-19 just before or just after vaccination and then get sick because the vaccine did not have enough time to provide protection.<br></br>Sometimes after vaccination, the process of building immunity can cause symptoms, such as fever. These symptoms are normal and are a sign that the body is building immunity.</p>
            <p className="vaccines-subject">Types of Vaccines</p>
            <p className="vaccines-p">Currently, there are three main types of COVID-19 vaccines that are or soon will be undergoing large-scale (Phase 3) clinical trials in the United States. Below is a description of how each type of vaccine prompts our bodies to recognize and protect us from the virus that causes COVID-19. None of these vaccines can give you COVID-19.
            <ul>
              <li className="vaccines-li"><b><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mRNA.html">mRNA vaccines</a></b> contain material from the virus that causes COVID-19 that gives our cells instructions for how to make a harmless protein that is unique to the virus. After our cells make copies of the protein, they destroy the genetic material from the vaccine. Our bodies recognize that the protein should not be there and build T-lymphocytes and B-lymphocytes that will remember how to fight the virus that causes COVID-19 if we are infected in the future.</li>
              <li className="vaccines-li"><b>Protein subunit vaccines</b> include harmless pieces (proteins) of the virus that cause COVID-19 instead of the entire germ. Once vaccinated, our immune system recognizes that the proteins don’t belong in the body and begins making T-lymphocytes and antibodies. If we are ever infected in the future, memory cells will recognize and fight the virus.</li>
              <li className="vaccines-li"><b>Vector vaccines</b> contain a weakened version of a live virus—a different virus than the one that causes COVID-19—that has genetic material from the virus that causes COVID-19 inserted in it (this is called a viral vector). Once the viral vector is inside our cells, the genetic material gives cells instructions to make a protein that is unique to the virus that causes COVID-19. Using these instructions, our cells make copies of the protein. This prompts our bodies to build T-lymphocytes and B-lymphocytes that will remember how to fight that virus if we are infected in the future.</li>
            </ul>
            </p>
            <p className="vaccines-subject">Most COVID-19 Vaccines Require More Than One Shot</p>
            <p className="vaccines-p">All but one of the COVID-19 vaccines that are currently in Phase 3 clinical trials in the United States use two shots. The first shot starts building protection. A second shot a few weeks later is needed to get the most protection the vaccine has to offer. One vaccine in Phase 3 clinical trials only needs one shot.</p>
            <p className="vaccines-subject">The Bottom Line</p>
            <p className="vaccines-p">Getting vaccinated is one of many steps you can take to protect yourself and others from COVID-19.  Protection from COVID-19 is critically important because for some people, it can cause severe illness or death.Stopping a pandemic requires using all the tools available. Vaccines work with your immune system so your body will be ready to fight the virus if you are exposed. Other steps, like masks and social distancing, help reduce your chance of being exposed to the virus or spreading it to others. Together, COVID-19 vaccination and following CDC’s recommendations <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">to protect yourself and others</a> will offer the best protection from COVID-19.</p>
            <p className="vaccines-subject">Understanding mRNA COVID-19 Vaccines</p>
            <p className="vaccines-p">Messenger RNA vaccines—also called mRNA vaccines—are some of the first COVID-19 vaccines authorized for use in the United States.</p>
            <p className="vaccines-subject">New Approach to Vaccines</p>
            <p className="vaccines-p">mRNA vaccines are a new type of vaccine to protect against infectious diseases. To trigger an immune response, many vaccines put a weakened or inactivated germ into our bodies. Not mRNA vaccines. Instead, they teach our cells how to make a protein—or even just a piece of a protein—that triggers an immune response inside our bodies. That immune response, which produces antibodies, is what protects us from getting infected if the real virus enters our bodies.</p>
            <p className="vaccines-subject">A Closer Look at How COVID-19 mRNA Vaccines Work</p>
            <p className="vaccines-p">COVID-19 mRNA vaccines give instructions for our cells to make <b>a harmless piece</b> of what is called the “spike protein.” The spike protein is found on the surface of the virus that causes COVID-19.<br></br>COVID-19 mRNA vaccines are given in the upper arm muscle. Once the instructions (mRNA) are inside the immune cells, the cells use them to make the protein piece. After the protein piece is made, the cell breaks down the instructions and gets rid of them.<br></br>Next, the cell displays the protein piece on its surface. Our immune systems recognize that the protein doesn’t belong there and begin building an immune response and making antibodies, like what happens in natural infection against COVID-19.<br></br>At the end of the process, our bodies have learned how to protect against future infection. The benefit of mRNA vaccines, like all vaccines, is those vaccinated gain this protection without ever having to risk the serious consequences of getting sick with COVID-19.</p>
            <p className="vaccines-subject">COVID-19 mRNA Vaccines Will Be Rigorously Evaluated for Safety</p>
            <p className="vaccines-p">mRNA vaccines have been held to the same <a href="https://www.fda.gov/media/139638/download">rigorous safety and effectiveness standards</a> as all other types of vaccines in the United States. The only COVID-19 vaccines the Food and Drug Administration (FDA) will make available for use in the United States (by approval or emergency use authorization) are those that meet these standards.</p>
            <p className="vaccines-subject">mRNA Vaccines Are New, But Not Unknown</p>
            <p className="vaccines-p">Researchers have been studying and working with mRNA vaccines for decades. Interest has grown in these vaccines because they can be developed in a laboratory using readily available materials. This means the process can be standardized and scaled up, making vaccine development faster than traditional methods of making vaccines.<br></br>mRNA vaccines have been studied before for flu, Zika, rabies, and cytomegalovirus (CMV). As soon as the necessary information about the virus that causes COVID-19 was available, scientists began designing the mRNA instructions for cells to build the unique spike protein into an mRNA vaccine.<br></br>Future mRNA vaccine technology may allow for one vaccine to provide protection for multiple diseases, thus decreasing the number of shots needed for protection against common vaccine-preventable diseases.<br></br>Beyond vaccines, cancer research has used mRNA to trigger the immune system to target specific cancer cells.</p>
            <p className="vaccines-subject">Information about the Pfizer-BioNTech COVID-19 Vaccine</p>
            <p className="vaccines-p"><b>General information</b>
            <br></br><b>Name:</b> BNT162b2

            <br></br><b>Manufacturer:</b> Pfizer, Inc., and BioNTech

            <br></br><b>Type of vaccine:</b> mRNA

            <br></br><b>Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/about-vaccines/how-they-work.html">how COVID-19 vaccines work</a> and get a better <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html">understanding of COVID-19 mRNA vaccines</a>.

            <br></br><b>Number of shots:</b> 2 shots, 21 days apart

            <br></br><b>How given:</b> Shot in the muscle of the upper arm

            <br></br><b></b>Does not contain:</b>
            <ul>
              <li className="vaccines-li">Eggs</li>
              <li className="vaccines-li">Preservatives</li>
              <li className="vaccines-li">Latex</li>
            </ul>
            <a href="https://www.fda.gov/media/144414/download">For a full list of ingredients, see Pfizer’s COVID-19 Vaccine Fact Sheet for Recipients and Caregivers</a>
           <br></br> <b>Who should get vaccinated</b>
           <ul>
             <li className="vaccines-li">The Pfizer-BioNTech vaccine is recommended for people aged 16 years and older. Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations-process.html">how CDC is making COVID-19 vaccine recommendations</a> and <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations.html">who should be vaccinated first when supplies are limited</a>.</li>
           </ul>
           <br></br> <b>Who should not get vaccinated</b>
           <ul>
             <li className="vaccines-li">If you have had a severe allergic reaction—also known as anaphylaxis—to any ingredient in the Pfizer-BioNTech vaccine, you should not get vaccinated.* Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/allergic-reaction.html">COVID-19 vaccines and rare severe allergic reactions</a>.</li>
           </ul>
            *If you have had a severe allergic reaction to other vaccines or injectable therapies, ask your doctor if you should get the Pfizer-BioNTech vaccine. Your doctor will help you decide if it is safe for you to get the Pfizer-BioNTech vaccine.
            
            </p>
            <p className="vaccines-subject">Side effects and safety information</p>
            <p className="vaccines-p">
              <b>Most common side effects</b>
              <br></br>
              In the arm where you got the shot:
              <ul>
                <li className="vaccines-li">Pain</li>
                <li className="vaccines-li">Swelling</li>
                <li className="vaccines-li">Redness</li>
              </ul>
              <br></br>
              Throughout the rest of your body:
              <ul>
                <li className="vaccines-li">Chills</li>
                <li className="vaccines-li">Tiredness</li>
                <li className="vaccines-li">Headache</li>
              </ul>
              These side effects usually start within a day or two of getting the vaccine. They might feel like flu symptoms and might even affect your ability to do daily activities, but they should go away in a few days. <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect/after.html">Get tips on what to expect after getting vaccinated</a>.
              <b>Summary of safety data</b>
              <ul>
                <li className="vaccines-li"><a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6950e2.htm?s_cid=mm6950e2_w">In clinical trials</a>, reactogenicity symptoms (side effects that happen within 7 days of getting vaccinated) were common but were mostly mild to moderate.</li>
                <li className="vaccines-li">Side effects (such as fever, chills, tiredness, and headache) throughout the body were more common after the second dose of the vaccine.</li>
                <li className="vaccines-li">Most side effects were mild to moderate. However, a small number of people had severe side effects—defined as side effects affecting a person’s ability to do daily activities.</li>
                <li className="vaccines-li">Although few people in the clinical trials went to the hospital or died, data suggest that people who got the Pfizer-BioNTech vaccine were less likely to have these more serious outcomes compared to people who got the saline placebo.</li>
                <li className="vaccines-li">CDC will continue to provide updates as we learn more about the safety of the Pfizer-BioNTech vaccine in real-world conditions. <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety.html">Learn more about vaccine safety monitoring after a vaccine is authorized or approved for use</a>.</li>
              </ul>
              <a href="https://www.cdc.gov/vaccines/covid-19/info-by-manufacturer/pfizer/reactogenicity.html">Learn more about safety and reactogenicity data from the clinical trials</a>.
            </p>
            <p className="vaccines-subject">Information on how well the vaccine works</p>
            <ul>
              <li className="vaccines-li">Based on <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6950e2.htm?s_cid=mm6950e2_w">evidence from clinical trials</a>, the Pfizer-BioNTech vaccine was 95% effective at preventing laboratory-confirmed COVID-19 illness in people without evidence of previous infection.</li>
              <li className="vaccines-li">CDC will continue to provide updates as we learn more about how well the Pfizer-BioNTech vaccine works in real-world conditions.</li>
            </ul>
            <p className="vaccines-subject">Demographic information from clinical trials</p>
            <p className="vaccines-p">
            Phase 2 and 3 clinical trials for the Pfizer-BioNTech vaccine included people from the following racial and ethnic categories:
            <ul>
              <li className="vaccines-li">81.9% White</li>
              <li className="vaccines-li">26.2% Hispanic/Latino</li>
              <li className="vaccines-li">9.8% African American</li>
              <li className="vaccines-li">4.4% Asian</li>
              <li className="vaccines-li">&#60;3% other races/ethnicities</li>
            </ul>
            Age and sex breakdown:
            <ul>
              <li className="vaccines-li">50.6% male</li>
              <li className="vaccines-li">49.4% female</li>
              <li className="vaccines-li">21.4% 65 years and older</li>
            </ul>
            The most frequent underlying medical conditions were obesity (35.1%), diabetes (8.4%), and pulmonary disease (7.8%).<br></br>
            <a href="https://www.fda.gov/media/144245/download">Learn more about demographic information for people who participated in the trials</a>
            </p>

            <p className="vaccines-subject">Information about the Moderna COVID-19 Vaccine</p>
            <p className="vaccines-p">
            <b>General information</b>
            <br></br><b>Name:</b> mRNA-1273
            <br></br><b>Manufacturer:</b> ModernaTX, Inc.
            <br></br><b>Type of vaccine:</b> mRNA
            <br></br>Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/about-vaccines/how-they-work.html">how COVID-19 vaccines work</a> and get a better <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html">understanding of COVID-19 mRNA vaccines</a>.
            <br></br><b>Number of shots:</b> 2 shots, one month (28 days) apart
            <br></br><b>How given:</b> Shot in the muscle of the upper arm
            <br></br><b>Does not contain:</b>
            <ul>
              <li className="vaccines-li">Eggs</li>
              <li className="vaccines-li">Preservatives</li>
              <li className="vaccines-li">Latex</li>
            </ul>
            <a href="https://www.fda.gov/media/144638/download">For a full list of ingredients, see Moderna’s COVID-19 Vaccine Fact Sheet for Recipients and Caregivers</a>
            <b>Who should get vaccinated</b>
            <ul>
              <li className="vaccines-li">The Moderna vaccine is recommended for people aged 18 years and older. Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations-process.html">how CDC is making COVID-19 vaccine recommendations</a> and <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations.html">who should be vaccinated first when supplies are limited</a>.</li>
            </ul>
            <b>Who should not get vaccinated</b>
            <ul>
              <li className="vaccines-li">If you have had a severe allergic reaction—also known as anaphylaxis—to any ingredient in the Moderna vaccine, you should not get vaccinated.* Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/allergic-reaction.html">COVID-19 vaccines and rare severe allergic reactions</a>.</li>
            </ul>
            *If you have had a severe allergic reaction to other vaccines or injectable therapies, ask your doctor if you should get the Moderna vaccine. Your doctor will help you decide if it is safe for you to get the Moderna vaccine.
            </p>
            <p className="vaccines-subject">Side effects and safety information</p>
            <p className="vaccines-p">
              <b>Most common side effects</b><br></br>
              In the arm where you got the shot:
              <ul>
                <li className="vaccines-li">Pain</li>
                <li className="vaccines-li">Swelling</li>
                <li className="vaccines-li">Redness</li>
              </ul>
              Throughout the rest of your body:
              <ul>
                <li className="vaccines-li">Chills</li>
                <li className="vaccines-li">Tiredness</li>
                <li className="vaccines-li">Headache</li>
              </ul>
              These side effects usually start within a day or two of getting the vaccine. They might feel like flu symptoms and might even affect your ability to do daily activities, but they should go away in a few days. <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect/after.html">Get tips on what to expect after getting vaccinated</a>.<br></br>
              <b>Summary of safety data</b>
              <ul>
                <li className="vaccines-li">In clinical trials, reactogenicity symptoms (side effects that happen within 7 days of getting vaccinated) were common but were mostly mild to moderate.</li>
                <li className="vaccines-li">Side effects (such as fever, chills, tiredness, and headache) throughout the body were more common after the second dose of the vaccine.</li>
                <li className="vaccines-li">Most side effects were mild to moderate. However, a small number of people had severe side effects that affected their ability to do daily activities.</li>
                <li className="vaccines-li">CDC will continue to provide updates as we learn more about the safety of the Moderna vaccine in real-world conditions. <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety.html">Learn more about vaccine safety monitoring after a vaccine is authorized or approved for use</a>.</li>
              </ul>
              <a href="https://www.cdc.gov/vaccines/covid-19/info-by-product/moderna/reactogenicity.html">Learn more about safety and reactogenicity data from the clinical trials</a>.
            </p>
            <p className="vaccines-subject">Information on how well the vaccine works</p>
            <ul>
              <li className="vaccines-li">Based on <a href="https://www.cdc.gov/mmwr/volumes/69/wr/mm695152e1.htm?s_cid=mm695152e1_w">evidence from clinical trials</a>, the Moderna vaccine was 94.1% effective at preventing laboratory-confirmed COVID-19 illness in people who received two doses who had no evidence of being previously infected.</li>
              <li className="vaccines-li">The vaccine appeared to have high effectiveness in clinical trials (efficacy) among people of diverse age, sex, race, and ethnicity categories and among persons with underlying medical conditions.</li>
              <li className="vaccines-li">Although few people in the clinical trials were admitted to the hospital, this happened less often in the people who got the Moderna vaccine compared to people who got the saline placebo.</li>
              <li className="vaccines-li">CDC will continue to provide updates as we learn more about how well the Moderna vaccine works in real-world conditions.</li>
            </ul>
            <p className="vaccines-subject">Demographic information from clinical trials</p>
            <p className="vaccines-p">
            Clinical trials for the Moderna vaccine included people from the following racial and ethnic categories:
            <ul>
              <li className="vaccines-li">79.4% White</li>
              <li className="vaccines-li">20% Hispanic/Latino</li>
              <li className="vaccines-li">9.7% African American</li>
              <li className="vaccines-li">4.7% Asian</li>
              <li className="vaccines-li">&#60;3% other races/ethnicities</li>
            </ul>
            Age and sex breakdown:
            <ul>
              <li className="vaccines-li">52.6% male</li>
              <li className="vaccines-li">47.4% female</li>
              <li className="vaccines-li">25.3% 65 years and older</li>
            </ul>
            Most people who participated in the trials (82%) were considered to have an occupational risk of exposure, with 25.4% of them being healthcare workers.<br></br>Among people who participated in the clinical trials, 22.3% had at least one high-risk condition, which included lung disease, heart disease, obesity, diabetes, liver disease, or HIV infection. Four percent (4%) of participants had two or more high-risk conditions.<br></br><a href="https://www.fda.gov/media/144434/download">Learn more about demographic information for people who participated in the trials</a>.
            </p>

            <a id="vaccine-safety" className="return-top" href="#vaccines-top"><br></br>Return to Top</a><br></br>
            <p className="vaccines-subject-header">Ensuring the Safety of Vaccines</p><br></br>
            <p className="vaccines-p">The U.S. vaccine safety system ensures that all vaccines are as safe as possible. Safety is a top priority while federal partners work to make this and other COVID-19 vaccines available.</p>
            <p className="vaccines-subject">Safety of COVID-19 Vaccines</p>
            <p className="vaccines-p">The U.S. Food and Drug Administration (FDA) has granted Emergency Use Authorizations (EUA) for two COVID-19 vaccines which have been shown to be safe and effective as determined by data from the <a href="https://www.cdc.gov/vaccines/covid-19/info-by-product/index.html">manufacturers</a> and findings from large clinical trials. These data demonstrate that the known and potential benefits of this vaccine outweigh the known and potential harms of becoming infected with the coronavirus disease 2019 (COVID 19).</p>
            <p className="vaccines-subject">Clinical Trials</p>
            <p className="vaccines-p">Clinical trials are being conducted to evaluate additional COVID-19 vaccines in many thousands of study participants. These trials will generate scientific data and other information that will be used by FDA to determine vaccine safety and effectiveness. Clinical trials on all COVID-19 vaccine candidates are being conducted according to the rigorous standards set forth by FDA in their June 2020 guidance document, <a href="https://www.fda.gov/media/139638/download">Development and Licensure of Vaccines to Prevent COVID-19</a>. If FDA determines that a vaccine meets its safety and effectiveness standards, it can make these vaccines available for use in the United States by approval or through an EUA.<br></br>After FDA determines that a COVID-19 vaccine candidate is safe and effective, the Advisory Committee on Immunization Practices (ACIP), a committee comprising medical and public health experts, reviews available data before making vaccine recommendations to CDC. Learn more about how <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations-process.html">CDC is making COVID-19 vaccine recommendations</a>.</p>
            <p className="vaccines-subject">Vaccine Safety Monitoring</p>
            <p className="vaccines-p">After a vaccine is authorized or approved for use, many vaccine safety monitoring systems watch for adverse events (possible side effects). This continued monitoring can pick up on adverse events that may not have been seen in clinical trials. If an unexpected adverse event is seen, experts quickly study it further to assess whether it is a true safety concern. Experts then decide whether changes are needed in U.S. vaccine recommendations. This monitoring is critical to help ensure that the benefits continue to outweigh the risks for people who receive vaccines.<br></br>FDA’s June 2020 guidance document also includes important recommendations for ongoing safety evaluation after any COVID-19 vaccine is made available in the United States.<br></br><b>CDC has expanded safety surveillance</b> through new systems and additional information sources, as well as by scaling up existing safety monitoring systems.</p>
            <p className="vaccines-subject">Expanded Safety Monitoring Systems</p>
            <p className="vaccines-p">The following systems and information sources add an additional layer of safety monitoring, giving CDC and FDA the ability to evaluate COVID-19 vaccine safety in real time and make sure COVID-19 vaccines are as safe as possible:
            <ul>
              <li className="vaccines-li"><b>CDC: <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/vsafe.html">V-safe</a></b> — A new smartphone-based, after-vaccination health checker for people who receive COVID-19 vaccines. <b>V-safe</b> uses text messaging and web surveys from CDC to check in with vaccine recipients following COVID-19 vaccination. V-safe also provides second vaccine dose reminders if needed, and telephone follow up to anyone who reports medically significant (important) adverse events.</li>
              <li className="vaccines-li"><b>CDC: <a href="https://www.cdc.gov/nhsn/index.html">National Healthcare Safety Network (NHSN)</a></b> — An acute and long-term care facility monitoring system with reporting to the Vaccine Adverse Event Reporting System or VAERS that will allow for determination of COVID-19 vaccine adverse event reporting rates.</li>
              <li className="vaccines-li"><b>FDA: Other large insurer/payer databases</b> — A system of administrative and claims-based data for surveillance and research.</li>
            </ul>
            </p>
            <p className="vaccines-subject">Existing Safety Monitoring Systems</p>
            <p className="vaccines-p">
            As people get vaccinated, CDC, FDA, and other federal partners will use the following existing, robust systems and data sources to conduct ongoing safety monitoring:<br></br>
            <b>General public</b>
            <ul>
              <li className="vaccines-li"><b>CDC and FDA: <a href="https://vaers.hhs.gov/index.html">Vaccine Adverse Event Reporting System (VAERS)</a></b> — The national system that collects reports from healthcare professionals, vaccine manufacturers, and the public of adverse events that happen after vaccination; reports of adverse events that are unexpected, appear to happen more often than expected, or have unusual patterns are followed up with specific studies</li>
              <li className="vaccines-li"><b>CDC: <a href="https://www.cdc.gov/vaccinesafety/ensuringsafety/monitoring/vsd/index.html">Vaccine Safety Datalink (VSD)</a></b> — A network of nine integrated healthcare organizations across the United States that conducts active surveillance and research; the system is also used to help determine whether possible side effects identified using VAERS are actually related to vaccination</li>
              <li className="vaccines-li"><b>CDC: <a href="https://www.cdc.gov/vaccinesafety/ensuringsafety/monitoring/cisa/index.html">Clinical Immunization Safety Assessment (CISA) Project</a></b> — A collaboration between CDC and 7 medical research centers to provide expert consultation on individual cases and conduct clinical research studies about vaccine safety</li>
              <li className="vaccines-li"><b>FDA and the Centers for Medicare and Medicaid Services: Medicare data</b> — A claims-based system for active surveillance and research</li>
              <li className="vaccines-li"><b>FDA: <a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/cber-biologics-effectiveness-and-safety-best-system">Biologics Effectiveness and Safety System (BEST)</a></b> — A system of electronic health record, administrative, and claims-based data for active surveillance and research</li>
              <li className="vaccines-li"><b>FDA: <a href="https://www.fda.gov/safety/fdas-sentinel-initiative">Sentinel Initiative</a></b> — A system of electronic health record, administrative, and claims-based data for active surveillance and research</li>
            </ul>
            <b>Members of the military</b>
            <ul>
              <li className="vaccines-li"><b>Department of Defense (DOD): <a href="https://www.health.mil/Military-Health-Topics/Health-Readiness/Immunization-Healthcare/Vaccine-Safety-Adverse-Events/Reporting-Vaccine-Health-Problems/VAERS-Information">DOD VAERS data</a></b> — Adverse event reporting to VAERS for the DOD populations</li>
              <li className="vaccines-li"><b>DOD: <a href="https://www.health.mil/Military-Health-Topics/Health-Readiness/Immunization-Healthcare/Vaccine-Safety-Adverse-Events/Reporting-Vaccine-Health-Problems">Vaccine Adverse Event Clinical System (VAECS)</a></b> — A system for case tracking and evaluation of adverse events following immunization in DOD and DOD-affiliated populations</li>
              <li className="vaccines-li"><b>DOD: DOD Electronic Health Record and <a href="https://www.health.mil/Military-Health-Topics/Combat-Support/Armed-Forces-Health-Surveillance-Branch/Data-Management-and-Technical-Support/Defense-Medical-Surveillance-System">Defense Medical Surveillance System</a></b> — A system of electronic health record and administrative data for active surveillance and research</li>
            </ul>
            <b></b>
            <ul>
              <li className="vaccines-li"><b>Department of Veterans Affairs (VA): <a href="https://www.va.gov/MS/Professionals/medications/VHA_Adverse_Drug_Event_Reporting_Program.asp">VA Adverse Drug Event Reporting System (VA ADERS)</a></b> — A national reporting system for adverse events following receipt of drugs and immunizations</li>
              <li className="vaccines-li"><b>VA Electronic Health Record and Active Surveillance System</b> — A system of electronic health record and administrative data for active surveillance and research</li>
            </ul>
            <b></b>
            <ul>
              <li className="vaccines-li"><b>Indian Health Service (IHS): <a href="https://www.ihs.gov/nptc/pharmacovigilance/">IHS VAERS data</a></b> — Spontaneous adverse event reporting to VAERS for populations served by IHS and Tribal facilities</li>
            </ul>
            </p>
            <p className="vaccines-subject">V-safe After Vaccination Health Checker</p>
            <p className="vaccines-p"><b>V-safe</b> is a smartphone-based tool that uses text messaging and web surveys to provide personalized health check-ins after you receive a COVID-19 vaccination. Through <b>v-safe</b>, you can quickly tell CDC if you have any side effects after getting the COVID-19 vaccine. Depending on your answers, someone from CDC may call to check on you and get more information. And <b>v-safe</b> will remind you to get your second COVID-19 vaccine dose if you need one.<br></br>Your participation in CDC’s v–safe makes a difference — it helps keep COVID-19 vaccines safe.</p>
            <p className="vaccines-subject">How to register and use v-safe</p>
            <p className="vaccines-p"><b>You will need your smartphone and information about the COVID-19 vaccine you received.</b> This information can be found on the vaccination record card you received during your vaccination; if you cannot find your card, please  contact your healthcare provider.</p>
            <p className="vaccines-subject">Register</p>
            <ol>
              <li className="vaccines-li">Go to the <b>v-safe</b> website (link provided on the <b>v-safe</b> information sheet your healthcare provider gave you during your COVID-19 vaccination). Read the onscreen instructions and click <b>Get Started.</b></li>
              <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/safety/v-safe-how-to-01-get-started-@2x.png" className="vaccines-image"></img><br></br>
              <li className="vaccines-li">Enter your name, mobile number, and other requested information. Click <b>Register.</b></li>
              <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/safety/v-safe-how-to-02-register-@2x.png" className="vaccines-image"></img><br></br>
              <li className="vaccines-li">You will receive a text message with a verification code on your smartphone. Enter the code in <b>v-safe</b> and click <b>Verify.</b></li>
              <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/safety/v-safe-how-to-03-verify-@2x.png" className="vaccines-image"></img><br></br>
              <li className="vaccines-li">At the top of the screen, click <b>Enter vaccine information.</b></li>
              <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/safety/v-safe-how-to-04-enter-@2x.png" className="vaccines-image"></img><br></br>
              <li className="vaccines-li">Select which COVID-19 vaccine you received (found on your vaccination record card; if you cannot find your card, please contact your healthcare provider) and enter the date you were vaccinated. Click <b>Next.</b></li>
              <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/safety/v-safe-how-to-05-next-@2x.png" className="vaccines-image"></img><br></br>
              <li className="vaccines-li">Review your vaccine information. If correct, click <b>Submit.</b> If not, click <b>Go Back.</b></li>
              <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/safety/v-safe-how-to-06-submit-@2x.png" className="vaccines-image"></img><br></br>
              <li className="vaccines-li">Congrats! You’re all set! If you complete your registration before 2 p.m. local time, <b>v-safe</b> will start your initial health check-in around 2 p.m. that day. If you register after 2 p.m., <b>v-safe</b> will start your initial health check-in immediately after you register — just follow the instructions.</li>
              Registration before 2 p.m. local time:
              <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/safety/v-safe-how-to-07-checkin-b.png" className="vaccines-image"></img><br></br>
              Registration after 2 p.m. local time:
              <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/safety/v-safe-how-to-07-checkin-a-@2x.png" className="vaccines-image"></img><br></br>
            </ol>
            <p className="vaccines-p"><b>What happens next?</b><br></br>You will receive a reminder text message from <b>v-safe</b> around 2 p.m. local time for the next check-in. Just click the link in the text message to start the check-in.</p>
            <p className="vaccines-subject">Complete a v-safe health check-in</p>
            <ol>
              <li className="vaccines-li">When you receive a <b>v-safe</b> check-in text message on your smartphone, click the link when ready.</li>
              <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/safety/v-safe-checkin-01-2x-b.png" className="vaccines-image"></img><br></br>
              <li className="vaccines-li">Follow the instructions to complete the check-in.</li>
              <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/safety/v-safe-checkin-02-@2x_1.png" className="vaccines-image"></img><br></br>
            </ol>
            <p className="vaccines-p"><b>Need help with v-safe?</b><br></br>Call 800-CDC-INFO (800-232-4636) TTY 888-232-6348<br></br>Open 24 hours, 7 days a week</p>
            <p className="vaccines-subject">COVID-19 Vaccines and Severe Allergic Reactions</p>
            <p className="vaccines-p">CDC has learned of reports that some people have experienced severe allergic reactions—also known as anaphylaxis—after getting a COVID-19 vaccine. As an example, an allergic reaction is considered severe when a person needs to be treated with epinephrine or EpiPen© or if they must go to the hospital.<br></br>This page will be updated as quickly as possible when we get new information.<br></br>If you get a COVID-19 vaccine and you think you might be having a severe allergic reaction after leaving the vaccination site, seek immediate medical care by calling 911.</p>
            <p className="vaccines-subject">What CDC Recommends</p>
            <p className="vaccines-p">If you have ever had a severe allergic reaction to any ingredient in a COVID-19 vaccine, CDC recommends that you should not get that specific vaccine. If you have had a severe allergic reaction to other vaccines or injectable therapies, you should ask your doctor if you should get a COVID-19 vaccine. Your doctor will help you decide if it is safe for you to get vaccinated.<br></br>CDC recommends that people with a history of severe allergic reactions not related to vaccines or injectable medications—such as allergies to food, pet, venom, environmental, or latex—may still get vaccinated. People with a history of allergies to oral medications or a family history of severe allergic reactions, or who might have an milder allergy to vaccines (no anaphylaxis)—may also still get vaccinated.<br></br>If you have a severe allergic reaction after getting the first shot, you should not get the second shot. Your doctor may refer you to a specialist in allergies and immunology to provide more care or advice.</p>
            <p className="vaccines-subject">Safeguards Are in Place</p>
            <p className="vaccines-p">CDC has provided recommendations for COVID-19 vaccination providers about how to prepare for the possibility of a severe allergic reaction:
            <ul>
              <li className="vaccines-li">All people who get a COVID-19 vaccine should be monitored on-site. People with a history of severe allergic reactions should be monitored for 30 minutes after getting the vaccine. All other people should be monitored for 15 minutes after getting the vaccine.</li>
              <li className="vaccines-li">Vaccination providers should have appropriate medications and equipment—such as epinephrine, antihistamines, stethoscopes, blood pressure cuffs, and timing devices to check your pulse—at all COVID-19 vaccination sites.</li>
              <li className="vaccines-li">If you experience a severe allergic reaction after getting a COVID-19 vaccine, vaccination providers should provide rapid care and call for emergency medical services. You should continue to be monitored in a medical facility for at least several hours.</li>
              </ul>
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect/after.html">Learn more about what to expect after getting vaccinated for COVID-19</a>, including normal side effects and tips to reduce pain or discomfort.
              </p>
            <p className="vaccines-subject">CDC Is Monitoring Reports of Severe Allergic Reactions</p>
            <p className="vaccines-p">If someone has a severe allergic reaction after getting vaccinated, their vaccination provider will send a report to the <a href="https://vaers.hhs.gov/index.html">Vaccine Adverse Reporting System (VAERS)</a> VAERS is the national system that collects reports from healthcare professionals, vaccine manufacturers, and the public about adverse events that happen after vaccination. Reports of adverse events that are unexpected, appear to happen more often than expected, or have unusual patterns are followed up with specific studies.            <br></br><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety.html"></a>Learn more about how federal partners are monitoring the safety of COVID-19 vaccines in the United States.</p>

            <a id="ensuring-vaccines-work" className="return-top" href="#vaccines-top"><br></br>Return to Top</a><br></br>
            <p className="vaccines-subject-header">Ensuring Vaccines Work</p><br></br>
            <p className="vaccines-p">Before the U.S. Food and Drug Administration (FDA) determines whether to approve a vaccine or authorize a vaccine for emergency use, clinical trials are conducted to determine <b>how well it works.</b> This is known as <b>effectiveness</b>.<br></br>After FDA approves a vaccine or authorizes a vaccine for emergency use, it continues to be studied to determine <b>how well it works under real-world conditions.</b> CDC and other federal partners will be assessing COVID-19 vaccine effectiveness under real-world conditions.<br></br>CDC will further assess vaccine effectiveness now that a COVID-19 vaccine has been authorized for emergency use by FDA. Many of these assessments will build on existing CDC programs, such as the <a href="https://www.cdc.gov/coronavirus/2019-ncov/covid-data/covid-net/purpose-methods.html">Emerging Infections Program, Coronavirus Disease 2019-Associated Hospitalization Surveillance Network (COVID-NET)</a>, and systems used to estimate the <a href="https://www.cdc.gov/flu/vaccines-work/vaccine-effectiveness-networks.htm">effectiveness of influenza vaccines</a>.<br></br>Learn about how the U.S. vaccine safety system is <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety.html">ensuring the safety of COVID-19 vaccines</a>.</p>
            <p className="vaccines-subject">Do clinical trial results show whether vaccines are effective?</p>
            <p className="vaccines-p">Yes. <a href="https://clinicaltrials.gov/ct2/about-studies/learn">Clinical trials</a> provide data and information about how well a vaccine prevents an infectious disease and about how safe it is. The FDA evaluates these data, as well as manufacturing information, to assess the safety and effectiveness of vaccines. FDA then decides whether to approve a vaccine or authorize it for emergency use in the United States.<br></br>However, more assessments take place after a vaccine is either approved or authorized for emergency use by FDA and then recommended for public use. The goal of these assessments is to understand more about the protection a vaccine provides under real-world conditions, outside of clinical trials.<br></br>CDC will further assess the effectiveness of COVID-19 vaccines after they are approved or authorized for emergency use by FDA and recommended for public use. These real-world assessments will compare groups of people who do and don’t get vaccinated and people who do and don’t get COVID-19 to assess how well COVID-19 vaccines are working to protect people.</p>
            <p className="vaccines-subject">Why do experts continue to assess vaccine effectiveness in real-world conditions?</p>
            <p className="vaccines-p">The major reason for conducting additional vaccine effectiveness assessments is to make sure a vaccine protects people from getting a disease under real-world conditions, outside of the strict setting of clinical trials. There are many factors that can affect a vaccine’s effectiveness in real-world situations. These factors can include things such as how a vaccine is transported and stored or even how patients are vaccinated. Vaccine effectiveness can also be affected by differences in the underlying medical conditions of people vaccinated in the real-world compared to those in the clinical trials. Vaccine effectiveness assessments can also provide important information about how well a vaccine is working in groups of people not included or not well represented in clinical trials.</p>
            <p className="vaccines-subject">How will experts evaluate the effectiveness of COVID-19 vaccines in real-world conditions?</p>
            <p className="vaccines-p">Experts are working on many different types of real-world vaccine effectiveness assessments, and each uses a different method. These methods are described below.
            <ul>
              <li className="vaccines-li"><b>Case-control studies:</b> These assessments will include cases (people who have the virus that causes COVID-19) and controls (people who do not have the virus that causes COVID-19). The people who agree to participate in a case-control assessment will provide information on whether they received a COVID-19 vaccine or not. Experts will look to see if the cases were less likely to have received the vaccine than controls, which would show that the vaccine is working.
              <ul>
                  <li className="vaccines-li-li">Test-negative design: This is a special type of case-control study. These assessments will enroll people who are seeking medical care for symptoms that could be due to COVID-19. Experts will then compare the COVID-19 vaccination status of those who test positive (meaning they have COVID-19) to those who test negative (meaning they do not have COVID-19).</li>
                </ul>
              </li>
              <li className="vaccines-li"><b>Cohort studies:</b> These assessments will follow people who have and haven’t had a COVID-19 vaccine for several months to see if getting vaccinated protects them from getting the disease. This can be done in real time (prospectively) or by looking back in time (retrospectively) using data that were already collected, such as information in participants’ electronic health records (medical records).</li>
              <li className="vaccines-li"><b>Screening method:</b> These assessments look at vaccination coverage among a group of cases (for example, cases detected through ongoing COVID-19 surveillance) and compares it with vaccination coverage among the overall population where those cases come from (for example people from the same state). By comparing coverage among these two groups, researchers can get an early estimate of whether a vaccine is working as expected.</li>
              <li className="vaccines-li"><b>Ecologic analyses:</b> These assessments look at groups of people – such as those in different geographic locations or at different times – and find out how many people were vaccinated and how many people were diagnosed with COVID-19. These analyses may be hard to interpret since the number of COVID-19 illnesses has changed rapidly over time and in different places.</li>
            </ul>
            <b>CDC will use several methods as they can all contribute different information about how a vaccine is working.</b>
            </p>
            <p className="vaccines-subject">How is CDC coordinating with other U.S. government agencies to ensure COVID-19 vaccines work as expected?</p>
            <p className="vaccines-p">CDC is coordinating with several other federal agencies to assess how well COVID-19 vaccines work under real-world conditions after FDA approval or authorization for emergency use. These agencies include:
            <ul>
              <li className="vaccines-li"><a href="https://www.cms.gov/About-CMS/Agency-Information/Emergency/EPRO/Current-Emergencies/Current-Emergencies-page">Centers for Medicare and Medicaid Services (CMS)external icon</a></li>
              <li className="vaccines-li"><a href="https://www.defense.gov/Explore/Spotlight/Coronavirus/">Department of Defense (DoD)external icon</a></li>
              <li className="vaccines-li"><a href="https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/covid-19-vaccines">Food and Drug Administration (FDA)external icon</a></li>
              <li className="vaccines-li"><a href="https://www.ihs.gov/coronavirus/">Indian Health Service (IHS)external icon</a></li>
              <li className="vaccines-li"><a href="https://www.publichealth.va.gov/n-coronavirus/index.asp">Veteran’s Health Administration (VHA)external icon</a></li>
              Some examples of how these agencies are working together include:
              <li className="vaccines-li">CDC, FDA, and VHA are holding working group discussions to understand how each will use electronic health records (medical records) to see if people who received a COVID-19 vaccine are protected against developing COVID-19.</li>
              <li className="vaccines-li">FDA and CMS are planning to further assess how well COVID-19 vaccines protect against developing COVID-19 among older adults, including those living in nursing homes and long-term care facilities.</li>
              </ul></p>
            <p className="vaccines-subject">Will assessments determine if the vaccines protect people from severe COVID-19 illness?</p>
            <p className="vaccines-p">Yes. Severe illness from COVID-19 is defined as needing care in a hospital or intensive care unit (ICU), needing to be on a ventilator, or dying due to COVID-19. <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/index.html">Learn more about people at increased risk of severe illness from COVID-19</a>. Experts will assess how well COVID-19 vaccines protect people against severe illness using case-control studies among hospitalized patients. Experts will also use electronic health record cohort studies to see if people hospitalized with COVID-19 received the vaccine or not.</p>
            <p className="vaccines-subject">Will assessments provide information about how well vaccines protect against less severe COVID-19 illness?</p>
            <p className="vaccines-p">Yes. CDC will use case-control studies to assess how well COVID-19 vaccines protect people against less severe forms of COVID-19 – for example, people with COVID-19 who need to visit a doctor but don’t need to be hospitalized.<br></br>Will the assessments try to find out if the vaccines protect people from all kinds of infections with the virus that causes COVID-19, including those with no symptoms?<br></br>Yes. Some people can be infected with or “carry” the virus that causes COVID-19 but not feel sick or have any symptoms. Experts call this asymptomatic infection. It is important to know whether COVID-19 vaccines can help reduce the number of people that have asymptomatic infection as these people can unknowingly spread the virus to others.<br></br>A special type of cohort study will try to answer this question. People who agree to participate will be tested for COVID-19 every week, whether they have symptoms or not. Experts will then compare the proportion of people with infection who were vaccinated to the proportion of people with infection who were not vaccinated.</p>
            <p className="vaccines-subject">What groups of people will be included in the real-world vaccine assessments?</p>
            <p className="vaccines-p">CDC is working to make sure real-world vaccine assessments include diverse groups of people, such as healthcare personnel, essential workers, older adults and those living in nursing homes, people with underlying medical conditions, racial and ethnic minority groups, and tribal nations. It is important to measure how well COVID-19 vaccines work in groups of people who are at increased risk of getting COVID-19, as well as in those who are at increased risk of severe COVID-19.<br></br>CDC may recommend that some groups of people get COVID-19 vaccination first. If so, it will be important to see how COVID-19 vaccines work in these initial groups to be vaccinated to ensure the vaccines work as expected.  Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations-process.html">how CDC is making COVID-19 vaccination recommendations</a>.
            <b><i>Healthcare personnel and essential workers</i></b><br></br>
            Experts will rapidly assess vaccine effectiveness among healthcare personnel working in hospitals or nursing homes in selected sites across the United States. This assessment will inform how well COVID-19 vaccines protect healthcare personnel from getting sick or severe illness. Additionally, assessments among healthcare personnel and essential workers will inform how well COVID-19 vaccines protect against getting infected, regardless of whether they have symptoms.
            <br></br>
            <b><i>Older adults and those living in nursing homes</i></b><br></br>
            Making sure COVID-19 vaccines protect <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/older-adults.html">older adults</a> is critical since the risk for severe illness from COVID-19 increases with age. People living in nursing homes and long-term care facilities are at especially high risk of getting COVID-19 and severe disease. FDA and CMS will assess COVID-19 vaccine effectiveness among older adults, including those living in nursing homes and long-term care facilities, using CMS Medicare billing data. These data will include information about whether people got a COVID-19 vaccine, whether they got sick with COVID-19, and if they needed to receive care in a hospital. This information will help inform how well the vaccine works in preventing COVID-19 and severe illness among older adults.
Experts will also conduct a case-control assessment using data from CDC and CMS. Experts will identify older adults hospitalized for COVID-19 and older adults hospitalized for other reasons. They will then compare how many cases and controls received a COVID-19 vaccine to estimate vaccine effectiveness.
            <br></br>
            <b><i>Underlying medical conditions</i></b><br></br>
            Adults of any age with <b>certain underlying medical conditions</b> are at increased risk for severe illness from the virus that causes COVID-19.<br></br>Making sure COVID-19 vaccines protect people with certain underlying medical conditions is important. Experts are working to make sure various real-world vaccine assessments will include enough adults with heart conditions, obesity, and diabetes to provide information about how well vaccines protect them.<br></br>The real-world vaccine effectiveness assessments will also collect information about many other underlying medical conditions. This information will be used to better understand how well COVID-19 vaccines protect people with underlying medical conditions.
            <br></br>
            <b><i>Racial and ethnic minority groups</i></b><br></br>
            Long-standing systemic health and social inequities have put many people from racial and ethnic minority groups at increased risk of getting sick and dying from COVID-19. CDC is working to ensure that real-world vaccine effectiveness assessments include diverse populations, including people from racial and ethnic minority groups that are disproportionately affected by COVID-19. CDC also is working with the Indian Health Service (IHS), tribal nations, and other partners to ensure that real-world COVID-19 vaccine effectiveness assessments include American Indian and Alaska Native populations who have been disproportionately affected by COVID-19. This is important to ensure that COVID-19 vaccines can help achieve health equity so that everyone has a fair opportunity to be as healthy as possible. Learn more about <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/health-equity/race-ethnicity.html">COVID-19 and health equity considerations</a>.
            <br></br>
            
            </p>


            <a id="faq-vaccination" className="return-top" href="#vaccines-top"><br></br>Return to Top</a><br></br>
            <p className="vaccines-subject-header">Frequently Asked Questions about Vaccination</p><br></br>
            <p className="vaccines-p">The federal government, through <a href="https://www.hhs.gov/coronavirus/explaining-operation-warp-speed/index.html">Operation Warp Speed</a>, has been working since the pandemic started to make one or more COVID-19 vaccines available as soon as possible. Although CDC does not have a role in developing COVID-19 vaccines, CDC has been working closely with health departments and partners to develop vaccination plans for when a vaccine is available. CDC is working with partners at all levels, including healthcare associations, on flexible COVID-19 vaccination programs that can accommodate different vaccines and scenarios.<br></br>Below are answers to commonly asked questions. Regular updates will be made as needed.</p>


            <Accordion>

            <Card><a id="Basics"><Card.Header className="alert-subjects">Planning for a Vaccine</Card.Header></a>

              <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1000">
                What is Operation Warp Speed's role with COVID-19 vaccines?
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="1000">
                <Card.Body className="accordion-answer">Operation Warp Speed is a partnership among components of the Department of Health and Human Services (HHS) and the Department of Defense to help develop, make, and distribute millions of vaccine doses for COVID-19 as quickly as possible while ensuring that the vaccines are safe and that they work. Learn more about Operation Warp Speed:
                <ul>
                  <li className="vaccines-li">HHS <a href="https://www.hhs.gov/coronavirus/explaining-operation-warp-speed/index.html">Fact Sheet: Explaining Operation Warp Speed</a></li>
                  <li className="vaccines-li">New England Journal of Medicine article: <a href="https://www.nejm.org/doi/full/10.1056/NEJMp2027405">Developing Safe and Effective COVID Vaccines — Operation Warp Speed’s Strategy and Approach</a></li>
                  </ul></Card.Body>
              </Accordion.Collapse>

              <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1001">
                When will a COVID-19 vaccine be available in the United States?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1001">
                  <Card.Body className="accordion-answer">The goal for <a href="https://www.hhs.gov/coronavirus/explaining-operation-warp-speed/index.html">Operation Warp Speed</a> is to deliver safe vaccines that work, with the first supply becoming available before the end of 2020. Currently, two vaccines are authorized and recommended to prevent COVID-19 in the United States. To help guide decisions about how to distribute limited initial supplies of COVID-19 vaccine, CDC and the Advisory Committee on Immunization Practices have published recommendations for which <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations.html">groups should be vaccinated first</a>. Supplies will increase over time. The goal is for everyone to be able to easily get a COVID-19 vaccine as soon as large quantities are available. However, a COVID-19 vaccine may not be available for young children until more studies are completed.</Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1002">
                What has been done to plan for the distribution of COVID-19 vaccines?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1002">
                  <Card.Body className="accordion-answer">
                  The federal government oversees a centralized system to order, distribute, and track COVID-19 vaccines. All vaccines will be ordered through CDC. Vaccine providers will receive vaccines from CDC’s centralized distributor or directly from a vaccine manufacturer.<br></br><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines.html">Two vaccines are authorized and recommended</a> to prevent COVID-19 in the United States, other COVID-19 vaccine candidates are in development, and clinical trials are being conducted at the same time as large-scale manufacturing. With first doses now available, planning and preparing for a COVID-19 vaccination program is very important.<br></br>Planning efforts have focused on every step and detail of the process, including:
                  <ul>
                    <li className="vaccines-li">Establishing and testing logistics plans with manufacturers and commercial partners that are part of CDC’s centralized COVID-19 vaccine delivery system</li>
                    <li className="vaccines-li">Coordinating the first distribution of vaccines and needed supplies from centralized locations</li>
                    <li className="vaccines-li">Ordering processes for additional doses of the vaccine after the first supply has been shipped</li>
                    <li className="vaccines-li">Receiving, storing, and handling vaccines properly at very specific temperatures</li>
                    <li className="vaccines-li">Deciding who should receive a vaccine first, based on national recommendations, if there are not enough doses of the vaccine for everyone</li>
                    <li className="vaccines-li">Giving the vaccines in a safe way during an ongoing pandemic</li>
                    <li className="vaccines-li">Reporting on vaccine inventory, administration, and safety using a variety of new and enhanced data systems</li>
                    <li className="vaccines-li">Expanding safety surveillance through new systems and additional information sources, as well as scaling up existing safety monitoring systems</li>
                    <li className="vaccines-li">Developing plans to assess vaccine effectiveness, which means how well the vaccines protect against COVID-19 under real-life conditions</li>
                    <li className="vaccines-li">Making sure timely, credible, and clear communication is provided to the public and stakeholders around all aspects of the vaccination program</li>
                  </ul>
                  This situation continues to change, and planning will progress as more information about any new authorized or approved vaccines becomes available. A safe and effective COVID-19 vaccine is a critical component of the U.S. strategy to reduce COVID-19-related illnesses, hospitalizations, and deaths and to help society function as it did before COVID-19. The goal of the U.S. government is to have enough COVID-19 vaccine doses for all people in the United States who choose to be vaccinated.
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1003">
                Who has CDC worked with to plan for the distribution of COVID-19 vaccines?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1003">
                  <Card.Body className="accordion-answer">
                  <b>State, tribal, territorial, and local jurisdictions:</b> CDC worked with state, tribal, territorial, and local jurisdictions on the development of COVID-19 vaccination plans for their respective areas. CDC released a playbook on September 16, 2020, to provide specific information to consider during vaccination plan development. The <a href="https://www.cdc.gov/vaccines/imz-managers/downloads/COVID-19-Vaccination-Program-Interim_Playbook.pdf">playbook</a> was updated on October 30, 2020.<br></br><b>Private partners and federal agencies:</b> CDC has also worked with private partners, such as chain and networks of independent pharmacies, and other federal agencies (e.g., the Indian Health Service) on plans to more widely distribute COVID-19 vaccines. For example, CDC is working with pharmacies to offer on-site COVID-19 vaccination services for residents in long-term care settings, including skilled nursing facilities, nursing homes, and assisted living facilities where most individuals are over 65 years of age.
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1004">
                Does CDC have a national campaign to address any concerns people may have about getting a COVID-19 vaccine?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1004">
                  <Card.Body className="accordion-answer">
                  No, CDC is not leading a national campaign on COVID-19 vaccination. CDC’s vaccination activities fit within and are guided by a <i><a href="https://www.cdc.gov/vaccines/partners/vaccinate-with-confidence.html">Vaccinate with Confidence strategic framework</a></i>. This strategic framework focuses on strengthening vaccine confidence and preventing outbreaks of vaccine-preventable diseases in the United States. It builds on longstanding practices that CDC and partners have used to talk with the public and healthcare providers about the life-saving protection of vaccines.<br></br>The <i>Vaccinate with Confidence</i> strategic framework is being customized to address the unique information and health equity needs created by the COVID-19 pandemic. The new <i>Vaccinate with Confidence for COVID-19</i> strategic framework will strive to support public and healthcare personnel acceptance of future COVID-19 vaccines. CDC will provide updates once the new strategic framework is completed.
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1005">
                How is CDC working to make sure people want to and can get vaccinated once a COVID-19 vaccine is available?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1005">
                  <Card.Body className="accordion-answer">
                  CDC is working with partners across the country to make sure people have the information they need to be confident in deciding to get vaccinated. Key priorities for CDC are:
                  <ul>
                    <li className="vaccines-li"><b>Regularly sharing clear and accurate information</b> with people to make sure they understand the risks and benefits of getting vaccinated and can make informed decisions.</li>
                    <li className="vaccines-li"><b>Helping healthcare personnel feel confident</b> in their decision to get a COVID-19 vaccine and <b>helping healthcare providers</b> answer their patients’ questions about the vaccine.</li>
                    <li className="vaccines-li"><b>Engaging communities and individuals in an equitable and inclusive way</b> to ensure that people have opportunities to ask questions and get clear, accurate information about the COVID-19 vaccine.</li>
                  </ul>
                  Easy access to COVID-19 vaccines is equally critical. CDC is working with public health, healthcare providers, and other partners to make sure people can easily get a COVID-19 vaccine and that cost is not a barrier.
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1006">
                Will there be enough vaccine for everyone?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1006">
                  <Card.Body className="accordion-answer">
                  Currently, two vaccines are authorized and recommended to prevent COVID-19 in the United States. To help guide decisions about how to distribute limited initial supplies of COVID-19 vaccine, CDC and the Advisory Committee on Immunization Practices have published recommendations for which <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations.html">groups should be vaccinated first</a>.  It is understandable how concerning this may be for people, especially for <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/index.html">those who are at increased risk for serious illness</a> from this virus and for their loved ones.<br></br>The goal is for everyone to be able to easily get a COVID-19 vaccine as soon as large quantities are available. That is why, early in the response, the <a href="https://www.hhs.gov/coronavirus/explaining-operation-warp-speed/index.html">federal government began investing in select vaccine manufacturers</a> to help them increase their ability to quickly make and distribute a large amount of COVID-19 vaccine. This will allow the United States to start with as much vaccine as possible and continually increase the supply in the weeks and months to follow. The goal is for everyone to be able to easily get a COVID-19 vaccine as soon as large quantities are available. Several thousand vaccination providers will be available, including doctors’ offices, retail pharmacies, hospitals, and federally qualified health centers.
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1007">
                What can I do now to help protect myself from getting COVID-19 since a vaccine is not yet available?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1007">
                  <Card.Body className="accordion-answer">You should cover your mouth and nose with a mask when around others, avoid close contact with people who are sick, stay 6 feet away from others, avoid crowds, and wash your hands often. Get more information about these and other steps you can take to <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html">protect yourself and others from COVID-19</a>.</Card.Body>
                </Accordion.Collapse>


            </Card>

            <Card><a id="Basics"><Card.Header className="alert-subjects">Vaccine Development</Card.Header></a>

            <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1008">
              How many COVID-19 vaccines are under development?
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="1008">
              <Card.Body className="accordion-answer">
              Currently, <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines.html">two vaccines</a> are authorized and recommended to prevent COVID-19:
              <ul>
                <li className="vaccines-li">​​​​<a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/Pfizer-BioNTech.html">Pfizer-BioNTech COVID-19 vaccine</a></li>
                <li className="vaccines-li"><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/Moderna.html">Moderna’s COVID-19 vaccine</a></li>
              </ul>
              Multiple COVID-19 vaccines are also still under development. Large-scale (Phase 3) clinical trials are in progress or being planned for two additional COVID-19 vaccines in the United States.
              </Card.Body>
            </Accordion.Collapse>

            <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1009">
                Has there been a coronavirus vaccine developed before? What's know about it, and can it be helpful today in working toward a COVID-19 vaccine?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1009">
                  <Card.Body className="accordion-answer"><a href="https://www.cdc.gov/sars/index.html">Severe acute respiratory syndrome (SARS)</a> and <a href="https://www.cdc.gov/coronavirus/mers/index.html">Middle East respiratory syndrome (MERS)</a> are two diseases caused by coronaviruses that are closely related to the virus that causes COVID-19. Researchers began working on developing vaccines for these diseases after they were discovered in 2003 and 2012, respectively. None of the SARS vaccines ever made it past the first stages of development and testing, in large part due to lack of interest because the virus disappeared. One MERS vaccine (MVA-MERS-S) successfully completed a phase 1 clinical trial in 2019. Lessons learned from this earlier vaccine research have been used to inform strategies for developing a COVID-19 vaccine.</Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1010">
                Why is it taking so long to develop a COVID019 vaccine? It only took a few months for the H1N1 influence (flu) vaccine to be developed.
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1010">
                  <Card.Body className="accordion-answer">When a new flu strain is identified, like H1N1 in 2009, vaccine manufacturers can use the same processes that are used to make the annual seasonal flu vaccine, saving valuable time. Unlike flu, coronaviruses do not yet have licensed vaccines or processes to build on. In addition, the coronavirus that causes COVID-19 is a new virus, so entirely new vaccines must be developed and tested to ensure they work and are safe. There are many steps in the <a href="https://www.cdc.gov/vaccines/basics/test-approve.html">vaccine testing and approval process</a>. <a href="https://www.hhs.gov/coronavirus/explaining-operation-warp-speed/index.html">Multiple agencies and groups in the United States</a> are working together to make sure that a safe and effective COVID-19 vaccine is available as quickly as possible.</Card.Body>
                </Accordion.Collapse>
  

                </Card>

                <Card><a id="Basics"><Card.Header className="alert-subjects">Getting Vaccinated</Card.Header></a>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1011">
                  How many shots of COVID-19 vaccine will be needed?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="1011">
                  <Card.Body className="accordion-answer">The two authorized and recommended vaccines to prevent COVID-19 in the United States both need two shots to be effective. There is one COVID-19 vaccine in Phase 3 clinical trials in the United States that uses one shot.</Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1012">
                Do I need to wear a mask when I receieve a COVID-19 vaccine?
                
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1012">
                  <Card.Body className="accordion-answer">
                  Yes. CDC recommends that during the pandemic people <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html">wear a mask</a> that covers their nose and mouth when in contact with others outside your household, when in healthcare facilities, and when receiving any vaccine, including a COVID-19 vaccine. Anyone who has trouble breathing or is unable to remove a mask without assistance should not wear a mask. For more information, visit <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover-guidance.html">considerations for wearing masks</a>.
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1013">
                Who is paying for COVID-19 vaccine?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1013">
                  <Card.Body className="accordion-answer">Vaccine doses purchased with U.S. taxpayer dollars will be given to the American people at no cost. However, vaccination providers will be able to charge an administration fee for giving the shot to someone. Vaccine providers can get this fee reimbursed by the patient’s public or private insurance company or, for uninsured patients, by the Health Resources and Services Administration’s Provider Relief Fund.</Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1014">
                Are there special considerations on who sould get the COVID-19 vaccine first?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1014">
                  <Card.Body className="accordion-answer">
                  CDC is making recommendations for <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations.html">who should be offered COVID-19 vaccine first</a> when supplies are limited. To help guide decisions about how to distribute limited initial supplies of COVID-19 vaccine, CDC and the Advisory Committee on Immunization Practices have <a href="https://www.cdc.gov/vaccines/hcp/acip-recs/vacc-specific/covid-19.html">published recommendations</a> for which groups should be vaccinated first. The goal is for everyone to be able to easily get a COVID-19 vaccination as soon as large quantities of vaccine are available.<br></br>While CDC makes recommendations for who should be offered COVID-19 vaccine first, each state has its own plan for vaccine prioritization, distribution and allocation. Please contact your state health department for more information on their planning for COVID-19 vaccines.<br></br>Learn how <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations-process.html">CDC is making COVID-19 vaccine recommendations</a>, including recommendations if there is a limited supply, based on input from the Advisory Committee on Immunization Practices (ACIP).
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1015">
                If I have already had COVID-19 and recovered, do I still need to get vaccinated with a COVID-19 vaccine when it's available?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1015">
                  <Card.Body className="accordion-answer">
                  COVID-19 vaccination should be offered to you regardless of whether you already had COVID-19 infection. You should not be required to have an antibody test before you are vaccinated.<br></br>However, anyone currently infected with COVID-19 should wait to get vaccinated until after their illness has resolved and after they have met the <a href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/disposition-in-home-patients.html">criteria</a> to discontinue isolation.<br></br>Additionally, current evidence suggests that reinfection with the virus that causes COVID-19 is uncommon in the 90 days after initial infection. Therefore, people with a recent infection may delay vaccination until the end of that 90-day period if desired.
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1016">
                Why would a vaccine be needed if we can do other things, like social distancing and wearing masks, to prevent the virus that causes COVID-19 from spreading?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1016">
                  <Card.Body className="accordion-answer">
                  Stopping a pandemic requires using all the tools available. Vaccines work with your immune system so your body will be ready to fight the virus if you are exposed. Other steps, like covering your mouth and nose with a mask and staying at least 6 feet away from others, help reduce your chance of being exposed to the virus or spreading it to others. Together, COVID-19 vaccination and following CDC’s recommendations to <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">protect yourself and others</a> will offer the best protection from COVID-19.
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1017">
                Do I need to wear a mask and avoid close contact with others if I have received 2 doses of the vaccine?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1017">
                  <Card.Body className="accordion-answer">
                  Yes. While experts learn more about the protection that COVID-19 vaccines provide under real-life conditions, it will be important for everyone to continue using <b>all the tools</b> available to us to help stop this pandemic, like covering your mouth and nose with a mask, washing hands often, and staying at least 6 feet away from others. Together, COVID-19 vaccination and following CDC’s recommendations for <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">how to protect yourself and others</a> will offer the best protection from getting and spreading COVID-19. Experts need to understand more about the protection that COVID-19 vaccines provide before deciding to change recommendations on steps everyone should take to slow the spread of the virus that causes COVID-19. Other factors, including how many people get vaccinated and how the virus is spreading in communities, will also affect this decision.
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1018">
                When can I stop wearing a mask and avoiding close contact with others after I have been vaccinated?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1018">
                  <Card.Body className="accordion-answer">
                  There is not enough information currently available to say if or when CDC will stop recommending that people <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">wear masks</a> and <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">avoid close contact with others</a> to help prevent the spread of the virus that causes COVID-19. Experts need to understand more about the protection that COVID-19 vaccines provide before making that decision. Other factors, including how many people get vaccinated and how the virus is spreading in communities, will also affect this decision.
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1019">
                Are there other vaccines that can help prevent me from getting COVID-19?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1019">
                  <Card.Body className="accordion-answer">
                  There are currently no available vaccines that will prevent COVID-19. However, <a href="https://www.hhs.gov/about/news/2020/06/16/fact-sheet-explaining-operation-warp-speed.html">multiple agencies and groups in the United States</a> are working together to make sure that a safe and effective COVID-19 vaccine is available as quickly as possible.<br></br>A flu vaccine will not protect you from getting COVID-19, but it can prevent you from getting influenza (flu) at the same time as COVID-19. This can keep you from having a more severe illness. While it’s not possible to say with certainty what will happen in the winter, CDC believes it’s likely that flu viruses and the virus that causes COVID-19 will both be spreading during that time. That means that getting a flu vaccine is more important than ever.
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1020">
                Does immunity after getting COVID-19 last longer than protection from COVID-19 vaccines?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1020">
                  <Card.Body className="accordion-answer">
                  The protection someone gains from having an infection (called natural immunity) varies depending on the disease, and it varies from person to person. Since this virus is new, we don’t know how long natural immunity might last. Current evidence suggests that reinfection with the virus that causes COVID-19 is uncommon in the 90 days after initial infection.<br></br>Regarding vaccination, we won’t know how long immunity lasts until we have a vaccine and more data on how well it works.<br></br>Both natural immunity and vaccine-induced immunity are important aspects of COVID-19 that experts are trying to learn more about, and CDC will keep the public informed as new evidence becomes available.
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1021">
                What percentage of the population needs to get vaccinated to have herd immunity to COVID-19?
                </Accordion.Toggle>
  
                <Accordion.Collapse eventKey="1021">
                  <Card.Body className="accordion-answer">Experts do not know what percentage of people would need to get vaccinated to achieve herd immunity to COVID-19. Herd immunity is a term used to describe when enough people have protection—either from previous infection or vaccination—that it is unlikely a virus or bacteria can spread and cause disease. As a result, everyone within the community is protected even if some people don’t have any protection themselves. The percentage of people who need to have protection in order to achieve herd immunity varies by disease.</Card.Body>
                </Accordion.Collapse>




          </Card>

          <Card><a id="Basics"><Card.Header className="alert-subjects">Safety</Card.Header></a>

          <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1022">
          How do I report if I have a problem or bad reaction after getting a COVID-19 vaccine?
            
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1022">
            <Card.Body className="accordion-answer">
            CDC and FDA encourage the public to report possible side effects (called adverse events) to the <a href="https://vaers.hhs.gov/reportevent.html">Vaccine Adverse Event Reporting System (VAERS)</a>. This national system collects these data to look for adverse events that are unexpected, appear to happen more often than expected, or have unusual patterns of occurrence. Learn about the <a href="https://www.cdc.gov/vaccinesafety/ensuringsafety/sideeffects/index.html">difference between a vaccine side effect and an adverse event</a>. Reports to VAERS help CDC monitor the safety of vaccines. Safety is a top priority.<br></br>Healthcare providers will be required to report certain adverse events following vaccination to VAERS. Healthcare providers also have to adhere to any revised safety reporting requirements according to FDA’s conditions of authorized use throughout the duration of any Emergency Use Authorization; these requirements would be posted on <a href="https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/emergency-use-authorization">FDA’s website</a>.<br></br>CDC is also implementing a new smartphone-based tool called <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/vsafe.html"><b>v-safe</b></a> to check-in on people’s health after they receive a COVID-19 vaccine. When you receive your vaccine, you should also receive a <b>v-safe</b> information sheet telling you how to enroll in <b>v-safe</b>. If you enroll, you will receive regular text messages directing you to surveys where you can report any problems or adverse reactions you have after receiving a COVID-19 vaccine.

            </Card.Body>
          </Accordion.Collapse>

                        <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="1023">
                          What does it mean if a clinical trial is temporarily paused?
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1023">
                          <Card.Body className="accordion-answer">
                          Safety is a top priority during the vaccine approval process. It is not unusual for a clinical trial to be temporarily paused when a possible side effect (called an adverse event) is detected. Clinical trials are designed to pause when an unexpected health event (called a safety signal) is detected so scientists and physicians can investigate potential safety concerns. The approval process for COVID-19 vaccines is no different ― safety is always the focus.
                          </Card.Body>
                        </Accordion.Collapse>

          <a href="#vaccines-top">Return to Top</a>

          </Card>
            </Accordion>

          </Alert>

          {/* END VACCINES */}

          {/* START PREVENT */}
          <Alert className="alert" id="prevent" variant="success" onClose={() => hide_prevent()} dismissible hidden="true">
            <Alert.Heading className="card-top-heading"><a id="prevent-top">Prevent Getting Sick</a></Alert.Heading>

            <Table className="table">
              <tbody>
                <tr >
                  <a href="#hand-sanitizer"><td className="tdleft" >Hand Sanitizer</td></a>
                  <a href="#wearing-gloves"><td className="tdright" >Wearing Gloves</td></a>
                </tr>
                <tr >
                  <a href="#cleaning-your-home"><td className="tdleft" >Cleaning Your Home</td></a>
                  <a href="#social-distancing"><td className="tdright">Social Distancing</td></a>
                </tr>
                <tr >
                  <a href="#household-checklist"><td className="tdleft" >Household Checklist</td></a>
                  <a href="#living-in-close-quarters"><td className="tdright">Living in Close Quarters</td></a>
                </tr>
                <tr >
                  <a href="#living-in-shared-housing"><td className="tdcenter" >Living in Shared Housing</td></a>
                </tr>
              </tbody>
            </Table><br></br>

            <p className="prevent-subject-header">Protect Yourself</p><br></br>
            <p className="prevent-subject">Know how it spreads</p>
            <ul>
              <li className="prevent-li">COVID-19 spreads easily from person to person, mainly by the following routes:
                <ul>
                  <li className="prevent-li-li">Between people who are in close contact with one another (within 6 feet).</li>
                  <li className="prevent-li-li">Through respiratory droplets produced when an infected person coughs, sneezes, breathes, sings or talks.
                    <ul>
                      <li className="prevent-li-li-li">Respiratory droplets cause infection when they are inhaled or deposited on mucous membranes, such as those that line the inside of the nose and mouth.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="prevent-li">People who are infected but do not have symptoms can also spread the virus to others.</li>
            </ul>

            <br></br><p className="prevent-subject">Less common ways COVID-19 can spread</p>
            <ul>
              <li className="prevent-li">Under certain circumstances (for example, when people are in enclosed spaces with poor ventilation), COVID-19 can sometimes be spread by <a target="_blank" href="airborne transmission">airborne transmission</a>.</li>
              <li className="prevent-li">COVID-19 spreads less commonly through contact with contaminated surfaces.</li>
            </ul>

            <br></br><p className="prevent-subject">Wash your hands often</p>
            <ul>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/handwashing/when-how-handwashing.html">Wash your hands</a> often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.</li>
              <li className="prevent-li">It’s especially important to wash:
                <ul>
                  <li className="prevent-li-li">Before eating or preparing food</li>
                  <li className="prevent-li-li">Before touching your face</li>
                  <li className="prevent-li-li">After using the restroom</li>
                  <li className="prevent-li-li">After leaving a public place</li>
                  <li className="prevent-li-li">After blowing your nose, coughing, or sneezing</li>
                  <li className="prevent-li-li">After handling your mask</li>
                  <li className="prevent-li-li">After changing a diaper</li>
                  <li className="prevent-li-li">After caring for someone sick</li>
                  <li className="prevent-li-li">After touching animals or pets</li>
                </ul>
              </li>
              <li className="prevent-li">If soap and water are not readily available, <b>use a hand sanitizer that contains at least 60% alcohol.</b> Cover all surfaces of your hands and rub them together until they feel dry.</li>
              <li className="prevent-li"><b>Avoid touching your eyes, nose, and mouth</b> with unwashed hands.</li>
            </ul>

            <br></br><p className="prevent-subject">Avoid close contact</p>
            <ul>
              <li className="prevent-li"><b>Inside your home:</b> Avoid close contact with people who are sick.
                <ul>
                  <li className="prevent-li-li">If possible, maintain 6 feet between the person who is sick and other household members.</li>
                </ul>
              </li>
              <li className="prevent-li"><b>Outside your home:</b> Put 6 feet of distance between yourself and people who don’t live in your household.
              <ul>
                  <li className="prevent-li-li">Remember that some people without symptoms may be able to spread virus.</li>
                  <li className="prevent-li-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">Stay at least 6 feet (about 2 arms’ length) from other people.</a></li>
                  <li className="prevent-li-li">Keeping distance from others is especially important for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-increased-risk.html">people who are at higher risk of getting very sick.</a></li>
                </ul>

              </li>

            </ul>
            <br></br><p className="prevent-subject">Cover coughs and sneezes</p>
            <ul>
              <li className="prevent-li"><b>Always cover your mouth and nose</b> with a tissue when you cough or sneeze or use the inside of your elbow and do not spit.</li>
              <li className="prevent-li"><b>Throw used tissues</b> in the trash.</li>
              <li className="prevent-li">Immediately <b>wash your hands</b> with soap and water for at least 20 seconds. If soap and water are not readily available, clean your hands with a hand sanitizer that contains at least 60% alcohol.</li>
            </ul>


            <br></br><p className="prevent-subject">Clean and disinfect</p>
            <ul>
              <li className="prevent-li"><b>Clean AND disinfect <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html">frequently touched surfaces</a> daily.</b> This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.</li>
              <li className="prevent-li"><b>If surfaces are dirty, clean them.</b> Use detergent or soap and water prior to disinfection.</li>
              <li className="prevent-li"><b>Then, use a household disinfectant.</b> Most common <a target="_blank" href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">EPA-registered household disinfectants</a> will work.</li>
            </ul>


            <br></br><p className="prevent-subject">Monitor Your Health Daily</p>
            <ul>
              <li className="prevent-li"><b>Be alert for symptoms.</b> Watch for fever, cough, shortness of breath, or other symptoms of COVID-19.
                <ul>
                  <li className="prevent-li-li">Especially important if you are <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/essential-goods-services.html">running essential errands</a>, going into the office or workplace, and in settings where it may be difficult to keep a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">physical distance of 6 feet</a>.</li>
                </ul>
              </li>
              <li className="prevent-li"><b>Take your temperature</b> if symptoms develop.
              <ul>
                  <li className="prevent-li-li">Don’t take your temperature within 30 minutes of exercising or after taking medications that could lower your temperature, like acetaminophen.</li>
                </ul>

              </li>
              <li className="prevent-li">Follow <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">CDC guidance</a> if symptoms develop.</li>
            </ul>

            <br></br><p className="prevent-subject">Cover your mouth and nose with a mask when around others</p>
            <ul>
              <li className="prevent-li">Masks help prevent you from getting or spreading the virus.</li>
              <li className="prevent-li">You could spread COVID-19 to others even if you do not feel sick.</li>
              <li className="prevent-li">Everyone should wear a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">mask</a> in public settings and when around people who don’t live in your household, especially when other <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing</a> measures are difficult to maintain.
              <ul>
                  <li className="prevent-li-li">Especially important if you are <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/essential-goods-services.html">running essential errands</a>, going into the office or workplace, and in settings where it may be difficult to keep a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">physical distance of 6 feet</a>.</li>
                </ul>
              </li>
              <li className="prevent-li">Do NOT use a mask meant for a healthcare worker. Currently, surgical masks and N95 respirators are critical supplies that should be reserved for healthcare workers and other first responders.</li>
              <li className="prevent-li">Continue to keep about 6 feet between yourself and others. The mask is not a substitute for social distancing.</li>
            </ul>

            <a id="hand-sanitizer" className="return-top" href="#prevent-top"><br></br>Return to Top</a><br></br>
            <br></br><p className="prevent-subject-header" >Hand Sanitizer</p><br></br>

            <p className="prevent-p">To prevent the spread of germs, including COVID-19, CDC recommends washing hands with soap and water whenever possible because it reduces the amount of many types of germs and chemicals on hands. But if soap and water are not readily available, using a hand sanitizer with at least 60% alcohol can help you avoid getting sick and spreading germs to others.</p>
            <br></br><p className="prevent-subject">Overview</p>
            <ul>
              <li className="prevent-li">Choose hand sanitizers that contain at least 60% alcohol.</li>
              <li className="prevent-li">Avoid alcohol-based hand sanitizers that are not approved by <a target="_blank" href="https://www.fda.gov/consumers/consumer-updates/your-hand-sanitizer-fdas-list-products-you-should-not-use">Food and Drug Administration (FDA)</a>.</li>
              <li className="prevent-li">Properly apply alcohol-based sanitizer by rubbing the gel over all surfaces of your hands and fingers until your hands are dry.</li>
              <li className="prevent-li">Swallowing alcohol-based hand sanitizers can cause alcohol poisoning. Keep them out of reach of young children and supervise their use.</li>
            </ul>


            <br></br><p className="prevent-subject">How to Select</p>
            <p className="prevent-p">Alcohol-based hand sanitizers come in all shapes and sizes with different ingredients. Which alcohol-based hand sanitizer do you choose? Check the product label and follow these do’s and don’ts.</p>

            <br></br><p className="prevent-subject">When choosing an alcohol-based hand sanitizer</p>
            <ul>DO<br></br>
              <li className="prevent-li">Choose hand sanitizers with at least 60% alcohol (often listed on the label as ethanol, ethyl alcohol, isopropanol, or 2-propanol).</li>
              <li className="prevent-li">Follow label directions for use.</li>
              DO NOT<br></br>
              <li className="prevent-li">Choose hand sanitizers that contain less than 60% alcohol.</li>
              <li className="prevent-li">Choose alcohol-based hand sanitizers on <a target="_blank" href="https://www.fda.gov/consumers/consumer-updates/your-hand-sanitizer-fdas-list-products-you-should-not-use">FDA’s Hand Sanitizer Do-Not-Use List</a>.</li>
              <li className="prevent-li">Choose hand sanitizers labeled as “alcohol-free.”</li>
              <li className="prevent-li">Choose alcohol-based hand sanitizers packaged in a container that resembles a food or beverage container.</li>
              <b>Warning:</b> Alcohol-Based Hand Sanitizers Packaged Like Food or Drinks
The FDA is warning consumers about alcohol-based hand sanitizers that are being packaged in containers that may appear as food or drinks and some that contain food flavors. Eating or drinking these products can cause serious injury or death. <a target="_blank" href="https://www.fda.gov/news-events/press-announcements/covid-19-update-fda-warns-consumers-about-hand-sanitizer-packaged-food-and-drink-containers">FDA Warning</a>
            </ul>

            <br></br><p className="prevent-subject">How to Use When using an alcohol-based hand sanitizer</p>
            <ul>DO <br></br>
              <li className="prevent-li">Rub the gel over all the surfaces of your hands and fingers until your hands are dry.</li>
              <li className="prevent-li">Keep alcohol-based hand sanitizer out of your eyes.</li>
              <li className="prevent-li">Store alcohol-based hand sanitizer out of reach and sight of young children.</li>
              <li className="prevent-li">Supervise young children when they use alcohol-based hand sanitizer.</li>
              DO NOT <br></br>
              <li className="prevent-li">Rinse or wipe off the alcohol-based hand sanitizer before it’s dry; it may not work well against germs.</li>
              <li className="prevent-li">Use alcohol-based hand sanitizer to clean surfaces. Alcohol-based hand sanitizer is not designed to clear or disinfect surfaces.</li>
              <li className="prevent-li">Store alcohol-based hand sanitizer above 105°F (for example, it should not be stored in a car during the summer months).</li>
              <li className="prevent-li">Swallow alcohol-based hand sanitizers. Swallowing alcohol-based hand sanitizers can cause alcohol poisoning.</li>
            </ul>

            <br></br><p className="prevent-subject">Hand sanitizer and your pet</p>
            <ul>
              <li className="prevent-li">Do not wipe or bathe your pet with alcohol-based hand sanitizers. If your pet gets alcohol-based hand sanitizer on their skin or fur, rinse or wipe down your pet with water immediately.</li>
              <li className="prevent-li">If your pet ingests alcohol-based hand sanitizer (such as chewing the bottle) or is showing signs of illness after accidental exposure, contact your veterinarian or pet poison control immediately.</li>
            </ul>





            <a className="return-top" id="wearing-gloves" href="#prevent-top">Return to Top</a><br></br>
            <br></br><p className="prevent-subject-header">Wearing Gloves</p><br></br>
            <p className="prevent-p">Practice <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">everyday preventive actions</a> like keeping <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distance</a> (at least 6 feet) from others, washing your hands with soap and water for 20 seconds (or using a hand sanitizer with at least 60% alcohol), and wearing a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">mask</a> when you have to go out in public.</p>
            <br></br><p className="prevent-subject">When to use gloves</p>
            <ul>
              <b>When Cleaning</b><br></br>
              <p className="prevent-p">When you are routinely <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html">cleaning and disinfecting your home</a>.</p>

              <li className="prevent-li">Follow precautions listed on the disinfectant product label, which may include-
                <ul>
                  <li className="prevent-li-li">Wearing gloves (reusable or disposable)</li>
                  <li className="prevent-li-li">Having good ventilation by turning on a fan or opening a window to get fresh air into the room you’re cleaning</li>
                </ul>
              </li>
              <li className="prevent-li">Wash your hands after you have removed the gloves.</li>
              <br></br><b>When caring for someone who is sick</b>
              <p className="prevent-p">If you are providing care to someone who is <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/care-for-someone.html">sick at home or in another non-healthcare setting</a></p>
              <li className="prevent-li">Use disposable gloves when cleaning and disinfecting the area around the person who is sick or other surfaces that may be frequently touched in the home.</li>
              <li className="prevent-li">Use disposable gloves when touching or having contact with blood, stool, or body fluids, such as saliva, mucus, vomit, and urine.</li>
              <li className="prevent-li">After using disposable gloves, throw them out in a lined trash can. Do not disinfect or reuse the gloves.</li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/handwashing/index.html">Wash your hands</a> after you have removed the gloves.</li>
            </ul>


            <br></br><p className="prevent-subject">When gloves aren’t needed</p>
            <ul>
              <li className="prevent-li">Wearing gloves outside of these instances (for example, when using a shopping cart or using an ATM) will not necessarily protect you from getting COVID-19 and may still lead to the spread of germs.</li>
              <li className="prevent-li">The best way to protect yourself from germs when running errands and after going out is to regularly wash your hands with soap and water for 20 seconds or use hand sanitizer with at least 60% alcohol.</li>

            </ul>
            <iframe className="iframe3" width="560" height="315" src="https://www.youtube.com/embed/B5Aj1dNz0oo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <br></br><p className="prevent-subject">Protect yourself in other ways</p>
            <p className="prevent-p">COVID-19 is a respiratory virus and is mainly spread through droplets created when a person who is infected coughs, sneezes, or talks.<br></br>You can protect yourself by</p>
            <ul>
              <li className="prevent-li">Keeping <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distance</a> (at least 6 feet) from others</li>
              <li className="prevent-li">Washing your hands with soap and water for 20 seconds (or using a hand sanitizer with at least 60% alcohol) at <a target="_blank" href="https://www.cdc.gov/handwashing/when-how-handwashing.html">key times</a></li>

              <li className="prevent-li">Practicing <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">everyday preventive actions</a></li>

            </ul>

            <br></br><p className="prevent-subject">Gloves in the workplace</p>
            <p className="prevent-p">Guidelines and recommendations for glove use in <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/respirator-use-faq.html#Gloves">healthcare</a> and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/organizations/businesses-employers.html">work settings</a> will differ from recommendations for the general public.</p>

            <a id="cleaning-your-home" className="return-top" href="#prevent-top">Return to Top</a><br></br>
            <br></br><p className="prevent-subject-header">Cleaning Your Home</p><br></br>

            <br></br><p className="prevent-subject">What you need to know</p>
            <ul>
              <li className="prevent-li">Wear reusable or disposable gloves for routine cleaning and disinfection.</li>
              <li className="prevent-li">Clean surfaces using soap and water, then use disinfectant.</li>
              <li className="prevent-li">Clean or launder items according to the manufacturer’s instructions.</li>
              <li className="prevent-li">Wash your hands often with soap and water for 20 seconds.</li>
              <li className="prevent-li">If <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html#sick-person">someone is sick,</a> keep a separate bedroom and bathroom for the person who is sick (if possible).</li>
            </ul>


            <br></br><p className="prevent-subject">How to clean and disinfect</p>
            <b>Clean</b><br></br>
            <p className="prevent-p">Wearing gloves outside of these instances (for example, when using a shopping cart or using an ATM) will not necessarily protect you from getting COVID-19 and may still lead to the spread of germs. The best way to protect yourself from germs when running errands and after going out is to regularly wash your hands with soap and water for 20 seconds or use hand sanitizer with at least 60% alcohol.</p>
            <ul>
              <li className="prevent-li">Wear reusable or disposable gloves for routine cleaning and disinfection.</li>
              <li className="prevent-li">Clean surfaces using soap and water, then use disinfectant.</li>
              <li className="prevent-li">Cleaning with soap and water <b>reduces number of germs, dirt and impurities</b> on the surface. <b>Disinfecting kills germs</b> on surfaces.</li>
              <li className="prevent-li">Practice routine cleaning of frequently touched surfaces. High touch surfaces include:
              <ul>
                  <li className="prevent-li-li">Tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, sinks, etc.</li></ul></li>
            </ul>

            <br></br><b>Disinfect</b><br></br>
            <ul>
              <li className="prevent-li">Disinfect with a household disinfectant on List N: Disinfectants for use against SARs-CoV-2external icon, the virus that causes COVID-19.<br></br>Follow the instructions on the label to ensure safe and effective use of the product. Read EPA’s infographic on how to use these disinfectant productsexternal icon safely and effectively.<br></br>Many products recommend:
              <ul>
                  <li className="prevent-li-li">Keeping surface wet for a period of time (see product label)</li>
                  <li className="prevent-li-li">Precautions such as wearing gloves and making sure you have good ventilation during use of the product</li>
                </ul>
              </li>
              <br></br><b>Always read and follow the directions on the label </b>to ensure safe and effective use.<br></br>
              <li className="prevent-li">Wear skin protection and consider eye protection for potential splash hazards</li>
              <li className="prevent-li">Ensure adequate ventilation</li>
              <li className="prevent-li">Use no more than the amount recommended on the label</li>
              <li className="prevent-li">Use water at room temperature for dilution (unless stated otherwise on the label)</li>
              <li className="prevent-li">Avoid mixing chemical products</li>
              <li className="prevent-li">Label diluted cleaning solutions</li>
              <li className="prevent-li">Store and use chemicals out of the reach of children and pets</li>
              <p className="prevent-p">You should never eat, drink, breathe or inject these products into your body or apply directly to your skin as they can cause serious harm. Do not wipe or bathe pets with these products or any other products that are not approved for animal use.<br></br>See <a target="_blank" href="https://www.epa.gov/pesticide-registration/six-steps-safe-effective-disinfectant-use">EPA’s 6 steps for Safe and Effective Disinfectant Use</a>.<br></br>Special considerations should be made for people with asthma and they should not be present when cleaning and disinfecting is happening as this can trigger asthma exacerbations. <a target="_blank" href="https://www.cdc.gov/asthma/reduce_triggers.html">Learn more about reducing asthma triggers.</a></p>
              <li className="prevent-li">Diluted household bleach solutions can be used if appropriate for the surface. Unexpired household bleach will be effective against coronaviruses when properly diluted.
              <ul>
                  <li className="prevent-li-li">Use bleach containing 5.25–8.25% sodium hypochlorite. Do not use a bleach product if the percentage is not in this range or is not specified.</li>
                  <li className="prevent-li-li">Follow the manufacturer’s application instructions for the surface, ensuring a contact time of at least 1 minute.</li>
                  <li className="prevent-li-li">Ensure proper ventilation during and after application.</li>
                  <li className="prevent-li-li">Check to ensure the product is not past its expiration date.</li>
                  <li className="prevent-li-li">Never mix household bleach with ammonia or any other cleanser. This can cause fumes that may be very dangerous to breathe in.</li>
                </ul>
              </li>
              <li className="prevent-li">Prepare a bleach solution by mixing:
              <ul>
                  <li className="prevent-li-li">5 tablespoons (1/3rd cup) of 5.25–8.25% bleach per gallon of room temperature water or</li>
                  <li className="prevent-li-li">4 teaspoons of 5.25–8.25% bleach per quart of room temperature water</li>
                </ul></li>
              <li className="prevent-li">Bleach solutions will be effective for disinfection up to 24 hours.</li>
              <li className="prevent-li"><b>Alcohol solutions with at least 70% alcohol may also be used.</b></li>

            </ul>

            <br></br><b>Soft surfaces</b><br></br>
            <p className="prevent-p">For soft surfaces such as carpeted floor, rugs, and drapes.</p>
            <ul>
              <li className="prevent-li"><b>Clean the surface using soap and water</b> or with cleaners appropriate for use on these surfaces.</li>
              <li className="prevent-li"><b>Launder items</b> (if possible) according to the manufacturer’s instructions. Use the warmest appropriate water setting and dry items completely.</li>
              OR<br></br>
              <li className="prevent-li"><b>Disinfect with a household disinfectant on <a target="_blank" href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">List N: Disinfectants for use against SARs-CoV-2</a></b>, the virus that causes COVID-19.</li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html#Cleaning-and-Disinfection">Vacuum as usual.</a></li>
            </ul>

            <br></br><b>Electronics</b>
            <p className="prevent-p">For electronics, such as tablets, touch screens, keyboards, and remote controls.</p>
            <ul>
              <li className="prevent-li">Consider putting a wipeable cover on electronics.</li>
              <li className="prevent-li">Follow manufacturer’s instruction for cleaning and disinfecting.
              <ul>
                  <li className="prevent-li-li">If no guidance, use alcohol-based wipes or sprays containing at least 70% alcohol. Dry surface thoroughly.</li></ul></li>
            </ul>


            <br></br><b>Laundry</b>
            <p className="prevent-p">For clothing, towels, linens and other items.</p>

            <ul>
              <li className="prevent-li">Launder items according to the manufacturer’s instructions. Use the warmest appropriate water setting and dry items completely.</li>
              <li className="prevent-li"><b>Wear disposable gloves</b> when handling dirty laundry from a person who is sick.</li>
              <li className="prevent-li">Dirty laundry from a person who is sick can be washed with other people’s items.</li>
              <li className="prevent-li"><b>Do not shake</b> dirty laundry.</li>
              <li className="prevent-li">Clean and <b>disinfect clothes hampers</b> according to guidance above for surfaces.</li>
              <li className="prevent-li">Remove gloves, and wash hands right away.</li>
            </ul>


            <br></br><b>Clean hands often</b>
            <ul>
              <li className="prevent-li"><b>Key times to clean hands</b>
                <ul>
                  <li className="prevent-li-li">Immediately after removing gloves and after contact with a person who is sick.</li>
                  <li className="prevent-li-li">After blowing one’s nose, coughing, or sneezing</li>
                  <li className="prevent-li-li">After using the restroom</li>
                  <li className="prevent-li-li">Before eating or preparing food</li>
                  <li className="prevent-li-li">After contact with animals or pets</li>
                  <li className="prevent-li-li">Before and after providing routine care for another person who needs assistance (e.g. a child)</li>
                </ul>
              </li>
              <li className="prevent-li"><b>Wash your hands often</b> with soap and water for 20 seconds.</li>
              <li className="prevent-li"><b>Hand sanitizer:</b> If soap and water are not readily available and hands are not visibly dirty, use a hand sanitizer that contains at least 60% alcohol. However, if hands are visibly dirty, always wash hands with soap and water.</li>
              <br></br><b>Always read and follow the directions on the label </b>to ensure safe and effective use.
              <li className="prevent-li">Keep hand sanitizers away from fire or flame</li>
              <li className="prevent-li">For children under six years of age, hand sanitizer should be used with adult supervision</li>
              <li className="prevent-li">Always store hand sanitizer out of reach of children and pets</li>
              See <a target="_blank" href="https://www.fda.gov/consumers/consumer-updates/safely-using-hand-sanitizer">FDA’s Tips for Safe Sanitizer Use</a> and <a target="_blank" href="https://www.cdc.gov/handwashing/hand-sanitizer-use.html">CDC's Hand Sanitizer Use Considerations</a>
              <li className="prevent-li"><b>Avoid touching</b> your eyes, nose, and mouth with unwashed hands.</li>
            </ul>



            <br></br><p className="prevent-subject">HVAC, ventilation, and filtration</p><br></br>
            <p className="prevent-p">Ventilation and filtration provided by heating, ventilating, and air-conditioning (HVAC) systems can reduce the airborne concentration of the virus that causes COVID-19 (SARS-CoV-2), which can reduce the risk of transmission through the air.</p>
            <ul>
              <li className="prevent-li">Check to be sure your HVAC filter is correctly in place and consider upgrading the filter to the highest-rated filter that your system can accommodate (consult your HVAC manual or an HVAC professional for details).</li>
              <li className="prevent-li">HVAC systems only filter the air when the fan is running, so run the system fan for longer times, or continuously.  Many systems can be set to run the fan even when no heating or cooling is taking place.</li>
              <li className="prevent-li">When used properly, air purifiers can help reduce airborne contaminants, including viruses, in a home or confined space.</li>
              <li className="prevent-li">Improve ventilation with outside air to improve indoor air quality:
              <ul>
                  <li className="prevent-li-li">Open the windows, or screened doors, if possible.</li>
                  <li className="prevent-li-li">Operate a window air conditioner that has an outdoor air intake or vent, with the vent open.</li>
                  <li className="prevent-li-li">Open the outside air intake of the HVAC system, if yours has one (this is not common).</li>
                  <li className="prevent-li-li">Operate a bathroom fan when the bathroom is in use or continuously, if possible.</li>
                  <li className="prevent-li-li">Avoid these actions when outdoor air pollution is high or when it makes your home too cold, hot, or humid.</li>
                </ul></li>
              <li className="prevent-li">Care should be taken with portable ventilation equipment, for example, fans, to minimize air blowing from one person directly at another person to reduce the potential spread of any airborne or aerosolized viruses.</li>
              <li className="prevent-li">Running your HVAC system, using an air purifier or a portable air cleaner, and increasing ventilation <b>are not enough</b> to protect yourself and your family from COVID-19. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html">Continue to follow other prevention guidelines.</a></li>
              <li className="prevent-li">Use of ozone generators in occupied spaces is <b>not</b> recommended. When used at concentrations that do not exceed public health standards, ozone applied to indoor air does not effectively remove viruses, bacteria, mold, or other biological pollutants.</li>
            </ul>

            <br></br><p className="prevent-subject">When someone is sick</p>
            <b>Bed and bathroom</b><br></br>
            <p className="prevent-p">Keep <b>separate bedroom and bathroom for a person who is sick</b> (if possible).</p>
            <ul>
              <li className="prevent-li">The person who is sick should stay separated from other people in the home (as much as possible).</li>
              <li className="prevent-li"><b>If you have a separate bedroom and bathroom:</b> Wear disposable gloves and only clean the area around the person who is sick when needed, such as when the area is soiled. This will help limit your contact with the person who is sick.
              <ul>
                  <li className="prevent-li-li">Caregivers can <b>provide personal cleaning supplies</b> to the person who is sick (if appropriate). Supplies include tissues, paper towels, cleaners, and <a target="_blank" href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">EPA-registered disinfectants</a>. If they feel up to it, the person who is sick can clean their own space.</li>
                </ul>
              </li>
              <li className="prevent-li"><b>If shared bathroom:</b> The person who is sick should clean and disinfect after each use. If this is not possible, the caregiver should wait as long as possible before cleaning and disinfecting.
              </li>
              <li className="prevent-li">See <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/guidance-prevent-spread.html">precautions for household members and caregivers</a> for more information.</li>
            </ul>

            <br></br><b>Food</b><br></br>
            <ul>
              <li className="prevent-li"><b>Stay separated:</b> The person who is sick should eat (or be fed) in their room if possible.</li>
              <li className="prevent-li"><b>Wash dishes and utensils using disposable gloves and hot water:</b> Handle any used dishes, cups/glasses, or silverware with gloves. Wash them with soap and hot water or in a dishwasher.</li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/handwashing/when-how-handwashing.html">Clean hands</a> after taking off gloves or handling used items.</li>
            </ul>

            <br></br><b>Trash</b><br></br>
            <ul>
              <li className="prevent-li"><b>Dedicated, lined trash can:</b> If possible, dedicate a lined trash can for the person who is sick. Use disposable gloves when removing garbage bags, and handling and disposing of trash. Wash hands afterwards.</li>
            </ul>

            <a id="social-distancing" className="return-top" href="#prevent-top"><br></br>Return to Top</a>
            <br></br><p className="prevent-subject-header">Social Distancing</p><br></br>
            <br></br><p className="prevent-subject">What is social distancing?</p>
            <p className="prevent-p">Social distancing, also called “physical distancing,” means keeping a safe space between yourself and other people who are not from your household.

<br></br>To practice social or physical distancing, stay at least 6 feet (about 2 arms’ length) from other people who are not from your household in both indoor and outdoor spaces.

<br></br>Social distancing should be practiced in combination with other <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">everyday preventive actions</a> to reduce the spread of COVID-19, including <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">wearing masks,</a> avoiding touching your face with unwashed hands, and frequently washing your hands with soap and water for at least 20 seconds.</p>

            <br></br><p className="prevent-subject">Why practice social distancing?</p>
            <p className="prevent-p">COVID-19 spreads mainly among people who are in close contact (within about 6 feet) for a prolonged period. Spread happens when an infected person coughs, sneezes, or talks, and droplets from their mouth or nose are launched into the air and land in the mouths or noses of people nearby. The droplets can also be inhaled into the lungs. Recent studies indicate that people who are infected but do not have symptoms likely also play a role in the spread of COVID-19. Since people can spread the virus before they know they are sick, it is important to stay at least 6 feet away from others when possible, even if you—or they—do not have any symptoms. Social distancing is especially important for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">people who are at higher risk</a> for severe illness from COVID-19.

<br></br>If you are sick with COVID-19, have <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms consistent with COVID-19</a>, or have been in close contact with someone who has COVID-19, it is important to stay home and away from other people <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine-isolation.html">until it is safe to be around others</a>.

<br></br>COVID-19 can live for hours or days on a surface, depending on factors such as sunlight, humidity, and the type of surface. It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or eyes. However, this is not thought to be the main way the virus spreads. Social distancing helps limit opportunities to come in contact with contaminated surfaces and infected people outside the home.

<br></br>Although the risk of severe illness may be different for everyone, anyone can get and spread COVID-19. Everyone has a role to play in slowing the spread and protecting themselves, their family, and their community. In addition to practicing <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">everyday steps to prevent COVID-19</a>, keeping space between you and others is one of the best tools we have to avoid being exposed to this virus and slowing its spread in communities.</p>

            <br></br><p className="prevent-subject">Tips for Social Distancing</p>
            <p className="prevent-p">When going out in public, it is important to stay at least 6 feet away from other people and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover-guidance.html">wear a mask</a> to slow the spread of COVID-19. Consider the following tips for practicing social distancing when you <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/deciding-to-go-out.html">decide to go out</a>.</p>
            <ul>
              <li className="prevent-li"><b>Know Before You Go:</b> Before going out, know and follow the guidance from local public health authorities where you live.</li>
              <li className="prevent-li"><b>Prepare for Transportation:</b> Consider social distancing options to travel safely when running errands or commuting to and from work, whether walking, bicycling, wheelchair rolling, or using public transit, rideshares, or taxis. When using public transit, try to keep at least 6 feet from other passengers or transit operators – for example, when you are waiting at a bus station or selecting seats on a bus or train. When using rideshares or taxis, avoid pooled rides where multiple passengers are picked up, and sit in the back seat in larger vehicles so you can remain at least 6 feet away from the driver. Follow these additional tips to protect yourself while using transportation.</li>
              <li className="prevent-li"><b>Limit Contact When <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/going-out.html">Running Errands</a>:</b> Only visit stores selling household essentials in person when you absolutely need to, and stay at least 6 feet away from others who are not from your household while shopping and in lines. If possible, use drive-thru, curbside pick-up, or delivery services to limit face-to-face contact with others. Maintain physical distance between yourself and delivery service providers during exchanges and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">wear a mask</a>.</li>
              <li className="prevent-li"><b>Choose Safe Social Activities:</b> It is possible to stay socially connected with friends and family who don’t live in your home by calling, using video chat, or staying connected through social media. If meeting others in person (e.g., at small outdoor gatherings, yard or driveway gathering with a small group of friends or family members), stay at least 6 feet from others who are not from your household. Follow <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/personal-social-activities.html">these steps</a> to stay safe if you will be participating in personal and social activities outside of your home.</li>
              <li className="prevent-li"><b>Keep Distance at <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/large-events/considerations-for-events-gatherings.html">Events and Gatherings:</a></b> It is safest to avoid crowded places and gatherings where it may be difficult to stay at least 6 feet away from others who are not from your household. If you are in a crowded space, try to keep 6 feet of space between yourself and others at all times, and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">wear a mask</a>. Masks are especially important in times when physical distancing is difficult. Pay attention to any physical guides, such as tape markings on floors or signs on walls, directing attendees to remain at least 6 feet apart from each other in lines or at other times. Allow other people 6 feet of space when you pass by them in both indoor and outdoor settings.</li>
              <li className="prevent-li"><b>Stay Distanced While Being Active:</b> Consider going for a walk, bike ride, or wheelchair roll in your neighborhood or in another safe location where you can maintain at least 6 feet of distance between yourself and other pedestrians and cyclists. If you decide to visit a nearby <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/visitors.html">park, trail, or recreational facility</a>, first check for closures or restrictions. If open, consider how many other people might be there and choose a location where it will be possible to keep at least 6 feet of space between yourself and other people who are not from your household.</li>
              Many people have personal circumstances or situations that present challenges with practicing social distancing to prevent the spread of COVID-19. Please see the following guidance for additional recommendations and considerations:<br></br>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/living-in-close-quarters.html">Households Living in Close Quarters: How to Protect Those Who Are Most Vulnerable</a></li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/shared-housing/index.html">Living in Shared Housing</a></li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-disabilities.html">People with Disabilities</a></li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/homelessness.html">People Experiencing Homelessness</a></li>
            </ul>




            <a id="household-checklist" className="return-top" href="#prevent-top">Return to Top</a><br></br>
            <br></br><p className="prevent-subject-header">Household Checklist</p><br></br>
            <p className="prevent-p">Get your household ready for COVID-19. As a family, you can plan and make decisions now that will protect you and your family.</p>

            <br></br><p className="prevent-subject">Stay informed and in touch</p>
            <ul>
              <li className="prevent-li">Get up-to-date information about local COVID-19 activity from public health officials.</li>
              <li className="prevent-li">Create a list of local organizations you and your household can contact in case you need access to information, healthcare services, support, and resources.</li>
              <li className="prevent-li">Create an emergency contact list including family, friends, neighbors, carpool drivers, healthcare providers, teachers, employers, the local public health department, and other community resources.</li>
            </ul>

            <br></br><p className="prevent-subject">Prepare for possible illness</p>
            <ul>
              <li className="prevent-li">Consider members of the household who may have an <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">increased risk for severe illness</a>.</li>
              <li className="prevent-li">Choose a room in your house that can be used to separate sick household members from others.</li>
            </ul>

            <br></br><p className="prevent-subject">Those at higher risk for severe illness</p>
            <ul>
              <li className="prevent-li">Take additional precautions for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-increased-risk.html">those at higher risk for severe illness</a>, particularly older adults and those of any age who have severe underlying health conditions.</li>
            </ul>

            <br></br> <p className="prevent-subject">Take everyday preventive actions</p>
            <ul>
              <li className="prevent-li">Wash your hands frequently.</li>
              <li className="prevent-li">Avoid touching your eyes, nose, and mouth with unwashed hands.</li>
              <li className="prevent-li">Stay at least 6 feet (about 2 arm lengths) from other people.</li>
              <li className="prevent-li">Stay home when you are sick.</li>
              <li className="prevent-li">Cover your cough or sneeze with a tissue, then throw the tissue in the trash.</li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cleaning-disinfection.html">Clean and disinfect</a> frequently touched objects and surfaces.</li>
              <li className="prevent-li">Wear a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html">mask</a> when you go out in public.
              <ul>
                  <li className="prevent-li-li">Masks should not be placed on young children under age 2, anyone who has trouble breathing, or is unconscious, incapacitated or otherwise unable to remove the mask without assistance.</li></ul></li>
              <li className="prevent-li">More on <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">how to protect yourself</a></li>
            </ul>

            <p className="prevent-p">If you have a fever, cough or other symptoms, you might have COVID-19. Most people have mild illness and are able to recover at home. If you think you may have been exposed to COVID-19, contact your healthcare provider.
            <ul>
                <li className="prevent-li">Keep track of your symptoms.</li>
                <li className="prevent-li"><b>If you have <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html#seek-medical-attention">an emergency warning sign</a> (including trouble breathing),</b> get emergency medical care immediately.</li>
              </ul></p>

            <br></br> <p className="prevent-subject">If someone in your home is sick</p>
            <ul>
              <li className="prevent-li">How to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/care-for-someone.html">care for a sick household member</a>.</li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">What to do if you are sick.</a></li>
              <li className="prevent-li">How to decide if others in the home should <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine-isolation.html">quarantine</a>.</li>
              <li className="prevent-li">Continue to practice <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">everyday preventive actions</a>.</li>
            </ul>

            <br></br> <p className="prevent-subject">Generations in the household</p>
            <ul>
              <li className="prevent-li">Those who are at an <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">increased risk for severe illness</a>: take additional precautions. Make sure you have access to several weeks of medications and supplies in case you need to stay home. Stay at home if possible.</li>
              <li className="prevent-li">Children: <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children.html">How to keep kids healthy</a>. Notify your child’s school or daycare if your child becomes sick with COVID-19.</li>
              <li className="prevent-li">Take care of the <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html">emotional health</a> of your household members, including yourself.</li>
            </ul>

            <br></br><p className="prevent-subject">Pets in the household</p>
            <ul>
              <li className="prevent-li">Treat <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/pets.html">pets</a> as you would other human family members – do not let pets interact with people outside the household.</li>
            </ul>

            <a id="living-in-close-quarters" className="return-top" href="#prevent-top">Return to Top</a><br></br>
            <br></br><p className="prevent-subject-header">Living in Close Quarters</p><br></br>
            <p className="prevent-p">This guidance is intended for people living together in close quarters, such as people who share a small apartment, or for people who live in the same household with large or extended families.

<br></br><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">People of any age who have certain underlying medical conditions</a> are at risk for getting COVID-19. Some groups have an <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">increased risk for severe illness</a> from coronavirus disease 2019 (COVID-19). The following information is aimed to help you protect those who are most vulnerable in your household.</p>
            <br></br><p className="prevent-subject">Everyone should limit risks</p>
            <p className="prevent-p">If your household includes one or more vulnerable individuals then <b>all family members should act as if they, themselves, are at higher risk.</b> Learn how to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">protect yourself and others</a>.</p>
            <br></br><p className="prevent-subject">Limit errands</p>
            <p className="prevent-p">Family members should leave only when absolutely necessary. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/essential-goods-services.html">Essential errands</a> include going to the grocery store, pharmacy, or medical appointments that cannot be delayed (e.g., infants or individuals with serious health conditions in need of aid).<br></br>If you must leave the house, please do the following:</p>
            <ul>
              <li className="prevent-li">Choose one or two family members who are not at a higher risk to run the essential errands.</li>
              <li className="prevent-li">Wear a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">mask</a>, avoid crowds, practice social distancing, and follow these recommended <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/essential-goods-services.html">tips for running errands</a>.</li>
              <li className="prevent-li">If feasible, use forms of transportation that minimize close contact with others (e.g., biking, walking, driving or riding by car either alone or with household members).</li>
              <li className="prevent-li">If necessary to use public transportation:
              <ul>
                  <li className="prevent-li-li">Maintain a 6-foot distance from other passengers as much as possible.</li>
                  <li className="prevent-li-li">Avoid touching high-touch surfaces such as handrails, and wash hands or use hand sanitizers as soon as possible after leaving.</li>
                  <li className="prevent-li-li">Follow CDC guidance on how to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/using-transportation.html">protect yourself when using transportation</a>.</li>
                  <li className="prevent-li-li">Try to commute during less busy times.</li>
                  <li className="prevent-li-li"><a target="_blank" href="https://www.cdc.gov/handwashing/when-how-handwashing.html">Clean your hands</a> as soon as possible after the trip.</li>
                </ul>
              </li>
              <li className="prevent-li">If necessary to ride in a car with members of different households:
                <ul>
                  <li className="prevent-li-li">Limit close contact and create space between others in the vehicle as possible.</li>
                  <li className="prevent-li-li">Improve air flow in the car by opening the window or placing air conditioning on non-recirculation mode.</li>
                </ul>
              </li>
              <li className="prevent-li">Wash your hands immediately after you return home.</li>
              <li className="prevent-li">Maintain as much physical distance as possible with those at higher risk in the home. For example, avoid hugging, kissing, or sharing food or drinks.</li>
            </ul>




            <br></br><p className="prevent-subject">Vulnerable members should avoid caring for children and those who are sick</p>
            <p className="prevent-p">Those who are at increased risk for severe illness should avoid <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/caring-for-children.html">caring for the children</a> in their household, if possible. If people at higher risk must care for the children in their household, <b>the children in their care should not have contact with individuals outside the household. Members of the household who are at high risk should also avoid taking care of sick people of any age who are sick.</b></p>
            <br></br><p className="prevent-subject">Separate a household member who is sick</p>
            <p className="prevent-p">Provide a separate bedroom and bathroom for the person who is sick, if possible. If you cannot provide a separate room and bathroom, try to separate them from other household members as much as possible. <b>Keep people at higher risk separated from anyone who is sick.</b></p>
            <ul>
              <li className="prevent-li">If possible, have only one person in the household <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/care-for-someone.html">take care of the person who is sick</a>. This caregiver should be someone who is not at higher risk for severe illness and should minimize contact with other people in the household.
                <ul>
                  <li className="prevent-li-li">Identify a different caregiver for other members of the household who require help with cleaning, bathing, or other daily tasks.</li>
                </ul>
              </li>
              <li className="prevent-li">If possible, maintain 6 feet between the person who is sick and other family or household members.</li>
              <li className="prevent-li">If you need to share a bedroom with someone who is sick, make sure the room has good air flow.
              <ul>
                  <li className="prevent-li-li">Open the window and turn on a fan to bring in and circulate fresh air if possible.</li>
                  <li className="prevent-li-li">Maintain at least 6 feet between beds if possible.</li>
                  <li className="prevent-li-li">Sleep head to toe.</li>
                  <li className="prevent-li-li">Put a curtain around or place other physical divider (e.g., shower curtain, room screen divider, large cardboard poster board, quilt, or large bedspread) to separate the ill person’s bed.</li>
                </ul>
              </li>
              <li className="prevent-li">If you need to share a bathroom with someone who is sick, the person who is sick should clean and disinfect the frequently touched surfaces in the bathroom after each use. If this is not possible, the person who does the cleaning should:
              <ul>
                  <li className="prevent-li-li">Open outside doors and windows before entering and use ventilating fans to increase air circulation in the area.</li>
                  <li className="prevent-li-li">Wait as long as possible before entering the room to clean and disinfect or to use the bathroom.</li>
                </ul>
              </li>
              <li className="prevent-li">If you are sick, do not help prepare food. Also, eat separately from the family.</li>
            </ul>




            <a id="living-in-shared-housing" className="return-top" href="#prevent-top">Return to Top</a><br></br>
            <br></br><p className="prevent-subject-header">Living in Shared Housing</p><br></br>
            <p className="prevent-p">Shared or congregate housing includes apartments, condominiums, student or faculty housing, national and state park staff housing, transitional housing, and domestic violence and abuse shelters.<br></br>Shared housing residents often gather together closely for social, leisure, and recreational activities, shared dining, laundry facilities, stairwells, and elevators and may have challenges with <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing</a> to prevent the spread of COVID-19.</p>


            <br></br><p className="prevent-subject">Protect yourself</p>
            <ul>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">Social distance</a> by staying at least 6 feet apart from others that you do not live with.</li>
              <li className="prevent-li">CDC recommends that people wear masks in public settings when around people who don’t live in your household, especially when other <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing</a> measures are difficult to maintain.</li>
              <li className="prevent-li">Seek out a “buddy” in the facility who will check on you and make sure your are getting basic necessities, including food and household essentials.</li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">Everyday preventative actions everyone should take</a>.</li>
            </ul>

            <br></br><p className="prevent-subject">People at-risk</p>
            <ul>
              <li className="prevent-li">Keep up-to-date lists of medical conditions and medications, and periodically check to ensure you have a sufficient supply of your prescription and over-the-counter medications.</li>
              <li className="prevent-li">Contact your healthcare provider to ask about getting extra necessary medications to have on hand for a longer period of time, or to consider using a mail-order option for medications.</li>
              <li className="prevent-li">Be aware of serious symptoms of if you have underlying conditions, of <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">COVID-19</a> symptoms, and know who to ask for help or when to call 911.</li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/what-you-can-do.html">Extra steps to take if you are at-risk</a>.</li>
            </ul>

            <br></br><p className="prevent-subject">Know where to get information</p>
            <ul>
              <li className="prevent-li">Make sure you know how your facility is going to communicate COVID-19 information to you; email, websites, hotlines, automated text messaging, newsletters, and flyers to help communicate information on.</li>
            </ul>

            <br></br><p className="prevent-subject">The facility</p>
            <ul>
              <li className="prevent-li">COVID-19 prevention supplies should be provided in common areas, such as soap, alcohol-based hand sanitizers that contain at least 60% alcohol, tissues, trash baskets, and, if possible, <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">masks</a> that are washed or discarded after each use.</li>
              <li className="prevent-li">Non-essential volunteers and visitors in shared areas should be limited or avoided.</li>
              <li className="prevent-li">Staff should avoid entering residents’ rooms or living quarters unless it is necessary. Staff should use virtual communications and check ins (phone or video chat), as appropriate.</li>
            </ul>

            <br></br><p className="prevent-subject">Common spaces</p>
            <p className="prevent-p">Be flexible, rules may change in common areas. Maintain 6 feet of social (physical) distance between yourself and everyone that you do not live with. This may mean there will be alternatives to activities, cancelled activities, or closed areas. If you see people in areas that are small, like stairwells and elevators, consider going one at a time. Here are some examples of how the rules in common spaces may change:</p>

            <br></br><p className="prevent-subject">Shared kitchens, dining rooms, laundry rooms, bathrooms</p>
            <ul>
              <li className="prevent-li">Access should be available, but the number of people should be restricted so that everyone can stay at least 6 feet apart from one another.</li>
              <li className="prevent-li">People who are sick, their roommates, and those who have higher risk of severe illness from COVID-19 should eat or be fed in their room, if possible.</li>
              <li className="prevent-li">Do not share dishes, drinking glasses, cups, or eating utensils. Non-disposable food service items used should be handled with gloves and washed with dish soap and hot water or in a dishwasher.</li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/disinfecting-building-facility.html">Guidelines for doing laundry</a> such as washing instructions and handling of dirty laundry should be posted.</li>
              <li className="prevent-li">Sinks could be an infection source and should avoid placing toothbrushes directly on counter surfaces. Totes can be used for personal items so they do not touch the bathroom countertop.</li>
            </ul>

            <br></br><p className="prevent-subject">Recreational areas such as activity rooms, exercise rooms, pools, and hot tubs</p>
            <ul>
              <li className="prevent-li">Consider closing or restricting the number of people allowed in at one time to ensure everyone can stay at least 6 feet apart, except for essential activities only, such as water therapy.</li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/parks-rec/aquatic-venues.html">Considerations for operators of pools and other aquatic venues</a></li>
            </ul>


            <b>If a resident has or thinks they have COVID-19</b><br></br>
            <br></br><p className="prevent-subject">Administrators</p>
            <p className="prevent-p">Residents are not required to notify administrators if they think they may or have a confirmed case of COVID-19. If administrators do receive information that someone in your facility has COVID-19, they should work with the <a target="_blank" href="https://www.naccho.org/membership/lhd-directory">local health department</a> to notify anyone in the building who may have been exposed (had close contact with the sick person) while maintaining the confidentiality of the sick person as required by the Americans with Disabilities Act (ADA) and, if applicable, the Health Insurance Portability and Accountability Act (HIPAA).</p>
            <ul>
              <li className="prevent-li">If possible, designate a separate bathroom for residents with COVID-19 symptoms.
                <ul>
                  <li className="prevent-li-li">Consider reducing cleaning frequency in bedrooms and bathrooms dedicated to persons with COVID-19 symptoms to as-needed cleaning (e.g., soiled items and surfaces) to avoid unnecessary contact with the ill persons.</li>
                </ul>
              </li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/shared-congregate-house/guidance-shared-congregate-housing.html">Guidance for administrators of shared housing</a></li>
            </ul>

            <br></br><p className="prevent-subject">Sick person and close contacts</p>
            <p className="prevent-p">The sick person, their roommates, and close contacts need to self-isolate – limit their use of shared spaces as much as possible. They should:</p>
            <ul>
              <li className="prevent-li">Wear a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">mask</a> when it is necessary to be in shared spaces.</li>
              <li className="prevent-li">Avoid using public transportation, ride-sharing, or taxis.</li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">What to do if you are sick</a></li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/isolation.html">Isolate if you are sick</a></li>
              <li className="prevent-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/care-for-someone.html">Caring for someone sick at home</a></li>
              Cases of <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/your-health/reinfection.html">reinfection with COVID-19</a> have been reported but are rare.
            </ul>


            <a className="return-top" href="#prevent-top"><br></br>Return to Top</a>

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

        <a href="#faq-top">Return to Top</a>

      </Card>
      </Accordion>

          </Alert>
          {/* END PREVENT */}

          {/* START FREQUENTLY ASKED QUESTIONS */}
          <Alert className="alert" id="frequently_asked_questions" variant="primary" onClose={() => hide_frequently_asked_questions()} dismissible hidden="true">
            <Alert.Heading className="card-top-heading"><a id="faq-top">Frequently Asked Questions</a></Alert.Heading>
            <p>


              <Table className="table">
                {/* <a id="Top"><thead className="on-this-page">On This Page</thead></a><br></br> */}
                <tbody>
                  <tr >
                    <a href="#Water"><td className="tdleft" >Water</td></a>

                    <a href="#Spread"><td className="tdright" >Spread</td></a>
                  </tr>
                  <tr >
                    <a href="#Basics"><td className="tdleft" >Basics</td></a>
                    <a href="#Testing"><td className="tdright">Testing</td></a>



                  </tr>
                  <tr >
                    <a href="#Children"><td className="tdleft" >Children</td></a>
                    <a href="#Funerals"><td className="tdright" >Funerals</td></a>


                  </tr>
                  <tr >
                    <a href="#Pets-and-Animals"><td className="tdleft">Pets and Animals</td></a>
                    <a href="#Prevention"><td className="tdright">Prevention</td></a>


                  </tr>
                  <tr >
                    <a href="#Community-Mitigation"><td className="tdleft">Community Mitigation</td></a>
                    <a href="#Contact-Tracing"><td className="tdright" >Contact Tracing</td></a>


                  </tr>

                  <tr >
                    <a href="#Preparing-for-an-Outbreak"><td className="tdleft" >Preparing for an Outbreak</td></a>
                    <a href="#Cleaning-and-Disinfection"><td className="tdright" >Cleaning and Disinfection</td></a>

                  </tr>
                  <tr >
                    <a href="#People-at-Higher-Risk-for-Severe-Illness"><td className="tdcenter">People at Higher Risk for Severe Illness</td></a>

                  </tr>

                  <tr >
                    <a href="#Symptoms-and-Emergency-Warning-Signs"><td className="tdcenter">Symptoms and Emergency Warning Signs</td></a>
                  </tr>

                  <tr >
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

                  <a href="#faq-top">Return to Top</a>

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
                    <Card.Body className="accordion-answer">At this time, CDC has no data to suggest that this new coronavirus or other similar coronaviruses are spread by mosquitoes or ticks. The main way that COVID-19 spreads is from person to person. See <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-covid-spreads.html">How Coronavirus Spreads</a> for more information.
                    </Card.Body>
                  </Accordion.Collapse>

                  <a href="#faq-top">Return to Top</a>

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
                        <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html"><li>How to Wear</li></a>

                        <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wash-cloth-face-coverings.html"><li>How to Wash</li></a>

                        <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-make-cloth-face-covering.html"><li>How to Make</li></a>
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
                        <li><b>Continue</b> to practice <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html">everyday prevention</a>. Wash your hands often, avoid close contact, wear a mask, cover coughs and sneezes, and clean and disinfect frequently touched surfaces often.</li>


                      </ul>
                    For more information, see <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/groups-at-higher-risk.html">Groups at Higher Risk for Severe Illness</a>.

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
                        <li>Contact lens wearers should continue to <a target="_blank" href="https://www.cdc.gov/contactlenses/protect-your-eyes.html">practice safe contact lens wear and care hygiene habits</a> to help prevent against transmission of any contact lens-related infections, such as always washing hands with soap and water before handling lenses.</li>
                        <li>People who are healthy can continue to wear and care for their contact lenses as prescribed by their eye care professional.</li>
                      </ul>
                      Find more information about <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html">how coronavirus spreads</a> and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html">how to protect yourself</a>.<br></br><br></br>
                      Visit <a target="_blank" href="https://www.cdc.gov/contactlenses/index.html">CDC's contact lens website</a> for more information on healthy contact lens wear and care.
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="14">
                    Is contact lens disinfecting solution effective against COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="14">
                    <Card.Body className="accordion-answer">
                      <ul>
                        <li><a target="_blank" href="https://www.cdc.gov/contactlenses/care-systems.html">Hydrogen peroxide-based systems</a> for cleaning, disinfecting, and storing contact lenses should be effective against the virus that causes COVID-19.</li>
                        <ul>
                          <li>For other disinfection methods, such as multipurpose solution and ultrasonic cleaners, there is currently not enough scientific evidence to determine efficacy against the virus.</li>
                        </ul>
                        <li><a target="_blank" href="https://www.cdc.gov/contactlenses/care-systems.html">Always use solution</a> to disinfect your contact lenses and case to kill germs that may be present.</li>
                        <li>Handle your lenses over a surface that has been cleaned and disinfected.</li>
                      </ul>
                      Find more information about <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html">how coronavirus spreads</a> and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html">how to protect yourself</a>.<br></br><br></br>
                      Visit <a target="_blank" href="https://www.cdc.gov/contactlenses/index.html">CDC's contact lens website</a> for more information on healthy contact lens wear and care.
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
                    <Card.Body className="accordion-answer">Clean and disinfect frequently touched surfaces such as tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.  If surfaces are dirty, clean them using detergent or soap and water prior to disinfection. To disinfect, most common EPA-registered household disinfectants will work. See CDC’s recommendations <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cleaning-disinfection.html">for household cleaning and disinfection</a>.</Card.Body>
                  </Accordion.Collapse>

                  <a href="#faq-top">Return to Top</a>

                </Card>

                <Card><a id="If-You-or-Someone-You-Know-is-Sick-or-Had-Contact-with-Someone-who-Has-COVID-19"><Card.Header className="alert-subjects">If You or Someone You Know is Sick or Had Contact with Someone who Has COVID-19</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="17">
                    What should I do if I get sick or someone in my house gets sick?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="17">
                    <Card.Body className="accordion-answer">Most people who get COVID-19 will be able to recover at home. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/guidance-prevent-spread.html">CDC has directions</a> for people who are recovering at home and their caregivers, including:<br></br>
                      <ul>
                        <li>Stay home when you are sick, except to get medical care.</li>
                        <li>Use a separate room and bathroom for sick household members (if possible).</li>
                        <li>Wash your hands often with soap and water for at least 20 seconds, especially after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food.</li>
                        <li>If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol. Always wash hands with soap and water if hands are visibly dirty.</li>
                        <li>Provide your sick household member with clean disposable facemasks to wear at home, if available, to help prevent spreading COVID-19 to others.</li>
                        <li><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/home/cleaning-disinfection.html">Clean the sick room and bathroom</a>, as needed, to avoid unnecessary contact with the sick person.</li>
                      </ul>
                        However, some people may need emergency medical attention. Watch for symptoms and learn <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">when to seek emergency medical attention</a>.<br></br><br></br>
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
                        <li>Be alert for symptoms. Watch for fever, cough, shortness of breath, or other <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms</a> of COVID-19.</li>
                        <li>Take your temperature and follow CDC guidance if you have symptoms.</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <a href="#faq-top">Return to Top</a>

                </Card>

                <Card><a id="Children"><Card.Header className="alert-subjects">Children</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="19">
                    What is the risk of my child becoming sick with COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="19">
                    <Card.Body className="accordion-answer">
                      Based on available evidence, children do not appear to be at higher risk for COVID-19 than adults. While some children and infants have been sick with COVID-19, adults make up most of the known cases to date. However, a few children have developed <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/mis-c.html">multisystem inflammatory syndrome (MIS-C)</a>. Currently, information about this syndrome is limited. CDC is working with state and local health departments to learn more about MIS-C.
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
                      You can find additional information on preventing COVID-19 at <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">How to Protect Yourself and Others</a>. Additional information on how COVID-19 is spread is available at <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/about/transmission.html">How COVID-19 Spreads</a>.<br></br><br></br>
                      More information on <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children.html">Keeping Children Healthy during the COVID19 Outbreak</a> is available online.
                      </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="21">
                    Are the symptoms of COVID-19 different in children than in adults?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="21">
                    <Card.Body className="accordion-answer">
                      No. The symptoms of COVID-19 are similar in children and adults. COVID-19 can look different in different people. For many people, being sick with COVID-19 would be a little bit like having the flu. People can get a fever, cough, or have a hard time taking deep breaths. Most people who have gotten COVID-19 have not gotten very sick. Only a small group of people who get it have had more serious problems.<br></br><br></br>
                      CDC and partners are investigating cases of multisystem inflammatory syndrome in children (MIS-C) associated with COVID-19. Learn more about <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/mis-c.html">COVID-19 and multisystem inflammatory syndrome in children (MIS-C)</a>.</Card.Body>
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
                      Outbreaks can be stressful for adults and children. When you talk with your child, try to stay calm, and reassure them that they are safe. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/talking-with-children.html">Talk to your children</a> about COVID-19 and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/for-parents.html">help them cope with stress</a>.
                      </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="24">
                    What is multisystem inflammatory syndrome in children (MIS-C) and who is at risk?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="24">
                    <Card.Body className="accordion-answer">
                      <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/mis-c.html">Multisystem inflammatory syndrome in children (MIS-C)</a> is a condition where different body parts can become inflamed, including the heart, lungs, kidneys, brain, skin, eyes, or gastrointestinal organs. We do not yet know what causes MIS-C. However, we know that many children with MIS-C had the virus that causes <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">COVID-19</a>, or had been around someone with COVID-19. MIS-C can be serious, even deadly, but most children who were diagnosed with this condition have gotten better with medical care.<br></br><br></br>
                      <b>Contact your child’s doctor, nurse, or clinic right away</b> if your child is showing <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/mis-c.html">symptoms</a> <b>of MIS-C. Seek emergency care right away</b> if your child is showing any of these <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/mis-c.html">emergency warning signs of MIS-C</a> or other concerning signs.</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="25">
                    Can my child hang out with their friends?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="25">
                    <Card.Body className="accordion-answer">
                      The key to slowing the spread of COVID-19 is to practice social distancing. While school is out, children should not have in-person playdates with children from other households. If children are playing outside their own homes, it is essential that they remain 6 feet from anyone who is not in their own household. Some children with certain underlying <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html">medical conditions</a> are at higher risk for severe illness from COVID-19.<br></br><br></br>
                      Make sure children practice <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">everyday preventive behaviors</a>, such as washing their hands often with soap and water. Remember, if children meet outside of school in groups, it can put everyone at risk. <br></br><br></br>
                      For more information, see <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/protect-children.html">Help Stop the Spread of COVID-19 in Children</a>.
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
                        For moe information, see <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children/learning.html">Help Children Learn at Home</a>.
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
                        <li><b>Teach and reinforce <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">everyday preventive actions</a>.</b></li>
                        <li><b>Help your child stay active.</b></li>
                        <li><b>Help your child stay socially connected.</b></li>
                      </ul>
                        For more information, see <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children.html">Keep Children Healthy during the COVID-19 Outbreak</a>.
                      </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="29">
                    Limit time with older adults, including relatives, and people with chronic medical conditions.</Accordion.Toggle>

                  <Accordion.Collapse eventKey="29">
                    <Card.Body className="accordion-answer">
                      <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">Older adults and people who have serious underlying medical conditions</a> are at highest risk of getting sick from COVID-19.<br></br>
                      <ul>
                        <li>If others in your home are at <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">higher risk for severe illness from COVID-19</a>, consider extra precautions to separate your child from those people.</li>
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
                      Learn more about caring for <a target="_blank" href="https://www.cdc.gov/childrenindisasters/children-with-special-healthcare-needs.html">children with special healthcare needs during a disaster</a> and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/people-at-higher-risk.html">people who are at higher risk for severe illness from COVID-19</a>.
                      </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="31">
                    What additional steps should families that have a child with an underlying medical condition take?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="31">
                    <Card.Body className="accordion-answer">
                      In addition to following the recommendations to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html">prevent getting sick</a> and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/essential-goods-services.html">running essential errands</a>, families should take extra steps recommended for persons with <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/groups-at-higher-risk.html">higher risk of severe COVID-19 illness</a> and steps outlined for those with <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">potential COVID-19 exposure or confirmed illness</a>.
                      <br></br>
                      <ul>
                        <li>Identify potential alternative caregivers, if you or other regular caregivers become sick and are unable to care for your child. If possible, these alternative caregivers would not be at <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">higher risk of severe illness from COVID-19</a> themselves.</li>
                        <li>Try to have at least one month of medication and medical supplies on hand. Some health plans allow for a 90-day supply of prescription medications. Consider discussing this option with your child’s healthcare provider.</li>
                        <li>Review any care plans for your child, such as an asthma action plan, and make sure caregivers and backup caregivers are familiar with these plans.</li>
                        <li>If you do not have <a target="_blank" href="https://www.cdc.gov/childrenindisasters/children-with-special-healthcare-needs.html">care plans or an emergency notebook</a>, try to make them. They typically include important information about your child’s medical conditions, how to manage those conditions, how to get in touch with your child’s doctors, allergies, information on medications (names, dosages, and administration instructions), preferences (food and other) or special needs, daily routines and activities, friends, and details about routines that are important to support behavioral and emotional health.</li>
                        <li>Learn if your child’s healthcare providers, including doctors and therapists, have new ways to be contacted or new ways of providing appointments. If they offer telemedicine visits, find out how those are arranged and any additional information you need.</li>
                        <li>If your child receives any support care services in the home that need to be continued, make plans for what you will do if those direct care providers get sick, or if persons in your household are sick.</li>
                        <li>Discuss with the support care agencies and the providers ways to minimize risk for exposure to the virus that causes COVID-19.</li>
                        <ul>
                          <li>If your child or other persons in your household are sick with COVID-19 and are able to recover at home, inform your direct care providers and consider postponing or rescheduling services until the criteria for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">discontinuing home isolation</a> have been met.</li>
                          <li>Ask service providers if they are experiencing any <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a>, or if they have been in contact with someone who has COVID-19.</li>
                          <li>Tell the service provider to:
                            <ul>
                              <li>
                                Wear a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover-faq.html">mask</a> if they will be close (less than 6 feet) to you or persons in your household. Their mask helps protect you if they are infected but do not have symptoms.
                              </li>
                              <li>Ask them to wash their hands with soap and water or, if unavailable, use hand sanitizer with at least 60% alcohol when they enter your home, before and after helping your child (dressing, bathing/showering, transferring, toileting and/or diapering, feeding), after handling tissues, and after changing linens or doing laundry. <a target="_blank" href="https://www.youtube.com/watch?v=d914EnpU4Fo">Learn more about proper handwashing</a>.</li>
                            </ul>
                          </li>
                          <li>Service providers and families should:
                            <ul>
                              <li>Routinely clean and disinfect frequently touched objects and surfaces (counters, tabletops, doorknobs, bathroom fixtures, toilets, phones, keyboards, tablets, bedside tables), and equipment such as wheelchairs, scooters, walkers, oxygen tanks and tubing, communication boards, and other assistive devices. Refer to CDC’s recommendations for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html">Cleaning and Disinfecting Your Home</a>.</li>
                            </ul>
                          </li>

                        </ul>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="32">
                    What can I do if my child has difficulties adjusting to new routines and following recommendations?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="32">
                    <Card.Body className="accordion-answer">Helping children understand and follow recommendations, like social distancing and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover.html">wearning masks</a>, can be challenging if your child has intellectual disabilities, sensory issues, or other special healthcare needs.<br></br>
                      <ul>
                        <li>Keeping children at home can lower stress created by social distancing and mask recommendations. Reach out to others for help in running essential errands.</li>
                        <li>Behavioral techniques can be used to address behavioral challenges and to develop new routines. These include social stories, video modeling, picture schedules, and visual cues. Try rewarding your child in small ways with his or her favorite non-food treat or activities to help switch routines and to follow recommendations.</li>
                        <li>Many of the organizations you turn to for information and support around your child’s complex, chronic medical condition may have information on their websites to help families address issues related to COVID-19.</li>
                        <li>Your child’s therapist(s) and teachers may also have resources to help successfully introduce new routines to your child.</li>
                        <li>While learning at home, continue special education services, accommodations, or services received in school through your child’s 504 plan or Individualized Educational Plan (IEP), as much as possible. Many schools are continuing interventions like speech therapy, small group classes, extended time and more. Learn more about <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/developmental-behavioral-disorders.html">supporting children with distance learning</a></li>
                      </ul>
                      Additional information on <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children.html">caring for children</a> and on <a target="_blank" href="https://www.cdc.gov/ncbddd/childdevelopment/conditions.html">child development specific conditions</a> are available.
                      </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="33">
                    How can my family cope with the added stress?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="33">
                    <Card.Body className="accordion-answer">
                      Supporting children with special healthcare needs can put additional demands and stress on families, especially during emergency situations. You have likely found ways to manage the stress and challenges unique to your family’s situation. It is important to continue your family’s coping methods, including reaching out to other family members, friends, support groups, and organizations that have been helpful in the past.<br></br><br></br>
                      See information on <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/for-parents.html">helping children cope</a> and coping with stress (such as <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/visitors.html">visiting parks, trails, or open spaces</a>) and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html">making your family stronger</a><br></br><br></br>
                      If you, or someone you care about, are feeling overwhelmed with emotions like sadness, depression, or anxiety, or feel like you want to harm yourself or others:<br></br>
                      <ul>
                        <li>Call 911</li>
                        <li>Visit the <a target="_blank" href="https://www.samhsa.gov/disaster-preparedness">Disaster Distress Helpline</a></li>, call 1-800-985-5990, or text TalkWithUs to 66746
                        <li>Visit the <a target="_blank" href="https://www.thehotline.org/">National Domestic Violence Hotline</a> or call 1-800-799-7233 and TTY 1-800-787-3224</li>
                      </ul>
                    </Card.Body></Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="34">
                    What if my child or someone else in my home is sick with symptoms of COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="34">
                    <Card.Body className="accordion-answer">
                      If your child with special healthcare needs becomes sick with <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a>, contact your child’s healthcare provider. If your child has new or worsening <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">emergency warning signs</a>, such as trouble breathing, pain or pressure in the chest, confusion or inability to wake them up, or bluish lips or face, call 911. If you think your child may have COVID-19, notify the operator so that first responders may be appropriately prepared to protect themselves and others.<br></br><br></br>
                      Notify your child’s healthcare provider if someone else in your house becomes sick with COVID-19, so they can provide any advice specific for your child.<br></br><br></br>
                      See additional information if <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">someone in the home is sick with COVID-19</a> or suspected of having COVID-19.
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

                  <a href="#faq-top">Return to Top</a>

                </Card>

                <Card><a id="Preparing-for-an-Outbreak"><Card.Header className="alert-subjects">Preparing for an Outbreak</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="37">
                    How can I prepare for an outbreak in my area?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="37">
                    <Card.Body className="accordion-answer">
                      Create a household plan of action to help protect your health and the health of those you care about in the event of an outbreak of COVID-19 in your community:<br></br>
                      <ul>
                        <li>Talk with the people who need to be included in your plan, and discuss what to do if a COVID-19 outbreak occurs in your community.</li>
                        <li>Plan ways to care for those who might be at <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/index.html">greater risk for serious complications</a>.</li>
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
                      Plan for potential changes at your workplace. Talk to your employer about their emergency operations plan, including sick-leave policies and telework options. <a target="_blank" href="https://www.cdc.govhttps//www.cdc.gov/coronavirus/2019-ncov/community/guidance-business-response.html">Learn how businesses and employers can plan for and respond to COVID-19</a>.
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="39">
                    Should I make my own hand sanitizer if I can't find it in stores?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="39">
                    <Card.Body className="accordion-answer">
                      CDC does not encourage the production and use of homemade hand sanitizer products <a target="_blank" href="https://www.fda.gov/media/136118/download">because of concerns over the correct use of the ingredients</a> and the need to work under sterile conditions to make the product. Local industries that are looking into producing hand sanitizer to fill in for commercial shortages can refer to the <a target="_blank" href="https://www.who.int/gpsc/5may/Guide_to_Local_Production.pdf">World Health Organization guidance</a>. Organizations should revert to the use of commercially produced, FDA-approved product once such supplies again become available. <br></br>
                      <ul>
                        <li>To be effective against killing some types of germs, <a target="_blank" href="https://www.cdc.gov/handwashing/show-me-the-science-hand-sanitizer.html">hand sanitizers</a> need to have a strength of at least 60% alcohol and be used when hands are not visibly dirty or greasy.</li>
                        <li>Do not rely on “Do It Yourself” or “DIY” recipes based solely on essential oils or formulated without correct compounding practices.</li>
                        <li>Do not use hand sanitizer to disinfect frequently touched surfaces and objects. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html">See CDC's information for cleaning and sanitizing your home</a>.</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <a href="#faq-top">Return to Top</a>

                </Card>

                <Card><a id="Symptoms-and-Emergency-Warning-Signs"><Card.Header className="alert-subjects">Symptoms and Emergency Warning Signs</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="40">
                    What are the symptoms and complications that cause COVID-19 can cause?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="40">
                    <Card.Body className="accordion-answer">
                      People with COVID-19 have reported a wide range of symptoms – from mild symptoms to severe illness. Symptoms may appear <b>2-14 days after exposure to the virus</b>. If you have fever, cough, or other <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms</a>, you might have COVID-19.
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

                  <a href="#faq-top">Return to Top</a>

                </Card>

                <Card><a id="Testing"><Card.Header className="alert-subjects">Testing</Card.Header></a>


                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="43">
                    Should I be tested for a current infection?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="43">
                    <Card.Body className="accordion-answer">
                      Maybe; not everyone needs to be tested for COVID-19.<br></br><br></br>
                      If you have <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a> and want to get tested, call your healthcare provider first. Most people will have mild illness and can recover at home without medical care and may not need to be tested.<br></br><br></br>
                      CDC has guidance for who should be tested, but decisions about testing are made by state and local health departments and healthcare providers.<br></br><br></br>
                      You can also visit your <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/open-america/hd-search/">state or local health department's website</a> to look for the latest local information on testing.
                      </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="44">
                    How can I get tested for a current infection (viral test) and what does my test mean?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="44">
                    <Card.Body className="accordion-answer">
                      Decisions about testing are made by <a target="_blank" href="https://www.cdc.gov/publichealthgateway/healthdirectories/healthdepartments.html">state</a> and <a target="_blank" href="https://www.naccho.org/membership/lhd-directory">local</a> health departments or healthcare providers. If you have symptoms of COVID-19 and are not tested, it is important to stay home. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">What to do if you are sick</a>.<br></br><br></br>
                      COVID-19 testing differs by location. If you have symptoms of COVID-19 and want to get tested, call your healthcare provider first. You can also visit your <a target="_blank" href="https://www.cdc.gov/publichealthgateway/healthdirectories/healthdepartments.html">state</a> or <a target="_blank" href="https://www.naccho.org/membership/lhd-directory">local</a> health department’s website to look for the latest local information on testing. The U.S. Food and Drug Administration (FDA) has authorized viral tests that let you collect either a <a target="_blank" href="https://www.fda.gov/news-events/press-announcements/coronavirus-covid-19-update-fda-authorizes-first-test-patient-home-sample-collection">nasal swab</a> or a <a target="_blank" href="https://www.fda.gov/news-events/press-announcements/coronavirus-covid-19-update-fda-authorizes-first-diagnostic-test-using-home-collection-saliva">saliva sample</a> at home. However, you will still need to send your sample to a laboratory for analysis.<br></br><br></br>
                      <b>If you test positive for COVID-19</b>, know what protective steps to take <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/index.html">if you are sick or caring for someone</a>.<br></br><br></br>
                      <b>If you test negative for COVID-19</b>, you probably were not infected at the time your sample was collected. However, that does not mean you will not get sick. The test result only means that you did not have COVID-19 at the time of testing. You might test negative if the sample was collected early in your infection and test positive later during your illness. You could also be exposed to COVID-19 after the test and get infected then. This means you could still spread the virus. If you develop symptoms later, you might need another test to determine if you are infected with the virus that causes COVID-19.<br></br><br></br>
                      For more information about viral tests, please visit <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/testing/diagnostic-testing.html">Test for Current Infection</a>.
                      </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="45">
                    How can I get tested for a past infection (antibody test) and what does my test mean?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="45">
                    <Card.Body className="accordion-answer">
                      Antibody tests for COVID-19 are available through healthcare providers and laboratories. Check with your healthcare provider to see if they offer antibody tests and whether you should get one.<br></br><br></br>
                      A positive test result shows you might have antibodies from an infection with the virus that causes COVID-19. However, there is a chance a positive result means that you have antibodies from an infection with a virus from the same family of viruses (called coronaviruses), such as the one that causes the common cold.<br></br><br></br>
                      Having antibodies to the virus that causes COVID-19 might provide protection from getting infected with the virus again. If it does, we do not know how much protection the antibodies might provide or how long this protection might last.<br></br><br></br>
                      You should continue to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html">protect yourself and others</a> since you could get infected with the virus again. <br></br><br></br>
                      If you test negative, you might not have ever had COVID-19. Talk with your healthcare provider about your test result and the type of test you took to understand what your result means.<br></br><br></br>
                      Regardless of whether you test positive or negative, the results do not confirm whether or not you are able to spread the virus that causes COVID-19. Until we know more, continue to take steps to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">protect yourself and others</a>.<br></br><br></br>
                      If you want more information about antibody tests, see <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/testing/serology-overview.html">Test for Past Infection</a>.
                      </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="46">
                    Can someone test negative and later test positive on a viral test for COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="46">
                    <Card.Body className="accordion-answer">
                      Yes, it is possible. You may test negative if the sample was collected early in your infection and test positive later during this illness. You could also be exposed to COVID-19 after the test and get infected then. Even if you test negative, you still should take steps to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">protect yourself and others</a>. See <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/testing/diagnostic-testing.html">Testing for Current Infection</a> for more information.
                      </Card.Body>
                  </Accordion.Collapse>

                  <a href="#faq-top">Return to Top</a>

                </Card>

                <Card><a id="People-at-Higher-Risk-for-Severe-Illness"><Card.Header className="alert-subjects">People at Higher Risk for Severe Illness</Card.Header></a>


                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="47">
                    Who is at higher risk for serious illness from COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="47">
                    <Card.Body className="accordion-answer">
                      COVID-19 is a new disease and there is limited information regarding risk factors for severe disease. Based on currently available information and clinical expertise, <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/older-adults.html">older adults</a> and <b>people with underlying </b><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html">medical conditions</a> are at higher risk for severe illness from COVID-19.
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="48">
                    What should people at higher risk of serious illness with COVID-19 do?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="48">
                    <Card.Body className="accordion-answer">
                      If you are at <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-increased-risk.html">higher risk for severe illness</a> from COVID-19, you should: <br></br>
                      <li>Limit your interactions with other people as much as possible.</li>
                      <li>Take <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">precautions to prevent getting</a> COVID-19 when you do interact with others.</li>
                      <li>If you decide to engage in public activities, continue to protect yourself by <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">practicing everyday preventive actions</a>.</li>
                      <li>Keep these items on hand and use them when venturing out: a mask, tissues, and a hand sanitizer with at least 60% alcohol, if possible.</li>
                      <li>If possible, avoid others who are not wearing <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">masks</a> or ask others around you to wear masks</li>
                      <li>Delay or cancel a visit if you or your visitors have <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms</a> of COVID-19 or have been exposed to someone with COVID-19 in the last 14 days.</li>
                      <li>Anyone who has had <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/public-health-recommendations.html">close contact</a> with a person with COVID-19 should <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">stay home and monitor for symptoms</a>.</li>
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

                  <a href="#faq-top">Return to Top</a>

                </Card>

                <Card><a id="Contact-Tracing"><Card.Header className="alert-subjects">Contact Tracing</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="50">
                    What is contact tracing?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="50">
                    <Card.Body className="accordion-answer">
                      Contact tracing has been used for decades by state and local health departments to slow or stop the spread of infectious diseases.<br></br><br></br>
                        Contact tracing slows the spread of COVID-19 by<br></br>
                      <ul>
                        <li>Letting people know they may have been exposed to COVID-19 and should monitor their health for signs and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a></li>
                        <li>Helping people who may have been exposed to COVID-19 get tested</li>

                        <li>Asking people to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/isolation.html">self-isolate</a> if they have COVID-19 or <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">self-quarantine</a> if they are a close contact of someone with COVID-19</li>
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
                        <li>While you are waiting for your COVID-19 test result, stay home away from others (<a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">self-quarantine</a>) and monitor your health <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">for symptoms of COVID-19</a>to protect your friends, family, and others from possibly getting COVID-19.</li>
                        <li>If your <b>test is positive</b>, you should continue to stay home and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/isolation.html">self-isolate</a> away from others and monitor your health. If you have symptoms of COVID-19 and they worsen or become severe, you should seek emergency medical care. Severe symptoms include trouble breathing, persistent pain or pressure in the chest, confusion, inability to wake or stay awake, or bluish lips or face. Someone from the health department may call you to<br></br>
                          <ul>
                            <li>Check on your health,</li>
                            <li>Discuss who you have been around, and</li>
                            <li>Ask where you have spent time while you may have been able to spread COVID-19 to others</li>
                          </ul>
                        </li>
                        <li>If your <b>test is negative</b> and you <b>don't have symptoms</b> you should continue to stay home and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">self-quarantine</a> away from others for 14 days after your last exposure to COVID-19 and follow all recommendations from the health department. This is important because symptoms can appear up to 14 days after you’ve been exposed and are infected. A negative result before the end of your quarantine period does not rule out possible infection. Additionally, you do not need a repeat test unless you develop symptoms, or if you require a test to return to work.</li>
                        <li>If your <b>test is negative</b> and you<b>have symptoms</b> you should continue to self-quarantine away from others and follow all recommendations from the health department. A second test and additional medical consultation may be needed if your symptoms do not improve.</li>
                      </ul>

                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="56">
                    What will happen during contact tracing if I am diagnosed with COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="56">
                    <Card.Body className="accordion-answer">
                      If you are diagnosed with COVID-19, someone from the health department may call you to check on your health, discuss who you have been around, and ask where you spent time while you may have been able to spread COVID-19 to others. You will also be asked to continue to stay at home and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/isolation.html">self-isolate</a>, away from others.<br></br>
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
                        <li>Self-isolation means staying at home in a specific room away from other people and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/animals/pets-other-animals.html">pets</a>, and using a separate bathroom, if possible.</li>
                        <li>Self-isolation helps slow the spread of COVID-19 and can help protect the health of your family, friends, neighbors, and others you may come in contact.</li>
                        <li>If you need support or assistance while in self-isolation, your health department or community organizations may be able to provide assistance.</li>
                      </ul>
                      Watch for or monitor your <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a>. If your symptoms worsen or become severe, you should seek medical care.
                        </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="56">
                    What will happen during contact tracing if I have been around someone with COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="56">
                    <Card.Body className="accordion-answer">
                      If you were around someone who has been diagnosed with COVID-19, someone from the health department may call you to let you know that you may have been exposed to COVID-19. <br></br><br></br>
                        Stay home away from others for 14 days (<a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine-isolation.html">self-quarantine</a>) after your last contact with that person. Health department staff will help identify the dates for your self-quarantine. Health department staff can also provide resources for COVID-19 testing in your area.<br></br>
                      <ul>
                        <li>Self-quarantine means staying home away from others and monitoring your health.</li>
                        <li>If you need to be around other people or animals in or outside of the home, wear a mask. This will help protect the people around you.</li>
                        <li>If you need support or assistance while in self-quarantine, your health department or community organizations may be able to provide assistance.</li>
                      </ul>
                        Monitor your health and watch for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a>. Remember, symptoms may appear 2-14 days after you were exposed to COVID-19. Tell the health department if you develop any symptoms. Tell people you were around recently if you become ill, so they can monitor their health. If your symptoms worsen or become severe, seek medical care. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html#seek-medical-attention">Severe symptoms</a> include trouble breathing, persistent pain or pressure in the chest, new confusion, inability to wake or stay awake, or bluish lips or face.<br></br><br></br>
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
                      If you have been around someone who was identified as a close contact to a person with COVID-19, closely monitor yourself for any <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a>. You do not need to self-quarantine unless you develop symptoms or if the person identified as a close contact develops COVID-19.
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

                  <a href="#faq-top">Return to Top</a>

                </Card>

                <Card><a id="Funerals"><Card.Header className="alert-subjects">Funerals</Card.Header></a>


                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="63">
                    Am I at risk if I go to a funeral or visitiation service for someone who died of COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="63">
                    <Card.Body className="accordion-answer">
                      There is currently no known risk associated with being in the same room at a funeral or visitation service with the body of someone who died of COVID-19.<br></br><br></br>
                        See <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">How to Protect Yourself and Others</a> to learn how to protect yourself from respiratory illnesses, like COVID-19, if you decide to attend a funeral or visitation.
                        </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="64">
                    Am I at risk if I touch someone who died of COVID-19 after they have passed away?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="64">
                    <Card.Body className="accordion-answer">
                      COVID-19 is a new disease and <b>we are still learning how it spreads</b>. The virus that causes COVID-19 is thought to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-covid-spreads.html">spread</a> mainly from person-to-person through respiratory droplets produced when an infected person coughs, sneezes, or talks. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. This type of spread is not a concern after death. <br></br><br></br>
                        It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes. This is not thought to be the main way the virus spreads.<br></br><br></br>
                        People should consider not touching the body of someone who has died of COVID-19. Older people and people of all ages with severe underlying health conditions are at higher risk of severe illness from COVID-19. There may be less of a chance of the virus spreading from certain types of touching, such as holding the hand or hugging after the body has been prepared for viewing. Other activities, such as kissing, washing, and shrouding should be avoided before, during, and after the body has been prepared, if possible. If washing the body or shrouding are important religious or cultural practices, families are encouraged to work with their community’s cultural and religious leaders and funeral home staff on how to reduce their exposure as much as possible. At a minimum, people conducting these activities should wear disposable gloves. If splashing of fluids is expected, additional personal protective equipment (PPE) may be required (such as disposable gown, face shield, or goggles and N-95 respirator).
                        </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="65">
                    How can loved ones safely handle belongings of someone who died from COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="65">
                    <Card.Body className="accordion-answer">
                      If desired, you may retrieve the belongings of a loved one who has died of COVID-19 outside their home (for example, in a hospital setting). Depending on local rules and regulations, family members may retrieve these belongings at the funeral home or the healthcare facility.<br></br><br></br>
                        You should use gloves and practice good hand hygiene when handling your loved ones’ belongings. Depending on the type of belongings, such as electronics, you should also follow the <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cleaning-disinfection.html">household item-specific cleaning and disinfection guidelines</a> when handling these items.
                        </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="66">
                    What should I do if my family member died from COVID-19 while overseas?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="66">
                    <Card.Body className="accordion-answer">When a US citizen dies outside the United States, the deceased person’s next of kin or legal representative should notify US consular officials at the Department of State. Consular personnel are available 24 hours a day, 7 days a week, to provide assistance to US citizens for overseas emergencies. If a family member, domestic partner, or legal representative is in a different country from the deceased person, he or she should call the Department of State’s Office of Overseas Citizens Services in Washington, DC, from 8 am to 5 pm Eastern time, Monday through Friday, at 888-407-4747 (toll-free) or 202-501-4444. For emergency assistance after working hours or on weekends and holidays, call the Department of State switchboard at 202-647-4000 and ask to speak with the Overseas Citizens Services duty officer. In addition, the <a target="_blank" href="https://www.usembassy.gov/">US Embassy</a> closest to or in the country where the US citizen died can provide assistance.
                        </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="67">
                    My family member died from COVID-19 while overseas. What are the requirements for returning the body to the United States?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="67">
                    <Card.Body className="accordion-answer">CDC does not require an autopsy before the remains of a person who died overseas are returned to the United States. Depending on the circumstances surrounding the death, some countries may require an autopsy. Sources of support to the family include the local consulate or embassy, travel insurance provider, tour operator, faith-based and aid organizations, and the deceased’s employer. There likely will need to be an official identification of the body and official documents issued by the consular office.<br></br><br></br>
                        CDC requirements for importing human remains depend upon if the body has been embalmed, cremated, or if the person died from a <a target="_blank" href="https://www.cdc.gov/quarantine/aboutlawsregulationsquarantineisolation.html">quarantinable communicable disease</a>.<br></br><br></br>
                        At this time, COVID-19 is a quarantinable communicable disease in the United States and the remains must meet the standards for importation found in 42 Code of Federal Regulations Part 71.55 and may be cleared, released, and authorized for entry into the United States only under the following conditions:<br></br>
                      <ul>
                        <li>The remains are cremated; OR</li>
                        <li>The remains are properly embalmed and placed in a leak-proof container; OR</li>
                        <li>The remains are accompanied by a permit issued by the CDC Director. The CDC permit (if applicable) must accompany the human remains at all times during shipment.</li>
                        <ul>
                          <li>Permits for the importation of the remains of a person known or suspected to have died from a quarantinable communicable disease may be obtained through the CDC Division of Global Migration and Quarantine by calling the CDC Emergency Operations Center at 770-488-7100 or emailing dgmqpolicyoffice@cdc.gov.</li>
                        </ul>
                      </ul>
                        Please see <a target="_blank" href="http://www.cdc.gov/importation/human-remains.html">CDC's guidance</a> for additional information.
                        </Card.Body>
                  </Accordion.Collapse>

                  <a href="#faq-top">Return to Top</a>

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
                      The risk of transmitting or spreading SARS-CoV-2, the virus that causes COVID-19, during vacuuming is unknown. In order to reduce the need for cleaning, disinfection, and vacuuming, consider removing area rugs completely, if possible. At this time, there are no reported cases of COVID-19 associated with vacuuming. If vacuuming is necessary or required in a school, business, or community facility that was used by a person with suspected or confirmed COVID-19, first follow the CDC recommendations for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/organizations/cleaning-disinfection.html#Cleaning">Cleaning and Disinfection for Community Facilities</a> that apply, which includes a wait time of 24 hours, or as long as practical.<br></br><br></br>
                        After cleaning and disinfection, the following recommendations may help reduce the risk to workers and other individuals when vacuuming:<br></br>
                      <ul>
                        <li>Use a vacuum equipped with a high-efficiency particulate air (HEPA) filter, if available.</li>
                        <li>Do not vacuum a room or space that has people in it. Wait until the room or space is empty to vacuum, such as at night, for common spaces, or during the day for private rooms.</li>
                        <li>Wear disposable gloves to clean and disinfect. For soft (porous) surfaces, such as carpeted floors or rugs, clean the surface using soap and water or with cleaners appropriate for use on these surfaces, according to the textile’s label. After cleaning, disinfect with an appropriate EPA-registered disinfectant on <a target="_blank" href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2-covid-19">List N: Disinfectants for use against SARS-CoV-2</a>. Soft and porous materials, like carpet, are generally not as easy to disinfect as hard and non-porous surfaces. EPA has listed a limited number of products approved for disinfection for use on soft and porous materials on List N. Follow the disinfectant manufacturer’s safety instructions (such as wearing gloves and ensuring adequate ventilation), concentration level, application method and contact time. Allow sufficient drying time if vacuum is not intended for wet surfaces.</li>
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
                      Companies do not necessarily need to close after a person with confirmed or suspected COVID-19 has been in a company facility. The area(s) used or visited by the ill person should be closed for 24 hours or as long as possible. Open outside doors and windows as much as possible ensuring that doing so does not pose a safety risk to children using the facility (i.e. make sure that children are not able to enter the closed off area through any windows or doors). and use ventilating fans to increase air circulation in the area. Once the area has been <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/disinfecting-building-facility.html">appropriately disinfected</a>, it can be opened for use. Workers without close contact with the person with confirmed or suspected COVID-19 can return to work immediately after disinfection is completed.
                        </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="74">
                    How effective are alternative disinfection methods, such as ultrasonic waves, high intensity UV radiation, and LED blue light?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="74">
                    <Card.Body className="accordion-answer">The efficacy of these disinfection methods against the virus that causes COVID-19 is not known. EPA only recommends use of the <a target="_blank" href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">surface disinfectants identified on List N</a> against the virus that causes COVID-19. EPA does not routinely review the safety or efficacy of pesticidal devices, such as UV lights, LED lights, or ultrasonic devices. Therefore, EPA cannot confirm whether, or under what circumstances, such products might be effective against the spread of COVID-19.
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

                  <a href="#faq-top">Return to Top</a>

                </Card>

                <Card><a id="Pets-and-Animals"><Card.Header className="alert-subjects">Pets and Animals</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="78">
                    Can I get COVID-19 from my pets or other animals?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="78">
                    <Card.Body className="accordion-answer">
                      At this time, there is no evidence that animals play a significant role in spreading the virus that causes COVID-19. Based on the limited information available to date, the risk of animals spreading COVID-19 to people is considered to be low.  A small number of pets have been reported to be infected with the virus that causes COVID-19, mostly after contact with people with COVID-19.<br></br><br></br>
                        Pets have other types of coronaviruses that can make them sick, like canine and feline coronaviruses. These other coronaviruses cannot infect people and are not related to the current COVID-19 outbreak.<br></br><br></br>
                        However, since animals can spread other diseases to people, it’s always a good idea to practice <a target="_blank" href="https://www.cdc.gov/healthypets/publications/stay-healthy-pets.html">healthy habits</a> around pets and other animals, such as washing your hands and maintaining good hygiene. For more information on the many benefits of pet ownership, as well as staying safe and healthy around animals including pets, livestock, and wildlife, visit CDC’s <a target="_blank" href="https://www.cdc.gov/healthypets/index.html">Healthy Pets, Healthy People website</a>.
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
                        However, because animals can sometimes carry other germs that can make people sick, it’s always a good idea to practice <a target="_blank" href="https://www.cdc.gov/healthypets/publications/stay-healthy-pets.html">healthy habits</a> around pets and other animals, including washing hands before and after interacting with them.
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
                        <li>Do not take your dog to a dog park if you are <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">sick</a> or if you have recently been in close contact with a person with COVID-19.
                          </li>
                        <li>Do not take your dog to a dog park if your dog is sick. Signs of sickness in dogs may include fever, coughing, difficulty breathing or shortness of breath, lethargy, sneezing, discharge from the nose or eyes, vomiting, or diarrhea.</li>
                        <li>If your dog has <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/positive-pet.html">tested positive</a> for the virus that causes COVID-19, talk to your veterinarian about when it is appropriate for your pet to go back to normal activities.
                          </li>
                        <li>Try to limit your dog’s interaction with other people outside of your household while at the dog park.</li>
                        <li>As much as possible, avoid touching common items in the dog park like water bowls. <a target="_blank" href="https://www.cdc.gov/handwashing/when-how-handwashing.html">Wash your hands</a> or use hand sanitizer after touching items from the park. To make sure your dog has fresh water, consider bringing your own portable water bowl.</li>
                        <li>Limit other pet items brought to the dog park, such as toys. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html">Clean and disinfect</a> anything taken to the park and returned home (leashes, toys, water bowls).</li>
                        <li>Do not wipe or bathe your dog with chemical disinfectants, alcohol, hydrogen peroxide, or any other products not approved for animal use.</li>
                      </ul>
                        See more <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/pets.html">information on pets and COVID-19</a>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="86">
                    Can I take my dog to daycare or a groomer?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="86">
                    <Card.Body className="accordion-answer">Until we know more about how this virus affects animals, CDC encourages pet owners to treat pets as you would other human family members to protect them from possible infection. This means limiting contact between your pets and people outside your household as much as possible and avoiding places where large numbers of people gather.<br></br><br></br>
                        Some areas are allowing groomers and boarding facilities such as dog daycares to open. If you must take your pet to a groomer or boarding facility, follow any protocols put into place at the facility, such as wearing a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover.html">mask</a> and maintaining at least 6 feet of space between yourself and others if possible.<br></br><br></br>
                        Limit pet items brought from home to the groomer or boarding facility, and disinfect any objects that are taken into a facility and returned home (such as leashes, bowls, and toys). Use an <a target="_blank" href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">EPA-registered disinfectant</a> to clean items and rinse thoroughly with clean water afterwards. <b>Do not</b> wipe or bathe your pet with chemical disinfectants, alcohol, hydrogen peroxide, or any other products not approved for animal use.<br></br><br></br>
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
                        See more <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/pets.html">information on pets and COVID-19</a> and recommendations for how to help keep your pet safe.
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
                      <br></br>Talk to a veterinarian <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/positive-pet.html">if a pet in your facility gets sick</a> or if you have any concerns about the health of any pets in the facility. If you think a pet in the facility was exposed to or is showing <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/positive-pet.html">signs</a> consistent with COVID-19, contact your <a target="_blank" href="https://www.cdc.gov/publichealthgateway/healthdirectories/healthdepartments.html">state health official</a> to discuss guidance on testing pets or other animals for the virus that causes COVID-19.<br></br><br></br>
                        People who are at <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">higher risk for severe illness</a> from COVID-19 should avoid providing care for sick pets, if possible.<br></br><br></br>
                        For more information, visit CDC’s <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/pets.html">If You Have Pets</a> webpage.
                        </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="91">
                    What about imported animals or animal products?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="91">
                    <Card.Body className="accordion-answer">
                      CDC does not have any evidence to suggest that imported animals or animal products pose a risk for spreading COVID-19 in the United States. This is a rapidly evolving situation and information will be updated as it becomes available. CDC, the U. S. Department of Agriculture (USDA), and the U.S. Fish and Wildlife Service (FWS) play distinct but complementary roles in regulating the importation of live animals and animal products into the United States.<br></br>
                      <ul>
                        <li><a target="_blank" href="https://www.cdc.gov/importation/index.html">CDC regulates</a>animals and animal products that pose a threat to human health,</li>
                        <li><a target="_blank" href="https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/animal-and-animal-product-import-information/ct_animal_imports_home">USDA regulates</a> animals and animal products that pose a threat to agriculture; and</li>
                        <li><a target="_blank" href="https://www.fws.gov/le/businesses.html">FWS regulates</a> importation of endangered species and wildlife that can harm the health and welfare of humans, the interests of agriculture, horticulture, or forestry, and the welfare and survival of wildlife resources.</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="92">
                    Can I travel to the United States with dogs or import dogs into the United States during the COVID-19 outbreak?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="92">
                    <Card.Body className="accordion-answer">
                      Please refer to <a target="_blank" href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/index.html">CDC's requirements for brining a dog to the United States</a>. The current <a target="_blank" href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/rabies-vaccine.html">requirements for rabies vaccination</a> apply to dogs imported from high-risk countries for rabies.
                        </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="93">
                    What precautions should be taken for animals that have recently been imported from outside the United States (for example, by shelters, rescues, or as personal pets)?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="93">
                    <Card.Body className="accordion-answer">Imported animals will need to meet <a target="_blank" href="https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/index.html">CDC</a> and <a target="_blank" href="https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/animal-and-animal-product-import-information/live-animal-imports/import-live-animals">USDA</a> requirements for entering the United States. At this time, there is no evidence that companion animals, including pets and service animals, can spread the virus that causes COVID-19. As with any animal introduced to a new environment, animals recently imported should be observed daily for signs of illness. If an animal becomes ill, the animal should be examined by a veterinarian. Call your local veterinary clinic <b>before</b> bringing the animal into the clinic and let them know that the animal was recently imported from another country.<br></br><br></br>
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
                            <li>Clean knives, equipment, and surfaces that were in contact with game meat with soap and water and then disinfect them. While these recommendations apply to general food safety practices, if you are concerned about COVID-19, you may use a product on the <a target="_blank" href="https://www.epa.gov/newsroom/list-n-disinfectants-use-against-sars-cov-2">EPA list of disinfectants for use against the COVID-19 Virus</a></li>
                            <li>Cook all game meat thoroughly (<a target="_blank" href="https://www.cdc.gov/foodsafety/keep-food-safe.html">to an internal temperature of 165 Fahrenheit</a></li>
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

                        <li><b>Encourage employees and other visitors, including boarders, owners, farriers, veterinarians, and those taking lessons, not to enter the facility if they are sick</b>. Employees should not return to work until the <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/disposition-in-home-patients.html">criteria to discontinue home isolation</a> are met, after talking with their doctor. Implement sick leave policies that are flexible, nonpunitive, and consistent with public health guidance, allowing employees to stay home if they have symptoms of respiratory infection.
                          </li>

                        <li><b>Consider conducting daily health checks (e.g., symptom and/or temperature screening) of employees and others visiting the facility before they enter the premises.</b> People with a fever of 100.40(38.00C) or above or other <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">signs of illness</a> should not be admitted to the premises. If implementing health checks, conduct them safely and respectfully. See <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/general-business-faq.html">General Business FAQ</a> for more information.<br></br>

                          <ul>
                            <li>Employees or visitors who appear to have symptoms upon arrival or who become sick during their visit should immediately be separated from other employees and visitors and sent home.</li>
                          </ul>

                        </li>

                        <li>
                          <b>Limit the number of people entering the facility.</b> Consider staggering lesson and visiting times to limit the number of people in the facility and potential for person-to-person contact. If possible, you can also take steps to decrease high-traffic areas by limiting areas open to visitors/owners or staggering use of common areas like grooming or wash stalls and tack rooms.
                          </li>

                        <li>
                          <b>Increase distance and limit duration of contact between employees and visitors in the facility.</b> Whenever possible, people should maintain at least 6 feet of distance between each other at the facility, including instructors teaching lessons. Allow for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing</a> and avoid large numbers of people within the facility, including in employee-only areas.
                          </li>

                        <li>
                          <b>Visitors and employees should wear masks </b>to protect others especially where social distancing measures are difficult to maintain. Wearing a mask does NOT replace the need to practice social distancing.
                          </li>



                        <li>
                          <b>Set up hand hygiene stations</b> at the entrance and within the facility, so that employees and people entering can clean their hands before they enter. Employees should <a target="_blank" href="https://www.cdc.gov/handwashing/when-how-handwashing.html">wash hands</ a> regularly with soap and water for at least 20 seconds. An alcohol-based hand sanitizer containing at least 60% alcohol can be used, but if hands are visibly dirty, they should be washed with soap and water before using an alcohol-based hand sanitizer. Examples of hand hygiene stations may be a hose and soap located at entrances to allow for handwashing before entry.
                          </li>


                        <li>
                          <b>Clean and disinfect frequently touched surfaces</b> such as grooming tools, halters, lead ropes, shared tack and equipment, and door handles/gates (including those to stall doors and pasture/turn out areas) on a routine basis. To disinfect, use products that meet <a target="_blank" href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">EPA's criteria for use against the </a> virus that causes COVID-19 and are appropriate for the surface, diluted household bleach solutions prepared according to the manufacturer’s label for disinfection, or alcohol solutions with at least 70% alcohol. Follow manufacturer’s directions for use, especially regarding product contact time and protections from chemical hazards posed by cleaners and disinfectants.
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


                        <li>If other animals, such as barn cats, are present at the facility, be aware that a small number of <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/animals/pets-other-animals.html">pets</a> have been reported to be infected with the virus that causes COVID-19, mostly after contact with people with COVID-19.
                          </li>


                      </ul>



                        For more information, see <a target="_blank" href="https://www.osha.gov/Publications/OSHA3990.pdf">Guidance on Preparing Workplaces for Covid-19</a> and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/guidance-business-response.html"> Interim Guidance for Businesses and Employers to Plan and Respond to Coronavirus Disease 2019</a>


                    </Card.Body>
                  </Accordion.Collapse>

                  <a href="#faq-top">Return to Top</a>

                </Card>

                <Card><a id="Community-Mitigation"><Card.Header className="alert-subjects">Community Mitigation</Card.Header></a>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="98">
                    What is community mitigation?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="98">
                    <Card.Body className="accordion-answer">
                      Community mitigation activities are actions that people and communities can take to slow the spread of infectious diseases, and prepare for it if it occurs, including COVID-19. Community mitigation is especially important before a vaccine or drug becomes widely available.<br></br><br></br>For more information, see <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/community-mitigation.html">Community Mitigation Framework</a>.
                        </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="99">
                    What are community mitigation actions for COVID-19?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="99">
                    <Card.Body className="accordion-answer">For individuals<br></br>
                      <ul>
                        <li><a target="_blank" href="https://www.cdc.gov/handwashing/when-how-handwashing.html">Washing</a> hands often</li>
                        <li>Avoiding close contact with people who are sick, and practicing <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing</a></li>
                        <li>Covering mouth and nose with a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">mask</a> when around others</li>
                        <li>Covering coughs and sneezes</li>
                        <li>Cleaning and disinfecting frequently touched surfaces daily</li>
                      </ul></Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="100">
                    Who is involved in community mitigation actions?</Accordion.Toggle>

                  <Accordion.Collapse eventKey="100">
                    <Card.Body className="accordion-answer">Individual people, communities, schools, businesses, and healthcare organizations have a role to play in community mitigation. Policies*, which include limits on large gatherings, restrictions on businesses, and school closures are often needed to fully put in place community mitigation strategies.<br></br><br></br>Each community is unique. Because some actions can be very disruptive to daily life, mitigation activities will be different depending on how much disease has spread within the community, what the community population is like, and the ability to take these actions at the local level. To identify appropriate activities, all parts of a community that might be affected need to be considered, including <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">populations most vulnerable to serve illness</a>, and those who might be more affected socially or economically. When selecting mitigation activities, states and communities need to consider the spread of disease locally, characteristics of the people who live in the community (for example, age groups, languages spoken, overall health status), and the kind of public health resources and healthcare systems (like hospitals) that are available in the community. State and local officials may need to adjust community mitigation activities and immediately take steps to scale them up or down depending on the changing local situation.<br></br><br></br>Putting mitigation into practice is based on
                        <ul>
                        <li>Emphasizing individual responsibility for taking recommended personal-level actions</li>
                        <li>
                          Empowering businesses, schools, and community organizations to take recommended actions, particularly in ways that protect persons at increased risk of severe illness</li>
                        <li>Focusing on settings that provide critical infrastructure or services to individuals at increased risk of severe illness</li>
                        <li>Minimizing disruptions to daily life to the extent possible</li>
                      </ul>
                        *CDC cannot address the policies of any business or organization. CDC shares recommendations based on the best available science to help people make decisions that improve their health and safety. In all cases, <b>follow the guidance of your healthcare provider and local health department</b>. Local decisions depend on local circumstances.<br></br><br></br>For more information, see <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/community-mitigation.html">Community Mitigation Framework</a>
                    </Card.Body>
                  </Accordion.Collapse>

                  <a href="#faq-top">Return to Top</a>

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
                    <Card.Body className="accordion-answer">There is no evidence that the virus that causes COVID-19 can be spread to people through the water in pools, hot tubs, or water playgrounds. Additionally, proper operation of these aquatic venues and disinfection of the water (with chlorine or bromine) should inactivate the virus. However, chlorinated water alone should not be used as a surface disinfectant. CDC recommends use of <a target="_blank" href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">EPA-registered household disinfectants</a> to disinfect surfaces. Follow the instructions on the label to ensure safe and effective use of the product.</Card.Body>
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
                      Recently, ribonucleic acid (RNA) from the virus that causes COVID-19 has been found in untreated wastewater. While data are limited, there is little evidence of infectious virus in wastewater, and no information to date that anyone has become sick with COVID-19 because of exposure to wastewater.<br></br><br></br>Standard practices associated with wastewater treatment plant operations should be sufficient to protect wastewater workers from the virus that causes COVID-19. These standard practices can include engineering and administrative controls, hygiene precautions, specific safe work practices, and personal protective equipment (<a target="_blank" href="https://www.cdc.gov/healthywater/global/sanitation/workers_handlingwaste.html">PPE</a>) normally required when handling untreated wastewater. No additional COVID-19–specific protections are recommended for workers involved in wastewater management, including those at wastewater treatment facilities.<br></br><br></br><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/sanitation-wastewater-workers.html">See information for Wastewater and Sanitation System Workers on COVID-19</a> for additional information.
                        </Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="106">
                    If my utility has issued a Boil Water Advisory, can I still use tap water to wash my hands?
                      </Accordion.Toggle>

                  <Accordion.Collapse eventKey="106">
                    <Card.Body className="accordion-answer">
                      In most cases, it is safe to <a target="_blank" href="">wash your hands</a>with soap and tap water during a <a target="_blank" href="">Boil Water Advisory</a>. Follow the guidance from your local public health officials. If soap and water are not available, use an alcohol-based hand sanitizer containing at least 60% alcohol.
                        </Card.Body>
                  </Accordion.Collapse>

                  <a href="#faq-top">Return to Top</a>
                </Card>



              </Accordion>

            </p>
          </Alert>
          {/* END FREQUENTLY ASKED QUESTIONS */}

          {/* START MASKS */}
          <Alert className="alert" id="masks" variant="secondary" onClose={() => hide_masks()} dismissible hidden="true">
            <Alert.Heading className="card-top-heading"><a id="masks-top">Masks</a></Alert.Heading>

            <Table className="table">
              {/* <a id="Top"><thead className="on-this-page">On This Page</thead></a><br></br> */}
              <tbody>
                <tr >
                  <a href="#how-to-wear-masks"><td className="tdleft" >How to Wear Masks</td></a>
                  <a href="#storing-and-washing-masks"><td className="tdright" >Storing and Washing Masks</td></a>
                </tr>
                <tr >
                  <a href="#considerations-for-wearing-masks"><td className="tdleft" >Considerations for Wearing Masks</td></a>
                  <a href="#making-masks"><td className="tdright">Making Masks</td></a>
                </tr>
                {/* <tr >
                  <a  href="#considerations-for-wearing-masks"><td className="tdcenter" >Considerations for Wearing Masks</td></a>
                </tr> */}

              </tbody>
            </Table><br></br>




            <p>
              <p className="masks-subject-header">How to Select, Wear, and Clean Your Mask</p><br></br>
              <p className="masks-subject">Overview</p>
              <ul>
                <li className="masks-li">Wear masks with two or more layers to stop the spread of COVID-19</li>
                <li className="masks-li">Wear the mask over your nose and mouth and secure it under your chin</li>
                <li className="masks-li">Masks should be worn by people two years and older</li>
                <li className="masks-li">Masks should NOT be worn by children younger than two, people who have trouble breathing, or people who cannot remove the mask without assistance</li>
                <li className="masks-li">Do <b>NOT</b> wear masks intended for healthcare workers, for example, N95 respirators</li><br></br>
              </ul>
              <iframe className="iframe" src="https://www.youtube.com/embed/ML3n1c0FHDI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <p className="masks-subject">How to Select</p>
              <p className="masks-p">When selecting a mask, there are many choices. Here are some do’s and don’ts</p>
              <div>
                <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/do-choose-masks-medium.jpg"></Image>
                <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/do-NOT-choose-masks-medium.jpg"></Image><br></br>


                <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/special-situations-children-medium.jpg"></Image><br></br>
                <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/special-situations-glasses-medium.jpg"></Image><br></br>
                <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/caution-gaiters-face-shields-medium.jpg"></Image>
              </div><br></br>

              <p className="masks-subject">How to Wear</p>
              <p className="masks-p"><b>Wear a mask correctly and consistently for the best protection.</b><br></br>
                <ul>
                  <li className="masks-li">Be sure to wash your hands before putting on a mask</li>
                  <li className="masks-li">Do <b>NOT</b> touch the mask when wearing it</li><br></br>
                </ul>
              </p>
            </p>

            <p className="masks-p"><b>Do wear a mask that</b>
              <ul>
                <li className="masks-li">Covers your nose and mouth and secure it under your chin</li>
                <li className="masks-li">Fits snugly against the sides of your face</li><br></br>
              </ul>
                  For more information, visit the <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html">How to Wear Masks</a> web page.<br></br>
            </p>
            <Image className="masks-big-image2" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/do-wear-mask-medium.jpg"></Image><br></br><br></br>



            <p className="masks-p"><b>How NOT to wear a mask</b></p>
            <Image className="masks-big-image2" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/how-NOT-to-wear-mask-large.jpg"></Image><br></br><br></br>


            <p className="masks-p"><b>How to take off a mask</b></p>
            <Image className="masks-big-image2" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/how-to-take-off-mask-large.jpg"></Image><br></br><br></br>

            <p className="masks-subject">How to Clean</p>
              Masks should be washed regularly. Always <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html">remove masks correctly</a> and <a target="_blank" href="https://www.cdc.gov/handwashing/index.html">wash your hands</a> after handling or touching a used mask.
              <ul>
              <li className="masks-li">Include your mask with your regular laundry</li>
              <li className="masks-li">Use regular laundry detergent and the warmest appropriate water setting for the cloth used to make the mask</li>
              <li className="masks-li">Use the highest heat setting and leave in the dryer until completely dry</li>
            </ul>
              For more information, visit the <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wash-cloth-face-coverings.html">How to Wash Masks</a> web page.

              For more information, see our Masks web site. For information on the sources for our mask guidance, see <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover-guidance.html#recent-studies">Recent Studies</a>.<br></br><br></br>


            <a id="how-to-wear-masks" className="return-top" href="#masks-top"><br></br>Return to Top</a><br></br>
            <p className="masks-subject-header">How to Wear Masks</p><br></br>
              Masks are an additional step to help slow the spread of COVID-19 when combined with <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">every day preventive actions</a> and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing</a> in public settings.
              <ul>
              <li className="masks-li"><b>CDC recommends that people wear masks in public</b> and when around people who don’t live in your household.</li>
              <li className="masks-li"><b>Masks should NOT be worn by children under age 2 or anyone who has trouble breathing</b>, is unconscious, incapacitated, or otherwise unable to remove the mask without assistance.</li>
              <li className="masks-li"><b>Do NOT use a mask meant for a healthcare worker</b>. Currently, surgical masks and N95 respirators are critical supplies that should be reserved for healthcare workers and other first responders.</li>
            </ul><br></br>
            <p className="masks-subject">Wear Your Mask correctly</p>
            <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/fitting-cloth-facemask-small.png"></Image>
            <ul>
              <li className="masks-li">Wash your hands before putting on your mask</li>
              <li className="masks-li">Put it over your nose and mouth and secure it under your chin</li>
              <li className="masks-li">Try to fit it snugly against the sides of your face</li>
              <li className="masks-li">Make sure you can breathe easily</li>
              <li className="masks-li">CDC does not recommend use of masks or cloth masks for source control if they have an exhalation valve or vent</li>
            </ul>

            <br></br><p className="masks-subject">Wear a Mask to Protect Others</p>
            <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/dos-donts.jpg"></Image>
            <ul>
              <li className="masks-li">Wear a mask that covers your nose and mouth to help protect others in case you’re infected with COVID-19 but don’t have symptoms</li>
              <li className="masks-li">Wear a mask in public settings when around people who don’t live in your household, especially when it may be difficult for you to stay six feet apart</li>
              <li className="masks-li">Wear a mask correctly for maximum protection</li>
              <li className="masks-li">Don’t put the mask around your neck or up on your forehead</li>
              <li className="masks-li">Don’t touch the mask, and, if you do, wash your hands or use hand sanitizer to disinfect</li>
            </ul>

            <br></br><p className="masks-subject">Follow Everyday Health Habits</p>
            <Image className="masks-big-image2" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/COVIDweb_avoidCloseContact_masks_rect-01.png"></Image>
            <ul>
              <li className="masks-li">Stay at least 6 feet away from others</li>
              <li className="masks-li">Avoid contact with people who are sick</li>
              <li className="masks-li">Wash your hands often, with soap and water, for at least 20 seconds each time</li>
              <li className="masks-li">Use hand sanitizer if soap and water are not available</li>
            </ul>

            <br></br><p className="masks-subject">Take Off Your Mask Carefully, When You’re Home</p>
            <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/05_take_off-01.jpg"></Image>
            <ul>
              <li className="masks-li">Untie the strings behind your head or stretch the ear loops</li>
              <li className="masks-li">Handle only by the ear loops or ties</li>
              <li className="masks-li">Fold outside corners together</li>
              <li className="masks-li">Place mask in the washing machine (learn more about <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wash-cloth-face-coverings.html">how to wash masks</a>)</li>
              <li className="masks-li">Be careful not to touch your eyes, nose, and mouth when removing and wash hands immediately after removing.</li>
            </ul>


            <a id="storing-and-washing-masks" className="return-top" href="#masks-top"><br></br>Return to Top</a><br></br>
            <br></br><p className="masks-subject-header">Storing and Washing Masks</p><br></br>

            <p className="masks-p">Store your cloth mask properly and wash it regularly to keep it clean. Consider having more than one mask on hand so that you can easily replace a dirty mask with a clean one. Make sure to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html">remove your mask correctly</a> and <a target="_blank" href="https://www.cdc.gov/handwashing/when-how-handwashing.html">wash your hands</a>
              after touching a used mask.</p>


            <p className="masks-subject">Store wet or dirty masks in a plastic bag</p>
            <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/wash-face-mask.png"></Image><br></br>
            <p className="masks-p">If your mask is wet or dirty from sweat, saliva, make-up, or other liquids or substances, keep it in a sealed plastic bag until you can wash it. Wash wet or dirty masks as soon as possible to prevent them from becoming moldy. Wet masks can be hard to breathe through and are less effective than dry masks.</p><br></br>

            <p className="masks-subject">Store masks that are not wet or dirty in a paper bag</p>

            <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/mask-storage.png"></Image>
            <p className="masks-p">You can store your mask temporarily to reuse later. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html">Remove your mask correctly</a> and <a target="_blank" href="https://www.cdc.gov/handwashing/when-how-handwashing.html">wash your hands</a> after touching a used mask. Keep it in a dry, breathable bag (like a paper or mesh fabric bag) to keep it clean between uses. When reusing your mask, keep the same side facing out.<br></br><br></br>
              If you are taking off your mask to eat or drink outside of your home, you can place it somewhere safe to keep it clean, such as your pocket, purse, or paper bag. Make sure to wash or sanitize your hands after removing your mask. After eating, put the mask back on with the same side facing out. Be sure to wash or sanitize your hands again after putting your mask back on.</p>

            <p className="masks-subject">Wash your mask</p>
            <p className="masks-p">Wash your cloth mask whenever it gets dirty or at least daily. If you have a disposable face mask, throw it away after wearing it once.</p>

            <br></br><p className="masks-subject">Using a washing machine</p><br></br>
            <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/wash-face-covering-01-washer.png"></Image>
            <ul>
              <li className="masks-li">You can include your mask with your regular laundry.</li>
              <li className="masks-li">Use regular laundry detergent and the warmest appropriate water setting for the cloth used to make the mask.</li>
            </ul>

            <br></br><b>Washing by Hand</b><br></br>
            <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/detergent.png"></Image>
            <ul>
              <li className="masks-li">Check the label to see if your bleach is intended for disinfection. Some bleach products, such as those designed for safe use on colored clothing, may not be suitable for disinfection.
                <ul>
                  <li className="masks-nested-li">Use bleach containing 5.25%–8.25% sodium hypochlorite. Do not use a bleach product if the percentage is not in this range or is not specified.</li>
                  <li className="masks-nested-li">Ensure the bleach product is not past its expiration date. Never mix household bleach with ammonia or any other cleanser.</li>
                  <li className="masks-nested-li">Ensure adequate ventilation.</li>
                </ul>
              </li>
              <li className="masks-li">Prepare a bleach solution by mixing:
                <ul>
                  <li className="masks-nested-li">5 tablespoons (1/3rd cup) of 5.25%–8.25% bleach per gallon of room temperature water or</li>
                  <li className="masks-nested-li">4 teaspoons of 5.25%–8.25% bleach per quart of room temperature water</li>
                </ul></li>
              <li className="masks-li">Soak the mask in the bleach solution for 5 minutes.</li>
              <li className="masks-li">Discard the bleach solution down the drain and rinse the mask thoroughly with cool or room temperature water.</li>
              <li className="masks-li"><b>Make sure to completely dry the mask after washing.</b></li>

              <br></br><b>Using Bleach Safely:</b>
              <ul>
                <li className="masks-li">Always read and follow the directions on the label to ensure safe and effective use.</li>
                <li className="masks-li">Be aware that bleach can damage cloth fabric over time.</li>
                <li className="masks-li">Wear skin protection and consider eye protection for potential splash hazards.</li>
                <li className="masks-li">Use water at room temperature for dilution (unless stated otherwise on the label).</li>
                <li className="masks-li">Store and use bleach out of the reach of children and pets.</li>
                <li className="masks-li">Special considerations should be made for people with asthma and they should not be present when cleaning and disinfecting is happening as this can trigger asthma exacerbations. Learn more about <a target="_blank" href="https://www.cdc.gov/asthma/reduce_triggers.html">reducing asthma triggers</a>.</li>
                <li className="masks-li">See <a target="_blank" href="https://www.epa.gov/pesticide-registration/six-steps-safe-effective-disinfectant-use">EPA's 6 Steps for Safe and Effective Disinfectant Use</a></li>
              </ul>
            </ul>





            <p className="masks-subject">How to Dry</p><br></br>
            <ul>
              <b>Dryer</b><br></br>
              <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/wash-face-covering-03-dryer.png"></Image>
              <ul>
                <li className="masks-li">Use the highest heat setting and leave in the dryer until completely dry.</li>
              </ul>
              <br></br><b>Air Dryer</b><br></br>
              <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/wash-face-covering-04-drying-sun.png"></Image>
              <ul>
                <li className="masks-li">Lay flat and allow to completely dry. If possible, place the mask in direct sunlight.</li>
              </ul>
            </ul>

            <a id="making-masks" className="return-top" href="#masks-top"><br></br>Return to Top</a><br></br>
            <br></br><p className="masks-subject-header">Making Masks</p><br></br>
            <p className="masks-p">CDC recommends that you wear masks in public settings when around people who don’t live in your household, especially when other <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing</a> measures are difficult to maintian.<br></br>
              Masks with at least 2 layers of fabric are most likely to reduce the spread of COVID-19 when they are widely used by people in public settings.<br></br>
              Simple masks can be made at home using washable, breathable fabric and may help prevent the spread of COVID-19.</p>

            <ul>
              <li className="masks-li"><b>CDC recommends that people wear masks in public</b> and when around people who don’t live in your household.</li>
              <li className="masks-li"><b>Masks should NOT be worn by children under age 2 or anyone who has trouble breathing,</b> is unconscious, incapacitated, or otherwise unable to remove the mask without assistance.</li>
              <li className="masks-li"><b>Do NOT use a mask meant for a healthcare worker.</b> Currently, surgical masks and N95 respirators are critical supplies that should be reserved for healthcare workers and other first responders.</li>

            </ul>
            <p className="masks-subject">Sewn Mask</p><br></br>
            <p className="masks-p"><b>Materials</b></p><br></br>
            <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/facemask-instructions-sewn-01.png"></Image>
            <ul>
              <li className="masks-li">Two 10”x6” rectangles of cotton fabric</li>
              <li className="masks-li">Two 6” pieces of elastic (or rubber bands, string, cloth strips, or hair ties)</li>
              <li className="masks-li">Needle and thread (or bobby pin)</li>
              <li className="masks-li">Scissors</li>
              <li className="masks-li">Sewing machine</li>
            </ul>

            <p class="masks-p"><b>Tutorial</b></p>

            <b>1.</b> Cut out two 10-by-6-inch rectangles of cotton fabric. Use tightly woven cotton, such as quilting fabric or cotton sheets. T-shirt fabric will work in a pinch. Stack the two rectangles; you will sew the mask as if it was a single piece of fabric
              <br></br><Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/facemask-instructions-sewn-02.png"></Image><br></br><br></br>


            <b>2.</b> Fold over the long sides ¼ inch and hem. Then fold the double layer of fabric over ½ inch along the short sides and stitch down.
                  <br></br><Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/facemask-instructions-sewn-03.png"></Image><br></br><br></br>

            <b>3.</b> Run a 6-inch length of 1/8-inch wide elastic through the wider hem on each side of the mask. These will be the ear loops. Use a large needle or a bobby pin to thread it through. Tie the ends tight.
                  Don’t have elastic? Use hair ties or elastic head bands. If you only have string, you can make the ties longer and tie the mask behind your head.
      <br></br><Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/facemask-instructions-sewn-04.png"></Image><br></br><br></br>

            <b>4.</b> Gently pull on the elastic so that the knots are tucked inside the hem. Gather the sides of the mask on the elastic and adjust so the mask fits your face. Then securely stitch the elastic in place to keep it from slipping.
                  <br></br><Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/facemask-instructions-sewn-05.png"></Image><br></br><br></br>

            <p className="masks-subject">Non-sewn Mask</p><br></br>
            <p className="masks-p"><b>Materials</b></p>
            <ul>
              <li className="masks-li">Washable, breathable fabric (cut approximately 20”x20”)</li>
              <li className="masks-li">Rubber bands (or hair ties)</li>
              <li className="masks-li">Scissors (if you are cutting your own cloth)</li>
            </ul>
            <p className="masks-p"><b>Tutorial</b></p><br></br>
            <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/facemask-instructions-bandanna-01.png"></Image>
            <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/facemask-instructions-bandanna-02.png"></Image>
            <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/facemask-instructions-bandanna-03.png"></Image>
            <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/facemask-instructions-bandanna-04.png"></Image>
            <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/facemask-instructions-bandanna-05.png"></Image>
            <Image src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/facemask-instructions-bandanna-06.png"></Image>

            <br></br><b>Make sure your mask:</b>
            <ul>
              <li className="masks-li">fits snugly but comfortably against the side of the face</li>
              <li className="masks-li">completely covers the nose and mouth</li>
              <li className="masks-li">is secured with ties or ear loops</li>
              <li className="masks-li">includes multiple layers of fabric</li>
              <li className="masks-li">allows for breathing without restriction</li>
              <li className="masks-li">can be laundered and machine dried without damage or change to shape</li>
            </ul>

            See more about how to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html">wear</a> and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wash-cloth-face-coverings.html"> your mask</a>.

            <br></br><iframe className="iframe2" src="https://www.youtube.com/embed/tPx1yqvJgf4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br></br>



            <a id="considerations-for-wearing-masks" className="return-top" href="#masks-top"><br></br>Return to Top</a><br></br>
            <br></br><p className="masks-subject-header">Considerations for Wearing Masks</p><br></br>

            <ul>
              <li className="masks-li">CDC recommends that people wear masks in public settings and when around people who don’t live in your household, especially when other <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing</a> measures are difficult to maintain.</li>
              <li className="masks-li">Masks may help prevent people who have COVID-19 from spreading the virus to others.</li>
              <li className="masks-li">Masks are most likely to reduce the spread of COVID-19 when they are widely used by people in public settings.</li>
              <li className="masks-li">Masks should NOT be worn by children under the age of 2 or anyone who has trouble breathing, is unconscious, incapacitated, or otherwise unable to remove the mask without assistance.</li>
              <li className="masks-li">Masks with exhalation valves or vents should NOT be worn to help prevent the person wearing the mask from spreading COVID-19 to others (source control)</li>
            </ul>

            <p className="masks-subject">Evidence for Effectiveness of Masks</p>
            <Image className="masks-big-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/facemasks-protect-others.png"></Image><br></br>
            <p className="masks-p">Masks are recommended as a simple barrier to help prevent respiratory droplets from traveling into the air and onto other people when the person wearing the mask coughs, sneezes, talks, or raises their voice. This is called source control. This recommendation is based on what we know about the role respiratory droplets play in the spread of the virus that causes COVID-19, paired with emerging evidence from clinical and laboratory studies that shows masks reduce the spray of droplets when worn over the nose and mouth. COVID-19 spreads mainly among people who are in close contact with one another (within about 6 feet), so the use of masks is particularly important in settings where people are close to each other or where social distancing is difficult to maintain. CDC’s recommendations for masks will be updated as new scientific evidence becomes available.</p>


            <br></br><p className="masks-subject">Who Should Wear A Mask?</p>
            <ul>
              <b>General Public</b>
              <li className="masks-nested-li">CDC recommends all people 2 years of age and older wear a mask in public settings and when around people who don’t live in your household, especially when other <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing</a> measures are difficult to maintain.</li>
              <li className="masks-nested-li">COVID-19 can be spread by people who do not have symptoms and do not know that they are infected. That’s why it’s important for everyone to wear masks in public settings and practice <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">social distancing</a> (staying at least 6 feet away from other people).</li>
              <li className="masks-nested-li">While masks are strongly encouraged to reduce the spread of COVID-19, CDC recognizes there are specific instances when wearing a mask may not be feasible. In these instances, <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover-guidance.html#feasibility-adaptations">adaptations and alternatives</a> should be considered whenever possible (see below for examples).</li>

              <br></br><b>People who know or think they might have COVID-19</b>
              <li className="masks-nested-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">If you are sick</a> with COVID-19 or think you might have COVID-19, do not visit public areas. Stay home except to get medical care. As much as possible stay in a specific room and away from other people and pets in your home. If you need to be around other people or animals, wear a mask (including in your home).</li>
              <li className="masks-nested-li">The mask helps prevent a person who is sick from spreading the virus to others. It helps keep respiratory droplets contained and from reaching other people.</li>

              <br></br><b>Caregivers of people with COVID-19</b>
              <li className="masks-nested-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/care-for-someone.html">Those caring for someone who is sick with COVID-19 at home or in a non-healthcare setting</a> may also wear a mask. However, the protective effects—how well the mask protects healthy people from breathing in the virus—are unknown. To prevent getting sick, caregivers should also continue to practice <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">everyday preventive actions</a>: avoid close contact as much as possible, clean hands often; avoid touching your eyes, nose, and mouth with unwashed hands; and frequently clean and disinfect surfaces.</li>
            </ul><br></br>
            {/* <br></br><iframe className="iframe" src="https://www.youtube.com/embed/tnS9yC_bYHY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br></br> */}

            <p className="masks-subject">Who Should Not Wear a Mask?</p>
            <ul>
              <li className="masks-li">Children younger than 2 years old</li>
              <li className="masks-li">Anyone who has trouble breathing</li>
              <li className="masks-li">Anyone who is unconscious, incapacitated, or otherwise unable to remove the mask without assistance</li>
            </ul><br></br>
            <b>Feasibility and Adaptations</b><br></br>
              CDC recognizes that wearing masks may not be possible in every situation or for some people. In some situations, wearing a mask may exacerbate a physical or mental health condition, lead to a medical emergency, or introduce significant safety concerns. Adaptations and alternatives should be considered whenever possible to increase the feasibility of wearing a mask or to reduce the risk of COVID-19 spreading if it is not possible to wear one.<br></br><br></br>
            <b>For example:</b>
            <ul>
              <li className="masks-li">People who are deaf or hard of hearing—or those who care for or interact with a person who is hearing impaired—may be unable to wear masks if they rely on lipreading to communicate. In this situation, consider using a clear mask. If a clear mask isn’t available, consider whether you can use written communication, use closed captioning, or decrease background noise to make communication possible while wearing a mask that blocks your lips.</li>
              <li className="masks-li">Some people, such as people with intellectual and developmental disabilities, mental health conditions or other sensory sensitivities, may have challenges wearing a mask. They should consult with their healthcare provider for advice about wearing masks.</li>
              <li className="masks-li">Younger children (e.g., preschool or early elementary aged) may be unable to wear a mask properly, particularly for an extended period of time. Wearing of masks may be prioritized at times when it is difficult to maintain a distance of 6 feet from others (e.g., during carpool drop off or pick up, or when standing in line at school). Ensuring proper mask size and fit and providing children with frequent reminders and education on the importance and proper wear of masks may help address these issues.</li>
              <li className="masks-li">People should not wear masks while engaged in activities that may cause the mask to become wet, like when <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/parks-rec/public-beaches.html">swimming at the beach or pool</a>. A wet mask may make it difficult to breathe. For activities like swimming, it is particularly important to maintain physical distance from others when in the water.</li>
              <li className="masks-li">People who are engaged in high intensity activities, like running, may not be able to wear a mask if it causes difficulty breathing. If unable to wear a mask, consider conducting the activity in a location with greater ventilation and air exchange (for instance, outdoors versus indoors) and where it is possible to maintain physical distance from others.</li>
              <li className="masks-li">People who work in a setting where masks may increase the risk of <a target="_blank" href="https://www.cdc.gov/niosh/topics/heatstress/">heat-related illness</a> or cause safety concerns due to introduction of a hazard (for instance, straps getting caught in machinery) may consult with an occupational safety and health professional to determine the appropriate mask for their setting. Outdoor workers may prioritize use of masks when in close contact with other people, like during group travel or shift meetings, and remove masks when social distancing is possible. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/community/organizations/meat-poultry-processing-workers-employers.html">Find more information here</a> and below.</li>
              Masks are a critical preventive measure and are most essential in times when social distancing is difficult. If masks cannot be used, make sure to take other measures to reduce the risk of COVID-19 spread, including social distancing, frequent hand washing, and cleaning and disinfecting frequently touched surfaces.
              </ul><br></br>
            <b>Masks with Exhalation Valves or Vents</b><br></br>
              The purpose of masks is to keep respiratory droplets from reaching others to aid with source control. However, masks with one-way valves or vents allow air to be exhaled through a hole in the material, which can result in expelled respiratory droplets that can reach others.  This type of mask does not prevent the person wearing the mask from transmitting COVID-19 to others. Therefore, CDC does not recommend using masks for source control if they have an exhalation valve or vent.

              <br></br><br></br><b>Face Shields</b><br></br>
            <ul>
              <li className="masks-li">A face shield is primarily used for eye protection for the person wearing it. At this time, it is not known what level of protection a face shield provides to people nearby from the spray of respiratory droplets from the wearer. There is currently not enough evidence to support the effectiveness of face shields for source control. Therefore, CDC <b>does not currently recommend</b> use of face shields as a substitute for masks.</li>
              <li className="masks-li">However, wearing a mask may not be feasible in every situation for some people for example, people who are deaf or hard of hearing—or those who care for or interact with a person who is hearing impaired. Here are some considerations for individuals who must wear a face shield instead of a mask:
                <ul>
                  <li className="masks-nested-li">Although evidence on face shields is limited, the available data suggest that the following face shields may provide better source control than others:
                  <ul>
                      <li>Face shields that wrap around the sides of the wearer’s face and extend below the chin.</li>
                      <li>Hooded face shields.</li>
                    </ul>
                  </li>
                  <li className="masks-nested-li">Face shield wearers should wash their hands before and after removing the face shield and avoid touching their eyes, nose and mouth when removing it.</li>
                  <li className="masks-nested-li">Disposable face shields should only be worn for a single use and disposed of according to manufacturer instructions.</li>
                  <li className="masks-nested-li">Reusable face shields should be cleaned and disinfected after each use according to manufacturer instructions or by following <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/ppe-strategy/eye-protection.html">CDC face shield cleaning instructions.</a></li>
                  <li className="masks-nested-li"><b>Plastic face shields for newborns and infants are NOT recommended.</b></li>
                </ul>
              </li>
            </ul>

            <br></br><b>Surgical Masks </b><br></br>
              Masks are not surgical masks or respirators. Currently, those are critical supplies that should continue to be reserved for healthcare workers and other medical first responders, as recommended by current CDC guidance. Masks also are not appropriate substitutes for them in workplaces where surgical masks or respirators are recommended or required and available. <br></br><br></br>

            <p className="masks-subject">Recent Studies:</p>
            <ul>

              <li className="masks-li">Rothe C, Schunk M, Sothmann P, et al. Transmission of 2019-nCoV Infection from an Asymptomatic Contact in Germany. The New England journal of medicine. 2020;382(10):970-971. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32003551/">PMID 32003551</a></li>
              <li className="masks-li">Zou L, Ruan F, Huang M, et al. SARS-CoV-2 Viral Load in Upper Respiratory Specimens of Infected Patients. The New England journal of medicine. 2020;382(12):1177-1179. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32074444/">PMID: 32074444</a></li>
              <li className="masks-li">Pan X, Chen D, Xia Y, et al. Asymptomatic cases in a family cluster with SARS-CoV-2 infection. The Lancet Infectious diseases. 2020. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32087116/">PMID: 32087116</a></li>
              <li className="masks-li">Bai Y, Yao L, Wei T, et al. Presumed Asymptomatic Carrier Transmission of COVID-19. Jama. 2020. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32083643/">PMID: 32083643</a></li>
              <li className="masks-li">Kimball A HK, Arons M, et al. Asymptomatic and Presymptomatic SARS-CoV-2 Infections in Residents of a Long-Term Care Skilled Nursing Facility — King County, Washington, March 2020. MMWR Morbidity and mortality weekly report. 2020; ePub: 27 March 2020. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32240128/">PMID: 32240128</a></li>
              <li className="masks-li">Wei WE LZ, Chiew CJ, Yong SE, Toh MP, Lee VJ. Presymptomatic Transmission of SARS-CoV-2 — Singapore, January 23–March 16, 2020. MMWR Morbidity and Mortality Weekly Report. 2020;ePub: 1 April 2020. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32271722/">PMID: 32271722</a></li>
              <li className="masks-li">Li R, Pei S, Chen B, et al. Substantial undocumented infection facilitates the rapid dissemination of novel coronavirus (SARS-CoV2). Science (New York, NY). 2020. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32179701/">PMID: 32179701</a></li>
              <li className="masks-li">Furukawa NW, Brooks JT, Sobel J. Evidence Supporting Transmission of Severe Acute Respiratory Syndrome Coronavirus 2 While Presymptomatic or Asymptomatic [published online ahead of print, 2020 May 4]. Emerg Infect Dis. 2020;26(7):10.3201/eid2607.201595. <a target="_blank" href="https://wwwnc.cdc.gov/eid/article/26/7/20-1595_article">Link</a></li>
              <li className="masks-li">Oran DP, Topol Prevalence of Asymptomatic SARS-CoV-2 Infection: A Narrative Review [published online ahead of print, 2020 Jun 3]. Ann Intern Med. 2020;M20-3012. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32491919/">PMID: 32491919</a></li>
              <li className="masks-li">National Academies of Sciences, Engineering, and Medicine. 2020. Rapid Expert Consultation on the Possibility of Bioaerosol Spread of SARS-CoV-2 for the COVID-19 Pandemic (April 1, 2020). Washington, DC: The National Academies Press. <a target="_blank" href="https://doi.org/10.17226/25769">https://doi.org/10.17226/25769</a></li>
              <li className="masks-li">Schwartz KL, Murti M, Finkelstein M, et al. Lack of COVID-19 transmission on an international flight. CMAJ. 2020;192(15):E410. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32392504/">PMID: 32392504</a></li>
              <li className="masks-li">Anfinrud P, Stadnytskyi V, Bax CE, Bax A. Visualizing Speech-Generated Oral Fluid Droplets with Laser Light Scattering. N Engl J Med. 2020 Apr 15. doi:10.1056/NEJMc2007800. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32294341/">PMID: 32294341</a></li>
              <li className="masks-li">Davies A, Thompson KA, Giri K, Kafatos G, Walker J, Bennett A. Testing the efficacy of homemade masks: would they protect in an influenza pandemic? Disaster Med Public Health Prep. 2013;7(4):413-8. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/24229526/">PMID: 24229526</a></li>
              <li className="masks-li">Konda A, Prakash A, Moss GA, Schmoldt M, Grant GD, Guha S. Aerosol Filtration Efficiency of Common Fabrics Used in Respiratory Cloth Masks. ACS Nano. 2020 Apr 24. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32329337/">PMID 32329337</a></li>
              <li className="masks-li">Aydin O, Emon B, Saif MTA. Performance of fabrics for home-made masks against spread of respiratory infection through droplets: a quantitative mechanistic study. medRxiv preprint doi: https://doi.org/10.1101/2020.04.19.20071779, posted April 24, 2020.</li>
              <li className="masks-li">Ma QX, Shan H, Zhang HL, Li GM, Yang RM, Chen JM. Potential utilities of mask-wearing and instant hand hygiene for fighting SARS-CoV-2. J Med Virol. 2020. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32232986/">PMID: 32232986</a></li>
              <li className="masks-li">Leung, N.H.L., Chu, D.K.W., Shiu, E.Y.C. <i>et al</i>.al.Respiratory virus shedding in exhaled breath and efficacy of face masks. Nat Med. 2020. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32371934/">PMID: 32371934</a></li>
              <li className="masks-li">Johnson DF, Druce JD, Birch C, Grayson ML. A quantitative assessment of the efficacy of surgical and N95 masks to filter influenza virus in patients with acute influenza infection. Clin Infect Dis. 2009 Jul 15;49(2):275-7. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/19522650/">PMID: 19522650</a></li>
              <li className="masks-li">Green CF, Davidson CS, Panlilio AL, et al. Effectiveness of selected surgical masks in arresting vegetative cells and endospores when worn by simulated contagious patients. Infect Control Hosp Epidemiol. 2012;33(5):487‐494. <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/22476275/">PMID: 22476275</a></li>

            </ul>
            <a className="return-top" href="#masks-top"><br></br>Return to Top</a>

          </Alert>
          {/* END MASKS */}

          {/* START SYMPTOMS */}
          <Alert className="alert" id="symptoms" variant="warning" onClose={() => hide_symptoms()} dismissible hidden="true">
            <Alert.Heading className="card-top-heading"><a id="symptoms-top">Symptoms</a></Alert.Heading>
            <iframe id="frame" border="1px solid black" className="self-checker" frameborder="1" src="https://tools.cdc.gov/medialibrary/app/detail_widget/options_templates/template_405848_preview.html?class=cdc-widget-color-white&theme=theme1&language=en">

              <div data-cdc-widget='healthBot' data-cdc-theme='theme1' class='cdc-widget-color-white' data-cdc-language='en-us'></div>
              <script src='https://t.cdc.gov/1M1B'></script>

            </iframe>
            <br></br><p className="symptoms-header">What you need to know</p><br></br>
            <ul>
              <li className="symptoms-li">Anyone can have mild to severe symptoms.</li>
              <li className="symptoms-li"><b>Older adults and people who have severe underlying medical conditions</b> like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illness.</li>
            </ul><br></br>
            <p className="symptoms-header">Watch for symptoms</p><br></br>
            <p className="symptoms-p">People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19:<br></br></p>
            <ul>
              <li className="symptoms-li">Fever or chills</li>
              <li className="symptoms-li">Cough</li>
              <li className="symptoms-li">Shortness of breath or difficulty breathing</li>
              <li className="symptoms-li">Fatigue</li>
              <li className="symptoms-li">Muscle or body aches</li>
              <li className="symptoms-li">Headache</li>
              <li className="symptoms-li">New loss of taste or smell</li>
              <li className="symptoms-li">Sore throat</li>
              <li className="symptoms-li">Congestion or runny nose</li>
              <li className="symptoms-li">Nausea or vomiting</li>
              <li className="symptoms-li">Diarrhea</li>
              <p className="symptoms-p">This list does not include all possible symptoms. CDC will continue to update this list as we learn more about COVID-19.</p>

            </ul><br></br>
            <p className="symptoms-header">When to seek emergency medical attention</p><br></br>
            <p className="symptoms-p">Look for <b>emergency warning signs*</b> for COVID-19. If someone is showing any of these signs, <b>seek emergency medical care immediately:</b><br></br></p>
            <ul>
              <li className="symptoms-li">Trouble breathing</li>
              <li className="symptoms-li">Persistent pain or pressure in the chest</li>
              <li className="symptoms-li">New confusion</li>
              <li className="symptoms-li">Inability to wake or stay awake</li>
              <li className="symptoms-li">Bluish lips or face</li>
            </ul>
            <p className="symptoms-p">*This list is not all possible symptoms. Please call your medical provider for any other symptoms that are severe or concerning to you.<br></br>
              <b>Call 911 or call ahead to your local emergency facility:</b> Notify the operator that you are seeking care for someone who has or may have COVID-19.<br></br></p>
            <br></br><p className="symptoms-header">Caring for yourself or others</p>
            <ul>

            </ul>
            <li className="symptoms-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">How to protect yourself</a></li>
            <li className="symptoms-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/care-for-someone.html">How to care for someone who is sick</a></li>
            <li className="symptoms-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">What to do if you are sick</a></li><br></br><br></br>
            <p className="symptoms-header">What is the difference between Influenza (Flu) and COVID-19?</p><br></br>
            <p className="symptoms-p">Influenza (Flu) and COVID-19 are both contagious respiratory illnesses, but they are caused by different viruses. COVID-19 is caused by infection with a new coronavirus (called SARS-CoV-2) and flu is caused by infection with <a target="_blank" href="https://www.cdc.gov/flu/about/viruses/index.htm">influenza viruses</a>.<br></br>
                  There are some key differences between flu and COVID-19. COVID-19 seems to spread more easily than flu and causes more serious illnesses in some people. It can also take longer before people show symptoms and people can be contagious for longer. Another important difference is there is a vaccine to protect against flu. The best way to prevent infection is to avoid being exposed to the virus. More information about differences between flu and COVID-19 is available in the different sections below.<br></br>
                  Because some of the symptoms of flu and COVID-19 are similar, it may be hard to tell the difference between them based on symptoms alone, and <a target="_blank" href="https://www.cdc.gov/flu/symptoms/testing.htm#anchor_1596736120603">testing</a> may be needed to help confirm a diagnosis. Flu and COVID-19 share many characteristics, but there are some key differences between the two.<br></br>
                  While more is learned every day, there is still a lot that is unknown about COVID-19 and the virus that causes it. This page compares COVID-19 and flu, given the best available information to date.</p>


            <a className="return-top" href="#symptoms-top"><br></br>Return to Top</a>


          </Alert>
          {/* END SYMPTOMS */}

          {/* START IF SICK */}
          <Alert className="alert" id="if_you_are_sick" variant="danger" onClose={() => hide_if_you_are_sick()} dismissible hidden="true">
            <Alert.Heading className="card-top-heading"><a id="sick-top"></a>If You Are Sick</Alert.Heading>




            <Table className="table">
              {/* <a id="Top"><thead className="on-this-page">On This Page</thead></a><br></br> */}
              <tbody>
                <tr >
                  <a href="#isolate-if-you-are-sick"><td className="tdleft" >Isolate If You Are Sick</td></a>
                  <a href="#when-to-quarantine"><td className="tdright" >When to Quarantine</td></a>
                </tr>
                <tr >
                  <a href="#caring-for-someone"><td className="tdleft" >Caring for Someone</td></a>
                  <a href="#parents-or-caregivers-who-are-sick"><td className="tdright">Parents or Caregivers Who Are Sick</td></a>
                </tr>
                <tr >
                  <a href="#when-you-can-be-around-others"><td className="tdleft" >When You Can Be Around Others</td></a>
                  <a href="#potential-treatments-for-severe-illness"><td className="tdright">Potential Treatments for Severe Illness</td></a>
                </tr>
                <tr >
                  <a href="#reinfection"><td className="tdleft" >Reinfection</td></a>
                  <a href="#long-term-effects"><td className="tdright">Long-Term Effects</td></a>
                </tr>
                <tr >
                  <a href="#multisystem-inflammatory-syndrome-in-adults"><td className="tdcenter" >Multisystem Inflammatory Syndrome In Adults</td></a>
                </tr>

              </tbody>
            </Table><br></br>


            <p className="sick-subject-header">What to Do If You Are Sick</p><br></br>
            <br></br><p className="sick-subject">Stay home except to get medical care</p>

            <ul>
              <li className="sick-li"><b>Stay home.</b> Most people with COVID-19 have mild illness and can recover at home without medical care. Do not leave your home, except to get medical care. Do not visit public areas.</li>
              <li className="sick-li"><b>Take care of yourself.</b> Get rest and stay hydrated. Take over-the-counter medicines, such as acetaminophen, to help you feel better.</li>
              <li className="sick-li"><b>Stay in touch with your doctor.</b> Call before you get medical care. Be sure to get care if you have trouble breathing, or have any other <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html#warning-signs">emergency warning signs</a>, or if you think it is an <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html#emergency">emergency</a>.</li>
              <li className="sick-li"><b>Avoid public transportation</b>, ride-sharing, or taxis.</li>
            </ul>
            <br></br><p className="sick-subject">Separate yourself from other people</p>
            <p className="sick-p"><b>As much as possible, stay in a specific room</b> and away from other people and pets in your home. If possible, you should use a separate bathroom. If you need to be around other people or animals in or outside of the home, wear a mask.<br></br>
              <b>Tell your <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html#Contact-Tracing">close contacts</a></b> that they may have been exposed to COVID-19. An infected person can spread COVID-19 starting 48 hours (or 2 days) before the person has any symptoms or tests positive. By letting your close contacts know they may have been exposed to COVID-19, you are helping to protect everyone.</p>
            <ul>
              <li className="sick-li">Additional guidance is available for those living in <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/living-in-close-quarters.html">close quarters</a> and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/shared-housing/index.html">shared housing.</a></li>
              <li className="sick-li">See <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html#COVID-19-and-Animals">COVID-19 and Animals</a> if you have questions about pets.</li>
              <li className="sick-li">If you are diagnosed with COVID-19, someone from the health department may call you. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/contact-tracing.html#you-are-diagnosed">Answer the call</a> to slow the spread.</li>
            </ul>

            <br></br><p className="sick-subject">Monitor your symptoms</p>
            <ul>
              <li className="sick-li"><b><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">Symptoms</a> of COVID-19 include fever, cough, or other symptoms.</b></li>
              <li className="sick-li"><b>Follow care instructions from your healthcare provider and local health department.</b> Your local health authorities may give instructions on checking your symptoms and reporting information.</li>
            </ul>

            <p className="sick-p">When to seek emergency medical attention
                Look for <b>emergency warning signs*</b> for COVID-19. If someone is showing any of these signs, <b>seek emergency medical care immediately:</b></p>
            <ul>
              <li className="sick-li">Trouble breathing</li>
              <li className="sick-li">Persistent pain or pressure in the chest</li>
              <li className="sick-li">New confusion</li>
              <li className="sick-li">Inability to wake or stay awake</li>
              <li className="sick-li">Bluish lips or face</li>
            </ul>
            <p className="sick-p">
              *This list is not all possible symptoms. Please call your medical provider for any other symptoms that are severe or concerning to you.<br></br>
              <b>Call 911 or call ahead to your local emergency facility:</b> Notify the operator that you are seeking care for someone who has or may have COVID-19.</p>

            <br></br><p className="sick-subject">Call ahead before visiting your doctor</p>
            <ul>
              <li className="sick-li"><b>Call ahead.</b> Many medical visits for routine care are being postponed or done by phone or telemedicine.</li>
              <li className="sick-li"><b>If you have a medical appointment that cannot be postponed, call your doctor’s office,</b> and tell them you have or may have COVID-19. This will help the office protect themselves and other patients.</li>
            </ul>
            <br></br><p className="sick-subject">If you are sick, wear a mask over your nose and mouth</p>
            <ul>
              <li className="sick-li">You should wear a mask over your nose and mouth if you must be around other people or animals, including pets (even at home).</li>
              <li className="sick-li">You don’t need to wear the mask if you are alone. If you can’t put on a mask (because of trouble breathing, for example), cover your coughs and sneezes in some other way. Try to stay at least 6 feet away from other people. This will help protect the people around you.</li>
              <li className="sick-li">Masks should not be placed on young children under age 2 years, anyone who has trouble breathing, or anyone who is not able to remove the mask without help.</li>
            </ul>
            <p className="sick-p"><b>Note:</b> During the COVID-19 pandemic, medical grade facemasks are reserved for healthcare workers and some first responders</p>
            <br></br><p className="sick-subject">Cover your coughs and sneezes</p>
            <ul>
              <li className="sick-li"><b>Cover your mouth and nose</b> with a tissue when you cough or sneeze.</li>
              <li className="sick-li"><b>Throw away used tissues</b> in a lined trash can.</li>
              <li className="sick-li"><b>Immediately wash your hands</b> with soap and water for at least 20 seconds. If soap and water are not available, clean your hands with an alcohol-based hand sanitizer that contains at least 60% alcohol.</li>
            </ul>
            <br></br><p className="sick-subject">Clean your hands often</p>
            <ul>
              <li className="sick-li"><b>Wash your hands</b> often with soap and water for at least 20 seconds. This is especially important after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food.</li>
              <li className="sick-li"><b>Use hand sanitizer</b> if soap and water are not available. Use an alcohol-based hand sanitizer with at least 60% alcohol, covering all surfaces of your hands and rubbing them together until they feel dry.</li>
              <li className="sick-li"><b>Soap and water</b> are the best option, especially if hands are visibly dirty.</li>
              <li className="sick-li"><b>Avoid touching</b> your eyes, nose, and mouth with unwashed hands.</li>
              <li className="sick-li"><a target="_blank" href="https://www.cdc.gov/handwashing/index.html">Handwashing Tips</a></li>
            </ul>
            <br></br><p className="sick-subject">Avoid sharing personal household items</p>
            <ul>
              <li className="sick-li"><b>Do not share</b> dishes, drinking glasses, cups, eating utensils, towels, or bedding with other people in your home.</li>
              <li className="sick-li"><b>Wash these items thoroughly after using them</b> with soap and water or put in the dishwasher.</li>
            </ul>
            <br></br><p className="sick-subject">Clean all “high-touch” surfaces everyday</p><ul>
              <li className="sick-li"><b>Clean and disinfect</b> high-touch surfaces in your “sick room” and bathroom; wear disposable gloves. Let someone else clean and disinfect surfaces in common areas, but you should clean your bedroom and bathroom, if possible.</li>
              <li className="sick-li"><b>If a caregiver or other person needs to clean and disinfect</b> a sick person’s bedroom or bathroom, they should do so on an as-needed basis. The caregiver/other person should wear a mask and disposable gloves prior to cleaning. They should wait as long as possible after the person who is sick has used the bathroom before coming in to clean and use the bathroom.</li>
                    High-touch surfaces include phones, remote controls, counters, tabletops, doorknobs, bathroom fixtures, toilets, keyboards, tablets, and bedside tables.
                    <li className="sick-li"><b>Clean and disinfect areas that may have blood, stool, or body fluids on them.</b></li>
              <li className="sick-li"><b>Use household cleaners and disinfectants.</b> Clean the area or item with soap and water or another detergent if it is dirty. Then, use a household disinfectant.</li>
              <ul>
                <li className="sick-li">Be sure to follow the instructions on the label to ensure safe and effective use of the product. Many products recommend keeping the surface wet for several minutes to ensure germs are killed. Many also recommend precautions such as wearing gloves and making sure you have good ventilation during use of the product.</li>
                <li className="sick-li">Most EPA-registered household disinfectants should be effective. A full list of disinfectants can be found <a target="_blank" href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2"></a>here.</li>
                <li className="sick-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cleaning-disinfection.html">Complete Disinfection Guidance</a></li>
              </ul>
            </ul>


            <a id="isolate-if-you-are-sick" className="return-top" href="#sick-top"><br></br>Return to Top</a>
            <br></br><p className="sick-subject-header">Isolate If You Are Sick</p><br></br>
            <p className="sick-p"><b>Isolation</b> is used to separate people infected with SARS-CoV-2, the virus that causes COVID-19, from people who are not infected.<br></br>
                  People who are in isolation should stay home until it’s safe for them to be around others. In the home, anyone sick or infected should separate themselves from others by staying in a specific “sick room” or area and using a separate bathroom (if available).<b></b></p>
            <br></br><p className="sick-subject">Isolation or Quarantine: What's the difference?</p>
            <p className="sick-p"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">Quarantine</a> keeps someone who might have been exposed to the virus away from others.<br></br>Isolation keeps someone who is infected with the virus away from others, even in their home.</p>
            <iframe className="iframe" src="https://www.youtube.com/embed/l3s75_X8Xjs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br></br>



            <br></br><p className="sick-subject">Who needs to isolate?</p>
            <p className="sick-p">People who have COVID-19
                  <ul>
                <li className="sick-li">People who have <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms of COVID-19</a> and are able to recover at home</li>
                <li className="sick-li">People who have no symptoms (are asymptomatic) but have tested positive for infection with SARS-CoV-2</li>
              </ul></p>


            <br></br><p className="sick-subject">Steps to take</p>
            <p className="sick-p"><b>Stay home except to get medical care</b>
              <ul>
                <li className="sick-li">Monitor your symptoms. If you have an <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html#seek-medical-attention">emergency warning sign</a> (including trouble breathing), seek emergency medical care immediately</li>
                <li className="sick-li">Stay in a separate room from other household members, if possible</li>
                <li className="sick-li">Use a separate bathroom, if possible</li>
                <li className="sick-li">Avoid contact with other members of the household and pets</li>
                <li className="sick-li">Don’t share personal household items, like cups, towels, and utensils</li>
                <li className="sick-li">Wear a mask when around other people, if you are able to</li>
              </ul>
              <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">Learn more about what to do if you are sick.</a>
            </p>

            <br></br><p className="sick-subject">Confirmed and suspected cases of reinfection of the virus that causes COVID-19</p>
            <p className="sick-p"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/your-health/reinfection.html">Cases of reinfection</a> of COVID-19 have been reported but are rare. In general, reinfection means a person was infected (got sick) once, recovered, and then later became infected again. Based on what we know from similar viruses, some reinfections are expected.</p>

            <br></br><p className="sick-subject">When you can be around others after you had or likely had COVID-19</p>
            <p className="sick-p">When you can be around others (end home isolation) depends on different factors for different situations.<br></br></p>
            <br></br>

            <Accordion>
              <Card><a id="Basics"><Card.Header className="alert-subjects">Find CDC’s recommendations for your situation below.</Card.Header></a>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="200">
                  I think or know I had COVID-19, and I had symptoms
                  </Accordion.Toggle>

                <Accordion.Collapse eventKey="200">
                  <Card.Body className="accordion-answer">
                    <p className="sick-p">You can be with others after
                      <ul>
                        <li className="sick-li">At least 10 days since symptoms first appeared <b>and</b></li>
                        <li className="sick-li">At least 24 hours with no fever without fever-reducing medication <b>and</b></li>
                        <li className="sick-li">Other symptoms of COVID-19 are improving**Loss of taste and smell may persist for weeks or months after recovery and need not delay the end of isolation</li>
                      </ul>
                      If you had severe illness from COVID-19 (you were admitted to a hospital and needed oxygen), your healthcare provider may recommend that you stay in isolation for longer than 10 days after your symptoms first appeared (possibly up to 20 days) and you may need to finish your period of isolation at home.
                      </p>

                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="201">
                  I tested positive for COVID-19 but had no symptoms
                  </Accordion.Toggle>

                <Accordion.Collapse eventKey="201">
                  <Card.Body className="accordion-answer">
                    <p className="sick-p">If you continue to have no symptoms, you can be with others after:
                      <ul>
                        <li className="sick-li">10 days have passed since the date you had your positive test</li>
                      </ul>
                      If you develop symptoms after testing positive, follow the guidance above for “I think or know I had COVID, and I had symptoms.
                      </p>

                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="202">
                  I had COVID-19 or I tested positive for COVID-19 and I have a weakened immune system
                  </Accordion.Toggle>

                <Accordion.Collapse eventKey="202">
                  <Card.Body className="accordion-answer">
                    <p className="sick-p">
                      If you have a <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html">weakened immune system (immunocompromised)</a> due to a health condition or medication, you might need to stay home and isolate longer than 10 days. Talk to your healthcare provider for more information.<br></br>Your doctor may work with <a target="_blank" href="https://www.cdc.gov/publichealthgateway/healthdirectories/index.html">an infectious disease expert at your local health department</a> to determine when you can be around others.
                      </p>
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle className="accordion-question" as={Card.Header} eventKey="203">
                  Getting testing again for COVID-19
                  </Accordion.Toggle>

                <Accordion.Collapse eventKey="203">
                  <Card.Body className="accordion-answer">
                    <p className="sick-p">
                      If you have recovered from your symptoms after testing positive for COVID-19, you may continue to test positive for three months or more without being contagious to others. For this reason, you should be tested only if you develop new symptoms of possible COVID-19. Getting tested again should be discussed with your healthcare provider, especially if you have been in close contact with another person who has tested positive for COVID-19 in the last 14 days.<br></br>If you have symptoms and test positive for COVID-19, follow the guidance above for “I think or know I had COVID, and I had symptoms.” Your doctor may work with <a target="_blank" href="https://www.cdc.gov/publichealthgateway/healthdirectories/index.html">an infectious disease expert at your local health department</a> to determine when you can be around others.
                      </p>
                  </Card.Body>
                </Accordion.Collapse>


              </Card>
            </Accordion>


            <a id="when-to-quarantine" className="return-top" href="#sick-top"><br></br>Return to Top</a>
            <br></br><p className="sick-subject-header">When to Quarantine</p><br></br>
            <p className="sick-p"><b>Quarantine</b> is used to keep someone <i>who might have been exposed to COVID-19</i> away from others. Quarantine helps prevent spread of disease that can occur before a person knows they are sick or if they are infected with the virus without feeling symptoms. People in quarantine should stay home, separate themselves from others, monitor their health, and follow directions from their state or local health department.</p>

            <br></br><p className="sick-subject">Quarantine or isolation: What's the difference?</p>
            <p className="sick-p"><b>Quarantine</b> keeps someone who might have been exposed to the virus away from others.<br></br><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/isolation.html">Isolation</a> keeps someone who is infected with the virus away from others, even in their home.</p>
            <iframe className="iframe" src="https://www.youtube.com/embed/l3s75_X8Xjs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            <br></br><p className="sick-subject">Who needs to quarantine?</p>
            <p className="sick-p">

              <b>People who have been in <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a> with someone who has COVID-19—excluding people who have had COVID-19 within the past 3 months.</b><br></br>People who have tested positive for COVID-19 do not need to quarantine or get tested again for up to 3 months as long as they do not develop symptoms again. People who develop symptoms again within 3 months of their first bout of COVID-19 may need to be tested again if there is no other cause identified for their symptoms.<br></br> <br></br><b>What counts as <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact?</a></b>
              <ul>
                <li className="sick-li">You were within 6 feet of someone who has COVID-19 for a total of 15 minutes or more</li>
                <li className="sick-li">You provided care at home to someone who is sick with COVID-19</li>
                <li className="sick-li">You had direct physical contact with the person (hugged or kissed them)</li>
                <li className="sick-li">You shared eating or drinking utensils</li>
                <li className="sick-li">They sneezed, coughed, or somehow got respiratory droplets on you</li>
              </ul>
            </p>

            <br></br><p className="sick-subject">Steps to take</p>
            <p className="sick-p">
              <b>Stay home and monitor your health</b>
              <ul>
                <li className="sick-li">Stay home for 14 days after your last contact with a person who has COVID-19</li>
                <li className="sick-li">Watch for fever (100.4◦F), cough, shortness of breath, or <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">other symptoms</a> of COVID-19</li>
                <li className="sick-li">If possible, stay away from others, especially people who are at <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">higher risk</a> for getting very sick from COVID-19</li>
              </ul>
            </p>

            <br></br><p className="sick-subject">Confirmed and suspected cases of reinfection of the virus that causes COVID-19</p>
            <p className="sick-p"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/your-health/reinfection.html">Cases of reinfection</a> of COVID-19 have been reported but are rare. In general, reinfection means a person was infected (got sick) once, recovered, and then later became infected again. Based on what we know from similar viruses, some reinfections are expected.</p>

            <br></br><p className="sick-subject">When to start and end quarantine</p>
            <p className="sick-p"> You should stay home for 14 days after your last contact with a person who has COVID-19.<br></br><b>For all of the following scenarios, even if you test negative for COVID-19 or feel healthy, you should stay home (quarantine) since symptoms may appear 2 to 14 days after exposure to the virus.</b><br></br>See scenarios below to determine when you can end quarantine and be around others.</p>

            <br></br><p className="sick-subject">Scenario 1: Close contact with someone who has COVID-19—will not have further close contact</p>
            <p className="sick-p">I had <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a> with someone who has COVID-19 and will not have further contact or interactions with the person while they are sick (e.g., co-worker, neighbor, or friend).<br></br>Your last day of quarantine is 14 days from the date you had <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a>.<br></br>Date of last <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a> with person who has COVID-19 + 14 days= end of quarantine
                  <Image className="sick-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/if-you-are-sick/calendar-graphics-no-further-contact.png"></Image><br></br>
                  Please note if your quarantine starts at noon on day 1, then it would end at noon on the last day.</p>



            <br></br><p className="sick-subject">Scenario 2: Close contact with someone who has COVID-19—live with the person but can avoid further close contact</p>
            <p className="sick-p">
              I live with someone who has COVID-19 (e.g., roommate, partner, family member), and that person has isolated by staying in a separate bedroom. I have had no <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a> with the person since they isolated.<br></br>Your last day of quarantine is 14 days from when the person with COVID-19 began home isolation<br></br>Date person with COVID-19 began home isolation + 14 days = end of quarantine
                  <Image className="sick-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/if-you-are-sick/calendar-graphics-start-home-isolation.png"></Image><br></br>
                  Please note if your quarantine starts at noon on day 1, then it would end at noon on the last day.</p>

            <br></br><p className="sick-subject">Scenario 3. Under quarantine and had additional close contact with someone who has COVID-19</p>
            <p className="sick-p">I live with someone who has COVID-19 and started my 14-day quarantine period because we had <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a>. What if I ended up having <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a> with the person who is sick during my quarantine? What if another household member gets sick with COVID-19? Do I need to restart my quarantine?<br></br>Yes. You will have to restart your quarantine from the last day you had <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a> with anyone in your house who has COVID-19. <b>Any time a new household member gets sick with COVID-19 and you had <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a>, you will need to restart your quarantine.</b><br></br>Date of additional <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a> with person who has COVID-19 + 14 days = end of quarantine
                  <Image className="sick-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/if-you-are-sick/calendar-graphics-additional-contact.png"></Image><br></br>
                  Please note if your quarantine starts at noon on day 1, then it would end at noon on the last day.</p>


            <br></br><p className="sick-subject">Scenario 4: Live with someone who has COVID-19 and cannot avoid continued close contact</p>
            <p className="sick-p">I live in a household where I cannot avoid <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a> with the person who has COVID-19. I am providing direct care to the person who is sick, don’t have a separate bedroom to isolate the person who is sick, or live in close quarters where I am unable to keep a physical distance of 6 feet.<br></br>You should avoid contact with others outside the home while the person is sick, and quarantine for 14 days after the person who has COVID-19 meets the <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/end-home-isolation.html">criteria to end home isolation</a>.<br></br>Date the person with COVID-19 ends home isolation + 14 days = end of quarantine
                  <Image className="sick-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/if-you-are-sick/calendar-graphics-continued-contact.png"></Image><br></br>
                  Please note if your quarantine starts at noon on day 1, then it would end at noon on the last day.</p>



            <a id="caring-for-someone" className="return-top" href="#sick-top"><br></br>Return to Top</a>
            <br></br><p className="sick-subject-header">Caring for Someone</p><br></br>
            <p className="sick-p">If you are caring for someone with COVID-19 at home or in a non-healthcare setting, follow this advice to protect yourself and others. Learn what to do when someone has <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms</a> of COVID-19 or when someone has been diagnosed with the virus. This information also should be followed when caring for people who have tested positive but are not showing symptoms.<br></br><b>*Note:</b> <i><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/groups-at-higher-risk.html">Older adults and people of any age with serious underlying medical conditions</a> are at higher risk for developing more severe illness from COVID-19. People at higher risk of severe illness should call their doctor as soon as symptoms start.</i></p>



            <br></br><p className="sick-subject">Help cover basic needs</p>
            <ul>
              <li className="sick-li">Help the person who is sick follow their doctor’s instructions for care and medicine.
                    <ul>
                  <li className="sick-li-li">For <i>most</i> people, symptoms last a few days, and people usually feel better after a week.</li>
                </ul></li>
              <li className="sick-li">See if over-the-counter medicines for fever help the person feel better.</li>
              <li className="sick-li">Make sure the person who is sick drinks a lot of fluids and rests.</li>
              <li className="sick-li">Help them with grocery shopping, filling prescriptions, and getting other items they may need. Consider having the items delivered through a delivery service, if possible.</li>
              <li className="sick-li">Take care of their pet(s), and limit contact between the person who is sick and their pet(s) when possible.</li>
            </ul>



            <br></br><p className="sick-subject">Watch for warning signs</p>
            <p className="sick-p">
              <ul>
                <li className="sick-li">Have their doctor’s phone number on hand.</li>
                <li className="sick-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">Use CDC’s self-checker tool</a> to help you make decisions about seeking appropriate medical care.</li>
                <li className="sick-li">Call their doctor if the person keeps getting sicker. For medical emergencies, call 911 and tell the dispatcher that the person has or might have COVID-19.</li>
              </ul>
            </p>



            <br></br><p className="sick-subject">When to seek emergency medical attention</p>
            <p className="sick-p">Look for <b>emergency warning signs*</b> for COVID-19. If someone is showing any of these signs, <b>seek emergency medical care immediately:</b>
              <ul>
                <li className="sick-li">Trouble breathing</li>
                <li className="sick-li">Persistent pain or pressure in the chest</li>
                <li className="sick-li">New confusion</li>
                <li className="sick-li">Inability to wake or stay awake</li>
                <li className="sick-li">Bluish lips or face</li>
              </ul>
                  *This list is not all possible symptoms. Please call your medical provider for any other symptoms that are severe or concerning to you.<br></br>
              <b>Call 911 or call ahead to your local emergency facility:</b> Notify the operator that you are seeking care for someone who has or may have COVID-19.
                  </p>



            <br></br><p className="sick-subject">Limit contact</p>
            <p className="sick-p">
              COVID-19 spreads between people who are in close contact (within about 6 feet) through respiratory droplets, created when someone talks, coughs or sneezes. Staying away from others helps stop the spread of COVID-19.

      <br></br>The caregiver, when possible, should not be someone who is at <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">higher risk for severe illness from COVID-19</a>.

      <br></br><b>The person who is sick should isolate</b>

              <br></br>The sick person should separate themselves from others in the home. Learn <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/isolation.html">when and how to isolate.</a>

              <ul>
                <li className="sick-li">If possible, have the person who is sick use a separate bedroom and bathroom. If possible, have the person who is sick stay in their own “sick room” or area and away from others. Try to stay at least 6 feet away from the sick person.</li>
                <li className="sick-li">Shared space: If you have to share space, make sure the room has good air flow.
        <ul>
                    <li className="sick-li-li">Open the window to increase air circulation.</li>
                    <li className="sick-li-li">Improving ventilation helps remove respiratory droplets from the air.</li>

                  </ul></li>
                <li className="sick-li">Avoid having visitors. Avoid having any unnecessary visitors, especially visits by <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">people who are at higher risk for severe illness</a>.</li>
              </ul>
              <b>Caregivers should quarantine</b><br></br>

      Caregivers and anyone who has been in close contact with someone who has COVID-19 should stay home. Learn <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">when and how to quarantine</a>.
                  </p>


            <br></br><p className="sick-subject">When it's safe for a person who has been sick to be around others</p>
            <p className="sick-p">Deciding when it is safe to be around others is different for different situations. Find out when someone who is sick can <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/when-its-safe.html">safely end home isolation</a>.</p>


            <br></br><p className="sick-subject">Eat in separate rooms or areas</p>
            <ul>
              <li className="sick-li"><b>Stay separated:</b> The person who is sick should eat (or be fed) in their room, if possible.</li>
              <li className="sick-li"><b>Wash dishes and utensils using gloves and hot water:</b> Handle any dishes, cups/glasses, or silverware used by the person who is sick with gloves. Wash them with soap and hot water or in a dishwasher.</li>
              <li className="sick-li"><a target="_blank" href="https://www.cdc.gov/handwashing/when-how-handwashing.html">Clean hands</a> after taking off gloves or handling used items.</li>
            </ul>


            <br></br><p className="sick-subject">Avoid sharing personal items</p>
            <ul>
              <li className="sick-li"><b>Do not share:</b> Do not share dishes, cups/glasses, silverware, towels, bedding, or electronics (like a cell phone) with the person who is sick.</li>
            </ul>


            <br></br><p className="sick-subject">When to wear a mask or gloves</p>
            <p className="sick-p">
              <b>The person who is sick</b>
              <ul>
                <li className="sick-li">The person who is sick should wear a mask when they are around other people at home and out (including before they enter a doctor’s office).</li>
                <li className="sick-li">The mask helps prevent a person who is sick from spreading the virus to others. It keeps respiratory droplets contained and from reaching other people.</li>
                <li className="sick-li">masks should not be placed on young children under age 2, anyone who has trouble breathing, or is not able to remove the covering without help.</li>
              </ul>
              <b>Caregiver</b>
              <ul>
                <li className="sick-li">Put on a mask and ask the sick person to put on a mask  before entering the room.</li>
                <li className="sick-li">Wear gloves when you touch or have contact with the sick person’s blood, stool, or body fluids, such as saliva, mucus, vomit, and urine. Throw out gloves into a lined trash can and wash your hands right away.
                      <ul>
                    <li className="sick-li-li">Practice <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">everyday preventive actions</a> to keep from getting sick:  wash your hands often; avoid touching your eyes, nose, and mouth; and frequently clean and disinfect surfaces.</li></ul></li>
              </ul>
              <b>Note:</b> During the COVID-19 pandemic, medical grade masks are reserved for healthcare workers and some first responders.<br></br>
              <iframe className="iframe" src="https://www.youtube.com/embed/IFqx9SG6TkI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>


            <br></br><p className="sick-subject">Clean your hands often</p>
            <ul>
              <li className="sick-li"><b>Wash hands:</b> Wash your hands often with soap and water for at least 20 seconds. Tell everyone in the home to do the same, especially after being near the person who is sick.</li>
              <li className="sick-li"><b>Hand sanitizer:</b> If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.</li>
              <li className="sick-li"><b>Hands off:</b> Avoid touching your eyes, nose, and mouth with unwashed hands.</li>
              <li className="sick-li">Learn more about <a target="_blank" href="https://www.cdc.gov/handwashing/index.html">handwashing.</a></li>
            </ul>

            <br></br><p className="sick-subject">Clean and then disinfect</p>
            <p className="sick-p">
              <b>Around the house</b>
            </p>
            <ul>
              <li className="sick-li"><b>Clean and disinfect “high-touch” surfaces and items every day:</b> This includes tables, doorknobs, light switches, handles, desks, toilets, faucets, sinks, and electronics.</li>
              <li className="sick-li">Clean the area or item with <b>soap and water</b> if it is dirty. <b>Then, use a household disinfectant.</b></li>
              <ul>
                <li className="sick-li-li">Be sure to <b>follow the instructions on the label</b> to ensure safe and effective use of the product. Many products recommend keeping the surface wet for several minutes to kill germs. Many also recommend wearing gloves, making sure you have good air flow, and wiping or rinsing off the product after use.</li>
                <li className="sick-li-li">Most household disinfectants should be effective. See a list of <a target="_blank" href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">EPA-registered disinfectants</a>.</li>
                <li className="sick-li-li"><b>To clean electronics,</b> follow the manufacturer’s instructions for all cleaning and disinfection products. If those directions are not available, use alcohol-based wipes or spray containing at least 70% alcohol.</li>
                <li className="sick-li-li">Learn more about <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html">cleaning and disinfecting your home</a>.</li>
              </ul>
            </ul>
            <p className="sick-p">
              <b>Bed and bathroom</b>
            </p>
            <ul>
              <li className="sick-li"><b>If you are using a separate bedroom and bathroom:</b> Only clean the area around the person who is sick when needed, such as when the area is soiled. This will help limit your contact with the sick person.
                    <ul>
                  <li className="sick-li-li">If they feel up to it, the person who is sick can clean their own space. Give the person who is sick <b>personal cleaning supplies</b> such as tissues, paper towels, cleaners, and <a target="_blank" href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">EPA-registered disinfectants</a>.</li>
                </ul>
              </li>
              <li className="sick-li"><b>If sharing a bathroom:</b> The person who is sick should clean and then disinfect after each use. If this is not possible, wear a mask and wait as long as possible after the sick person has used the bathroom before coming in to clean and use the bathroom.</li>
            </ul>


            <br></br><p className="sick-subject">Wash and dry laundry</p>
            <ul>
              <li className="sick-li">Do not shake dirty laundry.</li>
              <li className="sick-li">Wear disposable gloves while handling dirty laundry.</li>
              <li className="sick-li">Dirty laundry from a person who is sick can be washed with other people’s items.</li>
              <li className="sick-li">Wash items according to the label instructions. Use the warmest water setting you can.</li>
              <li className="sick-li">Remove gloves, and wash hands right away.</li>
              <li className="sick-li">Dry laundry, on hot if possible, completely.</li>
              <li className="sick-li">Wash hands after putting clothes in the dryer.</li>
              <li className="sick-li">Clean and disinfect clothes hampers. Wash hands afterwards.</li>
            </ul>

            <br></br><p className="sick-subject">Use lined trash can</p>
            <ul>
              <li className="sick-li">Place used disposable gloves and other contaminated items in a lined trash can.</li>
              <li className="sick-li">Use gloves when removing garbage bags, and handling and disposing of trash. Wash hands afterwards.</li>
              <li className="sick-li">Place all used disposable gloves, masks, and other contaminated items in a lined trash can.</li>
              <li className="sick-li">If possible, dedicate a lined trash can for the person who is sick.</li>

            </ul>

            <br></br><p className="sick-subject">Track your own health</p>
            <ul>
              <li className="sick-li">Caregivers should stay home and monitor their health for COVID-19 symptoms while caring for the person who is sick.
                      <ul>
                  <li className="sick-li-li"><a target="_blank" href="https://wcms-wp.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">Symptoms</a> include fever, cough, and shortness of breath but other symptoms may be present as well. Trouble breathing is a more serious warning sign that you need medical attention.</li>
                </ul>
              </li>
              <li className="sick-li">Caregivers should continue to stay home after care is complete. Caregivers can leave their home 14 days after their last close contact with the person who is sick (based on the time it takes to develop illness), or 14 days after the person who is sick meets the <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/end-home-isolation.html">criteria to end home isolation</a>.</li>
              <li className="sick-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">Use CDC’s self-checker tool</a> to help you make decisions about seeking appropriate medical care.

                    </li>
              <li className="sick-li"><b>If you are having trouble breathing, call 911.</b>
                <ul>
                  <li className="sick-li-li">Call your doctor or emergency room and tell them your symptoms before going in. They will tell you what to do.</li>
                </ul>
              </li>
            </ul>

            <a id="parents-or-caregivers-who-are-sick" className="return-top" href="#sick-top"><br></br>Return to Top</a>
            <br></br><p className="sick-subject-header">Parents or Caregivers Who Are Sick</p><br></br>

            <p className="sick-subject">If a parent or a sole caregiver has COVID-19</p>
            <p className="sick-p">Everyone in the home should <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">practice everyday preventive actions</a>. Those in the home who are sick with COVID-19 should follow CDC’s guidance for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">what to do if you are sick</a> and <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/end-home-isolation.html">when it is safe to end your isolation</a>.<br></br>

                  If a child’s parent or caregiver is sick with COVID-19, follow the steps below to help protect the child from infection.</p>

            <br></br><p className="sick-subject">Older children</p>
            <p className="sick-p">The child should avoid physical contact with the sick parent or caregiver until all sick people have <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/when-its-safe.html">ended their home isolation</a>. For the child to safely have no interaction with the parent or caregiver, the child should be old enough to legally be home alone and mature enough to care for themselves.</p>

            <br></br><p className="sick-subject">Younger Children</p>
            <p className="sick-p">
              If the parent or sole caregiver will be caring for the child while sick, they should contact the child’s healthcare provider for advice on how to best protect the child from infection.
                  <ul>
                <li className="sick-li">Young children should be supervised at all times.</li>
                <li className="sick-li">If the parent or the sole caregiver is too ill to care for the child, they should see if there is a caregiver outside of the home with whom the child can stay. The caregiver should not be someone who is <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">at higher risk for severe illness</a> from COVID-19, as the child has likely been exposed to the virus. The caregiver will need to help the child quarantine for 14 days since they last had <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a> (within 6 feet way from someone for a total of 15 minutes or more) with the sick person.</li>
              </ul>
            </p>

            <br></br><p className="sick-subject">Children staying in the home with the sick parent or caregiver</p>
            <p className="sick-p">
              If a child needs to stay in the home with you (the parent or caregiver who is sick):
                  <ul>
                <li className="sick-li">Both you and the child should wear a mask while in the same room.</li>
                <li className="sick-li">Note that masks should not be placed on:
                    <ul>
                    <li className="sick-li-li">Children younger than 2 years old</li>
                    <li className="sick-li-li">Anyone who has trouble breathing or is unconscious</li>
                    <li className="sick-li-li">Anyone who is incapacitated or otherwise unable to remove the mask without assistance</li>
                  </ul></li>
                <li className="sick-li"><a target="_blank" href="https://www.cdc.gov/handwashing/when-how-handwashing.html">Wash your hands</a> frequently with soap and water for at least 20 seconds. If soap and water are not available, use hand sanitizer containing at least 60% alcohol and rub your hands together until they are dry.</li>
                <li className="sick-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">Try to stay 6 feet away</a> from the child, if possible and if safe.</li>
                <li className="sick-li">Increase ventilation by opening a window in a room that you are in.</li>
                <li className="sick-li"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html">Disinfect any items</a> that you need to bring to the child.</li>
                <li className="sick-li">Do not disinfect food that you bring to the child.</li>
                <li className="sick-li">Watch for symptoms.
                    <ul>
                    <li className="sick-li-li">During this time caregivers should monitor themselves for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms</a>.</li>
                    <li className="sick-li-li">Check the child’s temperature twice a day and watch for symptoms of COVID-19, such as fever, cough or shortness of breath, or <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/pediatric-hcp.html#clinical-presentation">symptoms specific to children</a>.*</li>
                    <li className="sick-li-li">If the child develops symptoms, call the child’s healthcare provider for medical advice and follow the steps for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/care-for-someone.html">caring for someone who is sick</a>.</li>
                  </ul></li>
                <li className="sick-li">If possible, the child should stay away from people who are at higher-risk for getting very sick from COVID-19.</li>
              </ul>
            </p>

            <br></br><p className="sick-subject">Children staying outside the home with a temporary caregiver</p>
            <p className="sick-p">
              If the child will stay outside of their own home with a temporary caregiver, the new caregiver should help the child to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine-isolation.html">quarantine</a> and do the following:
                  <ul>
                <li className="sick-li">The child should stay inside the caregiver’s home until 14 days after their last <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/contact-tracing/contact-tracing-plan/appendix.html#contact">close contact</a> with the sick person.</li>
                <li className="sick-li">Watch for symptoms.
                      <ul>
                    <li className="sick-li-li">During this time the caregiver should monitor themselves for symptoms and practice <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">everyday preventive actions</a>.</li>
                    <li className="sick-li-li">Check the child’s temperature twice a day and watch for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms</a> of COVID-19, such as fever, cough or shortness of breath, or <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/pediatric-hcp.html#clinical-presentation">symptoms specific to children</a>.*</li>
                    <li className="sick-li-li">If the child does develop symptoms, call the child’s healthcare provider for medical advice and follow the steps for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/care-for-someone.html">caring for someone who is sick</a>.</li>
                  </ul>
                </li>
                <li className="sick-li">
                  If possible, the child should stay away from people who are at <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">higher-risk</a> for getting very sick from COVID-19.<br></br>
      The caregiver should then quarantine for 14 days after the last day the caregiver had contact with the sick child.<br></br>



      *COVID-19 <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">symptoms</a> can look different in different people. For many people, being sick with COVID-19 would be a little bit like having the flu. People can get a fever, cough, or have a hard time taking deep breaths. Most people who have gotten COVID-19 have not gotten very sick. Only a small group of people who get it have had more serious problems. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children.html">More information on children and COVID-19</a>.
                    </li>
              </ul>
            </p>


            <a id="when-you-can-be-around-others" className="return-top" href="#sick-top"><br></br>Return to Top</a>
            <br></br><p className="sick-subject-header">When You Can Be Around Others</p><br></br>
            <p className="sick-p"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/index.html">If you have or think you might have COVID-19</a>, it is important to stay home and away from other people. Staying away from others helps stop the spread of COVID-19. <b>If you have <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html#seek-medical-attention">an emergency warning sign</a> (including trouble breathing),</b> get emergency medical care immediately.</p>

            <br></br><p className="sick-subject">I think or know I had COVID-19, and I had symptoms</p>
            <p className="sick-p">You can be around others after:
      <ul>
                <li className="sick-li">10 days since symptoms first appeared and</li>
                <li className="sick-li">24 hours with no fever without the use of fever-reducing medications and</li>
                <li className="sick-li">Other symptoms of COVID-19 are improving*</li>
              </ul>

      *Loss of taste and smell may persist for weeks or months after recovery and need not delay the end of isolation​<br></br>

      Most people do not require testing to decide when they can be around others; however, if your healthcare provider recommends testing, they will let you know when you can resume being around others based on your test results.<br></br>

      Note that these recommendations do not apply to persons with severe COVID-19 or with severely weakened immune systems (immunocompromised). These persons should follow the guidance below for “I was severely ill with COVID-19 or have a severely weakened immune system (immunocompromised) due to a health condition or medication. When can I be around others?”</p>

            <br></br><p className="sick-subject">I tested positive for COVID-19 but had no symptoms</p>
            <p className="sick-p">If you continue to have no symptoms, you can be with others after 10 days have passed since you had a positive viral test for COVID-19. Most people do not require testing to decide when they can be around others; however, if your healthcare provider recommends testing, they will let you know when you can resume being around others based on your test results.<br></br>

      If you develop symptoms after testing positive, follow the guidance above for “I think or know I had COVID-19, and I had symptoms.”</p>

            <br></br><p className="sick-subject">I was severely ill with COVID-19 or have a severely weakened immune system (immunocompromised) due to a health condition or medication. When can I be around others?</p>
            <p className="sick-p">People who are severely ill with COVID-19 might need to stay home longer than 10 days and up to 20 days after symptoms first appeared. <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html">Persons who are severely immunocompromised</a> may require testing to determine when they can be around others. Talk to your healthcare provider for more information. If testing is available in your community, it may be recommended by your healthcare provider. Your healthcare provider will let you know if you can resume being around other people based on the results of your testing.<br></br>

      Your doctor may work with <a target="_blank" href="https://www.cdc.gov/publichealthgateway/healthdirectories/index.html">an infectious disease expert or your local health department</a> to determine whether testing will be necessary before you can be around others.</p>

            <br></br><p className="sick-subject">For Anyone Who Has Been Around a Person with COVID-19</p>
            <p className="sick-p">Anyone who has had close contact with someone with COVID-19 should stay home for 14 days <b>after their last exposure</b> to that person.<br></br>

      However, anyone who has had close contact with someone with COVID-19 and who meets the following criteria does <b>NOT</b> need to stay home.
      <ul>
                <li className="sick-li">Has COVID-19 illness within the previous 3 months and</li>
                <li className="sick-li">Has recovered and</li>
                <li className="sick-li">Remains without COVID-19 symptoms (for example, cough, shortness of breath)</li>
              </ul></p>

            <br></br><p className="sick-subject">Confirmed and suspected cases of reinfection of the virus that causes COVID-19</p>
            <p className="sick-p"><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/your-health/reinfection.html">Cases of reinfection</a> of COVID-19 have been reported but are rare. In general, reinfection means a person was infected (got sick) once, recovered, and then later became infected again. Based on what we know from similar viruses, some reinfections are expected
                  </p>

            <br></br><p className="sick-subject">For Healthcare Professionals</p>
            <p className="sick-p">If you are a healthcare professional who thinks or knows you had COVID-19, you should follow the same recommendations listed above for when you can resume being around others outside the workplace. When you can return to work depends on different factors and situations. For information on when you can return to work, see the following:<br></br>

              <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/return-to-work.html">Criteria for Return to Work for Healthcare Personnel with SARS-CoV-2 Infection (Interim Guidance)</a></p>

            <br></br><p className="sick-subject">I Think or Know I had COVID-19, and I had Symptoms. When can I be Around Others?</p>
            <p className="sick-p">If you have or think you might have COVID-19, it is important to stay home and away from others. When you can be around others depends on different factors for different situations.<br></br>
              <iframe className="iframe" src="https://www.youtube.com/embed/HNgDirLLZm8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>

            <br></br><p className="sick-subject">I Had COVID-19, But No Symptoms. When Can I Be with Others?</p>
            <p className="sick-p">
              If you have or think you might have COVID-19, it is important to stay home and away from others. When you can be around others depends on different factors for different situations.<br></br>
              <iframe className="iframe" src="https://www.youtube.com/embed/tpsOw7kkJSY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>


            <a id="potential-treatments-for-severe-illness" className="return-top" href="#sick-top"><br></br>Return to Top</a>
            <br></br><p className="sick-subject-header">Potential Treatments for Severe Illness</p><br></br>
            <p className="sick-subject">The best way to prevent illness is to <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">avoid being exposed</a> to or spreading the virus that causes COVID-19:</p>
            <ul>
              <li className="sick-li">Wash your hands often.</li>
              <li className="sick-li">Avoid close contact with people who are sick and people who don’t live in your household.</li>
              <li className="sick-li">Cover your mouth and nose with a mask when around others.</li>
              <li className="sick-li">Cover your coughs and sneezes.</li>
              <li className="sick-li">Clean and disinfect frequently touched surfaces.</li>
              <li className="sick-li">Monitor your health daily.</li>
            </ul>

            <br></br><p className="sick-subject">Getting a flu vaccine is more important than ever this flu season to protect yourself, your family and your community from flu.</p>
            <p className="sick-p">A flu vaccine can also help reduce the burden on our healthcare systems responding to the COVID-19 pandemic and save medical resources for care of COVID-19 patients.</p>

            <br></br><p className="sick-subject">If you think you may have been exposed to a person with COVID-19, contact your healthcare provider.</p>
            <ul>
              <li className="sick-li">Stay home and away from the people you live with as much as possible.</li>
              <li className="sick-li">Consider getting tested.</li>
              <li className="sick-li">Monitor your symptoms.</li>
              <li className="sick-li">If you show an <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html#seek-medical-attention">emergency warning sign</a>, seek emergency medical care immediately. Call 911 or call ahead to your local emergency facility. Emergency warning signs include:
                      <ul>
                  <li className="sick-li-li">Trouble breathing</li>
                  <li className="sick-li-li">Persistent pain or pressure in the chest</li>
                  <li className="sick-li-li">New confusion</li>
                  <li className="sick-li-li">Inability to wake or stay awake</li>
                  <li className="sick-li-li">Bluish lips or face.</li>
                </ul>
              </li>
            </ul>
            <p className="sick-p">The Food and Drug Administration (FDA) has approved one drug, remdesivir (Veklury), to treat COVID-19. The FDA can also issue <a target="_blank" href="https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/emergency-use-authorization">emergency use authorizations</a> (EUAs) to allow healthcare providers to use products that are not yet approved, or that are approved for other uses, to treat patients with COVID-19 if certain legal requirements are met.</p>

            <br></br><p className="sick-subject">Any treatments that are used for COVID-19 should be taken under the care of a healthcare provider.</p>
            <p className="sick-p">
              People have been <a target="_blank" href="https://emergency.cdc.gov/han/2020/han00431.asp">seriously harmed and even died</a> after taking unapproved products to self-treat.<br></br>

      The National Institutes of Health (NIH) has developed and regularly updates <a target="_blank" href="https://www.covid19treatmentguidelines.nih.gov/introduction/">Treatment Guidelines</a> to help guide healthcare providers caring for patients with COVID-19, including when clinicians might consider using one of the products under an EUA. Currently, there are several approaches for treating patients with severe COVID-19 who are being cared for in the hospital. In studies, some drugs have shown some benefit in reducing the severity of illness or risk of death by:
      <ul>
                <li className="sick-li"><i>Slowing the virus</i>. Antiviral medications reduce the ability of the virus to multiply and spread through the body.
        <ul>
                    <li className="sick-li-li"><a target="_blank" href="https://medlineplus.gov/druginfo/meds/a620033.html">Remdesivir</a> (Veklury) is an antiviral medication approved by the FDA to treat COVID-19, that is recommended in the current <a target="_blank" href="https://www.covid19treatmentguidelines.nih.gov/antiviral-therapy/remdesivir/">NIH Treatment Guidelines</a> for certain patients who are hospitalized with COVID-19. Remdesivir is given to patients by infusion through their veins.</li>
                  </ul>
                </li>
                <li className="sick-li"><i>Reducing an overactive immune response</i>. In patients with severe COVID-19, the body’s immune system may overreact to the threat of the virus, worsening the disease. This can cause damage to the body’s organs and tissues. Some treatments can help reduce this overactive immune response.
        <ul>
                    <li className="sick-li-li"><a target="_blank" href="https://medlineplus.gov/druginfo/meds/a682792.html">Dexamethasone</a> is a steroid medication, similar to a natural hormone produced by the body. The <a target="_blank" href="https://www.covid19treatmentguidelines.nih.gov/immune-based-therapy/immunomodulators/corticosteroids/">NIH Treatment Guidelines</a> recommend dexamethasone, or a similar medication, to prevent or reduce injury to the body for some hospitalized patients with severe COVID-19. Dexamethasone is recommended for patients who need supplemental oxygen.</li>
                  </ul></li>
                <li className="sick-li"><i>Treating complications</i>. The virus that causes COVID-19 can damage the heart, blood vessels, kidneys, brain, skin, eyes, and gastrointestinal organs. It also can cause other complications. Depending on the complications, additional treatments might be used for severely ill hospitalized patients, such as blood thinners to prevent or treat blood clots.</li>
                <li className="sick-li"><i>Supporting the body’s immune function</i>. Antibodies from patients who have recovered from COVID-19 (convalescent plasma) or antibodies manufactured to treat COVID-19 (like monoclonal antibodies) can attach to parts of the virus. This could help the immune system recognize and respond more effectively to the virus, but currently the <a target="_blank" href="https://www.covid19treatmentguidelines.nih.gov/immune-based-therapy/immunomodulators/">NIH Treatment Guidelines</a> find there is not enough evidence to recommend these treatments.
      </li>
                <li className="sick-li"><i>Relieving symptoms and supporting the body’s natural defenses.</i>
                  <ul>
                    <li className="sick-li-li">Taking medications, like acetaminophen or ibuprofen, can reduce fever.</li>
                    <li className="sick-li-li">Drinking water or receiving intravenous fluids can help patients stay hydrated.</li>
                    <li className="sick-li-li">Getting plenty of rest can help the body fight the virus.</li>
                  </ul></li>
              </ul>

      Other products are being studied as potential treatments for COVID-19. Information about these ongoing studies can be found at <a target="_blank" href="https://clinicaltrials.gov/ct2/results?recrs=ab&cond=covid-19&term=&cntry=US&state=&city=&dist=">ClinicalTrials.gov</a>
            </p>


            <a id="reinfection" className="return-top" href="#sick-top"><br></br>Return to Top</a>
            <br></br><p className="sick-subject-header">Reinfection</p><br></br>
            <p className="sick-subject">Cases of reinfection with COVID-19 have been reported, but remain rare​.</p>
            <p className="sick-p">In general, reinfection means a person was infected (got sick) once, recovered, and then later became infected again. Based on what we know from similar viruses, some reinfections are expected. We are still learning more about COVID-19. Ongoing COVID-19 studies will help us understand:
                  <ul>
                <li className="sick-li">How likely is reinfection</li>
                <li className="sick-li">How often reinfection occurs</li>
                <li className="sick-li">How soon after the first infection can reinfection take place</li>
                <li className="sick-li">How severe are cases of reinfection</li>
                <li className="sick-li">Who might be at higher risk for reinfection</li>
                <li className="sick-li">What reinfection means for a person’s immunity</li>
                <li className="sick-li">If a person is able to spread COVID-19 to other people when reinfected</li>
              </ul></p>

            <br></br> <p className="sick-subject">What CDC is doing</p>
            <p className="sick-p">CDC is actively working to learn more about reinfection to inform public health action. CDC developed recommendations for public health professionals to help decide when and how to test someone for suspected reinfection. CDC has also provided information for state and local health departments to help investigate suspected cases of reinfection. We will update this guidance as we learn more about reinfection.</p>

            <br></br><p className="sick-subject">Prevention</p>
            <p className="sick-p">At this time, whether you have had COVID-19 or not, the best way to prevent infection is to take steps to protect yourself:
                  <ul>
                <li className="sick-li">Wear a mask in public places</li>
                <li className="sick-li">Stay at least 6 feet away from other people</li>
                <li className="sick-li">Wash your hands</li>
                <li className="sick-li">Avoid crowds and confined spaces</li>
              </ul></p>




            <a id="long-term-effects" className="return-top" href="#sick-top"><br></br>Return to Top</a>
            <br></br><p className="sick-subject-header">Long-Term Effects</p><br></br>
            <p className="sick-p">
              CDC is actively working to learn more about the whole range of short- and long-term health effects associated with COVID-19. As the pandemic unfolds, we are learning that many organs besides the lungs are affected by COVID-19 and there are many ways the infection can affect someone’s health.<br></br>

      While most persons with COVID-19 recover and return to normal health, some patients can have symptoms that can last for weeks or even months after recovery from acute illness. Even people who are not hospitalized and who have mild illness can experience persistent or late symptoms. Multi-year studies are underway to further investigate. CDC continues to work to identify how common these symptoms are, who is most likely to get them, and whether these symptoms eventually resolve.<br></br>

      The most commonly reported long-term symptoms include:
      <ul>
                <li className="sick-li">Fatigue</li>
                <li className="sick-li">Shortness of breath</li>
                <li className="sick-li">Cough</li>
                <li className="sick-li">Joint pain</li>
                <li className="sick-li">Chest pain</li>
              </ul>

      Other reported long-term symptoms include:
      <ul>
                <li className="sick-li">Difficulty with thinking and concentration (sometimes referred to as “brain fog”)</li>
                <li className="sick-li">Depression</li>
                <li className="sick-li">Muscle pain</li>
                <li className="sick-li">Headache</li>
                <li className="sick-li">Intermittent fever</li>
                <li className="sick-li">Fast-beating or pounding heart (also known as heart palpitations)</li>
              </ul>


      More serious long-term complications appear to be less common but have been reported. These have been noted to affect different organ systems in the body. These include:
      <ul>
                <li className="sick-li">Cardiovascular: inflammation of the heart muscle</li>
                <li className="sick-li">Respiratory: lung function abnormalities</li>
                <li className="sick-li">Renal: acute kidney injury</li>
                <li className="sick-li">Dermatologic: rash, hair loss</li>
                <li className="sick-li">Neurological: smell and taste problems, sleep issues, difficulty with concentration, memory problems</li>
                <li className="sick-li">Psychiatric: depression, anxiety, changes in mood</li>
              </ul>


      The long-term significance of these effects is not yet known. CDC will continue active investigation and provide updates as new data emerge, which can inform COVID-19 clinical care as well as the public health response to COVID-19.
                  </p>

            <br></br><p className="sick-subject">Preventing COVID-19</p>
            <p className="sick-p">The best way to prevent these long-term complications is to prevent COVID-19. The best strategies for <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html">preventing COVID-19 infection</a> in youth and adults are to wear a mask in public places, stay at least 6 feet away from other people, frequently wash your hands, and avoid crowds and confined or poorly ventilated spaces.</p>


            <a id="multisystem-inflammatory-syndrome-in-adults" className="return-top" href="#sick-top"><br></br>Return to Top</a>
            <br></br><p className="sick-subject-header">Multisystem Inflammatory Syndrome In Adults</p><br></br>
            <p className="sick-subject">What we know about MIS-A</p>
            <p className="sick-p">Multisystem inflammatory syndrome in children (MIS-C) is a rare but severe complication in children and adolescents infected with SARS-CoV-2, the virus that causes COVID-19. Since June 2020, there have been several reports of a similar multisystem inflammatory syndrome in adults (MIS-A). CDC <a target="_blank" href="https://www.cdc.gov/mmwr/volumes/69/wr/mm6940e1.htm">recently published</a> a number of cases that fit the description of MIS-A. This report shows the way the syndrome appears in adults may be more complicated than in children.<br></br>

      Like children, adults who have been infected with the virus that causes COVID-19 can develop symptoms of MIS-A days to weeks after getting sick. MIS-A is a condition where problems can occur in different parts of the body like the heart, gastrointestinal tract, skin, or brain. Adults with MIS-A may have various signs and symptoms including:
      <ul>
                <li className="sick-li">Fever</li>
                <li className="sick-li">Low blood pressure</li>
                <li className="sick-li">Abdominal (gut) pain</li>
                <li className="sick-li">Vomiting</li>
                <li className="sick-li">Diarrhea</li>
                <li className="sick-li">Neck pain</li>
                <li className="sick-li">Rash</li>
                <li className="sick-li">Chest tightness/pain</li>
                <li className="sick-li">Feeling very tired</li>
              </ul>
      MIS-A can be very serious, so it is important to seek medical care as soon as possible.
      </p>

            <br></br><p className="sick-subject">What we don’t know about MIS-A</p>
            <p className="sick-p">CDC is still learning about MIS-A and how it affects adults, so we do not know why some adults have gotten sick with MIS-A and others have not. We also do not know if adults with certain health conditions are more likely to develop MIS-A. These are among the many questions CDC is working to understand.</p>

            <br></br><p className="sick-subject">What CDC is doing about MIS-A</p>
            <p className="sick-p">CDC is working with state, local, and territorial health departments; U.S. and international scientists; healthcare providers; and other partners to learn more about MIS-A. Through these partnerships, we are learning about how to recognize MIS-A in adults, how often it happens, and who is likely to get MIS-A.<br></br>

      All CDC recommendations are based on the best data and science available at the time, and we will update them as we learn more.</p>

            <br></br><p className="sick-subject">How to protect yourself from MIS-A</p>
            <p className="sick-p">Based on what we know now about MIS-A, the best way you can <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">protect yourself is by taking everyday actions to protect yourself from getting the virus that causes COVID-19</a>.</p>


            <a className="return-top" href="#sick-top"><br></br>Return to Top</a>

          </Alert>
          {/* END IF SICK */}

        </div>
        <p>Sources:
              <a target="_blank" href="https://coronavirusapi.com" > https://coronavirusapi.com</a> |
              <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov" > https://www.cdc.gov/coronavirus/2019-ncov</a>
        </p>

        <br></br>
        </header>

    </div>
  )
}

export default Coronavirus;