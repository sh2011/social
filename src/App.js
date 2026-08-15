
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="container">
      <Header/>
      <Navbar/>
      <div className="content">
        <Profile/>
      </div>
    </div>
  );
}

export default App;
