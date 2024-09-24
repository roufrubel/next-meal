import React from 'react';

// export const metadata = {
//     title: "Post details",
//     description: "From post details",
//   };

const getPostsDetails = async (id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data;
}

export const generateMetadata = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json()
    return {
        title: {
            absolute: `${postData.title}`
        },
        description: postData?.body,
        keywords: postData.body.split(' '),
    }
}

const DetailsPage = async ({params}) => {
    const {title, body} = await getPostsDetails(params.id)
    return (
        <div className="min-h-screen space-y-4">
            <h2>See Details page</h2>
            <h2>Title: <strong>{title}</strong></h2>
            <h2>Desc: {body}</h2>
        </div>
    );
};

export default DetailsPage;