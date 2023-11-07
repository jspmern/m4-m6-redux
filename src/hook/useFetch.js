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
    fetch(url,optionalReq)
      .then((item) => {
        return item.json();
      })
      .then((data) => {
        console.log("hii i am inside customhook", data);
        setData(data);
      });
  }
  useEffect(() => {
    fetchdata();
  },[]);
  return { data };
}

export default useFetch;
