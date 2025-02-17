import { Head, useForm } from '@inertiajs/react'
import React from 'react'


const Edit = ({post}) => {

    const { data, setData, put, errors, processing} = useForm({
        body: post.body,
    })

    function submit(e){
        e.preventDefault();
        // put(`/posts/${post.id}`);
        put(route('posts.update', post));
    }

    return (
        <>
            <Head title="Edit"/>
            
            <h1 className="title">Update your post</h1>

            <div className=' w-1/2 mx-auto'>
                <form onSubmit={submit}>
                    <textarea rows="10" value={data.body} onChange={(e) => setData('body', e.target.value)}
                        className={errors.body && '!ring-red-500'}
                        
                        ></textarea>
                    {errors.body && <p className='error'>{errors.body}</p>}
                    <button disabled={processing} className='primary-btn mt-4'>Update Post</button>
                </form>
            </div>

        </>
    )
}

export default Edit