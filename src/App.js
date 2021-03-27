import BrowserRouter from './route/BrowserRouter/BrowserRouter';
import Routes from './config/RouteConfig';
import './App.css';

function App() {
  return <BrowserRouter routes={Routes} />;
}

export default App;
