import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">My Money</a>
        </Link>
      </div>
    </nav>
  )
}
export default Header
