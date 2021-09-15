import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'


function Result(){
    const [ gitData, setGitData ] = useState(null);

    useEffect(()=>{
        getData();
    
    async function getData(){
        const response = await axios.get(`https://api.github.com/users/${username}/repos`)
        const data = await response.json();
        setGitData(data)
    }
}, []);

    return(<>
        <div>
    <h1>Game of Thrones Books</h1>

    {/* display books from the API */}
    {gitData && (
      <div className="data">

        {/* loop over the books */}
        {gitData.map((data, index) => (
          <div key={index}>
            <h2>{data.full_name}</h2>
          </div>
        ))}

      </div>
    )}
  </div>
    </>)
}


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

 export default Result;