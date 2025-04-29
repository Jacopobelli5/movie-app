import React from 'react'
import MovieCard from '../components/MovieCard'
import {useState} from 'react'

export const Home = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const movies = [
        {id:1, title:"john wick", release_date:"2007"},
        {id:2, title:"john wick 2", release_date:"2010"},
        {id:3, title:"dune", release_date:"2020"}

    ]

    const handleSearch = (e) =>{
        //preventing default behaviour so it wont reload the page
        e.preventDefault();
        setSearchQuery("")
    }

  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
            <input 
            type="text" 
            placeholder='search for movies' 
            className='search-input'
            value={searchQuery}
            onChange={(e) => {setSearchQuery(e.target.value)}}
            />
            <button type='submit' className='search-button'>Search</button>
        </form>

        <div className='movies-grid'>
            {movies.map(movie => (
               movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} /> //key property added
                ))}
        </div>
    </div>
  )
}
