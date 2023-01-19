import { useEffect, useState } from 'react';
import api from '../../api/api';
import { IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import styled from 'styled-components';

const BannerImg = styled.img`
    width: 100%;
    height: 100%; 
    position: relative;
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))
`
const TextWrapper = styled.div`
    margin-left: 3.5rem; 
    position: absolute;
    top: 40%; 
    width: 400;
    @media (max-width: 768px) {
        position: relative;
        top: -40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 0.5rem;
      }
`
const Title = styled.p`
    font-weight: 600;
    font-size: 40px;
    color: #fff; 
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
    @media (max-width: 768px) {
        font-size: 25px;
      }
`
const OverviewWrapper = styled.div`
    width: 500px;
    height: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 768px) {
        width: 300px;
        height: 70px;
      }
`
const Overview = styled.p`
    font-weight: 500;
    font-size: 20px; 
    color: #fff; 
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
    @media (max-width: 768px) {
       font-size: 15px
      }
`



const Banner = () => {

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
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}` + randomMovie.backdrop_path}
                    alt={randomMovie.title}
                />
                <TextWrapper>
                    <Title>
                        {randomMovie.title}
                    </Title>
                    <OverviewWrapper>
                        <Overview>
                            {randomMovie.overview}
                        </Overview>
                    </OverviewWrapper>
                    <div>
                        <IconButton style={{ width: 120, height: 42, color: '#000', background: '#fff', borderRadius: '0.3rem', margin: '12px 12px 12px 0' }}>
                            <PlayArrowIcon style={{ marginRight: 10 }} />
                            <p style={{ fontWeight: 700, fontSize: 20 }}>
                                Play
                            </p>
                        </IconButton>
                        <IconButton style={{ width: 150, height: 42, color: '#fff', background: 'rgba(109, 109, 109, .7)', borderRadius: '0.3rem' }}>
                            <InfoOutlinedIcon style={{ marginRight: 10 }} />
                            <p style={{ fontWeight: 700, fontSize: 20 }}>
                                More info
                            </p>
                        </IconButton>
                    </div>
                </TextWrapper>
            </div>
        </>
    )
}

export default Banner
