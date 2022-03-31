import { Grid, Typography } from '@mui/material'
import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container-footer'>
            <Grid container spacing={4} className="container-home-footer">
                <Grid item xs={12} sm={12} md={12} lg={6} className="home-footer">
                    <Typography
                        variant="h6"
                        component="div"
                        className='title-grey'
                        sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        Contact
                    </Typography>
                    <div className='container-information'>
                        <EmailIcon className='information-footer-icon' />
                        <Typography
                            variant="p"
                            component="div"
                            className='information-footer'
                            sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            asu.software.dev@gmail.com
                        </Typography>
                    </div>
                    <div className='container-information'>
                        <LocationOnIcon className='information-footer-icon' />
                        <Typography
                            variant="p"
                            component="div"
                            className='information-footer'
                            sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            Bacau, Romania
                        </Typography>
                    </div>
                    <div className='container-information'>
                        <PhoneIcon className='information-footer-icon' />
                        <Typography
                            variant="p"
                            component="div"
                            className='information-footer'
                            sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            +40 0725347284
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} className="home-footer-social">
                    <Typography
                        variant="h6"
                        component="div"
                        className='title-grey'
                        sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        Our Social
                    </Typography>
                    <div className='container-information-social'>
                        <a className='social-link' href='https://www.facebook.com/AsuSoftware' target="_blank">
                            <FacebookIcon className='social-icon'/>
                        </a>
                        <a className='social-link' href='https://www.instagram.com/antonio_lucian_13' target="_blank">
                            <InstagramIcon className='social-icon'/>
                        </a>
                        <a className='social-link' href='https://www.linkedin.com/in/antonio-lucian-popa-b22890195' target="_blank">
                            <LinkedInIcon className='social-icon'/>
                        </a>
                    </div>
                </Grid>
            </Grid>
            <footer>
                &copy; 2022 <strong>Asu Software</strong>. All rights reserved.
            </footer>
        </div>
    )
}

export default Footer;