import React from 'react'
import { FaBehance, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer class='py-3 my-4'>
    <ul class='nav justify-content-center'>
        <li class='nav-item '>
            <a href="/" class='nav-link  text-muted'>
                <svg class='bi text-center' width='48' height='36'>
                    <FaBehance/>                
                </svg>
            </a>
        </li>
        <li class='nav-item'>
            <a href="/" class='nav-link  text-muted'>
                <svg class='bi' width='48' height='36'>
                    <FaLinkedinIn/>                
                </svg>
            </a>
        </li>
        <li class='nav-item'>
            <a href="/" class='nav-link  text-muted'>
                <svg class='bi' width='48' height='36'>
                    <FaInstagram/>                
                </svg>
            </a>
        </li>
    </ul>
    <p class='text-center text-muted'>© Lucio d'Angelo</p>
    </footer>
  )
}

export default Footer