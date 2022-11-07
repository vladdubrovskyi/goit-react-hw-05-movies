import { Outlet, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

import {getMovieByName } from "components/api"



const Movies = () => {
    const [searchedMovies, setSearchedMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    
    const handleSubmit = value => {
        setSearchParams(value !== "" ? {query : value} : {})
    }

    const query = searchParams.get("query") ?? "";
    
    
    useEffect(() => {
        if (!query) { return }
        async function GetMoviesName() {
            try {
                const films = await getMovieByName(query)
                setSearchedMovies(films)
                
            } catch (error) {console.log(error)}
        }
        GetMoviesName ()
     }, [query])


   

    


    return (<main>
        <form>
            <input type="text" />
            <button>Search</button>
        </form>
        <Outlet/>

    </main>)
}

export default Movies