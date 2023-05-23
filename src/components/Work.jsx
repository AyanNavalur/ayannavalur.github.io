import React from 'react'
import Wine from '../assets/projects/wine.jpg'
import Car from '../assets/projects/car-license.jpg'
import Music from '../assets/projects/music-genre.png'
import GNN from '../assets/projects/gnn.jpg'
import GCN from '../assets/projects/gcn.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline  border-b-4 border-pink-600'>Projects</p>
                <p className='py-4'>// Check out some of my recent work</p>
            </div>

            {/* Grid */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Items */}
                <div style={{backgroundImage: `url(${GNN})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Graph Neural Networks (NJIT)
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className=' hidden text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/AyanNavalur/G-GNN'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Car})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Car License Plate Recognition System
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className=' hidden text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/AyanNavalur/CarLicensePlateRecognition'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Wine})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Wine Quality Prediction using PySpark
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className=' hidden text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/AyanNavalur/WineQualityPrediction_Spark'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Music})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Music Genre Detection using CNNs
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className=' hidden text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/AyanNavalur/MusicGenreDetection'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work