import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
