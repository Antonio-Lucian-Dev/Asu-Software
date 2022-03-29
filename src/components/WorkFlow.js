import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import homeImage from '../assets/first-image.png';
import aboutImage from '../assets/about-us.png';
import Button from '@mui/material/Button';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import WebIcon from '@material-ui/icons/Web';
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import './WorkFlow.css';

const WorkFlow = () => {
    return (
        <div className='container'>
            <Grid container spacing={4} className="container-home-presentation">
                <Grid item xs={12} sm={12} md={12} lg={6} className="home-description">
                    <div className='information'>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            className='title'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            The best solution for your idea!
                        </Typography>
                        <Typography
                            variant="p"
                            component="div"
                            className='description'
                            sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            We are a big company operation in the IT industry.
                            Do you have a project? You need a good design or a perfect software? Well..We can help you with this. Check bellow button to view our services
                        </Typography>
                        <Button variant="contained" className='btn-view'>View</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <div className='container-image'>
                        <img src={homeImage} />
                    </div>
                </Grid>
            </Grid>

            <Typography
                variant="h5"
                noWrap
                component="div"
                className='title title-center'
                sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                The best solution for your idea!
            </Typography>

            <Grid container spacing={4} className="container-home-workflow">
                <Grid item xs={12} sm={12} md={4} lg={4} className="workflow">
                    <Card sx={{ maxWidth: 300, height: 300, padding: 3 }}>
                        <BusinessCenterIcon className='icon-card businessIcon' />
                        <Typography
                            variant="h6"
                            component="div"
                            className='title-card'
                            align='center'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            Business Planning
                        </Typography>
                        <Typography
                            variant="p"
                            component="div"
                            className='description-card'
                            align='start'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            First of all we need to establish the business plan, to understand the users who will use the application, your need for business
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className="workflow">
                    <Card sx={{ maxWidth: 300, height: 300, padding: 3 }}>
                        <WebIcon className='icon-card webIcon' />
                        <Typography
                            variant="h6"
                            component="div"
                            className='title-card'
                            align='center'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            Design Part
                        </Typography>
                        <Typography
                            variant="p"
                            component="div"
                            className='description-card'
                            align='start'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            Once we have established with you the business plan and the users who will use it, we will start to draw our idea on what your application will look like, we will agree on how the information will be displayed.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className="workflow">
                    <Card sx={{ maxWidth: 300, height: 300, padding: 3 }}>
                        <CodeIcon className='icon-card codeIcon' />
                        <Typography
                            variant="h6"
                            component="div"
                            className='title-card'
                            align='center'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            Business Planning
                        </Typography>
                        <Typography
                            variant="p"
                            component="div"
                            className='description-card'
                            align='start'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            First of all we need to establish the business plan, to understand the users who will use the application, your need for business
                        </Typography>
                    </Card>
                </Grid>
            </Grid>

            <Typography
                variant="h5"
                noWrap
                component="div"
                className='title title-center'
                sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                About Us
            </Typography>

            <Grid container spacing={4} className="container-home-about">
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <div className='container-image'>
                        <img src={aboutImage} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} className="about-description">
                    <div className='information'>
                        <Typography
                            variant="p"
                            component="div"
                            className='description'
                            sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            We are a company that deals with the development of web and mobile pliers. Our goal is to develop the best and the most kidnapped products on the market. We were born with this concept and we want to have more happy customers. At the moment we have a fairly large portfolio, with different clients.
                        </Typography>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={4} className="container-home-price">
                <Grid item xs={12} sm={12} md={4} lg={4} className="workflow">
                    <Card sx={{ maxWidth: 300, height: 300, padding: 3 }} className="container-price">
                        <BrushIcon className='icon-card price-container' />
                        <Typography
                            variant="h6"
                            component="div"
                            className='title-card'
                            align='center'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            Design
                        </Typography>
                        <Typography
                            variant="p"
                            component="div"
                            className='description-card'
                            align='start'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            The prices for a design are quite wide and depend on the complexity of the product. If you only need a design to see your idea in reality, then we invite you to contact us.
                        </Typography>
                        <Typography
                            variant="p"
                            component="div"
                            className='price-card'
                            align='center'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            Price: 500 lei
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className="workflow">
                    <Card sx={{ maxWidth: 300, height: 300, padding: 3 }} className="container-price">
                        <PhoneIphoneIcon className='icon-card price-container' />
                        <Typography
                            variant="h6"
                            component="div"
                            className='title-card'
                            align='center'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            Mobile Development
                        </Typography>
                        <Typography
                            variant="p"
                            component="div"
                            className='description-card'
                            align='start'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            We develop mobile applications, for android at the best standards, if you have the idea, let us make it real on your phone.
                        </Typography>
                        <Typography
                            variant="p"
                            component="div"
                            className='price-card'
                            align='center'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            Price: 900 lei
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className="workflow">
                    <Card sx={{ maxWidth: 300, height: 300, padding: 3 }} className="container-price">
                        <WebIcon className='icon-card price-container' />
                        <Typography
                            variant="h6"
                            component="div"
                            className='title-card'
                            align='center'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            Web Development
                        </Typography>
                        <Typography
                            variant="p"
                            component="div"
                            className='description-card'
                            align='start'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            We develop web applications that are responsive to different sizes such as laptop, tablet and phone. So you can see your website or web application ready to upload online
                        </Typography>
                        <Typography
                            variant="p"
                            component="div"
                            className='price-card'
                            align='center'
                            sx={{ display: { xs: 'flex', md: 'flex' }, mb: '4' }}>
                            Price: 1000 lei
                        </Typography>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

export default WorkFlow;