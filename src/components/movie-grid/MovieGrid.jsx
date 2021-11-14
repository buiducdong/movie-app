import React, { useEffect, useState } from 'react'
import './movie-grid.scss'
import MovieCard from '../movie-card/MovieCard'
import { useParams } from 'react-router'
import tmdbApi, { category, movieType, tvType } from '../../api/tmbdApi'
import { OutlineButton } from '../button/Button'

const MovieGrid = props => {

  const [item, setItem] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  const {keyword} = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch(props.category) {
          case category.movie: 
            response = await tmdbApi.getMoviesList(movieType.upcoming, {params})
            break;
          default: 
            response = await tmdbApi.getTvList(tvType.popular, {params})
          }
        } else {
          const params ={
            query: keyword
          }
          response = await tmdbApi.search(props.category, {params})
        }
        setItem(response.results)
        console.log({responseGrid : response})
        setTotalPage(response.total_pages)
      }
      getList();
  }, [props.category, keyword])

  const loadMore = async () => {
    let response = null;
      if (keyword === undefined) {
        const params = {
          page: page + 1
        };
        switch(props.category) {
          case category.movie: 
            response = await tmdbApi.getMoviesList(movieType.upcoming, {params})
            break;
          default: 
            response = await tmdbApi.getTvList(tvType.popular, {params})
          }
        } else {
          const params ={
            page: page + 1,
            query: keyword
          }
          response = await tmdbApi.search(props.category, {params})
        }
        setItem([...item, ...response.results])
        setPage(page + 1)
      }
  
  return (
    <>
      <div className='movie-grid'>
        {
          item.map((item, i) => (
            <MovieCard category={props.category} item={item} key={i}/>
          ))
        }
      </div>
      {
        page < totalPage ? (
          <div className="movie-grid__loadmore">
            <OutlineButton className='small' onClick={loadMore}>
              Load More
            </OutlineButton>
          </div>
        ) : null
      }
    </>
  )
}


export default MovieGrid
