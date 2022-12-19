import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import { AuthContextProvider } from './Context/AuthContext';
import { ToastContextProvider } from './Context/ToastContext';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
function App() {
  return (
    <BrowserRouter>
      <ToastContextProvider>
        <AuthContextProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </Layout>
        </AuthContextProvider>
      </ToastContextProvider>
    </BrowserRouter>
  );
}

export default App;
