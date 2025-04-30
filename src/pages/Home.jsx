import React from 'react'
import MovieCard from '../components/MovieCard'
import "../css/Home.css"
import {useState, useEffect} from 'react'
import { getPopularMovies, searchMovies } from '../services/api'

export const Home = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    // states to state the loading state and the possible error from api calls
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    // using useEffect to prevent default behaviour for api call function
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch(err) {
                console.log(err)
                setError("Failed to load movies")
            } finally{
                setLoading(false)
            }
        }
        loadPopularMovies();
    }, [])
    
    const handleSearch = async (e) =>{
        //preventing default behaviour so it wont reload the page
        e.preventDefault();
        if(!searchQuery.trim()){return}
        if(loading) return

        setLoading(true)
        try {
            const searchResult = await searchMovies(searchQuery)
            setMovies(searchResult)
            setError(null)
        } catch (error) {
            setError("Failed to search movies")
        } finally{
            setLoading(false)
            setSearchQuery("")
        }
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
        {/* error and loading rendering */}
        {error && <div className='error-message'>{error}</div>}
        {loading ? <div className='loading'>Loading...</div> :
        <div className='movies-grid'>
            {movies.map(movie => (
               movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} /> //key property added
                ))}
        </div>
        }
    </div>
  )
}
