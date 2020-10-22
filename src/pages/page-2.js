import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Provider } from "react-redux"
import store from "../redux/store"
import Counter from "../components/Counter"

const SecondPage = () => (
  <Provider store={store}>
    <Layout>
      <SEO title="Page two" />
      <Counter />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </Provider>
)

export default SecondPage
