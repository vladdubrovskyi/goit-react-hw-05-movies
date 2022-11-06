import { NavLink } from "react-router-dom"
const TrendingList = ({ trends }) => {
    return   <ul>
        {trends.map(({title, id}) => {
            return <li key={id}>
                <NavLink to={`/movies/${id}`}>{title}
                </NavLink>
            </li>
        })}
    </ul>
}

export default TrendingList 