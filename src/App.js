import React, { useState } from 'react';

import styled from 'styled-components'

import ProgressBar from './components/progress-bar/progressbar.component'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const ProgressBarContainer = styled.div`
    width: 300px;
    margin-top: 200px;
`

const App = () => {
  const [percentage, setPercentage] = useState(20)
  const percentageLimits = (min, value, max) => {
    return Math.min(Math.max(min, value), max)
  }
  const increment = () => setPercentage(percentageLimits(0, percentage + 10, 100))
  const decrement = () => setPercentage(percentageLimits(0, percentage - 10, 100))
  return (
    <AppWrapper>
      <ProgressBarContainer>
        <button onClick={increment}>increase</button>
        <button onClick={decrement}>decrease</button>
        <ProgressBar percentage={percentage} />
      </ProgressBarContainer>
    </AppWrapper>
  );
}

export default App;
