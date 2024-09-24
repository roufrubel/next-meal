'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    // console.log(pathName)
    const router = useRouter();
    const links = [
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        
    ]

    const handler = () => {
        router.push('/login')
    }

    if(pathName.includes('dashboard')){
        return (<div className='bg-green-600'>
            <h2>Dashboard Layout</h2>
        </div>)
    }


    return (
        <nav className="bg-success text-white py-2 px-4 flex justify-between items-center">
          <h4 className='text-3xl '>Next <span className='font-bold text-amber-500'>Meal</span></h4>
          <ul className="flex justify-between items-center space-x-6">
            {
                links?.map((link) =><Link className={`${pathName ===link.path && 'text-amber-400 font-bold border rounded px-2 py-1'}`} key={link.path} href={link.path}>{link.title}</Link>)
            }
          </ul>
          <button onClick={handler} className='btn btn-warning btn-sm '>Login</button>
        </nav>
    );
};

export default Navbar;