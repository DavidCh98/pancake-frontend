import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card, CardBody} from '@pancakeswap/uikit'
//import { TwitterTimelineEmbed} from 'react-twitter-embed';

const StyledPredictionCard = styled(Card)`
  background-image: url('/images/prediction_promotion.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 50%;
  min-height: 376px;
  ${({ theme }) => theme.mediaQueries.sm} {
    background-size: 45%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    background-size: 50%;
  }
`
const PredictionPromotionCard = () => {
  return (
    <StyledPredictionCard>
      <CardBody>
        <h2>Announcements</h2>
      </CardBody>
    </StyledPredictionCard>
  )
}

export default PredictionPromotionCard
