import './index';
import { Navbar } from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

function App() {

  const [sidebar, setSidebar] = useState(true)

  return (
    <div className="App">
      <Navbar setSidebar = {setSidebar}/>
      <Sidebar sidebar = {sidebar}/>
    </div>
  );
}

export default App;
