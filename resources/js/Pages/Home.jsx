import React from 'react'
import { Link } from '@inertiajs/react'

const Home = ({ posts }) => {
  console.log(posts)
  return (
    <>
      <h1 className='title'>Hello</h1>

      <div>
        {
          posts.data.map(post => (
            <div className='p-4 border-b' key={post.id}>
              <div className='text-sm text-slate-600'>
                <span>Posted on: </span>
                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
              </div>
              <p className='font-medium'>{post.body}</p>
              <Link href={`/posts/${post.id}`} className='text-link'>Read More...</Link>
            </div>
          ))
        }
      </div>
      <div className='py-12 px-4 text-center'>
        {posts.links.map(link=>(
          link.url ?
          <Link className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ''}`} key={link.label} href={link.url} dangerouslySetInnerHTML={{ __html: link.label }} />
          :
          <span className="p-1 mx-1 text-slate-400" key={link.label} dangerouslySetInnerHTML={{ __html: link.label }} 
            ></span>
        ))}
      </div>
    </>
  )
}

export default Home