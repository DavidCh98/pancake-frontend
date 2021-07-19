import React, {} from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading} from '@pancakeswap/uikit'
import { TwitterTimelineEmbed} from 'react-twitter-embed';

const TwitterCard = styled(Card)`

`
const Twittercard = () => {
  return (
    <TwitterCard>
      <CardBody>
        <Heading>
          <h2>Announcements</h2><br/>
        </Heading>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Crypto_Gainzzz"
            options={{height: 400}}
          />
      </CardBody>
    </TwitterCard>
  )
}

export default Twittercard
