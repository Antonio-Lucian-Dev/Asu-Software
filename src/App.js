import React, { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LineChart from './components/LineChart';
import NavBar from './components/NavBar';
import WorkFlow from './components/WorkFlow';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function App() {

  const [isButtonUpVisibile, setIsButtonUpVisible] = useState(false);

  const goToInitialPage = () => {

  }

  document.addEventListener('scroll', () => {
    if (window.scrollY > 690) {
      // Show the bottom right button
      setIsButtonUpVisible(true);
    } else {
      setIsButtonUpVisible(false);
    }
    console.log(window.scrollY);
    console.log(isButtonUpVisibile);
  });

  const scrollToInitialPage = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div className="App">
      <NavBar />
      <WorkFlow />
      {/* <Project /> */}
      <LineChart />
      <Contact />
      <Footer />
      {isButtonUpVisibile && <Fab size="small" color="secondary" aria-label="add" className='floating-button' onClick={scrollToInitialPage}>
        <KeyboardArrowUpIcon />
      </Fab>}
    </div>
  );
}

export default App;
