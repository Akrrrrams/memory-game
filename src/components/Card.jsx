import { Box } from '@mui/material';
import React from 'react';
import { orange } from '@mui/material/colors';

const Card = () => {
  return (
    <Box 
    height={100}
     width={100}
      bgcolor={"white"}
       sx={{
        '&:hover':{
            bgcolor: orange[200],
        },
        }} 
        >
            <img
        src={"/assets/4.webp"}
        alt={"card-1"}
        loading="lazy"
         height="100%" />
        </Box>
  )
}

export default Card