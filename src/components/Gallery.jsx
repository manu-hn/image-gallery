import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard';
import Spinner from './Spinner';
import SearchInput from './SearchInput';


const REACT_GALLERY_PIXABAY_API_KEY = '39810293-56f15800b2dad3471942d410d'
const Gallery = () => {
    const [images, setImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    const fetchImageGallery = async () => {
        try {
            const response = await axios.get(`https://pixabay.com/api/?key=${REACT_GALLERY_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true&per_page=50`)
            setImages(response.data.hits)
            setIsLoading(false)
            console.log(response.data.hits)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchImageGallery()
    }, [searchTerm])
    return (
        <div>
            <SearchInput searchText={(text)=>setSearchTerm(text)} />
            {isLoading ? <Spinner /> : <div className="grid grid-cols-3 gap-4 m-[1em]">
                {
                    images.map(image => {
                        return (
                            <ImageCard key={image.id} image={image} />
                        )
                    })
                }
            </div>}
        </div>
    )
}

export default Gallery