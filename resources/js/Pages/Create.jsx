import { Head, useForm } from '@inertiajs/react'
import React from 'react'

const Create = () => {

    const { data, setData, post, errors, processing} = useForm({
        body: "",
    })

    function submit(e){
        e.preventDefault();
        post('/posts');
    }

    return (
        <>
            <Head title="Create"/>
            
            <h1 className="title">Create a new post</h1>

            <div className=' w-1/2 mx-auto'>
                <form onSubmit={submit}>
                    <textarea rows="10" value={data.body} onChange={(e) => setData('body', e.target.value)}
                        className={errors.body && '!ring-red-500'}
                        
                        ></textarea>
                    {errors.body && <p className='error'>{errors.body}</p>}
                    <button disabled={processing} className='primary-btn mt-4'>Create Post</button>
                </form>
            </div>

        </>
    )
}

export default Create