// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Wrapper from './components/Wrapper';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Country from './components/Country';

function App() {
  const [view, setView] = useState("Home");
  const [date, setDate] = useState("");

  const onRedirect = (d) => {
    setView(d.label);
  };

  const renderView = () => {
    if (view === "Home") {
      return (<Home setDate={setDate}/>);
    } else if (view === "About") {
      return (<About />);
    } else if (view === "Contact") {
      return (<Contact />);
    } else {
      return (<Country />);
    }
  };

  console.log(global);
  // menu bar that contains the date and the title of the app
  // create a search bar in the middile to search for country data
  return (

    <div className="App">
      <Wrapper date={date} handleRedirect={onRedirect}/>
      <div className="background">
        { renderView() }
      </div>
    </div>
  );
}

export default App;
