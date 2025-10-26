import ElectionPrediction from './pages/Election-Prediction/election-prediction';
import DashboardPage from './pages/Election-Analysis/DashboardPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ElectionPrediction />} />
      <Route path="/election-prediction" element={<ElectionPrediction />} />
      <Route path="/election-analysis" element={<DashboardPage />} />

    </Routes>
  </Router>
  );
}

export default App;