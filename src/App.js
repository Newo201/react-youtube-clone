import './index';
import { useState } from 'react';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import VideoRecs from './components/video-recs/video-recs';
import Video from './pages/video/video';

function App() {

  const [sidebar, setSidebar] = useState(true)

  return (
    <div className="App">
      <Navbar setSidebar = {setSidebar}/>
      <Routes>
        <Route path = "/" element = {<Home sidebar = {sidebar}/>}/>
        <Route path = "/video/:categoryId/:videoId" element = {<Video sidebar = {sidebar}/>}/>
      </Routes>

    </div>
  );
}

export default App;
