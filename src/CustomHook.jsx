import React, { useEffect } from 'react'

import useSimple from './hook/useSimple'
import useFetch from './hook/useFetch'
function CustomHook() {
       console.log('....................')
        let {data}=useFetch('https://jsonplaceholder.typicode.com/posts')
         
        console.log('res in customhook1',data)
  return (
     <>
     <h1>hello i am custom hook</h1>
     </>
  )
}

export default CustomHook