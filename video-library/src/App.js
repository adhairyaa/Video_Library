
import './App.css';
import Navbar from "./Components/Navbar" 
import Topbar from './Components/Topbar';
import Home from "./Pages/Home"
import Router from './Routes/Router';
import {useTheme} from './Context/ThemeProvider'
function App() {
const {theme} = useTheme()
  return (
    <div className="App">
      <div className={theme}>
      {/* <Router /> */}
      <Topbar/>
      <Navbar/>
      <Home />
      </div>
    </div>
  );
}

export default App;
