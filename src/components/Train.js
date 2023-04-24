import React, { useState } from 'react'

const Train = () => {
    const [count,setcount]=useState(0);
    const [text,settext]=useState('text')

    const handleinput=(e)=>{
        settext(e.target.value)
        console.log(text)
    }

  return (
    <div>
      <button onClick={()=>setcount(count+1)}>+</button>
      <button onClick={()=>setcount(count-1)}>-</button>
      <label>{text}is{count }</label>
      <input type='text' value={text} onChange={handleinput}></input>
    </div>  
  )
}

export default Train
