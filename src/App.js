import React, { useEffect, useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LineChart from './components/LineChart';
import NavBar from './components/NavBar';
import WorkFlow from './components/WorkFlow';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { sendMail } from './services/sendMail';

function App() {

  const [isButtonUpVisibile, setIsButtonUpVisible] = useState(false);
  const [responseFromMail, setResponseFromMail] = useState(null);

  const [responseFromServer, setResponseFromServer] = useState(null);

  const [open, setOpen] = useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const responseEmailHandler = (response) => {
    const URL = "https://blueberry-crumble-16635.herokuapp.com";

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response)
    };

    fetch(`${URL}/api/v1/send-mail`, requestOptions)
      .then(res => res.json())
      .then(response => setResponseFromServer(response));
  }

  useEffect(() => {
    setResponseFromMail(responseFromServer);
    setOpen(true);
    setTimeout(() => {
      setResponseFromMail(null);
    }, 7000);
  }, responseFromServer);

  document.addEventListener('scroll', () => {
    (window.scrollY > 690) ? setIsButtonUpVisible(true) : setIsButtonUpVisible(false);
  });

  const scrollToInitialPage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="App">
      <NavBar />
      <Snackbar
        open={open && responseFromMail}
        autoHideDuration={6000}
        onClose={handleClose}
        message={responseFromMail}
        sx={{backgroundColor: "#676FA3"}}
      />
      <WorkFlow />
      {/* <Project /> */}
      <LineChart />
      <Contact onMailSend={responseEmailHandler} />
      <Footer />
      {isButtonUpVisibile && <Fab size="small" color="secondary" aria-label="add" className='floating-button' onClick={scrollToInitialPage}>
        <KeyboardArrowUpIcon />
      </Fab>}
    </div>
  );
}

export default App;
