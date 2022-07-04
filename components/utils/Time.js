import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const Time = () => {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    // my useEffect will render data has soon has the page loads
    useEffect(() => {

        // every second this should run 
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
            const minutes = time.getMinutes();
            const ampm = hour >= 12 ? 'pm' : 'am'

            setTime((hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ampm)
            setDate(days[day] + ', ' + date + ' ' + months[month])

        }, 1000);
    }, [])


    return (
        <Box sx={{ ...styles.timeContainer }}>
            <Typography variant="h4" fontSize={16} fontWeight={'bold'}>
                {time}
            </Typography>

            <Typography color={'green'} variant="h4" fontSize={12} fontWeight={'light'}>
                {date}
            </Typography>
        </Box>
    )
}


export default Time

const styles = {
    timeContainer: {
        display: 'flex',
        // alignItems: 'center',
        height: '70px',
        // border: '1px solid red',
        flexDirection: 'column',
        justifyContent:'flex-end',
        padding:'8px'
        // gap:2
    }

}