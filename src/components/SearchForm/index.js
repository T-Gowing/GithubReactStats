import React, {useState} from 'react'
import { fetchGit } from '../../actions';

function SearchForm() {

    const [ gitUser, setGitUser ] = useState("")

    let handleSubmit = e => {
        e.preventDefault()
        fetchGit(gitUser);
    }

    let updateInput = e => {
        const input = e.target.value 
        setGitUser(input)
    }

    return (
        <form role="form" onChange={updateInput} onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input id="username" type="text" />
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;