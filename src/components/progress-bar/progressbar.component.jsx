import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Track = styled.div`
    width: 100%;
    height: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
    border-color: '#fff';

    padding-top: 4px;
    padding-left: 3px;
    padding-right: 3px;
`

const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 80%;
    background-color: #6bccf9;
    border-radius: 8px;
    transition: width 0.3s ease-in-out;
    
    text-align: center;
    line-height: 17px;
    font-size: 12px;
`
const ProgressBar = props => {
    console.log(props.percentage)
    return (
        <Track>
            <Thumb percentage={props.percentage} >
                {props.percentage}%
            </Thumb>
        </Track>
    )
}

ProgressBar.propTypes = {
    percentage: PropTypes.number
}


export default ProgressBar