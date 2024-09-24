'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('a');
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState('')

    const loadData = async () =>{
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        const data = await res.json();
        setMeals(data.meals)
        setError('')
        } catch (error) {
            setError('No data Found', error)
            console.log(error.message)
        }
    }
    
    const handler = (e)=>{
        // console.log(e.target.value);
        setSearch(e.target.value);
    }

       useEffect( () => {
        loadData()
    }, []);

    // if(meals?.length ===0){
    //     return <h6>No Data Found...</h6>
    // }


    return (
        <div className="text-center mt-4 px-10">
            <input
            onChange={handler}
            type="text" placeholder="search your meals"  className="px-8 py-2 outline-none border border-green-600 rounded-tl-md rounded-bl-md"/>
            <button onClick={() => loadData()} className='px-4 py-2 bg-green-600 text-amber-400 font-bold rounded-tr-md rounded-br-md border border-green-600'>Search</button>
            <div className='grid grid-cols-4 gap-6 mt-10'>
            {
               meals?.length > 0 && !error && meals?.map((meal) => (
                    <div className='p-4 border-2 rounded-md' key={meal.idMeal}>
                        <Image width={200} height={200} src={meal.strMealThumb} alt={meal.strMeal}/>
                        <h3 className='font-bold text-green-600 my-2'>{meal.strMeal}</h3>
                        <p>{meal.strInstructions.slice(0, 200)}...</p>
                    </div>
                ))
            }
            {error && <p className="text-amber-600 text-2xl mt-10 px-6 py-1 border border-red-600 rounded-md"> error: {error}</p>}
            </div>
        </div>
    );
};

export default Meals;