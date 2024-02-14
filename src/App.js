import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Index from './pages/public/Index'
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/> }>
            <Route path='/inscription'/>
            <Route path='/connexion'/>
          </Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
