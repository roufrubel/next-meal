import React from 'react';
import {Headland_One} from 'next/font/google'

const headland = Headland_One({weight: ['400'], subsets: ['latin']})

export const metadata = {
    title: "About",
    description: "About Page",
    keywords: ['about', 'about page'], 
  };

  const getTime = async () =>{
    // const res = await fetch('http://localhost:3000/time'); // by default has data caching
    // const res = await fetch('http://localhost:3000/time', {cache: 'no-store'}); // stop data caching, will reload every time and will give new data
    const res = await fetch('http://localhost:3000/time', {next: {revalidate: 5}}); // data network request after every 5 seconds
    const data = await res.json();
    return data.currentTime;
  }

const AboutPage = async () => {
    const currentTime = await getTime();
    return (
        <div className={`${headland.className} min-h-screen`}>
            <h4>About Page</h4>
            <h2>Time: {currentTime}</h2>
        </div>
    );
};

export default AboutPage;

// export const metadata = {
//     title: "Next Meal",
//     description: "Next Meal Next Js Website",
//   };