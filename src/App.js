// heroku git:remote -a bryanlubay

import React from 'react';
import { BrowserRouter as Router, Route, /*Redirect,*/ Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Unity from './components/Unity'
import Coronavirus from './components/Coronavirus'
import CompTIA from './components/CompTIA'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import 'react-widgets/dist/css/react-widgets.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function update_chart () {
  const get_data = async () => {

    sessionStorage.clear()
    let state = convertState(document.getElementById('input').value) // move/change this
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
    sessionStorage.setItem("dates1", convertEpoch(data.Date[data.Date.length - 1])) // newest update
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


  document.title = "Bryan Lubay's App :)"

  const series = React.useMemo(() => ({showPoints: false}),[])

  const axes = React.useMemo(() => [{ primary: true, type: 'linear', position: 'bottom' }, { type: 'linear', position: 'left' }],[])

  const { data, updateChartData } = useChartConfig()

  let lineChart = (
    <div style={{ margin: 'auto', width: '80vw', height: '80vh', maxWidth: '-webkit-fill-available', maxHeight: '-webkit-fill-available' }}>
      <Chart id="chart" data={data} axes={axes} tooltip></Chart>
    </div>)


  return       [
    {
      label: 'Deaths',
      data: 
      [
        // [update_chart(),  update_chart()],
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


// **********************************************************************
// **********************************************************************
// **********************************************************************
function App() {


  return (

  <div className="App" >
      <header className="App-header">

      <Container >
        <Navbar fixed="top"  bg="light" expand="lg">
                <Navbar.Brand>Bryan Lubay's App</Navbar.Brand>
                <Nav.Link href="/comptia">CompTIA</Nav.Link>
                <Nav.Link href="/coronavirus">Coronavirus</Nav.Link>
                <Nav.Link href="/unity">Unity</Nav.Link>
        </Navbar>
      </Container>






      </header>

      <Router>
        <Switch>
          <Route exact path='/unity' component={Unity}/> 
          <Route exact path='/comptia' component={CompTIA}/> 
          <Route exact path='/coronavirus' component={Coronavirus}/> 

        </Switch>
      </Router>
    </div>

  );
}

export default App;
