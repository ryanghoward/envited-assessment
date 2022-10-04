import { Routes, Route, Router } from "react-router-dom";
// import "./App.css";

import Home from "./components/Home";

function App() {
  return (
    <div className='App'>
      {/* <Router> */}
      <Home />
      {/* <Route exact path='/' element={<Home />} /> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
