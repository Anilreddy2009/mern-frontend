import React, { useState,useEffect } from 'react'
import { NewsItem } from './NewsItem'
import axios from 'axios'

export const News = () => {
  let [dataAll,setData]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
         const res=await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-02-12&sortBy=publishedAt&apiKey=1d6d8666ddb64fe1bcbda3d72b075c69")
              setData(res.data.articles);
          }
          fetchData()
  },[])
  return (
    <div className='container my-3'>
      <h2>News-Top headlines</h2>
      <div className="row">
      {dataAll.map((element)=>{
        return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} urlToImage={element.urlToImage} url={element.url}/>
        </div>
      })}
      </div>
    </div>
  )
}
