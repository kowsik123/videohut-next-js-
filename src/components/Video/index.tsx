import React, { DetailedHTMLProps, VideoHTMLAttributes, useEffect, useRef, useState } from 'react'
import './style.css'
import MuteIcon from '../Icons/MuteIcon';
import VolumeIcon from '../Icons/VolumeIcon';

export type VideoPropType = {
  tag?: string,
  muteOption?: boolean,
  src: string | undefined
} & DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;

const Video = ({tag, muteOption=false, src, ...props}: VideoPropType ) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);
  useEffect(()=>{
    if(videoRef.current) {
      if(videoRef.current.muted) {
        setMuted(true);
      }
      const observer = new IntersectionObserver(([entry]: any)=>{
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
  const muteButtonHandler = ()=>{
    if(videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setMuted(videoRef.current.muted);
    }
  };
  return (
    <div className='video-container'>
      <video src={src} ref={videoRef} className='auto-play-video' controls={false} muted {...props} />
      
    </div>
  )
}

export default Video