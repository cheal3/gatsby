import React from "react"
import { Link } from "gatsby"

import "./hello.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Todo from "../components/Todo"
import store from "../redux/configureStore"
import { Provider } from "react-redux"
const todo = () => (
  <Provider store={store}>
    <Layout>
      <SEO title="Page two" />

      <div>
        <Todo />
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </Provider>
)

export default todo
