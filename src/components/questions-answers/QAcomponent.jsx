import React from 'react'
import './QAcomponent.css'
import data from './data.json'

const QAcomponent = () => {
  return (
    <section className='d-grid container-fluid accordion-wrapper justify-content-center h-100'>
      <h1 className='text-light fw-bolder displya-5 pt-5 text-center'>
        Frequently Asked Questions
      </h1>
      <div className='accordion' id='accordion'>
        {data.map((dtext, key) => (
          <div className='accordion-item my-2'>
            <span className='accordion-header' id={dtext.headingId}>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={dtext.dataBsTarget}
                aria-expanded='false'
                aria-controls={dtext.ariaControls}
              >
                <h4 className='text-light'>{dtext.title}</h4>
              </button>
            </span>
            <div
              id={dtext.itemId}
              className='accordion-collapse collapse'
              aria-labelledby={dtext.ariaLabelledby}
              data-bs-parent='#accordion'
            >
              <div className='accordion-body'>
                <h4>{dtext.description}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* FORM */}
      <div className='mt-3 justify-content-center d-grid'>
        <h5 className='fs-5 text-light pt-3 px-5'>
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
      </div>
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
    </section>
  )
}

export default QAcomponent
