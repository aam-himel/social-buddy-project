import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, makeStyles, colors, Avatar } from '@material-ui/core';
import fakeImgUrl from '../Utils/fakeImgUrl';
const useStyle =  makeStyles((theme) =>(
    {
        root: {
            padding: theme.spacing(2)
        },
        paper: {
            backgroundColor: '#FAFAFA',
            height:130,
            padding:'5px 10px',
            boxShadow: theme.shadows[2]
        },
        
    }
))

const Comments = ({comment}) => {


    const classes = useStyle();
    const {name, body} = comment;
    
    let randomIndex = Math.floor(Math.random() * fakeImgUrl.length);

    return (
        <Grid item xs={8} md={6} >
            <Paper className={classes.paper&&classes.root}>
                <Avatar src={`${fakeImgUrl[randomIndex].url}`}></Avatar>
                <Typography variant='subtitle1' align='center'>{(name).toUpperCase()}</Typography>
                <Typography variant='caption'>{body}</Typography>
            </Paper>

        </Grid>
    )
}

export default Comments;
