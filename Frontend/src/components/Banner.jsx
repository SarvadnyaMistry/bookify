import React from 'react'
import Books from '../../public/Books.jpg'

function Banner() {
  return (
<>
<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
    <div className='order-2 md:order-1 w-full md:w-1/2  mt-12 md:mt-32'>
    <div className='space-y-12'>
    <h1 className='text-4xl font-bold '>
    Hello, You are welcome here to Learn and Grow <span className='text-pink-500'> new Everyday.</span>
    </h1>
    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, blanditiis quia. Accusamus dolor nemo explicabo commodi non. Necessitatibus ad temporibus minus ipsa quod error cumque?</p>
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <button className="btn btn-secondary mt-6">Button</button>
    </div>
    <div className='order-1 w-full md:w-1/2'>
    <img src={Books} alt=""className='w-92 h-92' />
    </div>
</div>

</>
)
}

export default Banner