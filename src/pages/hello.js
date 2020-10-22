import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import "./hello.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />

    <div>
      <Button variant="contained" color="primary">
        +
      </Button>
      count
      <Button variant="contained" color="primary">
        -
      </Button>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
