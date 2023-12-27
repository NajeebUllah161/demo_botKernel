import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
