import React from 'react'
import useFetch from './hook/useFetch'

function CustomHook2() {
   let {data}= useFetch('https://dummyjson.com/carts')
   console.log('hii i am res from customhook2',data)
  return (
    <div>CustomHook2</div>
  )
}

export default CustomHook2