import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"


const NotFoundPage = () => {
    return (
        <main>
            <Head title="404" />
            <h1>Page not found!</h1>
            <Link to="/">
                <p>Return to HOME</p>
            </Link>
        </main>
    )
}

export default NotFoundPage
