import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const Canceled = () => {
    return (
        <div className="success-wrapper">
            <div className="success">
            <Link href="/">
                <button type="button" width="300px" className="btn">
                    商品をキャンセルする。
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Canceled