import React from 'react'
import './StoryCard1.css'

const StoryCard1 = () => {
  return (
    <section className='d-flex container-fluid our-story-wrapper justify-content-center'>
      <div className='text-wrapper justify-content-center d-flex flex-column'>
        <h1 className='text-light fw-bolder display-5 pb-2'>
          Enjoy on your TV.
        </h1>
        <h5 className='text-light' style={{ fontSize: '1.6rem' }}>
          Watch on Smart TVs, Playstation, Xbox,
          <br /> Chromecast, Apple TV, Blu-ray players, and
          <br /> more.
        </h5>
      </div>
      <div>
        <img
          className='our-story-card-img'
          src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
          alt='tv'
        />
        <video
          className='our-story-card-video'
          src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
          muted
          autoPlay
          preload='auto'
          loop
        ></video>
      </div>
    </section>
  )
}

export default StoryCard1
