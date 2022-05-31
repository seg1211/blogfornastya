import React, {useEffect,useState} from 'react'
import  sanityClient  from '../client'
import BarLoader from '../svg/BarLoader.js'
import { useParams } from 'react-router-dom'
  import  ImageUrlBuilder  from '@sanity/image-url'
import BlockContent  from '@sanity/block-content-to-react'
import './SinglePost.css'
import Footer from '../components/Footer'
const builder = ImageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
function SinglePost() {
  const [singlePost, setSinglePost] = useState(null)
  const {slug}=useParams()
  useEffect(()=>{
    sanityClient.fetch(`
    *[slug.current=="${slug}"]{
      title,
      _id,
      mainImage{
        asset->{
          _id,
          url,
        }
      }, body,
      "name": author->name,
      "authorImage": author->image
    }
    `).then((data)=>setSinglePost(data[0]))
    .catch(console.error)
  }, [slug])
  if (!singlePost)return <BarLoader customText="Loading ... "/>
  return (<div>
    <div className='Aboslute'>
      <div className='topColor'></div>
      <img className="MainImage"src={singlePost.mainImage.asset.url}  alt={singlePost.title}/>
      <img className="SubImage"src={singlePost.mainImage.asset.url}  alt={singlePost.title}/>
      <h1 className="Title">{singlePost.title}</h1>
      </div>
      <div className='All-main'>
      <div className='Main-text'>
        <BlockContent blocks={singlePost.body} projectId="xoh3ynmp" dataset="production"/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default SinglePost