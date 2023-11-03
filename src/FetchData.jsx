import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHandler } from './Redux/action'

function FetchData() {
    //dispatch
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch( fetchHandler()) 
    },[])
      
     let x=useSelector((item)=>{
       return item
    })
    console.log('hello i am fetchData com',x)

  return (
    <div>FetchData</div>
  )
}

export default FetchData