import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div className='min-h-screen'>
            <h2>Gallery Page</h2>
            <Image src="/Images/one.jpeg" alt="" height="1080" width="1920" />
        </div>
    );
};

export default GalleryPage;