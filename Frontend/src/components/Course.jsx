import React from 'react'
import Cards from './Cards'
import list from '../list.json'
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl '>We're delighted to have you <span className='text-pink-500'> here</span></h1>
        <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus saepe sit earum nobis quibusdam, libero atque veniam illo molestiae omnis necessitatibus, repellat itaque vitae? Iste odit sint, ratione magni autem quod eligendi voluptas delectus suscipit voluptatibus repellendus in eius similique id nisi fugit facilis, vitae officiis natus modi. Dicta, iusto!</p>

<Link to="/">

<button className='bg-pink-500 text-white px-4 py-2  rounded-md hover:bg-pink-600 duration-300 mt-4'>Back</button>
</Link>


    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            list.map((item)=>(
                <Cards key={item.id} item={item}/> 
            ))
        }
    </div>
    </div>
    </>
  )
}

export default Course