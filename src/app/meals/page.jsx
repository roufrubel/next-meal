
import Meals from '@/components/Meals';
import React from 'react';
import styles from './styles.module.css'

export const metadata = {
    title: {
        absolute: 'Meals'
    },
    description: "Meals Page",
  };

const MealsPage = () => {
    return (
        <div className="mt-6 mb-6 min-h-screen">
            <div className="text-center font-bold">
            <h1>Meals Page</h1>
            <h3 className={styles.text_orange}>Search your choosing foods</h3>
            </div>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;