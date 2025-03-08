import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SipCagrPage from "./Pages/SipCagrPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sip-cagr" element={<SipCagrPage />} />
        {/* Add other routes for other calculators */}
      </Routes>
    </Router>
  );
}

export default App;

