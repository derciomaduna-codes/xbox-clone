import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';



const SectionHeader = ({title}) => {
  return (
   <Box sx={styles.container}>
       <Typography color={'white'} variant="h4" fontSize={20} fontWeight={'bold'}>{title}</Typography>
   </Box>
  )
}

export default SectionHeader


const styles = {
    container:{
        // border:'1px solid #fff',
        with:'100%',
        height:'70px',
        display:'flex',
        alignItems:'center',
        padding:'0 30px'
        
    },
    

}