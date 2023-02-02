import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {

    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0)
    const {decQty, incQty, qty, onAdd, setShowCart} = useStateContext()
    const handleBuyNow = () => {
        onAdd(product, qty);
        setShowCart(true);
    }
    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={urlFor(image && image[0])} className="product-detail-image"/>
                    </div>  
                    {/* <div className='small-image-container'>
                        {image?.map((item, i) => (
                            <img
                                src={urlFor(item)}
                                className=""
                                onMouseEnter=""
                            />
                        ))}
                    </div>  */}
                </div>
                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className="reviews">
                        <div>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                        </div>
                        <p className="price">
                            ¥{price}
                        </p>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis quos qui sapiente, nobis consequuntur quae vel exercitationem et cumque totam in nulla aspernatur deserunt vitae neque quibusdam illum dolorem!</p> */}
                        <div className='quantity'>
                            {/* <h3>Quantity</h3> */}
                            <p className="quantity-desc">
                                <span className="minus" onClick={decQty}><AiOutlineMinus/></span>
                                <span className="num" onClick="">{qty}</span>
                                <span className="plus" onClick={incQty}><AiOutlinePlus/></span>
                            </p>
                        </div>

                        <div className='buttons'>
                            <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>カートに入れる</button>
                            <button type='button' className='buy-now' onClick={handleBuyNow}>今すぐ購入</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='maylike-products-wrapper'>
                <h2>友達のいいね！</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map((item) => (
                            <Product key={item._id}
                            product={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
        current
        }
    }
    `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: { 
        slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}


export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    console.log(product);
  
    return {
      props: { products, product }
    }
}

export default ProductDetails