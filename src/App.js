// import logo from './logo.svg';
import './App.css';
import Header from '././components/header/Header';
import DateCard from   './components/datingcards/Datecard';
import SwipeButton from'./components/swipebuttons/SwipeButton';

function App() {
  return (
    <div className="app">
     <Header  />
     < DateCard />
<SwipeButton/>
    </div>
  );
}

export default App;
