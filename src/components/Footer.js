import React from 'react'

const Footer = () => {
  const date = new Date()
  return (
    <div>
      <p className="footer">
        &copy; {date.getFullYear()} Built by All University Tech Conference
      </p>
    </div>
  )
}

export default Footer
