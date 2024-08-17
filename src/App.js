import './index';
import { useState } from 'react';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './home/home';

function App() {

  const [sidebar, setSidebar] = useState(true)

  return (
    <div className="App">
      <Navbar setSidebar = {setSidebar}/>
      <Routes>
        <Route path = "/" element = {<Home sidebar = {sidebar}/>}/>
      </Routes>
    </div>
  );
}

export default App;
