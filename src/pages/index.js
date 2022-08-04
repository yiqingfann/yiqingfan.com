import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Home() {
  return (
    <div className="container">
      <div className="
        flex flex-col items-center space-y-5
        sm:flex-row sm:items-center sm:space-x-20 sm:space-y-0
      ">

        <div>
          <h1 className="
            font-bold mb-4 text-white-1 text-3xl
            sm:text-5xl
          ">
            Hi, I'm Yiqing Fan.
          </h1>
          <p className="
            text-white-2 mb-4 text-xl
            sm:text-2xl
           ">
            A software engineer who builds things to make my life easier.
          </p>
          <p className="
            text-white-2 text-xl
             sm:text-2xl
          ">
            Welcome to my personal website!
          </p>
        </div>

        <div>
          <StaticImage src="../images/yiqingfan.jpg" className="w-64 rounded-lg" />
        </div>

      </div>
    </div>
  )
}
