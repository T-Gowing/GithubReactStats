import React, {useState} from 'react'
import { fetchGit } from '../../actions';
import { default as Result } from '../Result';
import './style.css'

function SearchForm() {

    const [ gitUser, setGitUser ] = useState("")

    let handleSubmit = e => {
        e.preventDefault()
        fetchGit(gitUser)
        // Result(gitUser);
        Result();
    }

    let updateInput = e => {
        const input = e.target.value 
        setGitUser(input)
    }

    return (
        <>
        <form role="form" onChange={updateInput} onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input id="username" placeholder="Search..." type="text" />
            <input id="search" type="submit" value="Search" />
        </form>

        </>
    );
};

export default SearchForm;