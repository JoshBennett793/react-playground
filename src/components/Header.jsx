/* eslint-disable react/prop-types */
import './Header.css'

export function Header({ img }) {
  return (
    <div className='header-container'>
      <img src={img} width='40px' className='react-logo'></img>
      <h2>React Course - Project 1</h2>
    </div>
  )
}
