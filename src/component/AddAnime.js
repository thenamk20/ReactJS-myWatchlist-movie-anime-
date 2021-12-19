import React from 'react'
import { useState , useContext} from 'react'
import ResultCard from './ResultCard'
import SubHeader from './SubHeader'
import { DetailContext } from './DetailContext'

import AnimeDetail from './DetailCard/AnimeDetail'

function AddAnime() {
    const [state, ] = useContext(DetailContext)

    const [query, setQuery] = useState('')

    const [results, setResults] = useState([])


    const onChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)

    }

    const onSubmit = (e) => {
        e.preventDefault()
        FetchAnime(query)
    }

    const FetchAnime = async (query) => {
        const urlAPI = `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=15`
        await fetch(urlAPI)
            .then(response => response.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results)
                }
                else {
                    setResults([])
                }
            })
    }


    return (
        <>
            <SubHeader type = 'anime' anime></SubHeader>
            <div className="add-page">
                <div className="container">
                    <div className="add-content">
                        {/*input */}
                        <div className="input-wrapper">
                            <form
                                onSubmit={onSubmit}
                            >
                                <input
                                    type='text'
                                    value={query}
                                    placeholder="search a anime..."
                                    onChange={onChange}

                                    required
                                />

                            </form>

                        </div>

                        <div>
                            {results.map((anime) => (
                                <ResultCard film={anime} type='anime' key = {anime.mal_id}></ResultCard>
                            ))}
                            {/* {results.map((anime)=> (
                                <li>{anime.title}</li>
                            ))} */}
                        </div>

                    </div>
                </div>
            </div>
            {state.aniDetail && (<AnimeDetail anime={state.anime}></AnimeDetail>)}
        </>

    )
    
}

export default AddAnime
