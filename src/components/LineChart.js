import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Card from '@mui/material/Card';
import './LineChart.css';
import { Grid, Typography } from '@mui/material';
Chart.register(...registerables);

const LineChart = () => {

    const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Customer Review',
                data: [0, 59, 80, 81, 56, 55, 40, 40, 40, 40, 40],
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };


    return (
        <Grid container spacing={4} className="container-home-chart">
            <Grid item xs={12} sm={12} md={12} lg={6} className="chart-description">
                <Typography
                    variant="p"
                    component="div"
                    className='description'
                    sx={{ display: { xs: 'flex', md: 'flex' } }}>
                    Our business has grown since we founded Asu Software. The following chart represents our growth in the market, this represents how good we are and how much we like to do beautiful things for our customers
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} className="chart">
                <Card className='container-card'>
                    <Line data={data} options={options} />
                </Card>
            </Grid>
        </Grid>
    )
}

export default LineChart;