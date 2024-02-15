import React from 'react';
import './style.css';
import Image from 'next/image';

function VideoHutLogo() {
  return (
    <Image alt='netflix' src={'/netflix.png'} width={100} height={25} priority />
  )
}

export default VideoHutLogo