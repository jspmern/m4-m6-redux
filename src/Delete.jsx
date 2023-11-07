import React from 'react'
import useFetch from './hook/useFetch'

function Delete() {
    let url='https://jsonplaceholder.typicode.com/posts/1'
    let method="DELETE"
    let {data}=useFetch(url,method)
    console.log('hello i am delte',data)
  return (
    <div>Delete</div>
  )
}

export default Delete