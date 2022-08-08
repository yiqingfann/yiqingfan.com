import { Link } from "gatsby"
import React from "react"
import { AiFillGithub } from 'react-icons/ai'
import { GrGatsbyjs } from 'react-icons/gr'
import { SiNetlify } from 'react-icons/si'

const Footer = () => {
  const links = [
    { url: 'https://github.com/yiqingfann', label: 'Github', icon: <AiFillGithub /> },
    { url: 'https://www.gatsbyjs.com/', label: 'Gatsby', icon: <GrGatsbyjs /> },
    { url: 'https://www.netlify.com/', label: 'Netlify', icon: <SiNetlify /> },
  ]

  return (
    <footer className="flex flex-col items-center py-5">
      <div className="mb-1">Made by Yiqing Fan</div>
      <div className="flex">
        {links.map(link => (
          <Link to={link.url} className="flex items-center space-x-1 clickable">
            <div>{link.icon}</div>
            <div>{link.label}</div>
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer