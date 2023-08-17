import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import EditUsers from './pages/EditUsers';
import AddUsers from './pages/AddUsers';
import ViewUsers from './pages/ViewUsers';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='edit' element={<EditUsers/>} />
          <Route path='add' element={<AddUsers/>} />
          <Route path='view' element={<ViewUsers/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
