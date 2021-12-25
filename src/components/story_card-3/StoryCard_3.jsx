import React from 'react'
import './StoryCard_3.css'

const StoryCard_3 = () => {
  return (
    <section className='d-flex container-fluid our-story-wrapper_3 justify-content-center'>
      <div className='text-wrapper justify-content-center d-flex flex-column'>
        <h1 className='text-light fw-bolder display-5 pb-2'>
          Watch everywhere.
        </h1>
        <h5 className='text-light'>
          Stream unlimited movies and TV shows on your
          <br /> phone, tablet, laptop, and TV without paying
          <br /> more.
        </h5>
      </div>
      <div className='mt-5'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
          alt='watch everywhere'
          className='our-story-card-img_3'
        />
        <video
          src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
          className='our-story-card-video_3'
          muted
          autoPlay
          preload='auto'
          loop
        ></video>
      </div>
    </section>
  )
}

export default StoryCard_3
