import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEvent from "./components/CreateEvent";
// import "./App.css";

import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/create' element={<CreateEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
