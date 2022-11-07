import { useState } from "react"

const SearchBar = ({ onChange }) => {

const [name, setName] = useState("")

    return (<form onSubmit={ onChange(name)}>
        <input type="text" onChange = {e => {setName(e.target.value)}} />
        <button type="submit">Search</button>
</form>)
}

export default SearchBar