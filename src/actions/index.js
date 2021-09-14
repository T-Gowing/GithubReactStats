import axios from 'axios';
import Result from '../components/Result'

export const fetchGit = async (username) => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        console.log(data)
        Result(data);
    } catch(err) {
        if (data.status === 404) { throw Error('That\'s not a valid username!') }
        throw new Error(err.message)
    }
}