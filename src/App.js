import React, { useState } from 'react'
import DashboardComponent from './DashboardComponent';
import Login from './Login'

const App = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      {(login? <DashboardComponent/> : <Login/>)}
    </>
  )
}

export default App




// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DashboardComponent from './DashboardComponent';
// import Login from './Login'
// // import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';

// function App() {
//   return (
//     <>
//     <hi>Hello</hi>
//     <Login />
//     {/* <Router>
//         <Route exact path='/login' component = {Login}   /> 
//         <Route exact path='/dashboardComponent' component = {DashboardComponent} />
//     </Router> */}
// </>  
//   );
// }

// export default App;
