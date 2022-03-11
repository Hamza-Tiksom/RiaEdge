import logo from './logo.svg';
import './App.css';
import { SigninPage } from './components/Login/SigninPage';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route exact path="/" element={SigninPage} />
      </Routes> */}
<SigninPage/>
    </div>
  );
}

export default App;
