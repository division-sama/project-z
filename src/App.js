import './App.css';
import BusinessPage from './components/BusinessPage/BusinessPage';
import Example from './components/AccessControl/AccessControl';
import Header from './components/Header/Header';
import BusinessProfile from './components/BusinessProfile/BusinessProfile';

let auth = 0;

function App() {
  
  return (
    <div className="App">
      <BusinessProfile></BusinessProfile>
      {/* <Header></Header> */}
      {/* {auth ? <BusinessPage></BusinessPage> : <Example></Example>} */}
    </div>
  );
}

export default App;
