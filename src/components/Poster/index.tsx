import React, { useCallback, useEffect, useRef, useState } from 'react'
import Video from '../Video';
import './style.css';
import { MuteIcon, RepeatIcon, VolumeIcon } from '../Icons';
import Button from '../Button';
import { MovieType } from '../Movie';

type PosterPropType = {
    muteOption?: boolean,
    movie: MovieType,
}

const Poster = ({muteOption=false, movie}: PosterPropType ) => {
  const { trailerSrc, tag, imageSrc, nameImageSrc } = movie;
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  const [videoEnded, setVideoEnded] = useState<boolean>(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const muteButtonHandler = useCallback(()=>{
    if(videoEnded) videoRef.current?.play();
    else setMuted( (isMuted)=>!isMuted );
  }, [videoEnded]);
  useEffect(()=>{
    if(scroller.current) {
      const scrollEndHandler = (e: any)=>{
        //TODO: add more smoothness
        if(e.target.scrollLeft/e.target.scrollWidth>0.20) {
          e.target.scrollTo(e.target.scrollWidth,0);
        } else {
          e.target.scrollTo(0,0);
        }
      };
      scroller.current.addEventListener('scrollend', scrollEndHandler);
      return ()=>scroller.current?.removeEventListener('scrollend', scrollEndHandler);
    }
  },[scroller]);
  return (
    <div className='poster'>
      {trailerSrc && <Video muted={muted} ref={videoRef} src={trailerSrc} onPlaying={()=>{
      }} onPlay={()=>{
        console.log('playing');
        setVideoPlaying(true);
        setVideoEnded(false);
      }}
      onPause={()=>{
        console.log('paused');
        setVideoPlaying(false);
      }}
       onEnded={(e)=>{
        console.log('ended');
        setVideoEnded(true);
        e.currentTarget.currentTime=0;
      }} />}
      {!videoPlaying && <img className='poster-image' src={imageSrc} alt='movie poster' />}
      {<div className='poster-info' ref={scroller}>
        <img alt={movie.name} src={nameImageSrc} />
        <div>{movie.description}</div>
        <div className='movie-options'>
          <Button.BorderAnimation text='Play' onClick={()=>{}} />
          <Button text='More Info' type='fill' onClick={()=>{}} />
        </div>
        <div style={{
            width: "calc(200% + 40px)",
            height: "1px",
        }}></div>
      </div>}
      {<div className='poster-options'>
        {muteOption && <button className='video-mute-button' onClick={muteButtonHandler}>
          {!videoEnded && muted && <MuteIcon /> }
          {!videoEnded && !muted && <VolumeIcon />}
          {videoEnded && <RepeatIcon />}
        </button>}
        {tag && <div className='poster-tag'>{tag}</div>}
      </div>}
      <div className='poster-bottom-overlay' />
    </div>
  )
}

export default Poster;