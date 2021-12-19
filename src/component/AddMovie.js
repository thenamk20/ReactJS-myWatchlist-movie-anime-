import React from 'react'
import { useState , useContext} from 'react'
import ResultCard from './ResultCard'
import SubHeader from './SubHeader'
import { DetailContext } from './DetailContext'
import MovieDetail from './DetailCard/MovieDetail'

function AddMovie() {

    const [state, ] = useContext(DetailContext)

    const [query, setQuery] = useState('')

    const [results, setResults] = useState([])

    const onChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)

        const urlAPI = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`

        fetch(urlAPI)
            .then(response => response.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results)
                }
                else {
                    setResults([])
                }
            })
        console.log(e.target.value)
    }

    return (
        <>  
            <SubHeader type ='movie' movie></SubHeader>
            <div className="add-page">
                <div className="container">
                    <div className="add-content">
                        {/*input */}
                        <div className="input-wrapper">
                            <input
                                type='text'
                                value={query}
                                placeholder="search a movie..."
                                onChange={onChange}
                            />
                        </div>

                        <div>
                            {results.map((movie) => (
                                <ResultCard film={movie} type='movie' key = {movie.id}></ResultCard>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            {state.mvDetail && (<MovieDetail movie = {state.movie}></MovieDetail>)}
        </>

    )
}

export default AddMovie
