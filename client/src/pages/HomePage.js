import React from 'react';
import Button from '@material-ui/core/Button';
import AppLayout from '../components/home/AppLayout.js'
import Hero from '../components/home/Hero.js'
import Selection from '../components/home/Selection.js'
import homeImg from '../images/homeImg.jpg'
import history from '../history';

function getStarted(e){
    history.push('/form')
}

export default () => (
    <AppLayout>
        <Hero img={homeImg}>
            <h1>Portfolio Builder</h1>
        </Hero>
        <Selection>
            <Button className="getstarted-button" variant="contained" color="default" onClick={getStarted}>
                Get Started
            </Button> 
            <Button className="github-btn" variant="contained" color="default">
                <a href="https://github.com/liuste">View on Github</a>
            </Button> 
        </Selection>
    </AppLayout> 
);