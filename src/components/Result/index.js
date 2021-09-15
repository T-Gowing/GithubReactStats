import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'

const gitHubUrl = "https://api.github.com/users/cerise-at/repos";

function Result() {
  const [userData, setUserData] = useState([{}]);

  useEffect(() => {
    getGitHubUserWithAxios();
  }, []);

  const getGitHubUserWithAxios = async () => {
    const response = await axios.get(gitHubUrl);
    setUserData(response.data);
    await console.log(userData)
  };
  
  

  console.log(`This user data is ${userData}`)
    console.log(`This user has ${userData.length} repos`)
    return (
      <section>
            <div className='userinfo'>
                <h2>GitHub User Data</h2>
                <img src={userData.avatar_url}></img>
                    <h5>Username: {userData[0].login}</h5>
                    <h5>Public Repos: {userData.public_repos}</h5>  
                    
                    <div>{userData.map((d, myKey) =>
                    <table key={myKey} >
                        <thead><tr><th>{d.name}</th></tr></thead>
                        <tbody>
                            <tr>
                                <td>Stargazers</td>
                                <td>{d.stargazers_count}</td>
                            </tr>
                            <tr>
                                <td>Watchers</td>
                                <td>{d.watchers_count}</td>
                            </tr>
                            <tr>
                                <td>Forks</td>
                                <td>{d.forks_count}</td>
                            </tr>
                        </tbody>
                    </table>
                    )}
                    </div>
                    <div>

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
//         return()=>{('cleaned')}
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