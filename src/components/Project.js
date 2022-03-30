import { Grid, Typography } from '@mui/material';
import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import cryptoverse from '../assets/cryptoverse.png';
import './Project.css';

const Project = () => {
    return (
        <div>
            <Typography
                variant="h5"
                noWrap
                component="div"
                className='title title-center'
                sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                Our Projects
            </Typography>
            <Grid container spacing={4} className="container-home-price">
                <Grid item xs={12} sm={12} md={4} lg={4} className="workflow">
                    <div className='container-image first-image'>
                        <img src={cryptoverse} />
                        <div id='hover-eyes'>
                            <VisibilityIcon />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Project;