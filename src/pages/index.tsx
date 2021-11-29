import React from "react"
import { graphql } from "gatsby"

import Head from "../components/head"


const IndexPage = ({ data }) => {
    return (
        <main>
            <Head />
            <h1>Hello World!</h1>
            <p>
                <a href={data.saleor_lite.shop.domain.url} target="_blank">
                    {data.saleor_lite.shop.name}
                </a>
            </p>
            <p>Product count: {data.saleor_lite.products.totalCount}</p>
        </main>
    )
}

export const query = graphql`
    query {
        saleor_lite {
            products(first: 5, channel: "default") {
                totalCount
            }
            shop {
                name
                domain {
                    url
                }
            }
        }
    }
`

export default IndexPage
