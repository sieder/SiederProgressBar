import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Track = styled.div`
    width: 100%;
    height: 20px;
    background-color: #222;
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
`

const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: #6bccf9;
    border-radius: 8px;
    transition: width 0.3s ease-in-out;
    text-align: center;
`

const ProgressBar = props => {
    console.log(props.percentage)
    const percentageLimits = (min, value, max) => {
        return Math.min(Math.max(min, value), max)
    }
    return (
        <Track>
            <Thumb percentage={percentageLimits(0, props.percentage, 100)} >
                {props.percentage}%
            </Thumb>
        </Track>
    )
}

ProgressBar.propTypes = {
    percentage: PropTypes.number
}


export default ProgressBar