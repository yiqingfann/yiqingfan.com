import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="
        flex flex-col space-y-5
        md:flex-row md:items-center md:space-x-20 md:space-y-0
      ">

        <div>
          <h1 className="
            font-bold mb-4 text-white-1 text-3xl
            md:text-5xl
          ">
            Hi, I'm Yiqing Fan.
          </h1>
          <p className="
            text-white-2 mb-4 text-xl
            md:text-2xl
           ">
            A software engineer who builds things to make my life easier.
          </p>
          <p className="
            text-white-2 text-xl
             md:text-2xl
          ">
            Welcome to my personal website!
          </p>
        </div>

        <div className="flex justify-center">
          <StaticImage src="../images/yiqingfan.jpg" className="w-64 rounded-lg" />
        </div>

      </div>
    </Layout>
  )
}
