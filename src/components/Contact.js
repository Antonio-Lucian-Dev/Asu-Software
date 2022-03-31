import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import './Contact.css';
import useForm from './useForm';

const Contact = () => {

    const userFormRef = {
        firstName: useRef(null),
        lastName: useRef(null),
        email: useRef(null),
        subject: useRef(null),
        message: useRef(null)
    };


    const validate = () => {
        let temp = {};
        temp.firstName = userFormRef.firstName.current.value ? "" : "This field is required";
        temp.lastName = userFormRef.lastName.current.value ? "" : "This field is required";
        temp.email = (/$|.+@.+..+/).test(userFormRef.email.current.value) ? "" : "Email is not valid";
        temp.subject = userFormRef.subject.current.value ? "" : "This field is required";
        temp.message = userFormRef.message.current.value ? "" : "This field is required";
        setErrors({
            ...temp
        });
        return Object.values(temp).every(x => x == "");
    }

    const { values, setValues, errors, setErrors } = useForm(userFormRef);

    const handleSubmit = (event) => {
        event.preventDefault();
       // if(validate()) {
            const data = {
                firstName: userFormRef.firstName.current.value,
                lastName: userFormRef.lastName.current.value,
                email: userFormRef.email.current.value,
                message: userFormRef.message.current.value
            }
            console.log(data);
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
                            <TextField error={errors.firstName} {...(errors.firstName & {error:true, helperText:errors.firstName})} id="outlined-basic" className='firstName' label="First Name" variant="outlined" inputRef={userFormRef.firstName} required />
                            <TextField error={errors.lastName} {...(errors.lastName & {error:true, helperText:errors.lastName})} id="outlined-basic" label="Last Name" variant="outlined" inputRef={userFormRef.lastName} required />
                        </div>
                        <TextField error={errors.email} {...(errors.email & {error:true, helperText:errors.email})} id="outlined-basic" className='user-input' label="Email" variant="outlined" inputRef={userFormRef.email} required />
                        <TextField error={errors.subject} {...(errors.subject & {error:true, helperText:errors.subject})} id="outlined-basic" className='user-input' label="Subject" variant="outlined" inputRef={userFormRef.subject} required />
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
                            error={errors.message}
                            {...(errors.message & {error:true, helperText:errors.message})}
                            required
                        />
                        <Button variant="outlined" type='submit'>Send</Button>
                    </form>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} className="home-information">
                    <div className='box'>
                        <div className='container-information'>
                            <EmailIcon className='information-icon' />
                            <Typography
                                variant="p"
                                component="div"
                                className='information'
                                sx={{ display: { xs: 'flex', md: 'flex' } }}>
                                asu.software.dev@gmail.com
                            </Typography>
                        </div>
                        <div className='container-information'>
                            <LocationOnIcon className='information-icon' />
                            <Typography
                                variant="p"
                                component="div"
                                className='information'
                                sx={{ display: { xs: 'flex', md: 'flex' } }}>
                                Bacau, Romania
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact;