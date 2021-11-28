import React from "react"
import { Helmet } from "react-helmet"


interface PropsInterface {
    lang?: string,
    title?: string
}

const Head = (props: PropsInterface) => {
    return (
        <Helmet>
            <html lang={props.lang ? props.lang : 'en'} />
            <title>{props.title ? props.title + ' - ' : ''}Shop</title>
        </Helmet>
    )
}

export default Head
