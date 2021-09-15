import axios from 'axios';
import Result from '../components/Result'
import React from 'react';

export const fetchGit = async (username) => {
   
    try {
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        console.log('git data fetched')
        //Result(data)
    } catch(err) {
        if (data.status === 404) { throw Error('That\'s not a valid username!') }
        throw new Error(err.message)
    }
}

// const getGitHubUserWithAxios = async () => {
//     const response = await axios.get(gitHubUrl);
//     setUserData(response.data);
// };

// export default getGitHubUserWithAxios;

