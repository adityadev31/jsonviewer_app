import { useState } from 'react'
import './jsonChild.css'

const JsonChild = ({children}) => {

  const [clicked, setClicked] = useState(false)

  if(!clicked) return (<span className='jsonChild_wrapper jsonToggler_parent' onClick={() => setClicked((prev) => !prev)}> ... <span className='jsonToggler'><i className="fa-sharp fa-solid fa-arrow-down"></i></span> </span>) 
  if(clicked) return (
  <span className='jsonChild_wrapper'>
    <span className='jsonToggler_parent' onClick={() => setClicked((prev) => !prev)}> <span className='jsonToggler jsonToggler_up'><i className="fa-sharp fa-solid fa-arrow-up"></i></span></span>
    <div className='jsonChild'>{children}</div>
  </span>
  )

}

export default JsonChild