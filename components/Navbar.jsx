import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { userContext } from './context/context';
import { useContext } from 'react';
import Link from 'next/link';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Battery50Icon from '@mui/icons-material/Battery50';

const Navbar = () => {
   const {userName , darkTheme , setDarkTheme , enter , setEnter } = useContext(userContext)
   
  return (
    
      <Grid sx={styles.container} container>
          <Grid sx={{...styles.item}} item md={3} sm={3} xs={12}>
                <Box sx={styles.user}>
                    <Typography sx={{fontWeight:'bold'}} color={'#fff'}>
                        {userName[0].toUpperCase()}
                    </Typography>
                </Box>
          </Grid>
          <Grid sx={{...styles.item, justifyContent:'space-around'}} item md={6} sm={6} xs={12}>
                 <Box sx={styles.navLink}>
                   <Typography fontWeight="bold"  fontSize={16}  color={'#fff'}>
                        <Link href='/'>Home</Link>
                   </Typography>
                 </Box>
                 <Box sx={styles.navLink}>
                   <Typography fontWeight="bold" fontSize={16}  color={'#fff'}>
                        <Link href='/'>Mixer</Link>
                   </Typography>
                 </Box>
                 <Box sx={styles.navLink}>
                   <Typography fontWeight="bold" fontSize={16}  color={'#fff'}>
                        <Link href='/'>Community</Link>
                   </Typography>
                 </Box>
                 <Box sx={styles.navLink}>
                   <Typography fontWeight="bold" fontSize={16}  color={'#fff'}>
                        <Link href='/'>Game Pass</Link>
                   </Typography>
                 </Box>
                 <Box sx={styles.navLink}>
                   <Typography fontWeight="bold" fontSize={16}  color={'#fff'}>
                        <Link href='/'>Store</Link>
                   </Typography>
                 </Box>
          </Grid>
          <Grid sx={{...styles.item ,justifyContent:'flex-end'}} item md={3} sm={3} xs={12}>
                <Box>
                   <HeadsetMicIcon sx={{color:'#FFF'}}/>
                   <Battery50Icon sx={{color:'#FFF'}}/>
                </Box>
                 <Typography variant='h3' fontSize={13} color={'#fff'}>
                  {'15:40'}
                 </Typography>
          </Grid>
      </Grid>
   
  )
}

export default Navbar


const styles = {
  container:{
    // border:'1px solid red',
    height:'100px' ,
    background:'rgba(0,0,0,0.2)',
    padding: '0 100px',

  } ,
  user:{
    borderRadius:'60px',
    height:'60px',
    width:'60px',
    display:'flex', 
    justifyContent:'center',
    alignItems:'center',
    background:'#002b47'
  } ,
  item:{
    // border:'1px solid #fff' ,
    height:'100%',
    display:'flex', 
    alignItems:'center',
    // padding:2
  }, 
  navLink:{
      // border:'1px solid #fff' ,
      padding:'0 10px' ,
      cursor:'pointer'
  }
}


