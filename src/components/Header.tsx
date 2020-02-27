import React from 'react';
import { observer } from 'mobx-react';
import '../styles/main.scss';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const SideBar = () => (
    <Grid className="header" container alignItems="center" justify="flex-start">
        <Grid item xs={3} md={3} container alignItems="center" justify="center">
            <Link to="/home">
                <span className="font-h3">월간클로젯</span>
            </Link>
        </Grid>
        <Grid item xs={9} md={9} className="header-category" container justify="flex-start" align-items="center">
            <Grid item xs={2} container justify="center">
                <Link to="/story">
                    <span className="font-h6">Story</span>
                </Link>
            </Grid>
            <Grid item xs={2} container justify="center">
                <Link to="/guide">
                    <span className="font-h6">Guide</span>
                </Link>
            </Grid>
            <Grid item xs={2} container justify="center">
                <Link to="/plan">
                    <span className="font-h6">Plan</span>
                </Link>
            </Grid>
            <Grid item xs={2} container justify="center">
                <Link to="/faq">
                    <span className="font-h6">FAQ</span>
                </Link>
            </Grid>
        </Grid>
    </Grid>
);
export default observer(SideBar);
