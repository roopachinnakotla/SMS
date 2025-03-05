import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './routes/login';
import Register from './routes/register';
import  Menu  from './routes/menu';
import {  AuthProvider } from './contexts/useAuth';
import ClassManagement from './routes/ClassManagement';
// import PrivateRoute from './components/private_route';


function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        {/* <Route path="/" element={<PrivateRoute><Menu/></PrivateRoute>} /> */}
        <Route path="/dashboard" element={<Menu/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/classes' element={<ClassManagement/>} />
      </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
