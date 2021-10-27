import React from 'react'
import './Header.css'
import logo from '../myflix-logo.png'

const Header = () => {
  return (
    <>
      <div className='bg-gr'></div>
      <header className='header-wrapper'>
        {/* NAVIGATION */}
        <nav className='container z-index-1 position-relative'>
          <div className='d-flex container justify-self-center'>
            <img src={logo} alt='logo' style={{ width: '150px' }} />
            <div className='ms-auto d-flex'>
              <div className='dropdown text-capitalize h-25 align-self-center mx-4'>
                <a
                  className='btn btn-outline-light dropdown-toggle'
                  role='button'
                  id='languages'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <i class='bi bi-globe'></i>&nbsp;english
                </a>
                <ul className='dropdown-menu' aria-lableledby='languages'>
                  <li>
                    <a href='#' className='dropdown-item'>
                      english
                    </a>
                  </li>
                  <li>
                    <a href='#' className='dropdown-item'>
                      espaniol
                    </a>
                  </li>
                </ul>
              </div>
              <button className='btn btn-danger text-capitalize h-25 align-self-center'>
                sign in
              </button>
            </div>
          </div>
        </nav>
        {/* /--NAVIGATION */}
        {/* STORY CARD */}
        <div
          className='container text-light text-center z-index-1 position-absolute top-50 start-50 translate-middle'
          style={{ letterSpacing: '0.1rem' }}
        >
          <div className='container'>
            <h1 className='display-3 fw-bold'>
              Unlimited movies, TV <br />
              shows, and more.
            </h1>
            <h2 className='fs-4 text-light pt-3'>
              Watch anywhere. Cancel anytime.
            </h2>
          </div>
          <div className='container mt-3 justify-content-center d-grid'>
            <h5 className='fs-5 text-light pt-3'>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>
            <div className='mb-3 d-md-flex d-sm-grid w-100'>
              <input
                type='text'
                className='form-control mt-2 get-started-input'
                placeholder='Email address'
              />
              <button className='btn btn-danger text-capitalize w-50 fs-3 mt-2 get-started-btn'>
                get started
              </button>
            </div>
          </div>
        </div>
        {/* /--STORY CARD */}
      </header>
    </>
  )
}

export default Header
