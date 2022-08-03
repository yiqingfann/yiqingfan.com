import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Home() {
  return (
    <div className="container">
      <div className="flex items-center space-x-20">

        <div>
          <h1 className="text-5xl font-bold mb-4 text-white-1">
            Hi, I'm Yiqing Fan.
          </h1>
          <p className="text-2xl text-white-2 mb-4">
            I'm a Computer Science student at Columbia University. I build things to make my life easier.
          </p>
          <p className="text-2xl text-white-2">
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
