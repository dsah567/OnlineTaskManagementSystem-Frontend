import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
import { NavLink,Link,Outlet,useLoaderData, redirect} from 'react-router-dom'
import axios from 'axios'

function Header() {
    const {user,setUser } = useContext(UserContext)
    if(!user){
        setUser(useLoaderData())
        console.log("Header",user);
    }
    function toggleDropdown() {
        const dropdownContent = document.getElementById("dropdownContent");
        dropdownContent.classList.toggle("hidden");
    }  
    const logout=async ()=>{
        await axios.post("/api/v1/users/logout")
                .then((res)=>console.log("Header",res))
                .catch((err)=>console.log(err))
                setUser(null)
                window.location.href="/"
        }

    return (
        <div>
        <nav className="bg-gray-800 p-4 flex justify-between items-center shadow sticky z-50 top-0">
            <div class="dropdown ">
                <button onClick={toggleDropdown} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center sm:hidden ">
                    <span className="mr-2">Options</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 8.586L17.414 6 10 13.414 2.586 6 0 8.586 10 18z"/></svg>
                </button>
                <ul id="dropdownContent" className="hidden sm:flex sm:space-x-4">
                    <li>
                    <NavLink to="/" className={({ isActive }) =>` ${ isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300`}>
                                            Home </NavLink>
                    </li>
                    {user && 
                    <>
                    <li>
                    <NavLink to="/profile" className={({ isActive }) =>` ${ isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300 `} >Profile</NavLink>
                    </li> 
                    <li>
                    <NavLink to="/listtask" className={({ isActive }) =>` ${ isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300`} >List Task</NavLink>
                    </li>
                    <li>
                    <NavLink to="/createtask" className={({ isActive }) =>`${ isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300 `} >Create Task</NavLink>
                    </li>
                    </>
                    }
                </ul>
                </div>

                <div>
                    {user ? (
                        <button onClick={logout} className="text-white hover:text-gray-300">Logout</button>
                    ) : (
                    <>
                        <NavLink to="/login" className={({ isActive }) =>`${ isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300 `} >Login</NavLink>
                        <span className="text-white mx-2">|</span>
                        <NavLink to="/signup" className={({ isActive }) =>`${ isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300`} >Signup</NavLink>
                    </>
                    )}
                </div>

        </nav>


        <div className=" bg-gradient-to-br from-purple-500 to-pink-500 h-screen">
                <Outlet/>
        </div>


        </div>
    )
}

export default Header
