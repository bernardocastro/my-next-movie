import Header from '../components/Header/index';
import MovieCard from '../components/MovieCard/index';
import Banner from '../components/Banner/index';
import { Box } from '@mui/material';
import styled from 'styled-components';

const GenreTitle = styled.p`
    margin-left: 3rem; 
    margin-top: 30px; 
    color: #FFF; 
    font-size: 1.8rem; 
    font-weight: 900;
`

const Home = () => {
    return (
        <div style={{overflowX: 'hidden'}}>
            <Header />
            <Banner />
            <Box style={{ width: 10000 }}>
                <GenreTitle >
                    Week Trending
                </GenreTitle>
                <MovieCard endpoint={`/trending/movie/week?api_key=${process.env.TMDB_KEY}`} />
                <GenreTitle>
                    Comedy
                </GenreTitle>
                <MovieCard endpoint={`/discover/movie?api_key=${process.env.TMDB_KEY}&with_genres=35`} />
                <GenreTitle>
                    Horror
                </GenreTitle>
                <MovieCard endpoint={`/discover/movie?api_key=${process.env.TMDB_KEY}&with_genres=27`} />
                <GenreTitle>
                    Thriller
                </GenreTitle>
                <MovieCard endpoint={`/discover/movie?api_key=${process.env.TMDB_KEY}&with_genres=53`} />
                <GenreTitle>
                    Crime
                </GenreTitle>
                <MovieCard endpoint={`/discover/movie?api_key=${process.env.TMDB_KEY}&with_genres=80`} />
            </Box>
        </div>
    )
}

export default Home