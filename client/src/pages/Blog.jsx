import React from 'react'
import BlogHeader from './Blog/BlogHeader'
import BlogArticles from '../pages/Blog/BlogArticles'


const Blog = () => {
  return (
    <div>
      <BlogHeader />
      <BlogArticles blogSection="Development articles" />
    </div>
  )
}

export default Blog