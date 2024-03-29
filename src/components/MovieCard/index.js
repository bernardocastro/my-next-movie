import { useEffect, useState } from 'react';
import api from '../../api/api';
import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Genres } from '../../config/genres';
import { Dialog } from '@mui/material';
import MovieDialog from '../MovieDialog';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 3rem;
`
const CardInfo = styled.div`
    width: 100%;
    height: auto;
    background: rgb(20,20,20);
    display: none;
    border-radius: 0 0 6px 6px;
    padding: 7px;
`
const Card = styled.div`
    width: 240px;
    height: 130px;
    margin: 15px 5px 15px 0;
    transition: transform .2s;
        &:hover {
            transform: scale(1.3);
            cursor: pointer;
        };
        &:hover ${CardInfo} {
            display: flex;
            flex-direction: column;
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
    margin: 3px;
        &:hover {
            cursor: pointer
        }
`
const ActionButtons = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #E0E0E0;
    background: transparent;
    margin: 3px;
        &:hover {
            cursor: pointer
        }
`
const MovieTitle = styled.p`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`
const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const DescriptionWrapper = styled.div`
    margin-left: 5px;
`
const MovieMatch = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: #53D853
`
const MovieGenre = styled.p`
    font-size: 13px;
    color: #fff;
`
const DotDiv = styled.div`
    width: 5px;
    height: 5px;
    color: #FFFFFF80;
    font-size: 35px;
    margin: 7px 7px;
    border: 1px solid #FFFFF80;
    background: #FFFFFF80;
    border-radius: 50%;
`

const MovieCard = ({ endpoint }) => {

    const [movieData, setMovieData] = useState([])
    const [open, setOpen] = useState(false)

    const getData = async () => {
        const resp = await api.get(endpoint)
        setMovieData(resp.data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    const getGenreById = (genreId) => {
        const showGenre = ''
        let currentGenre = Genres.filter(genre => genre.id === genreId)
        currentGenre.map((genre) => {
            showGenre = genre.name
            return showGenre
        })
        return showGenre
    }

    const handleOpenDialog = () => {
        setOpen(true)
    }

    const handleCloseDialog = () => {
        setOpen(false)
    }

    return (
        <>
            <Wrapper>
                {
                    movieData.map((movie, index) => {
                        const { title, backdrop_path, vote_average, genre_ids, overview } = movie
                        return (
                            <Card key={index}>
                                <CardImg src={`${process.env.NEXT_PUBLIC_IMAGE_URL}` + backdrop_path} alt={title} />
                                <CardInfo>
                                    <ButtonsWrapper>
                                        <div>
                                            <PlayButton>
                                                <PlayArrowIcon />
                                            </PlayButton>
                                            <ActionButtons>
                                                <AddIcon style={{ color: '#fff' }} />
                                            </ActionButtons>
                                            <ActionButtons>
                                                <ThumbUpOutlinedIcon style={{ color: '#fff' }} />
                                            </ActionButtons>
                                            <ActionButtons>
                                                <ThumbDownOutlinedIcon style={{ color: '#fff' }} />
                                            </ActionButtons>
                                        </div>
                                        <div>
                                            <ActionButtons>
                                                <ExpandMoreOutlinedIcon style={{ color: '#fff' }} />
                                            </ActionButtons>
                                            <MovieDialog
                                                open={open}
                                                handleCloseDialog={handleCloseDialog}
                                                movieBg={backdrop_path}
                                                title={title}
                                                overview={overview}

                                            />
                                        </div>
                                    </ButtonsWrapper>
                                    <DescriptionWrapper>
                                        <div>
                                            <MovieTitle>
                                                {title}
                                            </MovieTitle>
                                        </div>
                                        <div>
                                            <MovieMatch>
                                                {Math.round(vote_average * 100) / 10}% match
                                            </MovieMatch>
                                        </div>
                                        <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                                            {
                                                genre_ids.slice(0, 3).map((genreId, index) => {
                                                    const isLast = index === genre_ids.length - 1
                                                    return (
                                                        <>
                                                            <MovieGenre>
                                                                {getGenreById(genreId)}
                                                            </MovieGenre>
                                                            {
                                                                !isLast && <DotDiv />
                                                            }
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>

                                    </DescriptionWrapper>
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
