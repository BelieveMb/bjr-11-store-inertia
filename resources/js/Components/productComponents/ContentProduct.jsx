import React from 'react'

function ContentProduct() {
  return (
    <div className='w-1/2 py-28 lg:gap-4 border-orange-500 border-4 flex flex-col items-start justify-center content-start'>
        <h4 className="text-orange-400 uppercase font-semibold">Sneaker company</h4>
        <h2 className="text-6xl font-bold text-gray-800">Fall Limit Edition Sneakers</h2>
        <p className="text-gray-600">
        We will also need to create URLs for our controller. We can do this by adding "routes", which are managed in the routes directory of your project. Because we're using a resource controller, we can use a single Route::resource() statement to define all of the routes following a conventional URL structure.
        </p>
        <div className="flex gap-4 justify-center content-center items-center">
            <h4 className='text-3xl font-bold'>$125.00</h4>
            <span className="bg-orange-300 text-orange-500 h-auto font-semibold"> 50 %</span>
        </div>
        <strike className="text-gray-400 font-bold"> $250.00</strike>
    </div>
  )
}

export default ContentProduct