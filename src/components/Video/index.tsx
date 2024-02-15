import React, { DetailedHTMLProps, VideoHTMLAttributes, useEffect, useRef, useState } from 'react'
import './style.css';
import { useTabVisibility } from '../customHooks';

export type VideoPropType = {
  src: string | undefined
} & DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;

const Video = React.forwardRef(({src, ...props}: VideoPropType, ref: React.LegacyRef<HTMLVideoElement> ) => {
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const videoRef : any = ref || videoElementRef;
  const isPreviouslyPlaying = useRef(false);
  useTabVisibility( (isVisible)=>{
    if(!videoRef.current) return;
    const video = videoRef.current;
    if(isVisible) {
      if(isPreviouslyPlaying) video.play();
    } else {
      isPreviouslyPlaying.current = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
      video.pause();
    }
  } );
  useEffect(()=>{
    if(videoRef.current) {
      const observer = new IntersectionObserver(([entry]: any)=>{
        console.log(entry);
        if(entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
      observer.observe(videoRef.current);
      return ()=>observer.disconnect();
    }
  }, [videoRef]);
  return (
    <div className='video-container'>
      <video src={src} ref={videoRef} className='auto-play-video' controls={false} {...props} />
    </div>
  )
});

export default Video