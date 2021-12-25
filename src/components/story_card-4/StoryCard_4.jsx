import React from 'react'
import './StoryCard_4.css'

const StoryCard_4 = () => {
  return (
    <section className='d-flex container-fluid our-story-wrapper_4 justify-content-center'>
      <div className='d-flex flex-column'>
        <img
          src='https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd'
          alt='create profiles for kids'
        />
      </div>
      <div className='d-flex flex-column justify-content-center px-5'>
        <h1 className='text-light fw-bolder display-5'>
          Create profiles for kids.
        </h1>
        <h5 className='text-light'>
          Send kids on adventures with their favorite <br />
          characters in a space made just for them—free
          <br /> with your membership.
        </h5>
      </div>
    </section>
  )
}

export default StoryCard_4
