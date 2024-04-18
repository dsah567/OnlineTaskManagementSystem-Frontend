import React from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom';

export async function ListTaskLoader(){ 
    let value
    await axios.get("/api/v1/task")
    .then((res)=>{
        value= res.data.data
    })
    .catch((error)=>console.log(error))
    return value
}

 function  ListTask() {
    let value = useLoaderData()
    console.log("List task",value);
    
    
    return (
        <div className=" flex justify-center items-center h-screen  bg-gradient-to-br from-purple-500 to-pink-500">

        <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">{value && <div>
            {value.map((ele)=><div >{ele.title}</div >)}
            </div>}
            </div>
        </div>
    )
}

export default ListTask
