import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetInfo from './features/GetInfo';
import MainPage from './components/mainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
        <GetInfo />
      </Router>
    </div>
  );
}

export default App;
