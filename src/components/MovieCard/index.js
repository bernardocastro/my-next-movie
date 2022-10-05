import { useEffect, useState } from 'react';
import api from '../../api/api';
import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { createTheme } from '@mui/material/styles';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 3rem;
`
const CardInfo = styled.div`
    width: 100%;
    height: 100px;
    background: rgb(20,20,20);
    display: none;
    border-radius: 0 0 6px 6px;
`
const Card = styled.div`
    width: 230px;
    height: 130px;
    margin: 15px 5px 15px 0;
    transition: transform .2s;
        &:hover {
            transform: scale(1.3);
            cursor: pointer;
        };
        &:hover ${CardInfo} {
            display: flex;
        };
`
const CardImg = styled.img`
    width: 100%; 
    height: 100%; 
    border-radius: 6px;
        &:hover {
            border-radius: 6px 6px 0 0
        }
        
`
const PlayButton = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border-color: transparent;
`
const ActionButtons = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border-color: #E0E0E0;
    background: transparent;
`

const MovieCard = () => {
    const imgURL = process.env.NEXT_PUBLIC_IMAGE_URL

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
            <Wrapper>
                {
                    movieData.map((movie) => {
                        const { title, overview, backdrop_path } = movie
                        return (
                            <Card>
                                <CardImg src={imgURL + backdrop_path} alt={title} />
                                <CardInfo>
                                    <PlayButton>
                                        <PlayArrowIcon />
                                    </PlayButton>
                                    <ActionButtons>
                                        <AddIcon style={{color: '#fff'}} />
                                    </ActionButtons>
                                    <ActionButtons>
                                        <ThumbUpOutlinedIcon style={{color: '#fff'}} />
                                    </ActionButtons>
                                    <ActionButtons>
                                        <ThumbDownOutlinedIcon style={{color: '#fff'}} />
                                    </ActionButtons>
                                    <ActionButtons>
                                        <ExpandMoreOutlinedIcon style={{color: '#fff'}} />
                                    </ActionButtons>
                                </CardInfo>
                            </Card>
                        )
                    })
                }
            </Wrapper>
        </>
    )
}

export default MovieCard
