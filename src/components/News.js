import React, { useState,useEffect } from 'react'
import { NewsItem } from './NewsItem'
import axios from 'axios'

export const News = () => {
  let [dataAll,setData]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
         const res=await axios.get("https://anilreddy2009-mern-backend.onrender.com/news")
              setData(res.data);
          }
          fetchData()
  },[])
  console.log(dataAll)
  return (
    <div className='container my-3'>
      <h2>News-Top headlines</h2>
      <div className="row">
      {dataAll.map((element)=>{
        return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0,20)} description={element.description.slice(0,40)} urlToImage={element.urlToImage} url={element.url}/>
        </div>
      })}
      </div>
    </div>
  )
}
