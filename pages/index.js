import React from 'react'
import { client } from '../lib/client'
import { Product, HeroBanner } from "../components"

const Home = ({ products, bannerData }) => {
  return (
    <div>
      {/* <HeroBanner heroBanner ={bannerData.length && bannerData[0]}/> */}
        {console.log(bannerData)}
      <div className='products-heading'>
        <h2>ピックアップ</h2>
      </div>
      <div className="products-container">
        {products?.map((product) => < Product key= {products._id} product={product}/>)}
      </div>
      <div className='products-heading'>
        <h2>チェックしたアイテム</h2>
      </div>
      <div className="products-container">
        {products?.map((product) => < Product key= {products._id} product={product}/>)}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home