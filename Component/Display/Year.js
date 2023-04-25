import React, { useEffect, useState } from 'react'

const Year = () => {

    const [year,setYear]=useState("");
    useEffect(()=>{
        let date=new Date()
        setYear(date.getFullYear())
    },[])

  return (
    <div>{Year}</div>
  )
}

export default Year