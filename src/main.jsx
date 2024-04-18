import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import { isLoginLoader } from './components/Utils'

import App from './App'

import Signup,{signupAction} from "./components/Signup"
import Login,{loginAction} from "./components/Login"
import Profile from './components/Profile'
import ListTask,{ListTaskLoader} from './components/ListTask'
import CreateTask,{createTaskAction} from './components/CreateTask'


const route = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>} loader={isLoginLoader}>
    <Route path="signup" element={<Signup/>} action={signupAction}/>
    <Route path="login" element={<Login/>} action={loginAction}/>
    <Route path="profile" element={<Profile/>} />
    <Route path="listtask" element={<ListTask/>} loader={ListTaskLoader} />
    <Route path="createtask" element={<CreateTask/>} action={createTaskAction}/>
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
