import React from "react"
import { Link } from "gatsby"

import "./hello.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Counter from "../components/Counter"
import store from "../redux/configureStore"
import { Provider } from "react-redux"

const counter = () => (
  <Provider store={store}>
    <Layout>
      <SEO title="Page two" />

      <div>
        <Counter />
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </Provider>
)

export default counter
