import React, { useState } from 'react';

const SearchInput = ({searchText}) => {
    const [text, setText] = useState('');


    const onSubmitHandler=(e)=>{
        e.preventDefault();
        searchText(text)
    }
    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto  '>
            <form onSubmit={onSubmitHandler} action="" className='w-full max-w-sm'>
                <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
                    <input type="text" onChange={e => setText(e.target.value)}
                        className='bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 focus:outline-none'
                        placeholder='Search Images' />
                    <button type='submit' className='flex-shrink-0 bg-teal-700 hover:bg-green-500 border-teal-500 hover:border-red-400 
                text-sm rounded px-4 py-2'>
                        Search
                    </button>
                </div>
            </form>

        </div>
    )
}

export default SearchInput;