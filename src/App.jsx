import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/utils/PrivateRoute';
import EntryPage from './components/EntryPage/EntryPage';
import './App.css'
function AppWrapper() {
  const location = useLocation();
  const showNavbar = location.pathname === '/home';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
