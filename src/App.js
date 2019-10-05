import React, { useState } from 'react';

import styled from 'styled-components'

import ProgressBar from './components/progress-bar/progressbar.component'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ProgressBarContainer = styled.div`
    width: 200px;
    margin-top: 50px;
`

const ButtonContainer = styled.div`
    margin-top: 100px;
`

const App = () => {
  const [percentage, setPercentage] = useState(100)
  const percentageLimits = (min, value, max) => {
    return Math.min(Math.max(min, value), max)
  }
  const increment = () => setPercentage(percentageLimits(0, percentage + 10, 100))
  const decrement = () => setPercentage(percentageLimits(0, percentage - 10, 100))
  return (
    <AppWrapper>
      <ButtonContainer>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </ButtonContainer>
      <ProgressBarContainer>
        <ProgressBar percentage={percentage} />
      </ProgressBarContainer>
    </AppWrapper>
  );
}

export default App;
