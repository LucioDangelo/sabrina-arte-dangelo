import React from 'react'
import { FaBehance, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-3 my-4'>
    <ul className='nav justify-content-center'>
        <li className='nav-item '>
            <a href="/" className='nav-link  text-muted'>
                <svg className='bi text-center' width='48' height='36'>
                    <FaBehance/>                
                </svg>
            </a>
        </li>
        <li className='nav-item'>
            <a href="/" className='nav-link  text-muted'>
                <svg className='bi' width='48' height='36'>
                    <FaLinkedinIn/>                
                </svg>
            </a>
        </li>
        <li className='nav-item'>
            <a href="/" className='nav-link  text-muted'>
                <svg className='bi' width='48' height='36'>
                    <FaInstagram/>                
                </svg>
            </a>
        </li>
    </ul>
    <p className='text-center text-muted'>© Lucio d'Angelo</p>
    </footer>
  )
}

export default Footer