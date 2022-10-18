import { useEffect, useState } from 'react';
import api from '../../api/api';
import styled from 'styled-components'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Genres } from '../../config/genres';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 3rem;
`
const CardInfo = styled.div`
    width: 100%;
    height: 125px;
    background: rgb(20,20,20);
    display: none;
    border-radius: 0 0 6px 6px;
    padding: 7px;
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
    font-size: 15px;
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
    font-size: 15px;
    color: #53D853;
`
const MovieGenre = styled.p`
    font-size: 15px;
    color: #fff;
`
const DotDiv = styled.div`
    width: 10px;
    height: 10px;
    color: #FFFFFF80;
    font-size: 35px;
    margin: -25px 4px;
`

const MovieCard = ({endpoint}) => {
    const imgURL = process.env.IMAGE_URL

    const [movieData, setMovieData] = useState([])

    const getData = async () => {
        const resp = await api.get(endpoint)
        setMovieData(resp.data.results)
        console.log(resp)
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

    return (
        <>
            <Wrapper>
                {
                    movieData.map((movie, index) => {
                        const { title, backdrop_path, vote_average, genre_ids } = movie
                        return (
                            <Card key={index}>
                                <CardImg src={imgURL + backdrop_path} alt={title} />
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
                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            {
                                                genre_ids.slice(0, 3).map((genreId, index) => {
                                                    const isLast = index === genre_ids.length - 1
                                                    return (
                                                        <>
                                                            <MovieGenre>
                                                                {getGenreById(genreId)}
                                                            </MovieGenre>
                                                            {
                                                                !isLast && <DotDiv>.</DotDiv>
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
