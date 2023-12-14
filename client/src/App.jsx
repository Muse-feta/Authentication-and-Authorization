import { Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Dashbored from './pages/Dashbored';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/dashbored' element={<Dashbored/>}/>
      <Route path='/home' element={<Main/>} />
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  );
}

export default App
