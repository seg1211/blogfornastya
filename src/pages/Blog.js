import React, {useState, useEffect} from 'react'
import  sanityClient  from '../client.js'
import './Blog.css'
import BarLoader from '../svg/BarLoader.js'
import Footer from '../components/Footer.js'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
function Blog() {
    const [postData, setPostData]= useState(null)
    useEffect(()=>{
        sanityClient
        .fetch(`*[_type=="post"]{
          title,
          slug,
          publishedAt,
          description,
          projectType,
          mainImage{
            asset->{_id,url}, alt
          }
        }`)
        .then((data) => setPostData(data))
        .catch(console.error)
      }, [])
      ///////////////
      const variants = {
        animate: {
            opacity: 1,
            y:0,
            transition: {duration: 0.5}
        },
        initial: {
            opacity: 0,
            y:'-2.5vh',
        },
        exit: {
            opacity: 0,
            y:'-2.5vh',
            transition: {duration: 1}
        }
    }
    if (!postData)return <BarLoader customText="Loading ... "/>
  return (
    <motion.div exitbeforeenter
    variants={variants}
    animate='animate'
    initial='initial'
    exit='exit'>
          <div className="container">
    {postData && postData.map((post, index)=>( 
       <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
  <div className="card">
    <div className="card__header">
      <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="card__image" width="600"/>
    </div>
    <div className="card__body">
      <span className="tag tag-blue">{post.projectType}</span>
      <h4>{post.title}</h4>
      <p>{post.description}</p>
      <span>Finished on: {""}
    {new Date(post.publishedAt).toLocaleDateString()}
    </span>
    </div>
  </div>
  </Link>
  ))}
    </div>
  <Footer/>
  </motion.div>
  )
}

export default Blog