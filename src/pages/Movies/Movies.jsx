import { Outlet, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import SearchBar from "components/SearchBar/SearchBar"
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
                console.log(films)
            } catch (error) {console.log(error)}
        }
        GetMoviesName ()
     }, [searchParams])


   

    


    return (<main>
        <SearchBar onChange={handleSubmit }  />
        <Outlet/>

    </main>)
}

export default Movies