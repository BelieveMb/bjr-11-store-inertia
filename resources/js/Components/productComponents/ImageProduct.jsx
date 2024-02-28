import { usePage } from '@inertiajs/react';
import React from 'react'

function ImageProduct() {
    const { productImg } = usePage().props;


  return (
    <>
        <div>
            <img src={productImg} alt="" className='w-28 h-10 border-2 border-red-500' />
        </div>
    </>
  )
}

export default ImageProduct