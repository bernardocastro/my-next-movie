import Header from '../components/Header/index'
import MovieCard from '../components/MovieCard/index'
import Banner from '../components/Banner/index'
import { Box, Typography } from '@mui/material'

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Box style={{width: 10000, marginTop: 20}}>
                <Typography style={{marginLeft: '3rem', color: '#FFF', fontSize: '1.6rem', fontWeight: 900 }}>
                    Week Trending
                </Typography>
                <MovieCard />
            </Box>
        </>
    )
}

export default Home