import React from 'react'
import styled from "styled-components"
import { CloudyNight } from 'styled-icons/ionicons-solid'
import { CloudSun } from 'styled-icons/fa-solid'
import { useDispatch } from 'react-redux'
import { setThemeMode } from '../../assets/features/Theme'
interface Props{
     
}

const ToggleButton = (props: Props) => {
  const [isChecked, setIsChecked] = React.useState(false)
  const dispatch = useDispatch()

  const handleChange = () => {
    setIsChecked(!isChecked) 
    dispatch(setThemeMode(!isChecked))
  }

  return (
    <InputWrapper>
      <Slider
      isChecked={isChecked}
      onClick={handleChange}
      > <CloudyNight className='dark'/> 
          <CloudSun className='light'/>
      </Slider>
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  position: relative;
  margin-left: 10px;

`
interface SliderProps{
  isChecked: boolean
}
const Slider = styled.div<SliderProps>`
  display: flex;
  cursor: pointer;
  width:50px;
  height:25px;
  border-radius: 180px;
  background-color: ${props => props.isChecked ? 'var(--dark2)' : '#fff'};
  position: relative;
  transition: all 0.3s ease;
  .dark{
    position: absolute;
    width:15px;
    height:15px;
    top:5px;
    color: ${props => props.isChecked ? 'var(--dark)' : 'gray'};
    left:${props => props.isChecked ? 'calc(100% - 20px)' : '5px'};
    border-radius: 50%;
    transition: all 0.3s ease;
    ${props => props.isChecked ? `animation: bounce 0.3s ease forwards;` : `animation: bounce2 0.3s ease forwards;`}
  }
  .light{
    position: absolute;
    width:15px;
    height:15px;
    top:5px;
    color: ${props => props.isChecked ? 'var(--dark)' : 'gray'};
    left:${props => props.isChecked ? 'calc(100% - 20px)' : '5px'};
    border-radius: 50%;
    ${props => !props.isChecked ? `animation: bounce 0.3s ease forwards;` : `animation: bounce2 0.3s ease forwards;`}
    transition: all 0.3s ease;
  }
  &:before{
    content: '';
    position: absolute;
    width:21px;
    height:21px;
    top:2px;
    left:${props => props.isChecked ? 'calc(100% - 23px)' : '2px'};
    border-radius: 50%;
    background-color: ${props => props.isChecked ? 'var(--dc)' : '#e3e5e8'};
    transition: all 0.3s ease;
`

export default ToggleButton