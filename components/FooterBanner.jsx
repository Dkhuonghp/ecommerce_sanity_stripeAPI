import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Footer = () => {
  return (
    <div>
      <nav>
        <a href="/">
          <svg viewBox="0 0 100 100">
            <g transform="translate(10 5) scale(0.8 0.9)">
              <path d="M 0 30 v 70 h 100 v -70 l -50 -30 z" stroke="currentColor" stroke-width="10" fill="none"
                stroke-linejoin="round" stroke-linecap="round" />
            </g>
          </svg>
        </a>
        <a href="#">
          <svg viewBox="0 0 100 100">
            <g transform="translate(5 5) scale(0.9 0.9)">
              <path d="M 50 35 a 20 20 0 0 1 50 0 q 0 25 -50 60 q -50 -35 -50 -60 a 25 25 0 0 1 50 0" stroke="currentColor"
                stroke-width="10" fill="none" stroke-linejoin="round" stroke-linecap="round" />
            </g>
          </svg>
        </a>

        <a href="#">
          <svg viewBox="0 0 100 100">
            <g transform="translate(5 5) scale(0.9 0.9)">
              <circle cx="45" cy="38" r="38" stroke="currentColor" stroke-width="10" fill="none" />
              <line x1="66" y1="65" x2="100" y2="100" stroke="currentColor" stroke-width="10" />
            </g>
          </svg>
        </a>

        <a href="#">
          <svg viewBox="0 0 100 100">
            <g transform="translate(5 5) scale(0.9 0.9)">
              <circle cx="50" cy="35" r="18" stroke="currentColor" stroke-width="10" fill="none" />
              <rect x="15" y="75" width="70" height="50" rx="25" stroke="currentColor" stroke-width="10" fill="none" />
            </g>
          </svg>
        </a>
      </nav>
    </div>
  )
}

export default Footer