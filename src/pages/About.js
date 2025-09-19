import React from 'react'
import video from '../asset/rec_food_movie.mp4'
const About = () => {
  return (
    <div className="about-wrap">
      <h2>식욕을 돋우기 위한 영상을 재생합니다.</h2>
      <div className="about-mov">
        <video src={video} autoPlay loop muted preload='auto' playsInline></video>
      </div>
    </div>
  )
}

export default About