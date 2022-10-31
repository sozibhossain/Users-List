import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import UsersDetails from './Pages/UsersDetails/UsersDetails';

function App() {
  return (
    <BrowserRouter>
      <Home>
          <Routes>
            <Route path="/usersDetails/:id" element={<UsersDetails/>} />
          </Routes>
      </Home>
    </BrowserRouter>
  );
}

export default App;
