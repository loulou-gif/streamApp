import { BrowserRouter} from 'react-router-dom';
import './App.css';
// import Index from './pages/public/Index'
// import Layout from './pages/public/Layout';
import PublicRoute from './pages/public/PublicRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <PublicRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
