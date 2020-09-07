import React from 'react';
import { Typography } from '@material-ui/core';


const PageTitle = ({title}) => {
    return (
        <div>
            <Typography variant="h1" component="h1" gutterBottom={true} align='center'> {title} </Typography>
        </div>
    )
}

export default PageTitle;
