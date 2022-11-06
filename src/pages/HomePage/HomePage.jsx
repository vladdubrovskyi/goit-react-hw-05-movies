import { getTrendingMovies } from "components/api"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

const HomePage = () => {
    const [trends, setTrends] = useState([])
    
    useEffect(() => {
       async function GetTrends () {
            try {
                const movies = await getTrendingMovies()
                setTrends(movies)
            } catch (error) { console.log(error) }
        }
        GetTrends()
    }, [])

    return (<ul>
        {trends.map(({title, id}) => {
            return <li key={id}>
                <NavLink to={`/movies/${id}`}>{title}
                </NavLink>
            </li>
        })}
    </ul>)
}

export default HomePage