import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',')

    return (
        <div className='max-w-sm rounded-xl overflow-hidden shadow-lg pb-[2em]'>

            <img src={image.webformatURL} alt={image.type} className='w-full' />
            <div className=''>

                <div>
                    <ul className='list-none flex flex-col items-center justify-normal'>
                        <li className='text-purple-800 text-lg font-bold'> Photo By : {image.user} </li>
                        <li> <span className='text-lg font-bold'>Views :</span> {image.views} </li>
                        <li> <span className='text-lg font-bold'>Likes :</span> {image.likes} </li>
                        <li> <span className='text-lg font-bold'>Downloads :</span> {image.downloads} </li>

                    </ul>
                </div>
                <div className='flex justify-center items-center'>
               {
                tags.map(tag=>(
                    <span key={image.user_Id} className='bg-gray-400 rounded-full m-1 px-2 text-center'>
                        #{tag}
                    </span>
                ))
               }
            </div>
            </div>
            

        </div>
    )
}

export default ImageCard