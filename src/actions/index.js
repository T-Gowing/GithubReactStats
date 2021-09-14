import axios from 'axios';
import Result from '../components/Result'
import React, {useState} from 'react';

export const fetchGit = async (username) => {
    let [gitData, setGitData] = useState([])
    try {
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        let resultData = JSON.stringify(data)
        setGitData(resultData)
        Result(gitData);
    } catch(err) {
        if (data.status === 404) { throw Error('That\'s not a valid username!') }
        throw new Error(err.message)
    }
}