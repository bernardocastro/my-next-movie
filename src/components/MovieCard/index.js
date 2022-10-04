import { useEffect, useState } from 'react';
import api from '../../api/api';
import styled from 'styled-components';

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
                                    oi
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
