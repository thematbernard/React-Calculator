import React from 'react'
import Wrapper from './components/wrapper'
import Screen from './components/screen'
import ButtonBox from './components/buttonBox';
import Button from './components/button'
import CalcProvider from './context/calcContext'

const buttonValues = [
  ["C", "+/-", "&", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {buttonValues.flat().map((button, index) => (
            <Button 
              value = {button}
              key = {index}/>
          ))}
        </ButtonBox>
      </Wrapper>
      </CalcProvider>
   
  )
}

export default App

