import { useState } from 'react'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import './App.css'
import Login from './components/Login'
import Login1 from './components/Login1'

function AppLayout() {
  

  return (
    <>
     <div className=''>
     <Login/>
     </div>
    </>
  )
}

const appRouter = createBrowserRouter([

   {
    path:"/",
    element: <AppLayout/>
   },
   {
    path:"/Login1",
    element: <Login1/>
   },

]);

function App() {

  return (
    <>
        <RouterProvider router={appRouter}/>
        
    </>
  )
}

export default App
