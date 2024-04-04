import React from 'react'
import './smallblog.css'

const SmallBlog = () => {
  return (
    <div className='featured-grid'>
      <div className='featured-item'>
          <div className="featured-itemleft">
            <img src="./images/blog1.jpg" alt="" />
          </div>
          <div className="featured-itemright">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, est.</p>
            <span>March 17, 2017</span>
          </div>
         
      </div>
      <div className='featured-item'>
          <div className="featured-itemleft">
            <img src="./images/blog2.jpg" alt="" />
          </div>
          <div className="featured-itemright">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, est.</p>
            <span>March 17, 2017</span>
          </div>
          
      </div>
      <div className='featured-item'>
          <div className="featured-itemleft">
            <img src="./images/blog3.jpg" alt="" />
          </div>
          <div className="featured-itemright">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, est.</p>
            <span>March 17, 2017</span>
          </div>
          
      </div>
      <div className='featured-item'>
          <div className="featured-itemleft">
            <img src="./images/blog4.jpg" alt="" />
          </div>
          <div className="featured-itemright">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, est.</p>
            <span>March 17, 2017</span>
          </div>
          
      </div>
    </div>
  )
}

export default SmallBlog
