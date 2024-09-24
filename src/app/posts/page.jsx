import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';

const PostPage = async () => {
    const postsData = await getPosts();
    // console.log(postsData);
    return (
        <div className="min-h-screen px-10 text-center space-y-10 mt-10 mb-10">
            <h6>All Posts</h6>
            <div className="grid grid-cols-4 gap-6">
                {
                    postsData?.slice(0, 20)?.map(({id, title, body}) =>(
                        <div className=' p-4 border-2 rounded-lg' key={id}>
                            <h2>Title: {title}</h2>
                            <p>Description: {body}</p>
                            <Link href={`/posts/${id}`}>
                            <button className="btn btn-warning btn-sm my-2">See Details</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostPage;