// heroku git:remote -a bryanlubay

import React from 'react';
import { Card, Form, Button, Alert, Accordion, Table, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, /*Redirect,*/ Switch } from 'react-router-dom';
import { Chart } from 'react-charts'
import Container from 'react-bootstrap/Container'
import Unity from './components/Unity'
import Coronavirus from './components/Coronavirus'
import CompTIA from './components/CompTIA'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import 'react-widgets/dist/css/react-widgets.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// function convertState(state) {
//   state = state.toUpperCase()
//   if (state == "AL" || state == "ALABAMA") {
//     document.getElementById('state').textContent = "Alabama"
//     return ('al')
//   }
//   else if (state == "AK" || state == "ALASKA") {
//     document.getElementById('state').textContent = "Alaska"
//     return ('ak')
//   }
//   else if (state == "AZ" || state == "ARIZONA") {
//     document.getElementById('state').textContent = "Arizona"
//     return ('az')
//   }
//   else if (state == "AR" || state == "ARKANSAS") {
//     document.getElementById('state').textContent = "Arkansas"
//     return ('ar')
//   }
//   else if (state == "CA" || state == "CALIFORNIA") {
//     document.getElementById('state').textContent = "California"
//     return ('ca')
//   }
//   else if (state == "CO" || state == "COLORADO") {
//     document.getElementById('state').textContent = "Colorado"
//     return ('co')
//   }
//   else if (state == "CT" || state == "CONNECTICUT") {
//     document.getElementById('state').textContent = "Connecticut"
//     return ('ct')
//   }
//   else if (state == "DE" || state == "DELAWARE") {
//     document.getElementById('state').textContent = "Delaware"
//     return ('de')
//   }
//   else if (state == "FL" || state == "FLORIDA") {
//     document.getElementById('state').textContent = "Florida"
//     return ('fl')
//   }
//   else if (state == "GA" || state == "GEORGIA") {
//     document.getElementById('state').textContent = "Georgia"
//     return ('ga')
//   }
//   else if (state == "HI" || state == "HAWAII") {
//     document.getElementById('state').textContent = "Hawaii"
//     return ('hi')
//   }
//   else if (state == "IL" || state == "ILLINOIS") {
//     document.getElementById('state').textContent = "Illinois"
//     return ('il')
//   }
//   else if (state == "IN" || state == "INDIANA") {
//     document.getElementById('state').textContent = "Indiana"
//     return ('in')
//   }
//   else if (state == "IA" || state == "IOWA") {
//     document.getElementById('state').textContent = "Iowa"
//     return ('ia')
//   }
//   else if (state == "KS" || state == "KANSAS") {
//     document.getElementById('state').textContent = "Kansas"
//     return ('ks')
//   }
//   else if (state == "KY" || state == "KENTUCKY") {
//     document.getElementById('state').textContent = "Kentucky"
//     return ('ky')
//   }
//   else if (state == "LA" || state == "LOUISIANA") {
//     document.getElementById('state').textContent = "Louisiana"
//     return ('la')
//   }
//   else if (state == "ME" || state == "MAINE") {
//     document.getElementById('state').textContent = "Maine"
//     return ('me')
//   }
//   else if (state == "MD" || state == "MARYLAND") {
//     document.getElementById('state').textContent = "Maryland"
//     return ('md')
//   }
//   else if (state == "MA" || state == "MASSACHUSETTS") {
//     document.getElementById('state').textContent = "Massachusetts"
//     return ('ma')
//   }
//   else if (state == "MI" || state == "MICHIGAN") {
//     document.getElementById('state').textContent = "Michigan"
//     return ('mi')
//   }
//   else if (state == "MN" || state == "MINNESOTA") {
//     document.getElementById('state').textContent = "Minnesota"
//     return ('')
//   }
//   else if (state == "MS" || state == "MISSISSIPPI") {
//     document.getElementById('state').textContent = "Mississippi"
//     return ('ms')
//   }
//   else if (state == "MO" || state == "MISSOURI") {
//     document.getElementById('state').textContent = "Missouri"
//     return ('mo')
//   }
//   else if (state == "MT" || state == "MONTANA") {
//     document.getElementById('state').textContent = "Montana"
//     return ('mt')
//   }
//   else if (state == "NE" || state == "NEBRASKA") {
//     document.getElementById('state').textContent = "Nebraska"
//     return ('ne')
//   }
//   else if (state == "NV" || state == "NEVADA") {
//     document.getElementById('state').textContent = "Nevada"
//     return ('nv')
//   }
//   else if (state == "NH" || state == "NEW HAMPSHIRE") {
//     document.getElementById('state').textContent = "New Hampshire"
//     return ('nh')
//   }
//   else if (state == "NJ" || state == "NEW JERSEY") {
//     document.getElementById('state').textContent = "New Jersey"
//     return ('nj')
//   }
//   else if (state == "NM" || state == "NEW MEXICO") {
//     document.getElementById('state').textContent = "New Mexico"
//     return ('nm')
//   }
//   else if (state == "NY" || state == "NEW YORK") {
//     document.getElementById('state').textContent = "New York"
//     return ('ny')
//   }
//   else if (state == "NC" || state == "NORTH CAROLINA") {
//     document.getElementById('state').textContent = "North Carolina"
//     return ('nc')
//   }
//   else if (state == "ND" || state == "NORTH DAKOTA") {
//     document.getElementById('state').textContent = "North Dakota"
//     return ('nd')
//   }
//   else if (state == "OH" || state == "OHIO") {
//     document.getElementById('state').textContent = "Ohio"
//     return ('oh')
//   }
//   else if (state == "OK" || state == "OKLAHOMA") {
//     document.getElementById('state').textContent = "Oklahoma"
//     return ('ok')
//   }
//   else if (state == "OR" || state == "OREGON") {
//     document.getElementById('state').textContent = "Oregon"
//     return ('or')
//   }
//   else if (state == "PA" || state == "PENNSYLVANIA") {
//     document.getElementById('state').textContent = "Pennsylvania"
//     return ('pa')
//   }
//   else if (state == "RI" || state == "RHODE ISLAND") {
//     document.getElementById('state').textContent = "Rhode Island"
//     return ('ri')
//   }
//   else if (state == "SC" || state == "SOUTH CAROLINA") {
//     document.getElementById('state').textContent = "South Carolina"
//     return ('sc')
//   }
//   else if (state == "SD" || state == "SOUTH DAKOTA") {
//     document.getElementById('state').textContent = "South Dakota"
//     return ('sd')
//   }
//   else if (state == "TN" || state == "TENNESSEE") {
//     document.getElementById('state').textContent = "Tennessee"
//     return ('tn')
//   }
//   else if (state == "TX" || state == "TEXAS") {
//     document.getElementById('state').textContent = "Texas"
//     return ('tx')
//   }
//   else if (state == "UT" || state == "UTAH") {
//     document.getElementById('state').textContent = "Utah"
//     return ('ut')
//   }
//   else if (state == "VT" || state == "VERMONT") {
//     document.getElementById('state').textContent = "Vermont"
//     return ('vt')
//   }
//   else if (state == "VA" || state == "VIRGINIA") {
//     document.getElementById('state').textContent = "Virginia"
//     return ('va')
//   }
//   else if (state == "WA" || state == "WASHINGTON") {
//     document.getElementById('state').textContent = "Washington"
//     return ('wa')
//   }
//   else if (state == "WV" || state == "WEST VIRGINIA") {
//     document.getElementById('state').textContent = "West Virginia"
//     return ('wv')
//   }
//   else if (state == "WI" || state == "WI") {
//     document.getElementById('state').textContent = "Wisconsin"
//     return ('wi')
//   }
//   else if (state == "WY" || state == "WYOMING") {
//     document.getElementById('state').textContent = "Wyoming"
//     return ('wy')
//   }
//   else
//     document.getElementById('state').textContent = "Error, invalid state"
//   return ('xx')
// }

// function convertEpoch(epoch) {
//   var d = new Date(0);
//   d.setUTCSeconds(epoch)
//   return d.getUTCDate()
// }

// function show_vaccines() {
//   document.getElementById("vaccines").hidden = false
//   document.getElementById("prevent").hidden = true
//   document.getElementById("frequently_asked_questions").hidden = true
//   document.getElementById("masks").hidden = true
//   document.getElementById("symptoms").hidden = true
//   document.getElementById("if_you_are_sick").hidden = true

// }

// function hide_vaccines() {
//   document.getElementById("vaccines").hidden = true
// }


// function show_prevent() {
//   document.getElementById("prevent").hidden = false
//   document.getElementById("frequently_asked_questions").hidden = true
//   document.getElementById("masks").hidden = true
//   document.getElementById("symptoms").hidden = true
//   document.getElementById("if_you_are_sick").hidden = true
//   document.getElementById("vaccines").hidden = true
// }

// function hide_prevent() {
//   document.getElementById("prevent").hidden = true
// }

// function show_frequently_asked_questions() {
//   document.getElementById("prevent").hidden = true
//   document.getElementById("frequently_asked_questions").hidden = false
//   document.getElementById("masks").hidden = true
//   document.getElementById("if_you_are_sick").hidden = true
//   document.getElementById("symptoms").hidden = true
//   document.getElementById("vaccines").hidden = true
// }

// function hide_frequently_asked_questions() {
//   document.getElementById("frequently_asked_questions").hidden = true
// }

// function show_masks() {
//   document.getElementById("prevent").hidden = true
//   document.getElementById("frequently_asked_questions").hidden = true
//   document.getElementById("masks").hidden = false
//   document.getElementById("if_you_are_sick").hidden = true
//   document.getElementById("symptoms").hidden = true
//   document.getElementById("vaccines").hidden = true
// }

// function hide_masks() {
//   document.getElementById("masks").hidden = true
// }

// function show_if_you_are_sick() {
//   document.getElementById("prevent").hidden = true
//   document.getElementById("frequently_asked_questions").hidden = true
//   document.getElementById("masks").hidden = true
//   document.getElementById("symptoms").hidden = true
//   document.getElementById("if_you_are_sick").hidden = false
//   document.getElementById("vaccines").hidden = true
// }

// function hide_if_you_are_sick() {
//   document.getElementById("if_you_are_sick").hidden = true
// }

// function show_symptoms() {
//   document.getElementById("prevent").hidden = true
//   document.getElementById("frequently_asked_questions").hidden = true
//   document.getElementById("masks").hidden = true
//   document.getElementById("if_you_are_sick").hidden = true
//   document.getElementById("symptoms").hidden = false
//   document.getElementById("vaccines").hidden = true
// }

// function hide_symptoms() {
//   document.getElementById("symptoms").hidden = true
// }

// /************************************************************************/
// /************************************************************************/
// /************************************************************************/
// function update_chart () {
//   return       [
//     {
//       label: 'Deaths',
//       data: 
//       [
//         // [update_chart(),  update_chart()],
//         [sessionStorage.getItem("dates1"),  sessionStorage.getItem("deaths1") - sessionStorage.getItem("deaths2")],   
//         [sessionStorage.getItem("dates2"),  sessionStorage.getItem("deaths2") - sessionStorage.getItem("deaths3")],   
//         [sessionStorage.getItem("dates3"),  sessionStorage.getItem("deaths3") - sessionStorage.getItem("deaths4")],   
//         [sessionStorage.getItem("dates4"),  sessionStorage.getItem("deaths4") - sessionStorage.getItem("deaths5")],   
//         [sessionStorage.getItem("dates5"),  sessionStorage.getItem("deaths5") - sessionStorage.getItem("deaths6")],   
//         [sessionStorage.getItem("dates6"),  sessionStorage.getItem("deaths6") - sessionStorage.getItem("deaths7")],   
//         [sessionStorage.getItem("dates7"),  sessionStorage.getItem("deaths7") - sessionStorage.getItem("deaths8")],   
//         [sessionStorage.getItem("dates8"),  sessionStorage.getItem("deaths8") - sessionStorage.getItem("deaths9")],   
//         [sessionStorage.getItem("dates9"),  sessionStorage.getItem("deaths9") - sessionStorage.getItem("deaths10")],   
//         [sessionStorage.getItem("dates10"),  sessionStorage.getItem("deaths10") - sessionStorage.getItem("deaths11")],   
//         [sessionStorage.getItem("dates11"),  sessionStorage.getItem("deaths11") - sessionStorage.getItem("deaths12")],   
//         [sessionStorage.getItem("dates12"),  sessionStorage.getItem("deaths12") - sessionStorage.getItem("deaths13")],   
//         [sessionStorage.getItem("dates13"),  sessionStorage.getItem("deaths13") - sessionStorage.getItem("deaths14")],   
//         [sessionStorage.getItem("dates14"),  sessionStorage.getItem("deaths14") - sessionStorage.getItem("deaths15")]   
//       ] 
//     },
//     {
//       label: 'New Positive Cases',
//       data: 
//       [
//         [sessionStorage.getItem("dates1"),  sessionStorage.getItem("positives1") - sessionStorage.getItem("positives2")],   
//         [sessionStorage.getItem("dates2"),  sessionStorage.getItem("positives2") - sessionStorage.getItem("positives3")],   
//         [sessionStorage.getItem("dates3"),  sessionStorage.getItem("positives3") - sessionStorage.getItem("positives4")],   
//         [sessionStorage.getItem("dates4"),  sessionStorage.getItem("positives4") - sessionStorage.getItem("positives5")],   
//         [sessionStorage.getItem("dates5"),  sessionStorage.getItem("positives5") - sessionStorage.getItem("positives6")],   
//         [sessionStorage.getItem("dates6"),  sessionStorage.getItem("positives6") - sessionStorage.getItem("positives7")],   
//         [sessionStorage.getItem("dates7"),  sessionStorage.getItem("positives7") - sessionStorage.getItem("positives8")],   
//         [sessionStorage.getItem("dates8"),  sessionStorage.getItem("positives8") - sessionStorage.getItem("positives9")],   
//         [sessionStorage.getItem("dates9"),  sessionStorage.getItem("positives9") - sessionStorage.getItem("positives10")],   
//         [sessionStorage.getItem("dates10"),  sessionStorage.getItem("positives10") - sessionStorage.getItem("positives11")],   
//         [sessionStorage.getItem("dates11"),  sessionStorage.getItem("positives11") - sessionStorage.getItem("positives12")],   
//         [sessionStorage.getItem("dates12"),  sessionStorage.getItem("positives12") - sessionStorage.getItem("positives13")],   
//         [sessionStorage.getItem("dates13"),  sessionStorage.getItem("positives13") - sessionStorage.getItem("positives14")],   
//         [sessionStorage.getItem("dates14"),  sessionStorage.getItem("positives14") - sessionStorage.getItem("positives15")]   
//       ] 
//     }]

// }

// **********************************************************************
// **********************************************************************
// **********************************************************************
function App() {

//   const get_data = async () => {

//     sessionStorage.clear()
//     let state = convertState(document.getElementById('input').value) // move/change this
//     document.getElementById("formStateInput").hidden = true
//     document.getElementById("loading").hidden = false
  
//     let res = await fetch('https://bryanlubayapi.herokuapp.com/get_data/' + state + '/', {
//       method: 'GET',
//       mode: 'cors',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       },
//       params: {
//         'state': state
//       }
//     })
  
//     let data = await res.json()
//     sessionStorage.setItem("dates1", convertEpoch(data.Date[data.Date.length - 1])) // newest update
//     sessionStorage.setItem("dates2", convertEpoch(data.Date[data.Date.length - 2])) 
//     sessionStorage.setItem("dates3", convertEpoch(data.Date[data.Date.length - 3])) 
//     sessionStorage.setItem("dates4", convertEpoch(data.Date[data.Date.length - 4])) 
//     sessionStorage.setItem("dates5", convertEpoch(data.Date[data.Date.length - 5])) 
//     sessionStorage.setItem("dates6", convertEpoch(data.Date[data.Date.length - 6])) 
//     sessionStorage.setItem("dates7", convertEpoch(data.Date[data.Date.length - 7])) 
//     sessionStorage.setItem("dates8", convertEpoch(data.Date[data.Date.length - 8])) 
//     sessionStorage.setItem("dates9", convertEpoch(data.Date[data.Date.length - 9])) 
//     sessionStorage.setItem("dates10", convertEpoch(data.Date[data.Date.length - 10])) 
//     sessionStorage.setItem("dates11", convertEpoch(data.Date[data.Date.length - 11])) 
//     sessionStorage.setItem("dates12", convertEpoch(data.Date[data.Date.length - 12])) 
//     sessionStorage.setItem("dates13", convertEpoch(data.Date[data.Date.length - 13])) 
//     sessionStorage.setItem("dates14", convertEpoch(data.Date[data.Date.length - 14])) 
//     sessionStorage.setItem("dates15", convertEpoch(data.Date[data.Date.length - 15])) 
  
//     sessionStorage.setItem("positives1", parseInt(data.Positive[data.Positive.length - 1]))
//     sessionStorage.setItem("positives2", parseInt(data.Positive[data.Positive.length - 2]))
//     sessionStorage.setItem("positives3", parseInt(data.Positive[data.Positive.length - 3]))
//     sessionStorage.setItem("positives4", parseInt(data.Positive[data.Positive.length - 4]))
//     sessionStorage.setItem("positives5", parseInt(data.Positive[data.Positive.length - 5]))
//     sessionStorage.setItem("positives6", parseInt(data.Positive[data.Positive.length - 6]))
//     sessionStorage.setItem("positives7", parseInt(data.Positive[data.Positive.length - 7]))
//     sessionStorage.setItem("positives8", parseInt(data.Positive[data.Positive.length - 8]))
//     sessionStorage.setItem("positives9", parseInt(data.Positive[data.Positive.length - 9]))
//     sessionStorage.setItem("positives10", parseInt(data.Positive[data.Positive.length - 10]))
//     sessionStorage.setItem("positives11", parseInt(data.Positive[data.Positive.length - 11]))
//     sessionStorage.setItem("positives12", parseInt(data.Positive[data.Positive.length - 12]))
//     sessionStorage.setItem("positives13", parseInt(data.Positive[data.Positive.length - 13]))
//     sessionStorage.setItem("positives14", parseInt(data.Positive[data.Positive.length - 14]))
//     sessionStorage.setItem("positives15", parseInt(data.Positive[data.Positive.length - 15]))
  
//     sessionStorage.setItem("deaths1", parseInt(data.Deaths[data.Deaths.length - 1]))
//     sessionStorage.setItem("deaths2", parseInt(data.Deaths[data.Deaths.length - 2]))
//     sessionStorage.setItem("deaths3", parseInt(data.Deaths[data.Deaths.length - 3]))
//     sessionStorage.setItem("deaths4", parseInt(data.Deaths[data.Deaths.length - 4]))
//     sessionStorage.setItem("deaths5", parseInt(data.Deaths[data.Deaths.length - 5]))
//     sessionStorage.setItem("deaths6", parseInt(data.Deaths[data.Deaths.length - 6]))
//     sessionStorage.setItem("deaths7", parseInt(data.Deaths[data.Deaths.length - 7]))
//     sessionStorage.setItem("deaths8", parseInt(data.Deaths[data.Deaths.length - 8]))
//     sessionStorage.setItem("deaths9", parseInt(data.Deaths[data.Deaths.length - 9]))
//     sessionStorage.setItem("deaths10", parseInt(data.Deaths[data.Deaths.length - 10]))
//     sessionStorage.setItem("deaths11", parseInt(data.Deaths[data.Deaths.length - 11]))
//     sessionStorage.setItem("deaths12", parseInt(data.Deaths[data.Deaths.length - 12]))
//     sessionStorage.setItem("deaths13", parseInt(data.Deaths[data.Deaths.length - 13]))
//     sessionStorage.setItem("deaths14", parseInt(data.Deaths[data.Deaths.length - 14]))
//     sessionStorage.setItem("deaths15", parseInt(data.Deaths[data.Deaths.length - 15]))


//     let asterik = "*"
//     convertState(state)
//     var number = parseInt(document.getElementById('tested').textContent = data.Tested[data.Tested.length - 1]) - parseInt(document.getElementById('tested').textContent = data.Tested[data.Tested.length - 2])

//     document.getElementById('tested').textContent = parseInt(data.Tested[data.Tested.length - 1]).toLocaleString() + " Tested (+" + number.toLocaleString() + ")" + asterik
  
//     number = parseInt(document.getElementById('cases').textContent = data.Positive[data.Positive.length - 1]) - parseInt(document.getElementById('cases').textContent = data.Positive[data.Positive.length - 2])
//     document.getElementById('cases').textContent = parseInt(data.Positive[data.Positive.length - 1]).toLocaleString() + " Positive Cases (+" + number.toLocaleString() + ")" + asterik
  
//     number = parseInt(document.getElementById('deaths').textContent = data.Deaths[data.Deaths.length - 1]) - parseInt(document.getElementById('deaths').textContent = data.Deaths[data.Deaths.length - 2])
//     document.getElementById('deaths').textContent = parseInt(data.Deaths[data.Deaths.length - 1]).toLocaleString() + " Deaths (+" + number.toLocaleString() + ")" + asterik
  
//     var d = new Date(0);
//     d.setUTCSeconds(data.Date[data.Date.length - 1])
  
//     document.getElementById('last_updated').textContent = "Last Updated: " + d.toUTCString()
  
//     d = new Date(0);
//     d.setUTCSeconds(data.Date[data.Date.length - 2])
  
//     document.getElementById('update_before_last').textContent = asterik + "Update Before Last: " + d.toUTCString()
  
//     document.getElementById("loading").hidden = true
//     document.getElementById("formStateInput").hidden = false
  
//     updateChartData()

//     return data
//   }; // End get_data
  
//   const [state, setState] = React.useState(
//     { 
//     data: [
//       {
//         label: 'Deaths',
//         data: [[10000,10000]]
//       },
//       {
//         label: 'New Positive Cases',
//         data: [[10000,10000]]
//       }]})

//   function useChartConfig() { 

//   React.useEffect(() => { 
//     setState(old => ({
//       ...old,
//       data: [
//       {
//         label: 'Deaths',
//         data: [[10000,10000]]
//       },
//       {
//         label: 'New Positive Cases',
//         data: [[10000,10000]]
//       }]}))}, [])

    
//   const updateChartData = () =>
//     setState(old => ({
//       ...old,
//       data: update_chart()
//     }))

//   return {...state, updateChartData}

// } // end useChartConfig


//   document.title = "Bryan Lubay's App :)"

//   const series = React.useMemo(() => ({showPoints: false}),[])

//   const axes = React.useMemo(() => [{ primary: true, type: 'linear', position: 'bottom' }, { type: 'linear', position: 'left' }],[])

//   const { data, updateChartData } = useChartConfig()

//   let lineChart = (
//     <div style={{ margin: 'auto', width: '80vw', height: '80vh', maxWidth: '-webkit-fill-available', maxHeight: '-webkit-fill-available' }}>
//       <Chart id="chart" data={data} axes={axes} tooltip></Chart>
//     </div>)

  return (

  <div className="App" >
      <header className="App-header">

      <Container >
        <Navbar fixed="top"  bg="light" expand="lg">
                <Navbar.Brand>Bryan Lubay's App</Navbar.Brand>
                <Nav.Link href="https://cindylus-creations.herokuapp.com/" target="_blank">Cindylu's Creations</Nav.Link>
                <Nav.Link href="/comptia">CompTIA</Nav.Link>
                <Nav.Link href="/coronavirus">Coronavirus</Nav.Link>
                <Nav.Link href="/unity">Unity</Nav.Link>
        </Navbar>
      </Container>

      <Router>
        <Switch>
          <Route exact path='/unity' component={Unity}/> 
          <Route exact path='/comptia' component={CompTIA}/> 
          <Route exact path='/coronavirus' component={Coronavirus}/> 

        </Switch>
      </Router>



  
        {/* <p>Sources:
              <a target="_blank" href="https://coronavirusapi.com" > https://coronavirusapi.com</a> |
              <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov" > https://www.cdc.gov/coronavirus/2019-ncov</a>
        </p>

        <br></br> */}


      </header>

    </div>

  );
}

export default App;
