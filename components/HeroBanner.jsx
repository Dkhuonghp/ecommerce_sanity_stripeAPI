import React, { useState } from 'react'
import Link from "next/link"
import { client, urlFor } from '../lib/client'

import { Product } from "../components"
import { useStateContext } from '../context/StateContext'


const HeroBanner = ({ heroBanner, product,  products}) => {

  // const { image, name, details, price } = product;
  const [index, setIndex] = useState(0)
  const {decQty, incQty, qty, onAdd} = useStateContext()
  
  return (
    <div className='hero-banner-container'>
      <div>
        {/* <h1>{heroBanner.largeText1}</h1>
        <h3>{heroBanner.midText}</h3>
        <p className='beats-solo'>{heroBanner.smallText}</p> */}
        <img src={urlFor(heroBanner.image)} alt="heade-img" className='hero-banner-image'/>

        {/* <div>
          <Link href="/product">
            <button type='button' onClick="">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default HeroBanner