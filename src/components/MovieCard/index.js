import { useEffect, useState } from 'react';
import api from '../../api/api';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material'

const MovieCard = () => {
    const imgURL = process.env.IMAGE_URL

    const [movieData, setMovieData] = useState([])

    const getData = async () => {
        const resp = await api.get(`/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`)
        setMovieData(resp.data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '3rem' }}>
                {
                    movieData.map((movie) => {
                        const { title, overview, backdrop_path } = movie
                        return (
                            <div style={{ width: 230, height: 130, margin: '15px 5px 15px 0' }}>
                                <img style={{ width: '100%', height: '100%',  borderRadius: 6 }} src={imgURL + backdrop_path} alt={title} />
                            </div>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default MovieCard
