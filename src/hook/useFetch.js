import React, { useEffect, useState } from "react";

function useFetch(url,method,body) {
   let method1=method?method:"GET"
   let body1=body?JSON.stringify(body):null
   let optionalReq={
    method:method1,
    headers:{'Content-Type':'application/json'},
    body:body1
   }
  let [data, setData] = useState();
  function fetchdata() {
    //dispatch({type:"Loding"})
    fetch(url,optionalReq)
      .then((item) => {
        return item.json();
      })
      .then((data) => {
        console.log("hii i am inside customhook", data);
       // dispatch({type:"fetched",payload:data})
        setData(data);
      }).catch((err)=>{
           //dispatch({type:"err",paylaod:err})
      })
  }
  useEffect(() => {
    fetchdata();
  },[]);
  //insted of returning state you have to return data state form redux store
  return { data };
}

export default useFetch;
