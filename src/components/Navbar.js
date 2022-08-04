import React from "react"
import { Link } from "gatsby"
import { BsPencilSquare } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="bg-black-1 py-4 mb-5 md:mb-10">
      <div className="flex justify-between container">
        <div>
          <Link to="/" className="font-bold">Yonekko</Link>
        </div>

        <div>
          <Link to="/blogs" className="flex items-center space-x-1">
            <BsPencilSquare />
            <span>Blogs</span>
          </Link>
        </div>
      </div>


    </nav >
  )
}

export default Navbar