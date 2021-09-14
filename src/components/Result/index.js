import React from 'react'

function Result(data){
   if(data){
       
       return (<ul>
        {data.map(repo => (
                <li key={repo.id}>{repo.id.full_name}</li>))} 
    </ul>)
   }
    else { console.log('no data! ')}
}
export default Result;