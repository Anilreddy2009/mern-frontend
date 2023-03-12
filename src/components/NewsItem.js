import React from 'react'

export const NewsItem = (props) => {
  let {title,description,url,urlToImage}=props;
  return (
    <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  )
}