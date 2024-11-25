import { Analytics } from "@vercel/analytics/react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
