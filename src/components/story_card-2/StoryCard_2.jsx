import React from 'react'
import './StoryCard_2.css'

const StoryCard_2 = () => {
  return (
    <section className='d-flex container-fluid our-story-2-wrapper justify-content-center'>
      <div className='d-flex flex-column'>
        <img
          style={{ width: '30rem' }}
          src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
          alt='picture'
        />
        <div className='card d-flex border-dark border-3 align-self-center'>
          <div className='card-body d-flex p-0'>
            <img
              className='align-self-center px-3'
              style={{ height: '4rem' }}
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
              alt='card picture'
            />
            <div className='align-self-center text-light'>
              <span className='fw-bold'>Stranger Things</span>
              <br />
              <span style={{ color: '#06d' }}>Downloading...</span>
            </div>
            <div className='card-body-gif align-self-center'></div>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column justify-content-center px-5'>
        <h1 className='text-light fw-bolder display-5'>
          Download your shows <br /> to watch offline.
        </h1>
        <h5 className='text-light'>
          Save your favorites easily and always have <br /> something to watch.
        </h5>
      </div>
    </section>
  )
}

export default StoryCard_2
