import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

// markdown code block styles
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

export default function Home() {
  return (
    <>
      <Seo title="Yiqing Fan" />
      <Layout>
        <div
          className="
            flex flex-col space-y-5 px-align-clickable
            md:flex-row md:items-center md:space-x-20 md:space-y-0
          "
        >
          <div>
            <h1 className="page-title">Hi, I'm Yiqing Fan.</h1>
            <p className="page-subtitle mt-4">
              I solve problems and make things happen =v=.
            </p>
            <p className="page-subtitle mt-4">
              Using full-stack web development and AI models to solve people's
              pain points. Have fun and make impact!
            </p>
          </div>

          <div className="flex justify-center">
            <StaticImage
              src="../images/shimarin.png"
              className="w-64 rounded-lg"
            />
          </div>
        </div>
      </Layout>
    </>
  )
}
