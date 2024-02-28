import React from 'react'
import { Link, Head } from '@inertiajs/react';
import Header from '@/Components/productComponents/Header';
import ContentProduct from '@/Components/productComponents/ContentProduct';
import ImageProduct from '@/Components/productComponents/ImageProduct';


function Home() {
  return (
    <>
        <Header />
        <div className="flex justify-between content-center my-28 px-20">
            <ImageProduct />
            <ContentProduct />
        </div>
    </>
  )
}

export default Home