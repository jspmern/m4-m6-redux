import React from 'react'
import useFetch from './hook/useFetch'

function CustomHook3() {
    let {data}= useFetch('https://jsonplaceholder.typicode.com/users')
   console.log('hii i am res from customhook2',data)
  return (
    <div>CustomHook3</div>
  )
}

export default CustomHook3