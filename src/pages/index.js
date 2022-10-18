import Header from '../components/Header/index';
import MovieCard from '../components/MovieCard/index';
import Banner from '../components/Banner/index';
import { Box } from '@mui/material';
import styled from 'styled-components';

const GenreTitle = styled.p`
    margin-left: 3rem; 
    margin-top: 15px; 
    color: #FFF; 
    font-size: 1.8rem; 
    font-weight: 900
`

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Box style={{ width: 10000 }}>
                <GenreTitle >
                    Week Trending
                </GenreTitle>
                <MovieCard />
                <GenreTitle>
                    Comedy
                </GenreTitle>
                <MovieCard />
                <GenreTitle>
                    Horror
                </GenreTitle>
                <MovieCard />
                <GenreTitle>
                    Thriller
                </GenreTitle>
                <MovieCard />
                <GenreTitle>
                    Drama
                </GenreTitle>
                <MovieCard />
            </Box>
        </>
    )
}

export default Home