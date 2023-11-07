import React from 'react'
import useFetch from './hook/useFetch'

function Contact() {
    let obj={name:"utsav",add:'delhi',msg:'hello i am form delhi'}
    let url='https://jsonplaceholder.typicode.com/posts'
    let method="POST"
    let {data}= useFetch(url,method,obj)
    console.log('hello i am data',data)
  return (
    <div>Contact page</div>
  )
}

export default Contact