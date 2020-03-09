import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

type StaticQueryData = {
  site: {
    siteMetadata: {
      description: string
    }
  }
}

const Bio: React.FC = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={(data: StaticQueryData): React.ReactElement | null => {
      const {description} = data.site.siteMetadata
      return (
        <div>
          <h1>{description}</h1>
          <p>By Gavin Rafter</p>
        </div>
      )
    }}
  />
)

export default Bio
