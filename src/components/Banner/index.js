import { useEffect, useState } from 'react';
import api from '../../api/api';
import { Button, Card, CardContent, Typography, Box, ListItemSecondaryAction, IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import styled from 'styled-components';

const BannerImg = styled.img`
    width: 100%;
    height: 100%; 
    position: relative;
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))
`

const Banner = () => {
    const imgURL = process.env.NEXT_PUBLIC_IMAGE_URL

    const [movieData, setMovieData] = useState([])
    const [randomMovie, setRandomMovie] = useState({})

    const getData = async () => {
        const resp = await api.get(`/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`)
        setMovieData(resp.data.results)
        setRandomMovie(resp.data.results[Math.floor(Math.random() * movieData.length)])
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div style={{ width: '100%', height: '67vh' }} >
                <BannerImg
                    src={imgURL + randomMovie.backdrop_path}
                    alt={randomMovie.title}
                />
                <div style={{ marginLeft: '3.5rem', position: 'absolute', top: '25%', width: 400 }}>
                    <Typography style={{ fontWeight: 600, fontSize: 40, color: '#fff', textShadow: '2px 2px 4px rgb(0 0 0 / 45%)' }}>{randomMovie.title}</Typography>
                    <div style={{ width: 500, height: 90, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        <Typography style={{ fontWeight: 500, fontSize: 20, color: '#fff', textShadow: '2px 2px 4px rgb(0 0 0 / 45%)' }}>{randomMovie.overview}</Typography>
                    </div>
                    <div>
                        <IconButton style={{ width: 120, height: 42, color: '#000', background: '#fff', borderRadius: '0.3rem', margin: '12px 12px 12px 0' }}>
                            <PlayArrowIcon style={{ marginRight: 10 }} />
                            <Typography style={{ fontWeight: 700, fontSize: 20 }}>
                                Play
                            </Typography>
                        </IconButton>
                        <IconButton style={{ width: 150, height: 42, color: '#fff', background: 'rgba(109, 109, 109, .7)', borderRadius: '0.3rem' }}>
                            <InfoOutlinedIcon style={{ marginRight: 10 }} />
                            <Typography style={{ fontWeight: 700, fontSize: 20 }}>
                                More info
                            </Typography>
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
