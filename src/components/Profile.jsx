import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user } = useContext(UserContext)
    console.log(user);
    return (
        <div >
        {user &&<div>
            <div className="flex justify-center items-center h-screen ">
            <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="block text-gray-700 text-2xl font-bold mb-2">Department Name : {user.name}</label>
            <label className="block text-gray-700 text-2xl font-bold mb-2">Email : {user.email}</label>
            <label className="block text-gray-700 text-2xl font-bold mb-2">Username : {user.username}</label>
            </div>
            </div>
        </div> 
        }
        </div>
    )
}

export default Profile
