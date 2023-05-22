import { Link } from "gatsby"
import React from "react"
import { AiFillGithub } from "react-icons/ai"

const Footer = () => {
  const links = [
    {
      url: "https://github.com/yiqingfann",
      label: "Github",
      icon: <AiFillGithub />,
    },
  ]

  return (
    <footer className="flex flex-col items-center py-5">
      <div className="flex">
        {links.map(link => (
          <Link
            to={link.url}
            target="_blank"
            className="flex items-center space-x-1 clickable"
          >
            <div>{link.icon}</div>
            <div>{link.label}</div>
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
