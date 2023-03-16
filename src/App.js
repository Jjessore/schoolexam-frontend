import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path='/home' element ={<Home />} />
          </Routes>
    </div>
  );
}

export default App;
