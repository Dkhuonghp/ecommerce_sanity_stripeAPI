import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

    return (
        <div className="success-wrapper">
            <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>ご注文ありがとうございます。</h2>
            <div className="img">
                <img src="/order1.svg" alt="" />
                <img src="/order2.svg" alt="" />
            </div>
            <Link href="/">
                <button type="button" width="300px" className="btn">
                    買い物を続ける
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Success