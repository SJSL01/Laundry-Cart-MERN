import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';

import { AuthContextProvider } from './Context/AuthContext';
import { ToastContextProvider } from './Context/ToastContext';

import Create from './Pages/Create';
import CreateOrder from './Pages/CreateOrder';



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

    <Layout>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />

          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Createorder' element={<CreateOrder/>}/>

        </Routes>
      </BrowserRouter>
    </Layout>

  );
}

export default App;
