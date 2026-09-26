
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Messages from './components/messages/messages';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';

function App(props) {
  return (
    <div className="container">
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <div className="content">
        <Routes>
          
          <Route path="/" element={<Profile profilePage={props.state.profilePage} />}/>
          <Route path="/profile" element={<Profile profilePage={props.state.profilePage} />}/>
          <Route path="/messages" element={<Messages dialogNames={props.dialogNames} messageItems={props.messageItems} />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
