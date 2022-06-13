import React from 'react'

const LearnCourseContent = () => {

    const data = [
        { title: 'Introduction', lessons: 3, length: '4' },
        { title: 'Starting Files', lessons: 5, length: '12' },
        { title: 'Getting Started With Technologies', lessons: 2, length: '43' },
        { title: 'Core Concepts', lessons: 5, length: '12' },
        { title: 'Theory', lessons: 2, length: '52' },
        { title: 'Case Study', lessons: 5, length: '13' },
        { title: 'Homework 1', lessons: 1, length: '10' },
        { title: 'Homework 2', lessons: 1, length: '5' },
        { title: 'Final Remarks', lessons: 5, length: '64' },
    ]
    return (
        <div className='bg-gray-100 h-max w-full md:w-1/3'>
            <ul className='custom-layout'>
                {data.map((item, index) => {
                    return (
                        <li key={index} className='mb-4 border-b-2 pb-2 border-neutral-500'>
                            <h3>Section {index + 1}: {item.title}</h3>
                            <p>0/{item.lessons} | {item.length}min</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default LearnCourseContent