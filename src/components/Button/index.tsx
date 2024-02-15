import React from 'react'
import './style.css'

type ButtonPropType = {
    text: string,
    type?: 'basic' | 'outline' | 'fill',
    onClick?: ()=>void,
}

const BorderAnimation = ({text, onClick}: any)=>{
  return <div className='button-outer'>
      <div className='animator-top'></div>
      <div className='animator-right'></div>
      <div className='animator-bottom'></div>
      <div className='animator-left'></div>
      <button className='button border-animation'>{text}</button>
    </div>;
};

const Button = ({text, type='basic', onClick}: ButtonPropType) => {
  return (
    <button className={'button'+(onClick?' clickable':'')+(' button-'+type)} >{text}</button>
  );
}

Button.BorderAnimation = BorderAnimation;
export default Button;