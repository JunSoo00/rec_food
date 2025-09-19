import React from 'react'
import video from '../asset/rec_food_movie.mp4'
const About = () => {
  return (
    <div className="about-wrap">
      <div className="about-mov">
        <video src={video} autoPlay loop muted preload='auto' playsInline></video>
      </div>
    </div>
  )
}

export default About