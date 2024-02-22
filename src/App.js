import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
// import Index from './pages/public/Index'
// import Layout from './pages/public/Layout';
import PublicRoute from './pages/public/PublicRoute';
import AdminRouteur from './pages/admin/AdminRouteur';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/*' element={<PublicRoute />} />
        <Route path='/admin/*' element={<AdminRouteur/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
