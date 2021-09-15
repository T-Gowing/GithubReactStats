import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'

const gitHubUrl = "https://api.github.com/users/t-gowing/repos";

function Result() {
  const [userData, setUserData] = useState([{}]);

  useEffect(() => {
    getGitHubUserWithAxios();
  }, []);

  const getGitHubUserWithAxios = async () => {
    const response = await axios.get(gitHubUrl);
    setUserData(response.data);
  };
  
  let filteredData = userData.map(data => data.full_name)
  console.log("this is " +filteredData)

    console.log(userData.length)
    return (
      <section>
            <div className='userinfo'>
                <h2>GitHub User Data</h2>
                <div>
                    <ul>{userData.map(d =>
                        <li key={d.id}>{d.name}
                            <ul>
                                <li>There are {d.stargazers_count} stargazers</li>
                                <li>There are {d.watchers_count} watchers</li>
                                <li>There are {d.forks_count} forks</li>
                            </ul>
                        </li>)}
                    </ul>
                    <div>
                    <img src={userData.avatar_url}></img>
                    <h5>Username: {userData.login}</h5>
                    <h5>Public Repos: {userData.public_repos}</h5> 
                    </div>
                </div>
            </div>
      </section>
    )
  };




export default Result;






// function Result(){
//     const [ gitData, setGitData ] = useState(null);

//     useEffect(()=>{
//         getData();
    
//     async function getData(){
//         const response = await axios.get(`https://api.github.com/users/${username}/repos`)
//         const data = await response.json();
//         setGitData(data)
//     }
// }, []);

//     return(<>
//         <div>
//     <h1>Game of Thrones Books</h1>

//     {/* display books from the API */}
//     {gitData && (
//       <div className="data">

//         {/* loop over the books */}
//         {gitData.map((data, index) => (
//           <div key={index}>
//             <h2>{data.full_name}</h2>
//           </div>
//         ))}

//       </div>
//     )}
//   </div>
//     </>)
// }


// const Result = (username) => {
//     const [ data, setData ] = useState();

//     useEffect(() => {
//         async function getData() {
//             try {
//                 let { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
//                 setData(data);
//             } catch (err) {
//                 console.warn(err);
//                 setData({name: 'repo name'})
//             }
//         }
//         getData()
//         return()=>{console.log('cleaned')}
//     }, [])
//     return (
//         <>
//         { data ?
//             <>  
//             <p>search for repos</p>
//             <p>{data[0]}</p>
//             </>
//         : <h2>Search Above for Repos!</h2> }
//         </>
//     )
// }

//  export default Result;