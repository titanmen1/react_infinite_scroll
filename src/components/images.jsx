import React, {useState, useEffect} from 'react';
import {apiEndpoint} from "../const";
import axios from "axios";

export const Images = () => {

  const [state, setState] = useState({
    images: [],
    count: 0,
  })

  const updateImages = (start) => {
    axios.get(apiEndpoint).then(responce => {
      if (start) {
        setState({
          images: responce.data,
          count: responce.data.length
        })
      } else {
        setState({
          images: state.images.concat(responce.data),
          count: state.count + responce.data.length
        })
      }
    })
  }

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight * 0.85) {
      updateImages(false)
    }
  }

  useEffect(() => {
    updateImages(true)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="images">
      {state.images.map((image) => (
        <img className='single-photo' src={image.urls.regular} alt=''/>
      ))}
    </div>
  )
}