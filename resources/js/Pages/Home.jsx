import React, { useState } from 'react'
import { Head, Link, usePage } from '@inertiajs/react'
import { useRoute } from '../../../vendor/tightenco/ziggy';

const Home = ({ posts }) => {
  const route = useRoute();
  const {flash} = usePage().props;
  const {component} = usePage();

  const [flashMsg, setFlashMsg] = useState(flash.message);

  setTimeout(() => {
    setFlashMsg(null)
  },2000)

  return (
    <>
      <Head title={component}/>
      <h1 className='title'>Home</h1>
      {flashMsg && <div className='absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white'>{flashMsg}</div> }
      <div>
        {
          posts.data.map(post => (
            <div className='p-4 border-b' key={post.id}>
              <div className='text-sm text-slate-600'>
                <span>Posted on: </span>
                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
              </div>
              <p className='font-medium'>{post.body}</p>
              {/* <Link href={`/posts/${post.id}`} className='text-link'>Read More...</Link> */}

              <Link href={route('posts.show',post)} className='text-link'>Read More...</Link>

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