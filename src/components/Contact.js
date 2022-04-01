import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import contactImage from '../assets/contact.png';
import './Contact.css';
import { sendMail } from '../services/sendMail';

const Contact = () => {

    const userFormRef = {
        firstName: useRef(null),
        lastName: useRef(null),
        email: useRef(null),
        subject: useRef(null),
        message: useRef(null)
    };

    const [response, setResponse] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
       // if(validate()) {
            const data = {
                name: userFormRef.firstName.current.value + " " + userFormRef.lastName.current.value,
                subject: userFormRef.subject.current.value,
                email: userFormRef.email.current.value,
                message: userFormRef.message.current.value
            }
            console.log(data);
            // send mail
            setResponse(sendMail(data));
            console.log(response);
      //  }
    }

    return (
        <div className='container-contact'>
            <Typography
                variant="h5"
                noWrap
                component="div"
                className='title title-contact'
                sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                So what are you waiting for? Contact us
            </Typography>
            <Grid container spacing={4} className="container-home-contact">
                <Grid item xs={12} sm={12} md={12} lg={6} className="home-description">
                    <form className='user-form' onSubmit={handleSubmit}>
                        <div className='container-username'>
                            <TextField id="outlined-basic" className='firstName' label="First Name" variant="outlined" inputRef={userFormRef.firstName} required />
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" inputRef={userFormRef.lastName} required />
                        </div>
                        <TextField id="outlined-basic" className='user-input' label="Email" variant="outlined" inputRef={userFormRef.email} required />
                        <TextField id="outlined-basic" className='user-input' label="Subject" variant="outlined" inputRef={userFormRef.subject} required />
                        <TextField
                            id="standard-multiline-flexible"
                            label="Message"
                            className='user-input'
                            multiline
                            maxRows={4}
                            //value={}
                            //onChange={handleChange}
                            variant="standard"
                            inputRef={userFormRef.message}
                            required
                        />
                        <Button variant="outlined" type='submit'>Send</Button>
                    </form>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} className="home-information">
                <div className='container-image'>
                        <img src={contactImage} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact;