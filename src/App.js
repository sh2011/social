
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
          
          <Route path="/" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} newPostText={props.state.profilePage.newPostText} postTextChange={props.postTextChange} />}/>
          <Route path="/profile" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} postTextChange={props.postTextChange} newPostText={props.state.profilePage.newPostText} />}/>
          <Route path="/messages" element={<Messages dialogPage={props.state.dialogPage} addMessage={props.addMessage} newMessageText={props.state.dialogPage.newMessageText} messageTextChange={props.messageTextChange} />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
