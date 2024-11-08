import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-3' style={{ backgroundColor: 'rgb(25, 137, 25)' }}>
      <div className='container footer d-flex flex-column flex-md-row justify-content-evenly align-items-start'>
        <div className='col-12 col-md-4 mb-3'>
          <h5 className='textStyle'><i className="fa-brands fa-stack-overflow"></i> EcoTruck</h5>
          <p className='textStyle' style={{ textAlign: 'justify' }}>
            Eco Track is a smart waste management system that helps citizens, drivers, and administrators work together for efficient waste collection and disposal. Join us in making waste management cleaner, faster, and greener!
          </p>
        </div>
        <div className='col-12 col-md-2 mb-3'>
          <h4 className='textStyle'>Links</h4>
          <Link to='/' className='d-block text-white' style={{ textDecoration: 'none' }}>
            Home
          </Link>
          <Link to='/about' className='d-block text-white' style={{ textDecoration: 'none' }}>
            About Us
          </Link>
          <Link to='/services' className='d-block text-white' style={{ textDecoration: 'none' }}>
            Services
          </Link>
          <Link to='/contact' className='d-block text-white' style={{ textDecoration: 'none' }}>
            Contact
          </Link>
        </div>
        <div className='col-12 col-md-2 mb-3'>
          <h4 className='textStyle'>Guides</h4>
          <Link to='https://www.unep.org' target='_blank' className='d-block text-white' style={{ textDecoration: 'none' }}>
            UN Env. Prg
          </Link>
          <Link to='https://haritham.kerala.gov.in' target='_blank' className='d-block text-white' style={{ textDecoration: 'none' }}>
            Haritha Keralam
          </Link>
          <Link to='https://www.rts.com' target='_blank' className='d-block text-white' style={{ textDecoration: 'none' }}>
            Recycle Track System
          </Link>
        </div>
        <div className='col-12 col-md-5 mb-3 ms-md-4'> {/* Added left margin */}
          <h4 className='textStyle'>Contact us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your email id' style={{ width: "100%" }} /> {/* Wider input */}
            <button className='btn ms-3' style={{ backgroundColor: '#095436', color: 'white' }}>
              Subscribe
            </button>
          </div>
          <div className='d-flex justify-content-evenly mt-3'>
            <Link className='text-white' style={{ textDecoration: 'none' }}>
              <i className="fa-brands fa-instagram fa-2x"></i>
            </Link>
            <Link className='text-white' style={{ textDecoration: 'none' }}>
              <i className="fa-brands fa-facebook fa-2x"></i>
            </Link>
            <Link className='text-white' style={{ textDecoration: 'none' }}>
              <i className="fa-brands fa-twitter fa-2x"></i>
            </Link>
            <Link className='text-white' style={{ textDecoration: 'none' }}>
              <i className="fa-brands fa-reddit fa-2x"></i>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-white mb-0">Developed by Sudha Ajay &copy; 2024</p>
    </div>
  )
}

export default Footer;
