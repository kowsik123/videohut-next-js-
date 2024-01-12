import React, { useState } from 'react'
import Video, { VideoPropType } from '../Video'
import Image from 'next/image';
import './style.css';

type PosterPropType = {
    videoSrc?: string,
    imageSrc: string,
}

const Poster = ({videoSrc, imageSrc}: PosterPropType ) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  return (
    <div className='poster'>
      {videoSrc && <Video src={videoSrc} onPlay={()=>{
        setVideoPlaying(true);
      }} onEnded={()=>{
        setVideoPlaying(false);
      }} />}
      {!videoPlaying && <Image src={imageSrc} alt='movie poster' />}
      {<div className='video-options'>
        {muteOption && <button className='video-mute-button' onClick={muteButtonHandler}>
          {muted ? <MuteIcon /> : <VolumeIcon />}
        </button>}
        {tag && <div className='video-tag'>{tag}</div>}
      </div>}
    </div>
  )
}

export default Poster;