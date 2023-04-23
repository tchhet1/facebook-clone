import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';
import Login from './components/Login';
import { useStateValue } from './StateProvider';


function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (<Login />) 
      :(
        <>
        <Nav />

        <div className='app-body'>
            <Sidebar />
            <Feed />
            <Widget />
        </div>
        </>
      ) 
        
      }
      
    </div>
  );
}

export default App;
