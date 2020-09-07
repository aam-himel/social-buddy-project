import React, { useContext } from 'react'
import Post from '../Post/Post'
import { PostsContext } from '../../App'
import {Grid} from '@material-ui/core';
import TestGrid from '../TestGrid';

const Posts = () => {
    
    const posts = useContext(PostsContext);
    return (
        <Grid container spacing={3} direction="row" justify='center' alignItems="center" alignContent="center" >
            
            {
                posts.map(post => <Post post={post} key={post.id} comment={true}/>)
            }
        </Grid>
    )
}

export default Posts;
