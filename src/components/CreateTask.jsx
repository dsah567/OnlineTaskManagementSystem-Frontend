import React from 'react'
import { Form,redirect } from 'react-router-dom'
import axios from 'axios';

const  createTaskAction= ( async({request})=>{
    let formData = await request.formData();
    let Redirect = null
    try{
        await  axios.post("/api/v1/task",{
            title:formData.get("title"),
        })
        .then((res)=>{console.log(res.data)
                        Redirect="/listtask"
                    }
            )
        .catch(function (error) {
            console.log("axios",error);
            Redirect="/listtask"
        });
        return redirect(Redirect)
    }
    catch(err){
        console.log(err);
        return redirect("/")
    }
     
})

function CreateTask() {
    return (
        <div className=" flex justify-center items-center h-screen  bg-gradient-to-br from-purple-500 to-pink-500">
            <Form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post">
                <lable >Enter the titile of Task:</lable>
                <input type='text' name="title" required 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
           
           <button type='submit'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >Submit</button>

            </Form>
        </div>
    )
}

export default CreateTask

export {createTaskAction}
