import React from 'react'
import styled from 'styled-components'

const SwipeLine = () => {
    return(
        <SwipeLineBlock/>
    )
}

const SwipeLineBlock = styled.View`
    margin: 10px auto;
    background-color: #C7C7CC;
    height: 5px;
    width: 40px;
    border-radius: 5px;
`

export default SwipeLine