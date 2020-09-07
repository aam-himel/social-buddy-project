import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Paper, Button, makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => (
    {
        root: {
                   },
        paper: {
            padding: theme.spacing(4),
            textAlign:'center',
            height:200,
            margin:'0 0 10px 0'
        },
        textNone: {
            textDecoration:'none'
        }
    }
))


const Post = (props) => {
    const classes = useStyles();
    const {title, body, id } = props.post;
    return (
        <Grid item className={classes.root} xs={12} md={6} lg={4}>
        <Paper elevation={3} className={classes.paper} >
                <Typography variant='h6' component='h6' align='center' gutterBottom={true}> {(title).toUpperCase()} </Typography>
                <Typography variant="body2" component='p' align='center' gutterBottom={true}> {body} </Typography><br/>
                <Link to={`/post/${id}`} className={classes.textNone}>
                    <Button variant="contained" color='primary' >See more!</Button>
                </Link>
        </Paper>
        
        </Grid>
    )
}

export default Post;
