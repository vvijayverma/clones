import React from 'react';
import Button from './Button';

const buttonList = ['All','Gaming','Songs','Live','Soccer','Cricket','Cooking']
const ButtonList = () => {
  return (
    <div className='flex'>
      {buttonList.map((button)=>(
         <Button name={button}/>
      ))}
    </div>
  )
}

export default ButtonList
