import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import CreateEvent from "./components/CreateEvent";
// import Event from "./components/Event";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/create' element={<CreateEvent />} />
        {/* <Route path='/event' element={<Event />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
