import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutMePage } from './pages/AboutMePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/my-portfolio" element={<HomePage />} />
        <Route path="/my-portfolio/about" element={<AboutMePage />} />
      </Routes>
    </Router>
  );
}

export default App;
