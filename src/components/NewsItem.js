import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, publishedAt} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text" style={{fontSize: "12px"}}>Date: {publishedAt}</p>
                <p className="card-text">{description}</p>                
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-success">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem