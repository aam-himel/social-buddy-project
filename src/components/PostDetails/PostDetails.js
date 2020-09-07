import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import { PostsContext } from '../../App';
import Post from '../Post/Post';
import Comments from '../Comments/Comments';
import { Grid } from '@material-ui/core';

const PostDetails = () => {

    const {postId} = useParams();
    const posts = useContext(PostsContext);

    const [comments, setComments] = useState([]);

    
    const intPostId = parseInt(postId);

    // Here I should convert the string to number because the params gives me only string
    console.log(typeof(intPostId));
    const post = posts.find(p => p.id === intPostId);
    console.log(post);


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${intPostId}/comments`;
        fetch(url)
        .then(res => res.json())
        .then(data => 
            setComments(data)    
        );
    }, [intPostId])


    // console.log(comments);
    return (
        <div>
           
           <Grid container  direction='column' justify='center' alignItems='center' alignContent='center' spacing={2}>
           <Post post={post}/>
            {
                comments.map(c => <Comments comment={c} key={c.id}/>)
            }
           </Grid>
        </div>
    )
}

export default PostDetails
