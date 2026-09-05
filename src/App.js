
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Messages from './components/messages/messages';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <div className="content">
        <Routes>
          
          <Route path="/" element={<Profile name="Elon Musk"/>}/>
          <Route path="/profile" element={<Profile name="Elon Musk"/>}/>
          <Route path="/messages" element={<Messages/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
