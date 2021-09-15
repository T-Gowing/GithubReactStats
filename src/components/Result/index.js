import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'

const gitHubUrl = "https://api.github.com/users/t-gowing";

function Result() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithAxios();
  }, []);


  const getGitHubUserWithAxios = async () => {
    const response = await axios.get(gitHubUrl);
    setUserData(response.data);
  };

    console.log(userData)
    return (
      <div>
        <header>
          <h2>GitHub User Data</h2>
        </header>
        <div>
          <h5>{userData.login}</h5>
          <h5>{userData.public_repos}</h5>
        </div>
      </div>
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