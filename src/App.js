import BrowserRouter from './route/BrowserRouter/BrowserRouter';
import Routes from './config/RouteConfig';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return <BrowserRouter routes={Routes} />;
}

export default App;
